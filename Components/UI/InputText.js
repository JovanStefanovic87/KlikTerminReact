const InputText = props => (
	<input
		type={props.type}
		name={props.name}
		className={props.className}
		style={{
			display: props.display,
			width: props.width,
			maxWidth: props.maxWidth,
			margin: props.margin,
			fontSize: props.fontSize,
			borderColor: props.borderColor ? 'inherit' : 'red',
		}}
		maxLength={props.maxLength}
		rows={props.rows}
		cols={props.cols}
		placeholder={props.placeholder}
		value={props.value}
		onChange={props.onChange}></input>
);

export default InputText;
