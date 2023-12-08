import './App.css';
import Navbar from './components/navbar';
import Banner from './components/hero-section';
import ImageCarousel from './components/image-carousel';
import HowItWorks from './components/how-it-works';
import BestService from './components/best-service/BestService';
import CardSection from './components/card-section/CardSection';
import Footer from './components/footer/Footer';
import CardSectionCarousel from './components/card-section/CardSectionCarousel';

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<ImageCarousel />
			<HowItWorks />
			<BestService />
			<CardSection />
			<CardSectionCarousel />
			<Footer />
		</>
	);
}

export default App;
