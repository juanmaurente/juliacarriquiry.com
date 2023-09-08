import './CardContent.scss';
import '../../assets/images/welcome.webp';
import Button from '../Button/Button';
import welcome from '../../assets/images/welcome.webp';
import people from '../../assets/images/people1.webp';
import food from '../../assets/images/food1.webp';
import product from '../../assets/images/product6.webp';

const CardContent = () => {
	return (
		<>
			<section>
				<div
					className='content__container content__container-left container'
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='300'
					data-aos-offset='0'>
					<div className='content__image'>
						<img src={welcome} />
					</div>
					<div className='content__card content__card--black'>
						<h1>Julia Carriquiry photography | Sydney</h1>
						<p>
							Capturing life's moments through stunning
							photography.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div
					className='content__container container'
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='1000'
					data-aos-offset='0'>
					<div className='content__image'>
						<img src={people} />
					</div>
					<div className='content__card content__card--white'>
						<h1>Portrait Photography Services</h1>
						<p>
							Professional portraits that showcase your
							personality and style. Perfect for headshots,
							families, and couples. Contact me to book your
							portrait session today.
						</p>
						<Button />
					</div>
				</div>
			</section>
			<section>
				<div
					className='content__container content__container-left container'
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='400'
					data-aos-offset='0'>
					<div className='content__image'>
						<img src={product} />
					</div>
					<div className='content__card content__card--white'>
						<h1>Commercial Photography Services</h1>
						<p>
							Professional product photography that showcases your
							brand. Perfect for e-commerce, advertising, and
							catalogs. Contact me to elevate your product
							imagery.
						</p>
						<Button />
					</div>
				</div>
			</section>
			<section>
				<div
					className='content__container container'
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='400'
					data-aos-offset='0'>
					<div className='content__image'>
						<img src={food} />
					</div>
					<div className='content__card content__card--white'>
						<h1>Food Photography Services</h1>
						<p>
							Mouth-watering photos that highlight your cuisine.
							Perfect for restaurants, cafes, and food bloggers.
							Contact me to showcase your delicious dishes.
						</p>
						<Button />
					</div>
				</div>
			</section>
		</>
	);
};

export default CardContent;
