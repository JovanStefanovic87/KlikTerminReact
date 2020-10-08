const Time = props => {
	return (
		<>
			{props.minMaxWorkingHours.map((obj, i) => {
				return (
					<tr key={i}>
						<td>{obj}</td>
					</tr>
				);
			})}
		</>
	);
};

export default Time;
