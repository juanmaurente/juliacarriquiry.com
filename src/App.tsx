import { useEffect, useState } from 'react';
import CardContent from './components/CardContent/CardContent';
import Contact from './components/Contact/Contact';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Navbar from './components/Navbar/Navbar';
import { ImageKey } from './util/imageKey';

function App() {
	const [selectedCategory, setSelectedCategory] =
		useState<ImageKey>('welcome');
	const [showGallery, setShowGallery] = useState(false);

	const handleCloseGallery = () => {
		setShowGallery(false);
	};

	useEffect(() => {
		console.log(showGallery);
	}, [showGallery]);
	return (
		<>
			<Navbar />
			<CardContent
				setShowGallery={setShowGallery}
				setSelectedCategory={setSelectedCategory}
			/>
			<Contact />
			{showGallery && (
				<ImageGallery
					selectedCategory={selectedCategory}
					showGallery={showGallery}
					onClose={handleCloseGallery}
				/>
			)}
		</>
	);
}

export default App;
