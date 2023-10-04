import './ImageGrid.scss';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import people1 from '../../assets/images/people1.webp';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.webp';
import product7 from '../../assets/images/product7.jpg';
import product8 from '../../assets/images/product8.jpg';

import data from '../../util/data.json';
import { ImageKey } from '../../util/imageKey';
import { useState } from 'react';
import { icons } from 'react-icons';

const ImageGrid = () => {
	const imageMap: Record<ImageKey, string> = {
		people1: people1,
		people2: people2,
		people3: people3,
		people4: people4,
		product1: product1,
		product2: product2,
		product3: product3,
		product4: product4,
		product5: product5,
		product6: product6,
		product7: product7,
		product8: product8,
	};

	const peopleImages = data.images.filter(
		(image) => image.category === 'people',
	);

	const productImages = data.images.filter(
		(image) => image.category === 'product',
	);

	const initialDisplayCount = 3; // Cantidad inicial de imágenes a mostrar
	const [displayIndex, setDisplayIndex] = useState(0);

	const visibleImages = productImages.slice(
		displayIndex,
		displayIndex + initialDisplayCount,
	);

	const handleChevronDownClick = () => {
		if (displayIndex + 1 < productImages.length - initialDisplayCount + 1) {
			setDisplayIndex(displayIndex + 1);
		} else {
			setDisplayIndex(0); // Vuelve al principio si no hay más elementos
		}
	};

	const handleChevronUpClick = () => {
		if (displayIndex > 0) {
			setDisplayIndex(displayIndex - 1);
		} else {
			// Si estás en el primer índice, muestra las últimas imágenes
			setDisplayIndex(productImages.length - initialDisplayCount);
		}
	};

	return (
		<>
			<div className='container container-centered'>
				<div className='grid-container '>
					{visibleImages.map((image, index) => (
						<div className='image people' key={index}>
							<img
								src={imageMap[image.photo as ImageKey] || ''}
								alt='People Image'
							/>
						</div>
					))}
				</div>
				<FaChevronUp
					className='chevron-up'
					onClick={handleChevronUpClick}
				/>
				<FaChevronDown
					className='chevron-down'
					onClick={handleChevronDownClick}
				/>
			</div>
		</>
	);
};

export default ImageGrid;
