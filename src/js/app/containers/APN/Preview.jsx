import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js'

const propTypes = {
    canvas: PropTypes.any,
    data: PropTypes.object.isRequired
}

const colors = {
    purple: '#5c2e91',
    white: '#FFFFFF',
    orange: '#f47920',
    green: '#193631'
}

const welcomeMessages = {
    1: 'Presença de',
    2: 'Presenças de:'
}

class Preview extends Component
{
    constructor(props)
    {
        super(props);
        this.app = this.props.canvas;
        this.first = true;
        this.elements = {};
        this.myRef =  React.createRef();
    }

    componentDidMount()
    {
        this.myRef.current.appendChild(this.app.view);
        //update
        var loader = PIXI.loader
            .add('/images/background.png')
            .add('/images/phone.png')
            .add('/images/photo.png')
            .add('/images/template-bg-A1.png')
            .add('/images/template-bg-A2.png')
            .add('/images/template-bg-B1.png')
            .add('/images/template-bg-B2.png')
            .add('/images/template-bg-C1.png')
            .add('/images/template-bg-C2.png')
            .load( () => this.update() );
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps !== this.props)
            this.update();
    }

    update()
    {
        const { template, type, bg, title, city, date, weekday, checkIn, price, place, address, photos, fontSize } = this.props.data;
        const color = template === 'A' ? colors.green : colors.white;
        const typeInt = Number.parseInt(type) || 0;

        this.canvasBg(bg, typeInt);
        this.canvasBase(template, typeInt);
        this.canvasStatic(color, typeInt);
        this.canvasTitle(title.toUpperCase(), color);
        this.canvasCity(city.toUpperCase(), color, fontSize);
        this.canvasDate(date, weekday.toUpperCase(), color);
        this.canvasCheck(checkIn, color);
        this.canvasPrice(price, color);
        this.canvasPlace(place, color);
        this.canvasAddress(address, color);
        this.canvasPhone(typeInt);
        this.canvasPhotos(typeInt, photos);
    }

    canvasBg(bg, typeInt)
    {
        let exists = this.elements.bg ? true : false;
        if(typeInt == 4 && exists){ 
            this.elements.bg.texture = PIXI.Texture.fromImage(`/images/posts/background.png`);
            this.elements.bg.scale.x = 1;
            this.elements.bg.scale.y = 1;
            this.elements.bg.zIndex = 20;
            this.elements.bg.filters[0].reset();
            return;
        }
        if (exists)
        {
            if (bg.file)
                this.loadImage(bg.file)
                .then( res => {
                    this.elements.bg.texture = res;
                });
            this.elements.bg.scale.x    = bg.scale;
            this.elements.bg.scale.y    = bg.scale;
            this.elements.bg.zIndex     = 20;
            
            const filters = new PIXI.filters.ColorMatrixFilter();
            filters.alpha = 1.5;
            this.elements.bg.filters = [filters];
            return;
        }

        const filters = new PIXI.filters.ColorMatrixFilter();
        const file = PIXI.Texture.fromImage(`/images/posts/background.png`);
        file.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        let mask = new PIXI.Graphics();
        mask.lineStyle(0)
            .beginFill(0xFF0000, 0.5)
            .drawRect(0, 0, 1080, 1080)
            .endFill();

        this.elements.bg = new PIXI.Sprite(file);
        this.elements.bg.anchor.set(.5, .5);
        this.elements.bg.x = 540;
        this.elements.bg.y = 540;
        //this.elements.bg.alpha = 0.5;
        this.elements.bg.filters = [filters];
        if(typeInt != 4){
        }else{
            filters.reset();
        }
        

        this.elements.bg.mask = mask;

        this.app.stage.addChild(this.elements.bg);
    }

    canvasBase(template, type)
    {
        const exists = this.elements.base ? true : false;
        const variant = type === 4 ? 2 : 1;

        const file = PIXI.Texture.fromImage(`/images/posts/template-bg-${template}${variant}.png`);

        if (exists)
        {
            this.elements.base.texture = file;
            return;
        }

        this.elements.base = new PIXI.Sprite(file);
        this.app.stage.addChild(this.elements.base);
    }

    canvasStatic(color, type)
    {
        if (!this.first)
        {
            this.elements.check.style.fill = color;
            return;
        }

        const phoneFile = PIXI.Texture.fromImage(`/images/posts/phone.png`);
        const speakerFile = PIXI.Texture.fromImage(`/images/posts/photo.png`);
        const speakerRingFile = PIXI.Texture.fromImage(`/images/posts/photo_ring.png`);

        const logoFile = PIXI.Texture.fromImage(`/images/posts/logo_mdt.png`);
        const leafFile = PIXI.Texture.fromImage(`/images/posts/background_folha.png`);

        speakerFile.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        //orange box
        this.elements.box = new PIXI.Graphics();
        this.elements.box.beginFill(0x002e27)
                        .drawRoundedRect (-20, 733, 85, 160, 20)
                        .endFill();
        this.elements.box.zIndex = 101;
        //checkin text
        this.elements.check = new PIXI.Text('CHECK IN:', {
            fontWeight: 300,
            fontSize: 43,
            fontFamily: 'Lato',
            fill: color,
            align: 'left',
            zIndex :99
        });

        this.elements.check.x = 80;
        this.elements.check.y = 793;

        //ingresso text
        this.elements.ingresso = new PIXI.Text('Ingresso: R$', {
            fontWeight: 300,
            fontSize: 33,
            fontFamily: 'Lato',
            fill: color,
            align: 'left',
            zIndex :100
        });

        this.elements.ingresso.x = 80;
        this.elements.ingresso.y = 840;

        //price text
        this.elements.price = new PIXI.Text('', {
            fontWeight: 700,
            fontSize: 33,
            fontFamily: 'Lato',
            fill: color,
            align: 'left',
            zIndex :100
        });

        this.elements.price.x = this.elements.ingresso.x + this.elements.ingresso.width+10;
        this.elements.price.y = 840;

        this.elements.logoFile = new PIXI.Sprite.from(logoFile);  
        this.elements.logoFile.x    = 390;
        this.elements.logoFile.y    = 0;
        this.elements.logoFile.zIndex = 100;

        this.elements.leafFile = new PIXI.Sprite.from(leafFile);  
        this.elements.leafFile.x    = 0;
        this.elements.leafFile.y    = 0;
        this.elements.leafFile.zIndex = 15;

        //upper background container
        this.elements.containerbackground = new PIXI.Container();
        this.elements.containerbackground.x = 0;
        this.elements.containerbackground.y = 0;
        this.elements.containerbackground.zIndex = 50;
        

        //phone container
        this.elements.container = new PIXI.Container();
        this.elements.container.x = 600;
        this.elements.container.y = 230;

        //phone mockup
        this.elements.phone = new PIXI.Sprite(phoneFile);
        this.elements.phone.x = 0;
        this.elements.phone.y = 0;
        //text top on phone container
        this.elements.welcome = new PIXI.Text(welcomeMessages[type], {
            fontWeight: 400,
            fontSize: 32,
            fontFamily: 'Lato',
            fill: colors.green,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 300,
            zIndex :100
        });

        this.elements.welcome.anchor.set(0.5, 0);
        this.elements.welcome.x = 237;
        this.elements.welcome.y = 628;

        //speaker A
        this.elements.speakerA = new PIXI.Container();
        this.elements.speakerA.x = 100;
        this.elements.speakerA.y = 250;
        //
        this.elements.borderA = new PIXI.Graphics();
        this.elements.borderA.lineStyle(0)
            .beginFill(0xFFFFff, .2)
            .drawCircle(165, 165, 160)
            .endFill();
            this.elements.borderA.zIndex = 100;

        this.elements.maskA = new PIXI.Graphics();
        this.elements.maskA.lineStyle(0)
            .beginFill(0xFF00ff, 1)
            .drawCircle(165, 165, 160)
            .endFill();
        this.elements.maskA.zIndex = 100;

        //
        this.elements.speakerAPicture = new PIXI.Sprite(speakerFile);
        this.elements.speakerAPicture.interactive = true;
        this.elements.speakerAPicture.buttonMode = true;
        this.elements.speakerAPicture.anchor.set(.1, .5);
        this.elements.speakerAPicture.x = 0;
        this.elements.speakerAPicture.y = 0;
        this.elements.speakerAPicture.scale.x  *= 1.2;
        this.elements.speakerAPicture.scale.y  *= 1.2;
        this.elements.speakerAPicture.zIndex = 100;

        this.elements.speakerAPicture.mask = this.elements.maskA;

        this.elements.speakerAPicture
                .on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove);

        this.elements.speakerAPictureRing = new PIXI.Sprite(speakerRingFile);  
        this.elements.speakerAPictureRing.x = 0;
        this.elements.speakerAPictureRing.y = 0;  
        this.elements.speakerAPictureRing.scale.x  *= 1;
        this.elements.speakerAPictureRing.scale.y  *= 1;
        this.elements.speakerAPictureRing.zIndex = 100;   

        
        //
        this.elements.speakerAName = new PIXI.Text('', {
            fontWeight: 700,
            fontSize: 35,
            fontFamily: 'Lato',
            fill: colors.green,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 300,
            zIndex :100
        });

        this.elements.speakerAName.anchor.set(0.5, 0);
        this.elements.speakerAName.x = 160;
        this.elements.speakerAName.y = 375;
        //
        this.elements.speakerARole = new PIXI.Text('Role', {
            fontWeight: 400,
            fontSize: 28,
            fontFamily: 'Lato',
            fill: colors.green,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 300
        });

        this.elements.speakerARole.anchor.set(0.5, 0);
        this.elements.speakerARole.x = 160;
        this.elements.speakerARole.y = 250;

        //speaker B
        this.elements.speakerB = new PIXI.Container();
        this.elements.speakerB.x = 60;
        this.elements.speakerB.y = this.elements.speakerA.height + 20;
        this.elements.speakerB.scale.x *= .7;
        this.elements.speakerB.scale.y *= .7;

        this.elements.borderB = new PIXI.Graphics();
        this.elements.borderB.lineStyle(0)
            .beginFill(0xFFFFFF, .2)
            .drawCircle(198, 130, 130)
            .endFill();

        this.elements.maskB = new PIXI.Graphics();
        this.elements.maskB.lineStyle(0)
            .beginFill(0xFF0000, 1)
            .drawCircle(198, 130, 120)
            .endFill();
        //
        this.elements.speakerBPicture = new PIXI.Sprite(speakerFile);
        this.elements.speakerBPicture.interactive = true;
        this.elements.speakerBPicture.buttonMode = true;
        this.elements.speakerBPicture.anchor.set(.5, .5);
        this.elements.speakerBPicture.x = 198;
        this.elements.speakerBPicture.y = 130;
        this.elements.speakerBPicture.scale.x  *= .8;
        this.elements.speakerBPicture.scale.y  *= .8;

        this.elements.speakerBPicture.mask = this.elements.maskB;

        this.elements.speakerBPicture
                .on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove);
        //
        this.elements.speakerBName = new PIXI.Text('', {
            fontWeight: 700,
            fontSize: 35,
            fontFamily: 'Lato',
            fill: colors.white,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 300
        });

        this.elements.speakerBName.anchor.set(0.5, 0);
        this.elements.speakerBName.x = 200;
        this.elements.speakerBName.y = 280;
        //
        this.elements.speakerBRole = new PIXI.Text('Role', {
            fontWeight: 700,
            fontSize: 25,
            fontFamily: 'Lato',
            fill: colors.white,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 300
        });

        this.elements.speakerBRole.anchor.set(0.5, 0);
        this.elements.speakerBRole.x = 200;


        this.app.stage.zIndex=100;
        this.app.stage.addChild(
                                this.elements.containerbackground,
                                this.elements.box,
                                this.elements.check,
                                this.elements.ingresso,
                                this.elements.price,
                                
                                this.elements.logoFile,
                                this.elements.container                      
                                );
        this.elements.container.addChild(this.elements.phone,
                                    this.elements.welcome,
                                    this.elements.speakerA,
                                    this.elements.speakerB);
        this.elements.speakerA.addChild(this.elements.borderA,
                                    this.elements.maskA,
                                    this.elements.speakerAPicture,
                                    this.elements.speakerAName,
                                    this.elements.speakerARole,
                                    this.elements.speakerAPictureRing);
        this.elements.speakerB.addChild(this.elements.borderB,
                                    this.elements.maskB,
                                    this.elements.speakerBPicture,
                                    this.elements.speakerBName,
                                    this.elements.speakerBRole);
        this.elements.containerbackground.addChild(this.elements.leafFile);
        
        this.first = false;
    }

    canvasTitle(text, color)
    {
        const exists = this.elements.title ? true : false;

        if (exists)
        {
            this.elements.title.text = text;
            this.elements.title.style.fill = color;
            return;
        }

        this.elements.title = new PIXI.Text(text, {
                fontWeight: 700,
                fontSize: 50,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650,
                zIndex :100
            });

            this.elements.title.x = 65;
            this.elements.title.y = 388;

            this.app.stage.addChild(this.elements.title);
    }

    canvasCity(text, color, fontSize)
    {
        const exists = this.elements.city ? true : false;

        if (exists)
        {
            this.elements.city.text = text;
            this.elements.city.style.fontSize = fontSize;
            this.elements.city.style.fill = color;
            return;
        }


            this.elements.city = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 113,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550,
                zIndex :100
            });

            this.elements.city.anchor.set(0, 0.5);
            this.elements.city.x = 65;
            this.elements.city.y = 570;

            this.app.stage.addChild(this.elements.city);
    }

    canvasDate(textA, textB, color)
    {
        const exists = this.elements.date ? true : false;
        const text = textA ? `${textA} - ${textB}` : '';

        if (exists)
        {
            this.elements.date.text = text;
            this.elements.date.style.fill = color;
            return;
        }

            this.elements.date = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 60,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                zIndex :100
            });

            this.elements.date.x = 80;
            this.elements.date.y = 730;

            this.app.stage.addChild(this.elements.date);
    }

    canvasCheck(text, color)
    {
        const exists = this.elements.hour ? true : false;

        if (exists)
        {
            this.elements.hour.text = text;
            this.elements.hour.style.fill = color;
            return;
        }

            this.elements.hour = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 43,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550,
                zIndex :100
            });

            this.elements.hour.x = this.elements.check.x + this.elements.check.width + 10;
            this.elements.hour.y = this.elements.check.y;

            this.app.stage.addChild(this.elements.hour);
    }

    canvasPrice(text, color)
    {
        this.elements.price.text = text;
        this.elements.price.style.fill = color;
        this.elements.ingresso.style.fill = color;
    }

    canvasPlace(text, color)
    {
        const exists = this.elements.place ? true : false;

        if (exists)
        {

            this.elements.place.text = text.toUpperCase();
            this.elements.place.style.fill = color;
            return;
        }

        this.elements.place = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650,
                zIndex :100
            });

            this.elements.place.x = 80;
            this.elements.place.y = 930;

            this.app.stage.addChild(this.elements.place);
    }

    canvasAddress(text, color)
    {
        const exists = this.elements.address ? true : false;

        if (exists)
        {
            this.elements.address.text = text;
            this.elements.address.style.fill = color;
            return;
        }

        this.elements.address = new PIXI.Text(text, {
                fontWeight: 400,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650
            });

            this.elements.address.x = 80;
            this.elements.address.y = 970;

            this.app.stage.addChild(this.elements.address);
    }

    canvasPhone(type)
    {
        if (type <= 2)
        {
            this.elements.container.visible = true;
            this.elements.welcome.text = welcomeMessages[type];
        }
        else
            this.elements.container.visible = false;

    }

    canvasPhotos(type, speaker)
    {
        let scale;
        console.log("Type:"+type);
        if (type === 1 )
        {
            this.elements.speakerA.x = 60;
            this.elements.speakerA.y = 250;
            this.elements.speakerA.scale.x = 1.1;
            this.elements.speakerA.scale.y = 1.1;
            this.elements.speakerB.visible = false;
        }
        else
        {
            this.elements.speakerA.x = 60;
            this.elements.speakerA.y = 200;
            this.elements.speakerA.scale.x = .7;
            this.elements.speakerA.scale.y = .7;
            this.elements.speakerB.visible = true;
        }

        if ( type <= 2 )
        {
            const speakerA = speaker[0] || {}
            scale = speakerA.scale || 1;
            this.elements.speakerAName.text = speakerA.name;
            this.elements.speakerAName.text = speakerA.name;
            this.elements.speakerARole.text = speakerA.role;
            this.elements.speakerARole.y = this.elements.speakerAName.y + this.elements.speakerAName.height;
            this.elements.speakerAPicture.scale.x = scale;
            this.elements.speakerAPicture.scale.y = scale;

            if (speakerA.file)
                this.loadImage(speakerA.file)
                .then( res => {
                    this.elements.speakerAPicture.texture = res;
                })
        }
        if ( type === 2 )
        {
            const speakerB = speaker[1] || {}
            scale = speakerB.scale || 1;
            this.elements.speakerB.y = this.elements.speakerA.y + this.elements.speakerA.height + 20;
            this.elements.speakerBName.text = speakerB.name;
            this.elements.speakerBRole.text = speakerB.role;
            this.elements.speakerBRole.y = this.elements.speakerBName.y + this.elements.speakerBName.height;
            this.elements.speakerBPicture.scale.x = scale;
            this.elements.speakerBPicture.scale.y = scale;

            if (speakerB.file )
                this.loadImage(speakerB.file)
                .then( res => {
                    this.elements.speakerBPicture.texture = res;
                })
        }

    }

    onDragStart(event)
    {
        this.draggingData = event.data;
        let position = this.draggingData.getLocalPosition(this);
        this.pivot.set(position.x, position.y);
        this.position.set(this.draggingData.global.x, this.draggingData.global.y);
        this.dragging = true;

        var newPosition = this.draggingData.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;

    }

    onDragEnd()
    {
        this.dragging = false;
        this.draggingData = null;
    }

    onDragMove()
    {
        if (this.dragging)
        {
            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    loadImage(src)
    {

        return new Promise ( (resolve, reject) => {
            var reader = new FileReader();
            reader.onload = function(e)
            {
                let file = PIXI.Texture.fromImage(e.target.result);
                resolve(file);
            }
            reader.readAsDataURL(src);
        });
    }

    render()
    {
        return (
            <div
                className='preview'
                ref={ this.myRef }
            >
            </div>
        )
    }

}

Preview.propTypes = propTypes;

export default Preview;