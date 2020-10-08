import { useState } from 'react';
import useDeviceDetect from '../../utils/UseDeviceDetect';

import Button from '../UI/Button';
import Form from '../UI/Forms/Form';
import InputText from '../UI/InputText';
import Select from '../UI/Select';
import Submit from '../UI/Submit';

import classes from '../UI/UI.module.scss';

const RegServProv = props => {
	const { isMobile } = useDeviceDetect();
	const [formValidation, setFormValidation] = useState(true);
	const [companyRegistration, setCompanyRegistration] = useState([]);

	const [newServProv, setNewServProv] = useState({
		name: '',
		companyName: '',
		address: '',
		city: '',
		mobOperator: '',
		phone: '',
		email: '',
		userName: '',
		password: '',
		passConfirm: '',
		regCode: '',
	});

	const onChange = e => {
		setNewServProv({ ...newServProv, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		const addedServProv = {
			name: newServProv.name.trim(),
			companyName: newServProv.companyName.trim(),
			address: newServProv.address.trim(),
			city: newServProv.city.trim(),
			mobOperator: newServProv.mobOperator.trim(),
			phone: newServProv.phone.trim(),
			email: newServProv.email.trim(),
			userName: newServProv.userName.trim(),
			password: newServProv.password.trim(),
			passConfirm: newServProv.passConfirm.trim(),
			regCode: newServProv.regCode.trim(),
		};

		if (
			newServProv.name.trim() === '' ||
			newServProv.companyName.trim() === '' ||
			newServProv.address.trim() === '' ||
			newServProv.city.trim() === '' ||
			newServProv.phone.trim() === '' ||
			newServProv.email.trim() === '' ||
			newServProv.userName.trim() === '' ||
			newServProv.password.trim() === '' ||
			newServProv.passConfirm.trim() === '' ||
			newServProv.regCode.trim() === ''
		) {
			alert('Popunite sva polja');
			setFormValidation(false);
		} else if (newServProv.password.trim() !== newServProv.passConfirm.trim()) {
			alert('Lozinka i ponovljena lozinka nisu jednake');
			setFormValidation(false);
		} else {
			setCompanyRegistration([...companyRegistration, addedServProv]);
			props.setDisplayRegServProv('none');
			alert('Uspešna registracija pružaoca usluga');
			setFormValidation(true);
			props.setPagePosition('relative');
		}
	};

	if (isMobile) {
		return (
			<Form
				display={props.displayRegServProv}
				className={classes.Form}
				onSubmit={onSubmit}>
				<h2 className={classes.FormTitle}>REGISTRACIJA PRUŽAOCA USLUGA</h2>
				<InputText
					type="text"
					name="name"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti ime i prezime"
					value={companyRegistration.name}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="companyName"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti naziv firme"
					value={companyRegistration.companyName}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="address"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti adresu firme"
					value={companyRegistration.address}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="city"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti grad"
					value={companyRegistration.city}
					onChange={onChange}
				/>
				<Select
					type="text"
					name="mobOperator"
					className={classes.MobileOperatorMob}
					display="inline-block"
					borderColor={formValidation}
					placeholder="064"
					value={companyRegistration.mobOperator}
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
					className={classes.PhoneNumberMob}
					borderColor={formValidation}
					placeholder="Uneti telefon"
					value={companyRegistration.phone}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="email"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti e-mail"
					value={companyRegistration.email}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="userName"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti korisnič"
					value={companyRegistration.userName}
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="password"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Izabrati lozinku"
					value={companyRegistration.password}
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="passConfirm"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Ponovo uneti lozinku"
					value={companyRegistration.passConfirm}
					onChange={onChange}
					borderColor={formValidation}
				/>
				<InputText
					type="text"
					name="regCode"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="Uneti reg. kod za klijente"
					value={companyRegistration.regCode}
					onChange={onChange}
				/>
				<Submit
					value="REGISTRUJ SE"
					width="48%"
					float="left"
					margin="20px auto 5px auto"
					className={classes.SubmitButtonMob}
					onSubmit={onSubmit}
				/>
				<Button
					value="NAZAD"
					float="right"
					width="48%"
					margin="20px auto 5px auto"
					color="orangered"
					classNameButton={classes.FormButtonCloseMob}
					onClick={() => {
						props.setDisplayRegServProv('none'),
							props.setDisplayRegAs('block'),
							setFormValidation(true);
					}}
				/>
			</Form>
		);
	} else {
		return (
			<Form
				display={props.displayRegServProv}
				className={classes.Form}
				onSubmit={onSubmit}>
				<h2 className={classes.FormTitle}>REGISTRACIJA PRUŽAOCA USLUGA</h2>
				<InputText
					type="text"
					name="name"
					className={classes.InputText}
					margin="40px auto 5px auto"
					borderColor={formValidation}
					placeholder="Uneti ime i prezime"
					value={companyRegistration.name}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="companyName"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti naziv firme"
					value={companyRegistration.companyName}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="address"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti adresu firme"
					value={companyRegistration.address}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="city"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti grad"
					value={companyRegistration.city}
					onChange={onChange}
				/>
				<Select
					name="mobOperator"
					className={classes.MobileOperator}
					borderColor={formValidation}
					placeholder="064"
					value={companyRegistration.mobOperator}
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
					borderColor={formValidation}
					placeholder="Uneti telefon"
					value={companyRegistration.phone}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="email"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti e-mail"
					value={companyRegistration.email}
					onChange={onChange}
				/>
				<InputText
					type="text"
					name="userName"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti korisnič"
					value={companyRegistration.userName}
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="password"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Izabrati lozinku"
					value={companyRegistration.password}
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="passConfirm"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Ponovo uneti lozinku"
					value={companyRegistration.passConfirm}
					onChange={onChange}
					borderColor={formValidation}
				/>
				<InputText
					type="text"
					name="regCode"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti reg. kod za klijente"
					value={companyRegistration.regCode}
					onChange={onChange}
				/>
				<Submit
					value="REGISTRUJ SE"
					display="block"
					margin="40px auto 5px auto"
					className={classes.SubmitButton}
					onSubmit={onSubmit}
				/>
				<Button
					value="NAZAD"
					display="block"
					margin="20px auto 5px auto"
					color="orangered"
					classNameButton={classes.FormButton}
					onClick={() => {
						props.setDisplayRegServProv('none'),
							props.setDisplayRegAs('block'),
							setFormValidation(true);
					}}
				/>
			</Form>
		);
	}
};

export default RegServProv;
