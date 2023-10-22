import './ImageGallery.scss';
import { ImageKey } from '../../util/imageKey';
import data from '../../util/data.json';

import {
	people1,
	people2,
	people3,
	people4,
	people5,
	people6,
	people7,
	people8,
	people9,
	people10,
	people11,
	people12,
	product1,
	product2,
	product3,
	product4,
	product5,
	product6,
	product7,
	product8,
	product9,
	product10,
	product11,
	product12,
	food1,
	food2,
	food3,
	food4,
	food5,
	food6,
	food7,
	food8,
	food9,
	food10,
	food11,
	food12,
} from './ImportImages';

interface Props {
	selectedCategory: ImageKey;
	onClose: () => void;
}

const ImageGallery = ({ selectedCategory, onClose }: Props) => {
	const imageMap: Record<string, string> = {
		people1: people1,
		people2: people2,
		people3: people3,
		people4: people4,
		people5: people5,
		people6: people6,
		people7: people7,
		people8: people8,
		people9: people9,
		people10: people10,
		people11: people11,
		people12: people12,
		product1: product1,
		product2: product2,
		product3: product3,
		product4: product4,
		product5: product5,
		product6: product6,
		product7: product7,
		product8: product8,
		product9: product9,
		product10: product10,
		product11: product11,
		product12: product12,
		food1: food1,
		food2: food2,
		food3: food3,
		food4: food4,
		food5: food5,
		food6: food6,
		food7: food7,
		food8: food8,
		food9: food9,
		food10: food10,
		food11: food11,
		food12: food12,
	};

	const selectedImages = data.images.filter(
		(image) => image.category === selectedCategory,
	);

	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<div className='close-button'></div>
				<div className='container-centered'>
					<div className='grid-container '>
						{selectedImages.map((image, index) => {
							return (
								<div className='image' key={index}>
									<img
										src={
											imageMap[image.photo as ImageKey] ||
											''
										}
										alt={image.photo}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
