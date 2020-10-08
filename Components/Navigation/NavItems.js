import useDeviceDetect from '../../utils/UseDeviceDetect';

import classes from './Navigation.module.scss';

const NavItems = props => {
	const { isMobile } = useDeviceDetect();
	if (isMobile) {
		return (
			<ul
				className={classes.NavServiceProviderItemsMob}
				style={{ display: props.display }}>
				{props.children}
				{/* <NavItem link="/orders">Orders</NavItem> */}
			</ul>
		);
	} else {
		return (
			<ul className={classes.NavServiceProviderItemsPC}>
				{props.children}
				{/* <NavItem link="/orders">Orders</NavItem> */}
			</ul>
		);
	}
};

export default NavItems;
