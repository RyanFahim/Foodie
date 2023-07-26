import './App.css';
import Category from './components/Category';
import Food from './components/Food';
import Headline from './components/Headline';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Headline />
      <Food/>
      <Category/>
    </>
  )
}

export default App;
