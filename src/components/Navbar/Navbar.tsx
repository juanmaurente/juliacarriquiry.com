import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const Navbar = () => {
	return (
		<>
			<nav className='nav'>
				<div
					className='container nav__container'
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='300'
					data-aos-offset='0'>
					<Logo />
					<Button />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
