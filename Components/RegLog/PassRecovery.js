import { useState } from 'react';

import Button from '../UI/Button';
import DescriptionLabel from '../UI/DescriptionLabel';
import Form from '../UI/Forms/Form';
import InputText from '../UI/InputText';
import Select from '../UI/Select';
import Submit from '../UI/Submit';

import classes from '../UI/UI.module.scss';

const PassRecovery = props => {
	const [formValidation, setFormValidation] = useState(true);
	const [recovery, setRecovery] = useState([]);

	const [newRecoveryData, setNewRecoveryData] = useState({
		mobOperator: '',
		phone: '',
		email: '',
	});

	const onChange = e => {
		setNewRecoveryData({ ...newRecoveryData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		const checkData = {
			mobOperator: newRecoveryData.mobOperator.trim(),
			phone: newRecoveryData.phone.trim(),
			email: newRecoveryData.email.trim(),
		};

		if (newClient.phone.trim() === '' && newClient.email.trim() === '') {
			alert('Unesite svoj email ili broj telefona');
			setFormValidation(false);
		} else {
			setRecovery([...recovery, checkData]);
			props.setDisplayPassRecovery('none');
			alert('Poslali smo Vam podatke za prijavu. Proverite sms odnosno email');
			setFormValidation(true);
		}
	};
	return (
		<Form
			display={props.displayPassRecovery}
			className={classes.Form}
			Submit={onSubmit}>
			<DescriptionLabel
				className={classes.DesciptionLabel}
				color="orange"
				text="Unesite svoj broj telefona ili Email adresu kako bismo Vam poslali podatke za prijavu"
			/>
			<Select
				type="text"
				name="mobOperator"
				className={classes.MobileOperator}
				display="inline-block"
				margin="50px auto 5px auto"
				borderColor={formValidation}
				placeholder="064"
				value={recovery.mobOperator}
				onChange={onChange}>
				<option>060</option>
				<option>061</option>
				<option>062</option>
				<option>063</option>
				<option>064</option>
				<option>065</option>
				<option>066</option>
				<option>069</option>
			</Select>
			<InputText
				type="text"
				name="phone"
				className={classes.PhoneNumber}
				display="inline-block"
				margin="50px auto 5px auto"
				borderColor={formValidation}
				placeholder="Uneti telefon"
				value={recovery.phone}
				onChange={onChange}
			/>
			<InputText
				type="text"
				name="email"
				display="block"
				margin="15px auto 5px auto"
				borderColor={formValidation}
				placeholder="Uneti e-mail"
				value={recovery.email}
				onChange={onChange}
			/>
			<Submit
				value="POTVRDI"
				display="block"
				margin="40px auto 5px auto"
				className={classes.SubmitButton}
				onSubmit={onSubmit}
			/>
			<Button
				value="ODUSTANI"
				display="block"
				margin="20px auto 5px auto"
				color="orangered"
				classNameButton={classes.FormButton}
				onClick={() => {
					props.setDisplayPassRecovery('none'),
						setFormValidation(true),
						props.setPagePosition('relative');
				}}
			/>
		</Form>
	);
};

export default PassRecovery;
