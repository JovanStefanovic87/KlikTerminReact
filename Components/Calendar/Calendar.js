import { useRef, useState } from 'react';
import moment from 'moment';

import WorkingHours from './WorkingHours';
import Days from './RightTable/CalHead/Days';
import Time from './LeftTable/Time';
import CalBodyRow from './RightTable/CalBody/CalBodyRow';
import Form from '../UI/Forms/Form';
import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';
import Filter from '../UI/Filter';
import Table from '../UI/Table';
import Appointments from '../DataFromBE/Appointments';
import Clients from '../DataFromBE/Clients';
import ServiceProvidersServices from '../DataFromBE/ServiceProvidersServices';
import CheckBox from '../UI/CheckBox';
import CalNav from './Nav/CalNav';
import useDeviceDetect from '../../utils/UseDeviceDetect';
import InputText from '../UI/InputText';
import DescriptionLabel from '../UI/DescriptionLabel';

import classes from './Calendar.module.scss';
import classesUI from '../UI/UI.module.scss';

const Calendar = props => {
	const { isMobile } = useDeviceDetect();
	const [displayClientPicker, setDisplayClientPicker] = useState('none');
	const [displayServicesPicker, setDisplayServicesPicker] = useState('none');
	const [week, setWeek] = useState(0);
	const [displayRegCodeClient, setDisplayRegCodeClient] = useState('none');

	const cloneDiv = useRef(null);
	const cloneScrollTop = useRef(null);
	const cloneHeadScrollLeft = useRef(null);
	///////////////// Date menagemant start/////////////////
	const currYear = moment().format('YYYY');
	const currMonday = moment()
		.locale('sr')
		.add(7 * week, 'days')
		.weekday(0)
		.format(isMobile ? 'D.MM' : 'D.MMM')
		.toUpperCase();
	const currSunday = moment()
		.locale('sr')
		.add(7 * week, 'days')
		.weekday(6)
		.format(isMobile ? 'D.MM' : 'D.MMM')
		.toUpperCase(); // next Sunday .add(7, 'days')
	const currMondayName = i => {
		return moment()
			.locale('sr')
			.add(7 * week, 'days')
			.weekday(i)
			.format('ddd / D.MMM')
			.toUpperCase();
	};
	////////////////// Date menagemant end//////////////////
	function scrollPos() {
		let body = cloneDiv.current.scrollTop;
		cloneScrollTop.current.scrollTop = body;
	}

	function scrollPosHead() {
		let body = cloneDiv.current.scrollLeft;
		cloneHeadScrollLeft.current.scrollLeft = body;
	}

	const nextWeek = () => {
		setWeek(w => w + 1);
	};

	const prevWeek = () => {
		setWeek(w => w - 1);
	};

	const BackdropSideDrawer = () => {
		if (isMobile) {
			return <Backdrop display={() => props.displaySideDrawerBackdrop} />;
		} else {
			null;
		}
	};

	const RegCodeClientHandler = () => {
		alert('Uspesna registracija'), setDisplayRegCodeClient('none');
	};

	const RegCodeClient = () => {
		return (
			<Form display={displayRegCodeClient} className={classesUI.Form}>
				<h2 className={classesUI.FormTitle}>REGISTRACIJA KLIJENTA</h2>
				<InputText
					type="text"
					display="block"
					width="60vw"
					maxWidth="600px"
					margin="20px auto 5px auto"
					placeholder="Unesi jedinstveni kod Vašeg pružaoca usluga"
				/>
				<DescriptionLabel
					className={classesUI.DesciptionLabel}
					text="Ukoliko nemate jedinstveni kod Vašeg pružaoca usluga, zatražite ga od pružaoca usluga"
				/>
				<Button
					value="REGISTRUJ SE"
					display="block"
					margin="40px auto 5px auto"
					classNameButton={classesUI.FormButton}
					onClick={() => RegCodeClientHandler()}
				/>
				<Button
					value="ODUSTANI"
					display="block"
					margin="20px auto 5px auto"
					color="orangered"
					classNameButton={classesUI.FormButton}
					onClick={() => setDisplayRegCodeClient('none')}
				/>
			</Form>
		);
	};

	const ClientPickerForm = () => {
		if (isMobile) {
			return (
				<Form display={displayClientPicker} className={classesUI.Form}>
					<h3 className={classesUI.FormTitleMob}>IZBOR KLIJENTA</h3>
					<Button
						value="NOVI KLIJENT"
						display="inline-block"
						width="45%"
						float="left"
						margin="0 auto 10px auto"
						classNameButton={classesUI.FormButtonMob}
					/>
					<Button
						value="SAČUVAJ UNOS"
						display="inline-block"
						classNameButton={classesUI.FormButtonMob}
						width="45%"
						float="right"
						margin="0 auto 10px auto"
					/>
					<Filter
						className={classesUI.Filter}
						placeholder="Pretraga klijenata (unesite ime ili broj telefona)"
					/>
					<Table
						maxHeight="calc(100vh - 300px)"
						nedefinisaniKlijent={
							<tr className={classesUI.Clients}>
								<td
									style={{
										width: '100vw',
										height: '40px',
										border: 'none',
										borderTop: '6px ridge gray',
										backgroundImage:
											'linear-gradient(to top, #202020, #303030, #202020)',
									}}>
									---NEDEFINISANI KLIJENT---
								</td>
							</tr>
						}
						bodyData={Clients.map(user => {
							return (
								<div
									className={classesUI.ClientsMob}
									key={user.id}
									onClick={() => setDisplayServicesPicker('block')}>
									<tr>
										<td>{user.name}</td>
									</tr>
									<tr>
										<td>{user.phone}</td>
									</tr>
									<tr>
										<td>{user.email}</td>
									</tr>
								</div>
							);
						})}
					/>
					<div>
						<Button
							value="ODUSTANI"
							classNameButton={classesUI.FormButton}
							width="50%"
							margin="-10px auto auto auto"
							color="orangered"
							onClick={() => {
								setDisplayClientPicker('none'), props.hideBackdrop();
							}}
						/>
					</div>
				</Form>
			);
		} else {
			return (
				<Form display={displayClientPicker} className={classesUI.Form}>
					<h2 className={classesUI.FormTitle}>IZBOR KLIJENTA</h2>
					<Button
						value="NOVI KLIJENT"
						display="block"
						margin="auto auto 10px auto"
						classNameButton={classesUI.FormButton}
					/>
					<Button value="SAČUVAJ UNOS" classNameButton={classesUI.FormButton} />
					<Filter
						className={classesUI.Filter}
						placeholder="Pretraga klijenata (unesite ime ili broj telefona)"
					/>
					<Table
						maxHeight="calc(100vh - 300px)"
						headData={
							<tr>
								<th>Ime i prezime</th>
								<th style={{ width: '180px', minWidth: '180px' }}>
									Broj telefona
								</th>
								<th>E-mail</th>
							</tr>
						}
						nedefinisaniKlijent={
							<tr>
								<td colSpan="3" className={classesUI.Clients}>
									---NEDEFINISANI KLIJENT---
								</td>
							</tr>
						}
						bodyData={Clients.map(user => {
							return (
								<tr
									key={user.id}
									onClick={() => setDisplayServicesPicker('block')}
									className={classesUI.Clients}>
									<td>{user.name}</td>
									<td style={{ width: '180px', minWidth: '180px' }}>
										{user.phone}
									</td>
									<td>{user.email}</td>
								</tr>
							);
						})}
					/>
					<div>
						<Button
							value="ODUSTANI"
							classNameButton={classesUI.FormButton}
							marginLeft="1%"
							color="orangered"
							onClick={() => {
								setDisplayClientPicker('none'), props.hideBackdrop();
							}}
						/>
					</div>
				</Form>
			);
		}
	};

	const ServicePickerForm = () => {
		if (isMobile) {
			return (
				<Form display={displayServicesPicker} className={classesUI.Form}>
					<h4 className={classesUI.FormTitleMob}>IZBOR USLUGA</h4>
					<Filter
						className={classesUI.Filter}
						placeholder="Pretraga usluga(unesite naziv usluge)"
					/>
					<Table
						displayHeader="none"
						bodyData={ServiceProvidersServices.map(serv => {
							return (
								<div className={classesUI.ServicesMob} key={serv.id}>
									<tr>
										<td>{serv.service}</td>
										<td style={{ width: '20%' }} rowSpan="3">
											<CheckBox name={'chkbox' + serv.id} />
										</td>
									</tr>
									<tr>
										<td>{serv.time}</td>
									</tr>
									<tr>
										<td>{serv.price}</td>
									</tr>
								</div>
							);
						})}
					/>
					<div>
						<Button
							value="IZMENA"
							display="inline-block"
							width="20%"
							height="3rem"
							margin="-15px 0"
							float="left"
							fontSize="0.9rem"
							classNameButton={classesUI.FormButton}
						/>
						<Button
							value="ZAKAŽI TERMIN"
							display="inline-block"
							width="auto"
							height="3rem"
							margin="-15px 0"
							fontSize="7vw"
							classNameButton={classesUI.FormButton}
							onClick={() => {
								setDisplayServicesPicker('none'),
									setDisplayClientPicker('none'),
									props.hideBackdrop();
							}}
						/>
						<Button
							value="ODUSTANI"
							display="inline-block"
							width="20%"
							height="3rem"
							margin="-15px 0"
							float="right"
							fontSize="0.7rem"
							color="orangered"
							onClick={() => {
								setDisplayServicesPicker('none'),
									setDisplayClientPicker('none'),
									props.hideBackdrop();
							}}
							classNameButton={classesUI.FormButton}
						/>
					</div>
				</Form>
			);
		} else {
			return (
				<Form display={displayServicesPicker} className={classesUI.Form}>
					<h2 className={classesUI.FormTitle}>IZBOR USLUGA</h2>
					<Filter
						className={classesUI.Filter}
						placeholder="Pretraga usluga (unesite naziv usluge)"
					/>
					<Table
						headData={
							<tr>
								<th style={{ width: '100%' }}>NAZIV USLUGE</th>
								<th style={{ width: '100px', minWidth: '150px' }}>DUŽINA</th>
								<th style={{ width: '100px', minWidth: '150px' }}>CENA</th>
								<th style={{ width: '100px', minWidth: '100px' }}>IZBOR</th>
							</tr>
						}
						bodyData={ServiceProvidersServices.map(serv => {
							return (
								<tr key={serv.id} className={classesUI.Services}>
									<td style={{ width: '100%' }}>{serv.service}</td>
									<td style={{ width: '100px', minWidth: '150px' }}>
										{serv.time}
									</td>
									<td style={{ width: '100px', minWidth: '150px' }}>
										{serv.price}
									</td>
									<td style={{ width: '100px', minWidth: '100px' }}>
										<CheckBox name={'chkbox' + serv.id} />
									</td>
								</tr>
							);
						})}
					/>
					<div>
						<Button
							value="ZAKAŽI TERMIN"
							display="block"
							margin="auto auto 5px auto"
							classNameButton={classesUI.FormButton}
							onClick={() => {
								setDisplayServicesPicker('none'),
									setDisplayClientPicker('none'),
									props.hideBackdrop();
							}}
						/>
						<Button
							value="IZMENA TERMINA"
							margin="auto 2px auto auto"
							classNameButton={classesUI.FormButton}
						/>
						<Button
							value="ODUSTANI"
							margin="auto auto auto 2px"
							color="orangered"
							onClick={() => {
								setDisplayServicesPicker('none'),
									setDisplayClientPicker('none'),
									props.hideBackdrop();
							}}
							classNameButton={classesUI.FormButton}
						/>
					</div>
				</Form>
			);
		}
	};

	const ServiceProviderCalendar = (
		<div
			className={classes.Calendar}
			style={{
				marginLeft: isMobile ? '5px' : '60px',
				width: isMobile ? '97%' : '92%',
			}}>
			{/* left tabel, fixed horizontaly, scrollable verticaly */}
			<table className={classes.calLeftTable}>
				<thead>
					<tr>
						<th>{currYear}</th>
					</tr>
				</thead>
				<tbody ref={cloneScrollTop}>
					{WorkingHours.map(obj => {
						return (
							<Time
								minMaxWorkingHours={obj.minMaxWorkingHours}
								key={obj.minMaxWorkingHours}
							/>
						);
					})}
				</tbody>
			</table>
			{/* right tabel, fixed verticaly, scrollable horizontaly */}
			<table className={classes.calRightTable}>
				<thead
					ref={cloneHeadScrollLeft}
					style={{ width: isMobile ? '100%' : '97%' }}>
					<tr>
						{WorkingHours.map((obj, i) => {
							return (
								<Days
									days={obj.daysInWeek}
									key={obj.daysInWeek}
									date={currMondayName}
								/>
							);
						})}
					</tr>
				</thead>
				<tbody
					ref={cloneDiv}
					style={{ width: isMobile ? '100%' : '97%' }}
					onScroll={() => {
						scrollPos();
						scrollPosHead();
					}}>
					{WorkingHours.map((obj, i) => {
						return (
							<CalBodyRow
								daysInWeek={obj.daysInWeek}
								minMaxWorkingHours={obj.minMaxWorkingHours}
								key={i}
								workingHoursInWeek={obj.workingHoursInWeek}
								Appointments={Appointments}
								displayClientPicker={() => {
									setDisplayClientPicker('block'), props.showBackdrop();
								}}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);

	return (
		<>
			{RegCodeClient()}
			{ClientPickerForm()}
			{ServicePickerForm()}
			{BackdropSideDrawer}
			<CalNav
				leftArrow="<< nedelja"
				leftMargin={isMobile ? '5px 0 5px 5px' : '5px 0 5px 60px'}
				leftFloat="left"
				prevWeek={prevWeek}
				nextWeek={nextWeek}
				rightArrow="nedelja >>"
				rightMargin={isMobile ? '5px 2vw 5px 0' : '5px 5.2vw 5px 0'}
				rightFloat="right"
				currWeek={currMonday + ' - ' + currSunday}
			/>
			{ServiceProviderCalendar}
		</>
	);
};

export default Calendar;
