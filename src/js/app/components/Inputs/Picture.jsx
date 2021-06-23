import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name:  PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
}

class Picture extends Component
{
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    onFileSelected(event)
    {
        const { name: inputName } = event.target;
        const { value, onChange } = this.props;
        const files = event.target.files || event.dataTransfer.files;

        const newValue = {
            ...value,
            [inputName]: files[0]
        };

        onChange(newValue);
    }

    handleSize(val)
    {
        const { value, onChange } = this.props;
        const scale = value.scale || 1;

        const newValue = {
            ...value,
            scale: scale + val
        };

        onChange(newValue);
    }

    openDialog()
	{
		this.myRef.current.click();
	}

    render()
    {
        const { label, id } = this.props;
        return (
            <div className='photo input-group background' id={id}>
                <label>{label}</label>
                <div className="group-row">
                    <input type="file"
                        name='file'
                        ref={this.myRef}
                        onChange={(event) => this.onFileSelected(event) }
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

Picture.propTypes = propTypes;

export default Picture;