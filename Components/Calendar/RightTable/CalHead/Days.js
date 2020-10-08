const Days = props => {
	return (
		<>
			{props.days.map((day, i) => {
				return <th key={day}>{props.date(i)}</th>;
			})}
		</>
	);
};

export default Days;
