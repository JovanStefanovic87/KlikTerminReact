import { useState } from 'react';
import Link from 'next/link';

import Layout from '../Components/hoc/Layout/Layout';
import NavItem from '../Components/Navigation/NavItem';
import NavItems from '../Components/Navigation/NavItems';
import Slider from '../Components/HomePage/Slider';
import Login from '../Components/RegLog/Login';
import RegAs from '../Components/RegLog/RegAs';
import RegServProv from '../Components/RegLog/RegServProv';
import RegClient from '../Components/RegLog/RegClient';
import PassRecovery from '../Components/RegLog/PassRecovery';
import ClientVerification from '../Components/RegLog/ClientVerification';
import OurServices from '../Components/HomePage/OurServices';
import Title from '../Components/HomePage/Title';
import OurServicesContainer from '../Components/HomePage/OurServicesContainer';
import ContactForm from '../Components/HomePage/ContactForm';
import Footer from '../Components/HomePage/Footer';
import RegLogButton from '../Components/HomePage/RegLogButton';

import {
	faCalendarAlt,
	faSms,
	faPiggyBank,
	faUserClock,
	faBusinessTime,
	faSitemap,
	faAddressBook,
	faTruckMonster,
	faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import useDeviceDetect from '../utils/UseDeviceDetect';

import classes from '../Components/Navigation/Navigation.module.scss';

export default function Index() {
	const { isMobile } = useDeviceDetect();
	const [pagePosition, setPagePosition] = useState('relative');
	const [displayLogin, setDisplayLogin] = useState('none');
	const [displayRegAs, setDisplayRegAs] = useState('none');
	const [displayRegServProv, setDisplayRegServProv] = useState('none');
	const [displayRegClient, setDisplayRegClient] = useState('none');
	const [displayClientVerify, setDisplayClientVerify] = useState('none');
	const [displayPassRecovery, setDisplayPassRecovery] = useState('none');

	const Navigation = (
		<NavItems display={isMobile ? 'none' : 'inherit'}>
			<p className={classes.logNotifPc} style={{ display: 'none' }}>
				Dobrodošli Jovan Stefanovic
			</p>
			<NavItem
				link="/"
				className={classes.IndexToolbarNavBtn}
				displayLoginBtn="block"
				marginLeft="10px"
				onClick={() => setDisplayLogin('block')}>
				<a>Prijava</a>
			</NavItem>
			<NavItem
				link="/"
				className={classes.IndexToolbarNavBtn}
				displayRegBtn="block"
				marginLeft="85px"
				onClick={() => setDisplayRegAs('block')}>
				<a>Registracija</a>
			</NavItem>
			<NavItem
				link="/"
				className={classes.IndexToolbarNavBtn}
				marginLeft="205px">
				<a>Usluge</a>
			</NavItem>
			<NavItem
				link="/"
				className={classes.IndexToolbarNavBtn}
				marginLeft="283px">
				<a>Kontakt</a>
			</NavItem>
			<Link href="/CalendarServiceProvider">
				<NavItem
					link="/CalendarServiceProvider"
					className={classes.IndexBookingButton}
					marginLeft="375px">
					<a>Rezerviši termin</a>
				</NavItem>
			</Link>
		</NavItems>
	);

	const Services = (
		<>
			<Title txt="Benefiti koje Vam donosi KlikTermin" />
			<OurServicesContainer>
				<OurServices
					Icon={faCalendarAlt}
					title="Samozakazivanje"
					txt="Koliko vremena bi bilo potrebno da Vašem klijentu izdiktirate sve svoje slobodne termine? Omogućite im pregled slobodnih termina na osnovu čega će moći sami izabrati sebi najzgodniji termin, a da ste pri tome zaštićeni od preklapanja termina."
				/>
				<OurServices
					Icon={faSms}
					title="SMS podsetnik"
					txt="Dešava se da klijent zaboravi na zakazani termin? Spremni smo da rešimo i taj problem. Imate izbor korišćenja našeg SMS podsetnika. Sami odredite koliko vremena pre zakazanog termina će Vašem klijentu stići podsetnik na mobilni telefon."
				/>
				<OurServices
					Icon={faPiggyBank}
					title="Ušteda novca"
					txt="Svaki put kada se u toku termina javite na telefon Vi bacate vreme, a vreme je novac. Bacate vreme zato što Vam nudimo način da klijenti zakazuju termine bez da Vas prekidaju u poslu."
				/>
				<OurServices
					Icon={faBusinessTime}
					title="Ušteda vremena"
					txt="Koliko često se javljate na telefon u toku jednog termina kako bi Vam klijenti zakazali termin? Da li se to dešava i kada Vam radno vreme istekne? Posvetite svoje vreme zaista bitnim stvarima u životu uz našu pomoć."
				/>
				<OurServices
					Icon={faUserClock}
					title="Zakazivanje 24h"
					txt="Jedna od usluga koju svojim klijentima ne možete pružiti jeste da Vam zakažu termin u bilo koje doba dana ili noći, odnosno 24/7. Mi Vam i to omogućujemo bez da Vas iko budi ili prekida u poslu ili odmoru. Kalendar je dostupan 24/7 Vašim klijentima."
				/>
				<OurServices
					Icon={faSitemap}
					title="Organizacija"
					txt="Radno vreme Vam se menja dnevno ili nedeljno? Omogućujemo Vam da podesite radno vreme, odnosno odsustvo za čitavu godinu unapred, a pri tome možete odrediti koliko nedelja unapred klijenti mogu da Vam zakažu termin."
				/>
				<OurServices
					Icon={faAddressBook}
					title="Baza klijenata"
					txt="Kliktermin Vam omogućuje kreiranje baze klijenata, brojeva telefona, e-mail adresa, što ćete videti kada Vam klijent zakaže termin. Ukoliko želite, određenom klijentu, možete zabraniti dalje zakazivanje Vaših termina."
				/>
				<OurServices
					Icon={faTruckMonster}
					title="Mobilnost"
					txt="Da li se desilo da je neko hteo da zakaže termin, a niste znali raspored u tom momentu?Sve što Vam je potrebno jeste mobilni uređaj (telefon, tablet...) i internet da biste u svakom momentu mogli videti raspored svojih termina."
				/>
				<OurServices
					Icon={faUserShield}
					title="Bezbednost"
					txt="Niko ne može da Vam zakaže termin ako nije u Vašoj bazi klijenata čime ste zaštićeni od ljudi koji bi se lažno predstavili kao Vaši klijenti. Baza klijenata je kriptovana što sprečava krađu podataka."
				/>
			</OurServicesContainer>
		</>
	);

	const RegistrationAndLogin = (
		<>
			<Login
				displayLogin={displayLogin}
				setDisplayLogin={setDisplayLogin}
				setDisplayRegAs={setDisplayRegAs}
				setDisplayPassRecovery={setDisplayPassRecovery}
				setPagePosition={setPagePosition}
			/>
			<RegAs
				displayRegAs={displayRegAs}
				setDisplayRegClient={setDisplayRegClient}
				setDisplayRegAs={setDisplayRegAs}
				setDisplayRegServProv={setDisplayRegServProv}
				setPagePosition={setPagePosition}
			/>
			<RegServProv
				displayRegServProv={displayRegServProv}
				setDisplayRegServProv={setDisplayRegServProv}
				setDisplayRegAs={setDisplayRegAs}
				setPagePosition={setPagePosition}
			/>
			<RegClient
				displayRegClient={displayRegClient}
				setDisplayRegClient={setDisplayRegClient}
				setDisplayRegAs={setDisplayRegAs}
				setPagePosition={setPagePosition}
			/>
			<ClientVerification
				displayClientVerify={displayClientVerify}
				setDisplayClientVerify={setDisplayClientVerify}
				setPagePosition={setPagePosition}
			/>
			<PassRecovery
				displayPassRecovery={displayPassRecovery}
				setDisplayPassRecovery={setDisplayPassRecovery}
				setPagePosition={setPagePosition}
			/>
		</>
	);

	return (
		<>
			<Layout
				pagePosition={pagePosition}
				displayHamButton="none"
				displaySideDrawerMob="none"
				displaySideDrawerPC="none"
				displayNotifLabel="none"
				displaySelect="none"
				colorCalIcon="#fc9815"
				classNameCal={classes.sideDrawerButtonActive}
				classNameClients={classes.sideDrawerButton}
				classNameServices={classes.sideDrawerButton}
				classNameSettings={classes.sideDrawerButton}
				selectData={null}
				backgroundColorLayout="#303030">
				{RegistrationAndLogin}
				{Navigation}
				<Slider />
				{Services}
				<hr style={{ marginTop: isMobile ? '10px' : '40px' }}></hr>
				<ContactForm />
				<RegLogButton
					onClickLogin={() => {
						setDisplayLogin('block'), setPagePosition('fixed');
					}}
					onClickReg={() => {
						setDisplayRegAs('block'), setPagePosition('fixed');
					}}
				/>
				<Footer />
			</Layout>
		</>
	);
}
