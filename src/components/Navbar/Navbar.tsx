import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const Navbar = () => {
	return (
		<>
			<nav className='nav'>
				<div className='container nav__container'>
					<Logo />
					<Button />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
