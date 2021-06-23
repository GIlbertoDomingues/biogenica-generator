import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Inputs/Text.jsx';
import Select from '../../components/Inputs/Select.jsx';
import Picture from '../../components/Inputs/Picture.jsx';
import selects from '../../configs/selects';

const propTypes = {
	data: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

class Form extends Component {
	handleFontSize(value) {
		const { data, onChange } = this.props;
		const { fontSize } = data;

		onChange({
			target: {
				name: 'fontSize',
				value: fontSize + value
			}
		});
	}

	handlePhoto(value) {
		const { onChange } = this.props;

		onChange({
			target: {
				name: 'photo',
				value: value
			}
		});
	}

	handleFontSize(value) {
		const { data, onChange } = this.props;
		const { fontSize } = data;

		onChange({
			target: {
				name: 'fontSize',
				value: fontSize + value
			}
		});
	}


	render() {
		const { data, onChange } = this.props;
		const { modelsBiogenica: models, typesRecM: types } = selects;

		return (
			<div className='form'>
				{/* <Select
					label='Modelo'
					name='model'
					options={models}
					value={data.model}
					onChange={onChange}
				/> */}
				{/* <Select
					label='Foto'
					name='type'
					options={types}
					value={data.type}
					onChange={onChange}
				/> */}
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
							onClick={() => this.handleFontSize(1)}
						>
							<img src="/images/increase.png" />
						</button>
						<button
							type='button'
							className='changeSize'
							onClick={() => this.handleFontSize(-1)}
						>
							<img src="/images/decrease.png" />
						</button>
					</div>
				</div>
				{ data.type === 'B' ?
					<Picture
						label='Foto'
						name='photo'
						value={data.photo}
						onChange={(value) => this.handlePhoto(value)}
					/>
					: null}
			</div>
		)
	}
}

Form.propTypes = propTypes;

export default Form;