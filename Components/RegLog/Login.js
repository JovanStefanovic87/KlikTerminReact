import { useState } from 'react';
import useDeviceDetect from '../../utils/UseDeviceDetect';

import Button from '../UI/Button';
import Form from '../UI/Forms/Form';
import InputText from '../UI/InputText';
import Submit from '../UI/Submit';

import classes from '../UI/UI.module.scss';

const Login = props => {
	const { isMobile } = useDeviceDetect();
	const [user, setUser] = useState([]);
	const [formValidation, setFormValidation] = useState(true);

	const [userData, setUserData] = useState({
		userName: '',
		password: '',
	});

	const onChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		const loginUser = {
			userName: userData.userName.trim(),
			password: userData.password.trim(),
		};

		if (userData.userName.trim() === '' || userData.password.trim() === '') {
			alert('Popunite sva polja');
			setFormValidation(false);
		} else {
			setUser([...user, loginUser]);
			alert('Uspešno ste se prijavili'), props.setDisplayLogin('none');
			setFormValidation(true);
		}
	};

	if (isMobile) {
		return (
			<Form
				display={props.displayLogin}
				className={classes.Form}
				onSubmit={onSubmit}>
				<h2 className={classes.FormTitle}>PRIJAVA KORISNIKA</h2>
				<InputText
					type="text"
					name="userName"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="UNESITE EMAIL ili TELEFON (0601245678)"
					value={user.userName}
					maxLength="30"
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="password"
					className={classes.InputTextMob}
					borderColor={formValidation}
					placeholder="UNESITE LOZINKU"
					maxLength="30"
					value={user.password}
					onChange={onChange}
				/>
				<Submit
					value="PRIJAVI SE"
					display="block"
					width="70%"
					height="40px"
					margin="40px auto 5px auto"
					className={classes.SubmitButton}
					onSubmit={onSubmit}
				/>
				<Button
					value="REGISTRUJ SE"
					classNameButton={classes.FormButtonMob}
					onClick={() => {
						props.setDisplayLogin('none'), props.setDisplayRegAs('block');
					}}
				/>
				<Button
					value="ZABORAVLJENA LOZINKA"
					classNameButton={classes.FormButtonMob}
					onClick={() => props.setDisplayPassRecovery('block')}
				/>
				<Button
					value="ODUSTANI"
					classNameButton={classes.FormButtonCloseMob}
					onClick={() => {
						props.setDisplayLogin('none'),
							setFormValidation(true),
							props.setPagePosition('relative');
					}}
				/>
			</Form>
		);
	} else {
		return (
			<Form
				display={props.displayLogin}
				className={classes.Form}
				onSubmit={onSubmit}>
				<h2 className={classes.FormTitle}>PRIJAVA KORISNIKA</h2>
				<InputText
					type="text"
					name="userName"
					className={classes.InputText}
					margin="40px auto 0 auto"
					borderColor={formValidation}
					placeholder="Uneti EMAIL ili TELEFON(kao npr:06012345678)"
					value={user.userName}
					onChange={onChange}
				/>
				<InputText
					type="password"
					name="password"
					className={classes.InputText}
					borderColor={formValidation}
					placeholder="Uneti lozinku"
					value={user.password}
					onChange={onChange}
				/>
				<Submit
					value="PRIJAVI SE"
					display="block"
					className={classes.SubmitButton}
					onSubmit={onSubmit}
				/>
				<Button
					value="REGISTRUJ SE"
					display="block"
					classNameButton={classes.FormButton}
					onClick={() => {
						props.setDisplayLogin('none'), props.setDisplayRegAs('block');
					}}
				/>
				<Button
					value="ZABORAVLJENA LOZINKA"
					display="block"
					classNameButton={classes.FormButton}
					onClick={() => props.setDisplayPassRecovery('block')}
				/>
				<Button
					value="ODUSTANI"
					classNameButton={classes.FormButtonClose}
					onClick={() => {
						props.setDisplayLogin('none'), setFormValidation(true);
					}}
				/>
			</Form>
		);
	}
};

export default Login;
