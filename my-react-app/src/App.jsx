import './index.css'
import { BrowserRouter} from 'react-router-dom';
import Header from './header/header.jsx'
import Hero from './hero/hero.jsx'
import Bestseller from './bestseller/Bestseller.jsx'
import Story from './acmestory/story.jsx';
import Template from './template/template.jsx';
import Slick from './slick/slick.jsx';
import Why from './why/why.jsx';
import Reel from './reel/reel.jsx'
import Review from './review/review.jsx'
import Question from './Question/Question.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Hero />
        <Bestseller />
        <Story/>
        <Template/>
        <Slick/>
        <Why/>
        <Reel/>
        <Review/>
        <Question/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

