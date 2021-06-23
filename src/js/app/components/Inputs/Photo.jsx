import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

const propTypes = {
    position: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
}

class Photo extends Component
{
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    onChange(event)
    {
        const { name: inputName, value: inputValue} = event.target;
        const { value, position, onChange } = this.props;

        const newValue = {
            ...value,
            [inputName]: inputValue
        };

        onChange(position, newValue);
    }

    onFileSelected(event)
    {
        const { name: inputName } = event.target;
        const { value, position, onChange } = this.props;
        const files = event.target.files || event.dataTransfer.files;

        const newValue = {
            ...value,
            [inputName]: files[0]
        };

        onChange(position, newValue);
    }

    handleSize(val)
    {
        const { value, position, onChange } = this.props;
        const scale = value.scale || 1;

        const newValue = {
            ...value,
            scale: scale + val
        };

        onChange(position, newValue);
    }

    openDialog()
	{
		this.myRef.current.click();
	}

    render()
    {
        const { label, value } = this.props;
        return (
            <div className='photo'>
                <h2>{label}</h2>
                <div className="group-row">
                    <input type="file"
                        name='file'
                        ref={this.myRef}
                        onChange={(event) => this.onFileSelected(event) }
                    />
                    <Text
                        label='Nome'
                        name='name'
                        value={value.name || ''}
                        onChange={(event) => this.onChange(event) }
                    />
                    <Text
                        label='Cargo'
                        name='role'
                        value={value.role || ''}
                        onChange={(event) => this.onChange(event) }
                    />
                    <div className="buttons-group">
                        <button
                            type="button"
                            className="upload"
                            onClick={ () => this.openDialog() }
                        >
                            <img src="/images/upload.png" alt="Upload"/>
                            UPLOAD
                        </button>
                        <button
                            type='button'
                            className='changeSize'
                            onClick={ () => this.handleSize(.1) }
                        >
                            <img src="/images/increase.png" />
                        </button>
                        <button
                            type='button'
                            className='changeSize'
                            onClick={ () => this.handleSize(-.1) }
                        >
                            <img src="/images/decrease.png" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Photo.propTypes = propTypes;

export default Photo;