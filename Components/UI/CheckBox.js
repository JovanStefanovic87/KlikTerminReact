import classes from './UI.module.scss';

const CheckBox = props => (
	<>
		<input type="checkbox" id={props.name}></input>
		<label
			htmlFor={props.name}
			className={classes.checkbox} /* dark-check-orange */
		/>
	</>
);

export default CheckBox;
