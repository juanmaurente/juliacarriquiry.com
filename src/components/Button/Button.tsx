import './Button.scss';

const Button = () => {
	const scrollToContact = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
			<button
				className='contact__button contact__button--grey'
				onClick={scrollToContact}>
				GET A QUOTE
			</button>
		</div>
	);
};

export default Button;
