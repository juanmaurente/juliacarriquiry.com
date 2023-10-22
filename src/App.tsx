import { useState } from 'react';
import CardContent from './components/CardContent/CardContent';
import Contact from './components/Contact/Contact';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	return (
		<>
			<Navbar />
			<CardContent setSelectedCategory={setSelectedCategory} />
			<Contact />
			<ImageGallery selectedCategory={selectedCategory} />
		</>
	);
}

export default App;
