import Link from 'next/link';

const NavItem = props => (
	<li
		className={props.className}
		style={{ display: props.display, marginLeft: props.marginLeft }}
		onClick={props.onClick}>
		<Link href={props.link}>{props.children}</Link>
	</li>
);

export default NavItem;
