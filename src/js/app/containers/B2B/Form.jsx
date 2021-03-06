import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Template from '../../components/Inputs/Template.jsx';
import Text from '../../components/Inputs/Text.jsx';
import TextArea from '../../components/Inputs/TextArea.jsx';
import Mask from '../../components/Inputs/Mask.jsx';
import Select from '../../components/Inputs/Select.jsx';
import Photo from '../../components/Inputs/Photo.jsx';
import Picture from '../../components/Inputs/Picture.jsx';
import selects from '../../configs/selects';

const propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

class Form extends Component
{
    componentDidMount()
    {
        const { photos } = this.props.data;
        const total = photos.length;

        this.setPhotos(total);
    }

    componentDidUpdate(prevProps)
    {
        const { photos, type: prevType } = prevProps.data;
        const { type } = this.props.data;
        const total = photos.length;

        if (prevType !== type )
            this.setPhotos(total);
    }

    handleBg(value)
    {
        const { onChange } = this.props;

        onChange({
            target: {
                name: 'bg',
                value: value
            }
        });
    }

    setPhotos(total)
    {
        const { data, onChange } = this.props;
        const { photos, type: typeStr } = data;
        const type = Number.parseInt(typeStr);
        let newState;

        if (type > 2 && total !== 0)
        {
            onChange({
                target: {
                    name: 'photos',
                    value: []
                }
            });
        }
        else if (type === 1 && total !== 1)
        {
            if (total > 1)
                newState = photos.slice(0, 1);
            else
                newState = [{}];

            onChange({
                target: {
                    name: 'photos',
                    value: newState
                }
            });

        }
        else if (type === 2 && total !== 2)
        {
            if (total === 0)
                newState = [{}, {}];
            else
            {
                newState = photos.slice(0,1);
                newState.push({});
            }

            onChange({
                target: {
                    name: 'photos',
                    value: newState
                }
            });

        }
    }

    handlePhotos(position, value)
    {
        const { data, onChange } = this.props;
        const { photos } = data;
        const newPhotos = [...photos];
        newPhotos[position] = value;

        onChange({
            target: {
                name: 'photos',
                value: newPhotos
            }
        });
    }

    handleFontSize(value)
    {
        const { data, onChange } = this.props;
        const { fontSize } = data;

        onChange({
            target: {
                name: 'fontSize',
                value: fontSize + value
            }
        });
    }


    render()
    {
        const { data, onChange } = this.props;
        const { typesB2B: types, weekdays } = selects;

        return (
            <div className='form'>
            <Template
                    label='Template'
                    name='template'
                    value={data.template}
                    onChange={onChange}
                />
                <Select
                    label='Modelo'
                    name='type'
                    options={types}
                    value={data.type}
                    onChange={onChange}
                />
                <Picture
                    label='Fundo'
                    name='bg'
                    id="Fundo"
                    value={ data.bg }
                    onChange={ (value) => this.handleBg(value) }
                />
                
                <div className="group-row">
                    <Text
                        label='Cidade'
                        name='city'
                        value={data.city}
                        onChange={onChange}
                    />
                    <div className="buttons-group">
                        <button
                            type='button'
                            className='changeSize'
                            onClick={ () => this.handleFontSize(1) }
                        >
                            <img src="/images/increase.png" />
                        </button>
                        <button
                            type='button'
                            className='changeSize'
                            onClick={ () => this.handleFontSize(-1) }
                        >
                            <img src="/images/decrease.png" />
                        </button>
                    </div>
                </div>
                <div className="group-row">
                    <Text
                        label='Associado'
                        name='priceA'
                        value={data.priceA}
                        onChange={onChange}
                    />
                    <Text
                        label='Expositor'
                        name='priceB'
                        value={data.priceB}
                        onChange={onChange}
                    />
                    <Text
                        label='N??o Associado'
                        name='priceC'
                        value={data.priceC}
                        onChange={onChange}
                    />
                </div>
                <div className="group-row">
                    <Text
                        label='Dia'
                        name='date'
                        value={data.date}
                        onChange={onChange}
                    />
                    <Select
                        label='Dia da semana'
                        name='weekday'
                        options={weekdays}
                        value={data.weekday}
                        onChange={onChange}
                    />
                    <Text
                        label='Check-in'
                        name='checkIn'
                        value={data.checkIn}
                        onChange={onChange}
                    />
                </div>
                <Text
                    label='Local'
                    name='place'
                    value={data.place}
                    onChange={onChange}
                />
                <TextArea
                    label='Endere??o'
                    name='address'
                    value={data.address}
                    onChange={onChange}
                />
                { data.photos.map( (item, index) => {
                    return (
                        <Photo
                            key={index}
                            position={index}
                            label='Palestrante'
                            name={ `photos[${index}]` }
                            value={ item }
                            onChange={ (position, value) => this.handlePhotos(position, value) }
                        />
                    )
                })}
            </div>
        )
    }
}

Form.propTypes = propTypes;

export default Form;