const ServiceProviderLogo = props => (
	<div className={props.className}>
		<img src={props.src} alt={props.alt}></img>
		<p>{props.salonName}</p>
	</div>
);

export default ServiceProviderLogo;
