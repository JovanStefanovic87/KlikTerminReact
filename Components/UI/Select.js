const Select = props => (
	<select
		name={props.nameSelect}
		id={props.idSelect}
		className={props.className}
		style={{
			display: props.displaySelect,
			borderColor: props.borderColor ? 'rgba(128, 128, 128, 0.541)' : 'red',
		}}>
		{props.children}
	</select>
);

export default Select;
