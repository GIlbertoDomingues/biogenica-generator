import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
}

class Template extends Component
{
    classes(pos)
    {
        const base = `template-${pos}`;
        const {value} = this.props;

        return className({
            'template': true,
            [base]: true,
            'active': value === pos
        })
    }

    handleClick(val)
    {
        const {onChange, name, value} = this.props;

        if (val === value)
            return;

        onChange({
            target: {
                name: name,
                value: val
            }
        });

    }

    render()
    {
        const { label } = this.props;

        return (
            <div className="input-group">
                <label>{label}</label>
                <div className="templates">
                    <div
                        className={this.classes('A')}
                        onClick={ () => this.handleClick('A') }
                        >
                        <span></span> A
                    </div>
                    <div
                        className={this.classes('B')}
                        onClick={ () => this.handleClick('B') }
                    >
                        <span></span> B
                    </div>
                    <div
                        className={this.classes('C')}
                        onClick={ () => this.handleClick('C') }
                    >
                        <span></span> C
                    </div>
                </div>
            </div>
        )
    }
}

Template.propTypes = propTypes;

export default Template;