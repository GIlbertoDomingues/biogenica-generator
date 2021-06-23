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
                type: 3,
                bg: {
                    file: '',
                    scale: 1
                },
                title: '',
                city: '',
                date: '' ,
                weekday: '',
                checkIn: '',
                place: '',
                address: '',
                photos: [],
                fontSize: 92,
                priceA: '',
                priceB: '',
                priceC: '',
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

    download()
    {
        const image = this.canvas.renderer.extract.base64(this.canvas.stage);
        this.setState({
            dataImage: image
        });

        const {inputs} = this.state;
        const type = selects.typesB2B.find( item => item.value === Number(inputs.type));
        event('download', 'B2B', type.label);
        event('content', 'B2B', `Cidade: ${inputs.city}`);
        event('content', 'B2B', `Dia da semana: ${inputs.weekday}`);
        event('content', 'B2B', `Check in: ${inputs.checkIn}`);
        if (inputs.photos.length > 0)
            inputs.photos.map( photo => {
                event('content', 'B2B', `Photo: ${photo.name} / ${photo.role}`);
            });


    }

    render()
    {
        const { inputs, dataImage } = this.state;

        return(
            <div className="container">
                <Header title="GERADOR DE CONVITE B2B"/>
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
                        download='youhub-b2b.png'
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