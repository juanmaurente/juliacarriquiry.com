import './CardContent.scss';

import welcome from '../../assets/images/welcome.webp';
import people from '../../assets/images/people1.webp';
import food from '../../assets/images/food1.webp';
import product from '../../assets/images/product6.webp';

import { CardContentData } from '../../util/data';
import data from '../../util/data.json'; // Importa el archivo JSON
import { ImageKey } from '../../util/imageKey';
import Button from '../Button/Button';

interface Props {
	setSelectedCategory: (category: string) => void;
}

const CardContent = ({ setSelectedCategory }: Props) => {
	const imageMap: Record<ImageKey, string> = {
		welcome: welcome,
		people: people,
		product: product,
		food: food,
	};

	return (
		<>
			{data.content.map((section: CardContentData, index: number) => (
				<section key={index}>
					<div
						className={`content__container ${
							index % 2 === 0 ? 'content__container-left' : ''
						} container`}
						data-aos='fade-zoom-in'
						data-aos-easing='ease-in-back'
						data-aos-delay={index * 400 + 300}
						data-aos-offset='0'>
						<div className='content__image'>
							<img
								src={imageMap[section.photo as ImageKey] || ''}
								alt={section.titulo}
							/>
						</div>
						<div
							className={`content__card ${
								index % 2 === 0
									? 'content__card--black'
									: 'content__card--white'
							}`}>
							<h1>{section.titulo}</h1>
							<p>{section.text}</p>
							<div className='content__buttons'>
								<Button />
								{section.photo !== 'welcome' && (
									<a
										onClick={() =>
											setSelectedCategory(section.photo)
										}
										className='seeMore'>
										See more
									</a>
								)}
							</div>
						</div>
					</div>
				</section>
			))}
		</>
	);
};

export default CardContent;
