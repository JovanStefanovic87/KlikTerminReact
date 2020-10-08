import Event from './Event';

import classes from '../../Calendar.module.scss';

const CalBodyCol = props => {
	return (
		<>
			{props.daysInWeek.map((day, i) => {
				const isEnbaled = props.workingHoursInWeek[i].cell[props.time].enabled;
				const cellDate = props.workingHoursInWeek[i].date;
				const cellHour = props.workingHoursInWeek[i].cell[props.time]['time'];

				const Appointments = () => {
					for (const hour of props.Appointments) {
						if (
							hour.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							hour.date === props.workingHoursInWeek[i].date
						) {
							if (hour.numOfCellsTakes === 1) {
								return 149 * hour.numOfCellsTakes;
							} else if (
								hour.numOfCellsTakes >= 2 &&
								hour.numOfCellsTakes < 4
							) {
								return 149 * hour.numOfCellsTakes + hour.numOfCellsTakes * 1.2;
							} else {
								return 149 * hour.numOfCellsTakes + hour.numOfCellsTakes * 1.8;
							}
						}
					}
				};

				const eventUser = () => {
					for (const event of props.Appointments) {
						if (
							event.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							event.date === props.workingHoursInWeek[i].date
						) {
							return event.user;
						}
					}
				};

				const eventPhone = () => {
					for (const event of props.Appointments) {
						if (
							event.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							event.date === props.workingHoursInWeek[i].date
						) {
							return event.phone;
						}
					}
				};

				const eventDuration = () => {
					for (const event of props.Appointments) {
						if (
							event.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							event.date === props.workingHoursInWeek[i].date
						) {
							return event.duration;
						}
					}
				};

				const eventService = () => {
					for (const event of props.Appointments) {
						if (
							event.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							event.date === props.workingHoursInWeek[i].date
						) {
							return event.service;
						}
					}
				};

				const eventPrice = () => {
					for (const event of props.Appointments) {
						if (
							event.time ===
								props.workingHoursInWeek[i].cell[props.time]['time'] &&
							event.date === props.workingHoursInWeek[i].date
						) {
							return event.price;
						}
					}
				};

				return (
					<td
						className={isEnbaled ? classes.CellEnabled : classes.CellDisabled}
						key={i}
						onClick={
							isEnbaled && !Appointments() ? props.displayClientPicker : null
						}
						data-celldate={cellDate}
						data-cellhour={cellHour}>
						<p style={{ display: Appointments() ? 'none' : 'flex' }}>
							{!isEnbaled ? 'zatvoreno' : 'rezerviši termin'}
						</p>
						<Event
							display={Appointments() ? 'flex' : 'none'}
							height={Appointments() + 'px'}
							className={classes.Appointment}>
							<h5>{eventDuration()}</h5>
							<h5>{eventUser()}</h5>
							<h5>{eventPhone()}</h5>
							<hr className={classes.HrLineAppointment}></hr>
							<h5>{eventService()}</h5>
							<h5>{eventPrice()} rsd</h5>
						</Event>
					</td>
				);
			})}
		</>
	);
};

export default CalBodyCol;
