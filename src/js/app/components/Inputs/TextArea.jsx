import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const propTypes = {
    label: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
}

class TextArea extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            focus: false,
        }
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

    render()
    {
        const { label, ...props } = this.props;
        return (
            <div className={ this.classes() }>
                <label>{label}</label>
                <textarea
                    type="text"
                    autoComplete="off"
                    onFocus={ () => this.handleFocus(true) }
                    onBlur={ () => this.handleFocus(false) }
                    {...props}
                >
                </textarea>
            </div>
        )
    }
}

TextArea.propTypes = propTypes;

export default TextArea;