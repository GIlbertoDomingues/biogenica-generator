import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const propTypes = {
    label: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

class Select extends Component
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
        const { label, options, ...props } = this.props;
        return (
            <div className={ this.classes() }>
                <label>{label}</label>
                <div className="input-select">
                    <select {...props} >
                        { options.map( (item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

Select.propTypes = propTypes;

export default Select;