import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js'
import selects from '../../configs/selects';

const propTypes = {
	canvas: PropTypes.any,
	data: PropTypes.object.isRequired
}

const colors = {
	white: '#FFFFFF',
	red: '#FF0000',
	blue: '#401a49',
	green: '#193631'
}

class Preview extends Component {
	constructor(props) {
		super(props);
		this.app = this.props.canvas;
		this.elements = {};
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myRef.current.appendChild(this.app.view);
		//update
		var loader = PIXI.loader

			.load(() => this.create());
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props)
			this.update();
	}

	create() {
		//BG
		this.elements.background = new PIXI.Sprite('');
		this.elements.background.anchor.set(.5, .5);
		this.elements.background.x = 540;
		this.elements.background.y = 540;
		//parabens
		this.elements.congrats = new PIXI.Text('PARABÉNS!', {
			fontWeight: 700,
			fontSize: 69,
			fontFamily: 'Exo 2',
			letterSpacing: 0,
			fill: colors.green,
			align: 'center',
		});
		//text
		this.elements.text = new PIXI.Text('VOCÊ ATINGIU A QUALIFICAÇÃO', {
			fontWeight: 300,
			fontSize: 30,
			fontFamily: 'Exo 2',
			letterSpacing: 2,
			fill: colors.green,
			align: 'center',
			zIndex: 100
		});
		this.elements.text.anchor.set(.5, 0);
		//text
		this.elements.category = new PIXI.Text('', {
			fontWeight: 700,
			fontSize: 103,
			fontFamily: 'Exo 2',
			letterSpacing: 2,
			fill: colors.green,
			align: 'center',
		});
		//name
		this.elements.name = new PIXI.Text('', {
			fontWeight: 300,
			fontSize: 64,
			fontFamily: 'Exo 2',
			letterSpacing: 2,
			fill: colors.blue,
			align: 'center',
			wordWrap: true,
			wordWrapWidth: 760
		});
		this.elements.name.anchor.set(.5, 0);
		//achive
		this.elements.achive = new PIXI.Sprite('');
		this.elements.achive.anchor.set(.5, .5);
		this.elements.achive.zIndex = 10;
		//picture
		this.elements.pictureContainer = new PIXI.Container();
		this.elements.border = new PIXI.Graphics();
		this.elements.border.lineStyle(0)
			.beginFill(0xFFFFFF, .2)
			.drawCircle(270, 330, 270)
			.endFill();
		this.elements.mask = new PIXI.Graphics();
		this.elements.mask.lineStyle(0)
			.beginFill(0xFF0000, 1)
			.drawCircle(270, 390, 350)
			.endFill();
		this.elements.picture = new PIXI.Sprite('');
		this.elements.picture.interactive = true;
		this.elements.picture.buttonMode = true;
		this.elements.picture.anchor.set(.5, .5);
		this.elements.picture.x = 200;
		this.elements.picture.y = 200;
		this.elements.picture.zIndex = 200;
		this.elements.picture.mask = this.elements.mask;
		//picture drag
		this.elements.picture
			.on('pointerdown', this.onDragStart)
			.on('pointerup', this.onDragEnd)
			.on('pointerupoutside', this.onDragEnd)
			.on('pointermove', this.onDragMove);

		this.elements.pictureContainer.addChild(this.elements.border,
			this.elements.mask,
			this.elements.picture);
		//
		this.app.stage.addChild(this.elements.achive);
		this.app.stage.addChild(this.elements.background);
		//this.app.stage.addChild(this.elements.congrats);
		//this.app.stage.addChild(this.elements.text);
		//this.app.stage.addChild(this.elements.category);
		this.app.stage.addChild(this.elements.name);
		this.app.stage.addChild(this.elements.pictureContainer);


		this.update();
	}

	update() {
		const { model, type, name, photo, fontSize } = this.props.data;
		//Background
		const backgroundFilename = this.getBackgroundFilename(model, type);
		const fileBackground = PIXI.Texture.fromImage(`/images/biogenica/${backgroundFilename}`);
		fileBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
		this.elements.background.texture = fileBackground;
		//text
		//this.updateText(this.elements.text, model, type);
		//model
		//this.updateCategory(this.elements.category, model, type);
		//name
		this.updateName(this.elements.name, name, model, type);
		//achive
		this.updateAchive(this.elements.achive, model, type);
		//
		this.updatePicture(this.elements.pictureContainer, this.elements.picture, photo, model, type);
		//congrats
		//this.updateCongrats(this.elements.congrats, model, type);


	}

	/**
	 * Retrive background image filename
	 * @param {String} model
	 * @param {String} type
	 * @returns {String}
	 */
	getBackgroundFilename(model, type) {
		return `${model}_${type}.png`;
	}

	/**
	 * @param {Object} element
	 * @param {String} model
	 * @param {string} type
	 * @returns {Null}
	 */
	updateCongrats(element, model, type) {
		let settings = {
			left: 0,
			size: 69,
			spacing: 0,
			align: 'center',
			anchor: .5
		}

		if (model.indexOf('diamond') !== -1) {
			settings.left = 540;
			settings.size = 69;
			settings.align = 'center';
			settings.anchor = .5;
		}
		else {
			settings.left = 540;
			settings.size = 69;
			element.style.align = 'center';
			settings.anchor = .5;
		}

		element.x = settings.left;
		element.style.fontSize = settings.size;
		element.style.letterSpacing = settings.spacing;
		element.style.align = settings.align;
		element.anchor.set(settings.anchor, 0);
		element.y = this.elements.name.y - element.height + 10;
	}

	/**
	 * @param {Object} element
	 * @param {String} model
	 * @param {string} type
	 * @returns {Object}
	 */
	updateText(element, model, type) {
		let settings = {
			left: 0,
			top: 0,
			size: 30,
			align: 'center',
			anchor: .5
		}

		if (model.indexOf('diamond') !== -1) {
			settings.left = 540;
			settings.top = 870;
			settings.size = 30;
			settings.align = 'center';
			settings.anchor = .5;
		}
		else {
			settings.left = 540;
			settings.top = type === 'A' ? 760 : 833;
			settings.size = 30;
			element.style.align = 'center';
			settings.anchor = .5;
		}

		element.x = settings.left;
		element.y = settings.top;
		element.style.fontSize = settings.size;
		element.style.align = settings.align;
		element.anchor.set(settings.anchor, 0);
	}

	/**
	 * @param {Object} element
	 * @param {String} model
	 * @param {string} type
	 * @returns {Object}
	 */
	updateCategory(element, model, type) {
		let settings = {
			left: 0,
			top: 0,
			size: 103,
			align: 'center',
			anchor: .5,
		}


		settings.left = 540;
		settings.top = type === 'A' ? 790 : 860;
		settings.size = type === 'A' ? 103 : 69;

		element.x = settings.left;
		element.y = settings.top;
		element.style.fontSize = settings.size;
		element.style.align = settings.align;
		element.anchor.set(settings.anchor, 0);
		element.text = selects.modelsBiogenica(model).label.toUpperCase();
	}

	/**
	 * @param {Object} element
	 * @param {String} name
	 * @param {String} model
	 * @param {string} type
	 * @returns {Object}
	 */
	updateName(element, name, model, type) {
		const { fontSize } = this.props.data;

		let settings = {
			left: 0,
			top: 320,
			align: 'center',
			anchor: .5
		}

		if (model.indexOf('diamond') !== -1) {
			settings.left = 540;
			settings.top = 450;
			settings.align = 'center';
			settings.anchor = .5;
		}
		else {
			settings.left = 540;
			settings.top =  885;
			settings.align = 'center';
			settings.anchor = .5;
		}

		element.x = settings.left;
		element.style.fontSize = fontSize;
		element.style.align = settings.align;
		element.style.lineHeight = fontSize * .8;
		element.anchor.set(settings.anchor, 0);
		element.text = name;

		element.y = settings.top - element.height;
	}

	/**
	 * @param {Object} element
	 * @param {String} model
	* @param {string} type
	* @returns {Object}
	*/
	updateAchive(element, model, type) {
		let settings = {
			left: 540,
			top: 560,
			scale: 1,
		}

		settings.top = type === 'A' ? 540 : 540;
		settings.scale = type === 'A' ? 1 : 1;

		let dir = type === 'B' ? 'com_foto' : 'sem_foto';
		const fileAchive = PIXI.Texture.fromImage(`/images/recm/${dir}/${model}.png`);
		fileAchive.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
		element.texture = fileAchive;

		element.x = settings.left;
		element.y = settings.top;
		element.scale.x = settings.scale;
		element.scale.y = settings.scale;
	}

	/**
		* @param {Object} container
		* @param {Object} element
		* @param {Object} photo
		* @param {String} model
	 * @param {string} type
	 * @returns {Object}
	 */
	updatePicture(container, element, photo, model, type) {
		let diamond = model.indexOf('diamond') !== -1;
		let settings = {
			top: 420,
			left: 550,
			scale: 1,
		}

		if (type === 'B') {
			if (photo.file)
				this.loadImage(photo.file)
					.then(res => {
						element.texture = res;
					});

			if (diamond) {
				container.scale.x = 1;
				container.scale.y = 1;
				container.x = 600;
				container.y = 450;
				this.app.stage.setChildIndex(container, 6);
				this.app.stage.setChildIndex(this.elements.achive, 5);
			}
			else {
				container.scale.x = 1;
				container.scale.y = 1;
				container.x = settings.left - (container.width / 2);
				container.y = settings.top - (container.height / 2);
				this.app.stage.setChildIndex(container, 2);
				this.app.stage.setChildIndex(this.elements.achive, 2);
			}
			element.scale.x = photo.scale || 1;
			element.scale.y = photo.scale || 1;

			container.visible = true;
		}
		else {
			container.visible = false;
		}
	}

	onDragStart(event) {
		this.draggingData = event.data;
		let position = this.draggingData.getLocalPosition(this);
		this.pivot.set(position.x, position.y);
		this.position.set(this.draggingData.global.x, this.draggingData.global.y);
		this.dragging = true;

		var newPosition = this.draggingData.getLocalPosition(this.parent);
		this.x = newPosition.x;
		this.y = newPosition.y;

	}

	onDragEnd() {
		this.dragging = false;
		this.draggingData = null;
	}

	onDragMove() {
		if (this.dragging) {
			var newPosition = this.draggingData.getLocalPosition(this.parent);
			this.x = newPosition.x;
			this.y = newPosition.y;
		}
	}

	loadImage(src) {

		return new Promise((resolve, reject) => {
			var reader = new FileReader();
			reader.onload = function (e) {
				let file = PIXI.Texture.fromImage(e.target.result);
				resolve(file);
			}
			reader.readAsDataURL(src);
		});
	}

	render() {
		return (
			<div
				className='preview'
				ref={this.myRef}
			>
			</div>
		)
	}

}

Preview.propTypes = propTypes;

export default Preview;