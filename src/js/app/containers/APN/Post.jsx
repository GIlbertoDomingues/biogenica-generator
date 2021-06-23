import React, {Component} from 'react';
import * as PIXI from 'pixi.js';
import Header from '../../components/Header.jsx';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import { event } from '../../utils/googleAnalytics';
import selects from '../../configs/selects';

class Posts extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            inputs: {
                template: 'A',
                type: 4,
                bg: {
                    file: '',
                    scale: 1
                },
                title: '',
                city: '',
                date: '',
                weekday: '',
                checkIn: '',
                price: '',
                place: '',
                address: '',
                photos: [],
                fontSize: 113,
            },
            dataImage:'/#'
        }
        this.canvas = new PIXI.Application({width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF});
    }

    onChange(event)
    {
        const { name, value} = event.target;
        this.setState(prevState => ({
            ...prevState,
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }));
    }
    teste()
    {
        
        var renderTexture = PIXI.RenderTexture.create(this.canvas.renderer.width, this.canvas.renderer.height);
        this.canvas.renderer.render(this.canvas.stage, renderTexture);
var canvas = this.canvas.renderer.extract.canvas(renderTexture);
window.open(canvas.toDataURL('image/png'));
        return;
        const image = this.canvas.renderer.extract.base64(this.canvas.stage);
        this.setState({
            dataImage: image
        });
    }

    download()
    {
        
        var renderTexture = PIXI.RenderTexture.create(this.canvas.renderer.width, this.canvas.renderer.height);
        this.canvas.renderer.render(this.canvas.stage, renderTexture);
        const image = this.canvas.renderer.extract.base64(renderTexture, null, true);
        this.setState({
            dataImage: image
        });
        
        
        
        const {inputs} = this.state;
        const type = selects.typesAPN.find( item => item.value === Number(inputs.type));
        event('download', 'APN', `Template ${inputs.template} - ${type.label}`);
        event('content', 'APN', `Cidade: ${inputs.city}`);
        event('content', 'APN', `Dia da semana: ${inputs.weekday}`);
        event('content', 'APN', `Check in: ${inputs.checkIn}`);
        if (inputs.photos.length > 0)
            inputs.photos.map( photo => {
                event('content', 'APN', `Photo: ${photo.name} / ${photo.role}`);
            });
    }

    render()
    {
        const { inputs, dataImage } = this.state;

        return(
            <div className="container">
                <Header title="GERADOR DE CONVITE APN"/>
                <div className="wrapper">
                    <Form
                        data={inputs}
                        onChange={ (event) => this.onChange(event) }
                    />
                    <Preview
                        canvas={this.canvas}
                        data={inputs}
                    />
                </div>
                <div className="wrapper left">
                    <a
                        href={dataImage}
                        download='mdt-post.png'
                        className='download'
                        onClick={ () => this.download() }
                    >
                        Download
                    </a>
                </div>
            </div>
        )
    }
}

export default Posts;