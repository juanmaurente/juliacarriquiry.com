import ImageGrid from '../ImageGrid/ImageGrid';
import './ImageGallery.scss';

import people from '../../assets/images/people1.webp';

const ImageGallery = () => {
	return (
		<>
			<div className='container gallery-container'>
				<ImageGrid />
				<ImageGrid />
				<ImageGrid />
			</div>
		</>
	);
};

export default ImageGallery;
