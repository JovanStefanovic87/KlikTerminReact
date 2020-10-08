import useDeviceDetect from '../../utils/UseDeviceDetect';
import Button from '../UI/Button';
import Form from '../UI/Forms/Form';

import classes from '../UI/UI.module.scss';

const RegAs = props => {
	const { isMobile } = useDeviceDetect();

	if (isMobile) {
		return (
			<Form display={props.displayRegAs} className={classes.Form}>
				<h2 className={classes.FormTitle}>REGISTRUJ SE KAO:</h2>
				<Button
					value="KLIJENT"
					classNameButton={classes.FormButtonMob}
					onClick={() => {
						props.setDisplayRegClient('block'), props.setDisplayRegAs('none');
					}}
				/>
				<Button
					value="PRUŽAOC USLUGA"
					classNameButton={classes.FormButtonMob}
					onClick={() => {
						props.setDisplayRegServProv('block'), props.setDisplayRegAs('none');
					}}
				/>
				<Button
					value="ODUSTANI"
					classNameButton={classes.FormButtonCloseMob}
					onClick={() => {
						props.setDisplayRegAs('none'), props.setPagePosition('relative');
					}}
				/>
			</Form>
		);
	} else {
		return (
			<Form display={props.displayRegAs} className={classes.Form}>
				<h2 className={classes.FormTitle}>REGISTRUJ SE KAO:</h2>
				<Button
					value="KLIJENT"
					display="block"
					margin="40px auto 5px auto"
					classNameButton={classes.FormButton}
					onClick={() => {
						props.setDisplayRegClient('block'), props.setDisplayRegAs('none');
					}}
				/>
				<Button
					value="PRUŽAOC USLUGA"
					display="block"
					classNameButton={classes.FormButton}
					onClick={() => {
						props.setDisplayRegServProv('block'), props.setDisplayRegAs('none');
					}}
				/>
				<Button
					value="ODUSTANI"
					classNameButton={classes.FormButtonClose}
					onClick={() => props.setDisplayRegAs('none')}
				/>
			</Form>
		);
	}
};

export default RegAs;
