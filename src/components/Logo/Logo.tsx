import './Logo.scss';

const Logo = () => {
	return (
		<a href='/'>
			<div className='logo'>
				<div className='logo__name'>
					<h1 className='logo__name-julia'>Julia</h1>
					<h1 className='logo__name-carriquiry'>Carriquiry</h1>
					<div className='logo__line'></div>
					<h3 className='logo-photography'>PHOTOGRAPHY</h3>
				</div>
			</div>
		</a>
	);
};

export default Logo;
