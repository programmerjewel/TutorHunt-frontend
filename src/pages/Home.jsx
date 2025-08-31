import FAQSection from '../components/FAQSection';
import HeroSlider from '../components/HeroSlider'
import LanguageCategory from '../components/LanguageCategory';
import StartYourJourney from '../components/StartYourJourney';
import StatSection from '../components/StatSection';

const Home = () => {
  return (
    <>
      <HeroSlider/>
      <StatSection/>
      <LanguageCategory/>
      <FAQSection/>
      <StartYourJourney/>
    </>
    
  );
};

export default Home;