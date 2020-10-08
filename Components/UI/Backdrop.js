import classes from './UI.module.scss';

const Backdrop = props => {
	return (
		<div
			className={classes.Backdrop}
			style={{ display: props.display }}
			onClick={props.onClick}></div>
	);
};

export default Backdrop;
