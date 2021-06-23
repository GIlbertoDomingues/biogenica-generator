import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import Header from '../../components/Header.jsx';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import { event } from '../../utils/googleAnalytics';
import selects from '../../configs/selects';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				model: 'post',
				type: 'B',
				name: '',
				photo: {
					file: '',
					scale: 1
				},
				fontSize: 64,
			},
			dataImage: '/#'
		}
		this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
	}

	onChange(event) {
		const { name, value } = event.target;
		this.setState(prevState => ({
			...prevState,
			inputs: {
				...prevState.inputs,
				[name]: value
			}
		}));
	}

	download() {
		const { inputs } = this.state;
		const type = 'Com foto';
		const model = selects.modelsBiogenica.find(item => item.value === Number(inputs.model));
		event('download', 'Biogenica', `Categoria ${model} - ${type.label}`);
		event('content', 'Biogenica', `Nome: ${inputs.name}`);

		const image = this.canvas.renderer.extract.base64(this.canvas.stage);
		this.setState({
			dataImage: image
		});
	}

	render() {
		const { inputs, dataImage } = this.state;

		return (
			<div className="container">
				<Header title="Gerador de post parceiro" />
				<div className="wrapper">
					<Form
						data={inputs}
						onChange={(event) => this.onChange(event)}
					/>
					<Preview
						canvas={this.canvas}
						data={inputs}
					/>
				</div>
				<div className="wrapper left">
					<a
						href={dataImage}
						download='biogenica-post.png'
						className='download'
						onClick={() => this.download()}
					>
						Download
                    </a>
				</div>
			</div>
		)
	}
}

export default Posts;