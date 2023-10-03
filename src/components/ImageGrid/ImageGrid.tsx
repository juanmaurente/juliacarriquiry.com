import './ImageGrid.scss';

import people1 from '../../assets/images/people1.webp';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';

import data from '../../util/data.json';
import { ImageKey } from '../../util/imageKey';
import { useState } from 'react';

const ImageGrid = () => {
	const imageMap: Record<ImageKey, string> = {
		people1: people1,
		people2: people2,
		people3: people3,
		people4: people4,
	};

	const peopleImages = data.images.filter(
		(image) => image.category === 'people',
	);

	const initialDisplayCount = 3; // Cantidad inicial de imágenes a mostrar
	const [displayIndex, setDisplayIndex] = useState(0);

	const visibleImages = peopleImages.slice(
		displayIndex,
		displayIndex + initialDisplayCount,
	);

	const handleChevronDownClick = () => {
		if (displayIndex + 1 < peopleImages.length - initialDisplayCount + 1) {
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
			setDisplayIndex(peopleImages.length - initialDisplayCount);
		}
	};

	return (
		<>
			<div className='grid-container container'>
				{visibleImages.map((image, index) => (
					<div className='image people' key={index}>
						<img
							src={imageMap[image.photo as ImageKey] || ''}
							alt='People Image'
						/>
					</div>
				))}
			</div>
			<button className='chevron-up' onClick={handleChevronUpClick}>
				⌃
			</button>
			<button className='chevron-down' onClick={handleChevronDownClick}>
				⌄
			</button>
		</>
	);
};

export default ImageGrid;
