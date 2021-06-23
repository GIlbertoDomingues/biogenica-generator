import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'
import className from 'classnames';

const propTypes = {
    label: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    pattern: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

class Mask extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            focus: false,
        }
        this.myRef = React.createRef();
    }

    handleFocus(value)
    {
        this.setState({
            focus: value
        });
    }

    classes()
    {
        const { focus } = this.state;
        return className({
            'input-group': true,
            'focus': focus
        });
    }

    onBlur()
    {
        this.handleFocus(false);
        const { name, pattern, value, onChange } = this.props;
        const cleanValue = value.replace('_', '');

        if (pattern.length === cleanValue.length )
            return;

        onChange({
            target: {
                name: name,
                value: ''
            }
        });
    }

    convertPattern(pattern)
    {
        const patternArray = pattern.split('');

        const newPattern = patternArray.map( item => {
            switch (item)
            {
                case '9':
                    return /\d/; ///[1-9]/
                case 'A':
                    return /[A-Z|a-z]/;
                default:
                    return item;
            }
        })

        return newPattern;
    }

    render()
    {
        const { label, pattern, ...props } = this.props;
        return (
            <div className={ this.classes() }>
                <label>{label}</label>
                <MaskedInput
                    mask={ this.convertPattern(pattern) }
                    type="text"
                    keepCharPositions={ true }
                    autoComplete="off"
                    onFocus={ () => this.handleFocus(true) }
                    onBlur={ () => this.onBlur()  }
                    {...props}
                />
            </div>
        )
    }
}

Mask.propTypes = propTypes;

export default Mask;