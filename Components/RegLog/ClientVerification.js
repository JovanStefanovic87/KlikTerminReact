import Button from '../UI/Button';
import DescriptionLabel from '../UI/DescriptionLabel';
import Form from '../UI/Forms/Form';

import classes from '../UI/UI.module.scss';

const ClientVerification = props => {
	const ClientVerifyHandler = () => {
		alert('Poslali smo Vam podatke za prijavu email-om odnosno sms-om'),
			setDisplayClientVerify('none');
	};
	return (
		<Form display={props.displayClientVerify} className={classes.Form}>
			<DescriptionLabel
				className={classes.DesciptionLabel}
				color="green"
				text="Poslali smo verifikacioni E-mail i SMS. Kliknite na link koji se nalazi u E-mail-u odnosno SMS-u kako bismo utvdili tačnost podataka i aktivirali Vaš nalog"
			/>
			<DescriptionLabel
				className={classes.DesciptionLabel}
				text="Ovaj korak je VAŽAN zato što ćete od pružaoca usluge dobijati SMS podsetnike na zakazan termin"
			/>
			<Button
				value="POTVRDI"
				display="block"
				margin="40px auto 5px auto"
				classNameButton={classes.FormButton}
				onClick={() => {
					ClientVerifyHandler(), props.setDisplayClientVerify('none');
				}}
			/>
		</Form>
	);
};

export default ClientVerification;
