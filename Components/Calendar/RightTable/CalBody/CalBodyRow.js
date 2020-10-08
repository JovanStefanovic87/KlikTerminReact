import CalBodyCol from './CalBodyCol';

const CalBodyRow = props => {
	return (
		<>
			{props.minMaxWorkingHours.map((time, i) => {
				/* console.log(props.Appointments[1].time === '08:30'); */
				return (
					<tr key={i}>
						<CalBodyCol
							daysInWeek={props.daysInWeek}
							/* dayParamHandler={props.dayParamHandler} */
							workingHoursInWeek={props.workingHoursInWeek}
							isEnabled={props.isEnabled}
							time={i}
							Appointments={props.Appointments}
							onClick={props.onClick}
							displayClientPicker={props.displayClientPicker}></CalBodyCol>
					</tr>
				);
			})}
		</>
	);
};

export default CalBodyRow;
