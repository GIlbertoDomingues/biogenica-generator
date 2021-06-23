import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Inputs/Text.jsx';
import TextArea from '../../components/Inputs/TextArea.jsx';
import Select from '../../components/Inputs/Select.jsx';
import Picture from '../../components/Inputs/Picture.jsx';
import selects from '../../configs/selects';

const propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

class Form extends Component
{
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

    handlePhoto(value)
    {
        const { onChange } = this.props;

        onChange({
            target: {
                name: 'photo',
                value: value
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
        const { modelsBanner: models, typesBanner: types, weekdays } = selects;

        return (
            <div className='form'>
                <Select
                    label='Modelo'
                    name='model'
                    options={models}
                    value={data.model}
                    onChange={onChange}
                />
                <Select
                    label='Foto'
                    name='type'
                    options={types}
                    value={data.type}
                    onChange={onChange}
                />
                <div className="group-row">
                    <Text
                        label='Nome'
                        name='name'
                        value={data.name}
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
                <div className="group-row">
                <Text
                    label='Palestrante'
                    name='speaker'
                    value={data.speaker}
                    onChange={onChange}
                />
                <Text
                    label='Profissão'
                    name='speaker_profession'
                    value={data.speaker_profession}
                    onChange={onChange}
                />
                </div>
                <div className="group-row">
                <Text
                    label='Convidado Especial'
                    name='special_guest'
                    value={data.special_guest}
                    onChange={onChange}
                />
                <Text
                    label='Profissão'
                    name='special_guest_profession'
                    value={data.special_guest_profession}
                    onChange={onChange}
                />
                </div>
                <Text
                    label='Traje'
                    name='costume'
                    value={data.costume}
                    onChange={onChange}
                />
                <Text
                    label='Local'
                    name='place'
                    value={data.place}
                    onChange={onChange}
                />
                <TextArea
                    label='Endereço'
                    name='address'
                    value={data.address}
                    onChange={onChange}
                />
                <TextArea
                    label='Informações Adicionais'
                    name='other_info'
                    value={data.other_info}
                    onChange={onChange}
                />
                <TextArea
                    label='Credencial'
                    name='credential'
                    value={data.credential}
                    onChange={onChange}
                />
                
                { data.type === 'B' ?
                    <Picture
                        label='Foto'
                        name='photo'
                        value={ data.photo }
                        onChange={ (value) => this.handlePhoto(value) }
                    />
                : null }

            </div>
        )
    }
}

Form.propTypes = propTypes;

export default Form;