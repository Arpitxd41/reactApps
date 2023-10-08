import './App.css';
import Herosection from './components/herosection/Herosection';
import Cardone from './components/cards/cardOne';
import CardTwo from './components/cards/cardTwo';
import Section2 from './components/Section2/Section2';
import FooterSection from './components/Section3/FooterSection';

function App(){
  return (
    <>
      <Herosection />
      <div className='component1 my-20 rounded-lg px-12 py-16 space-y-6'>
        <h1 className='title text-gray-50 text-4xl font-semibold rounded-md w-fit px-12 py-2' style={{boxShadow :"0px 5px 10px 0px rgba(0,255,255,0.7)"}}>Missions</h1>
        <Cardone /> 
      </div>
      <div className='component2 my-20 rounded-lg px-12 py-16 space-y-6 justify-end'>
        <h1 className='title text-gray-50 text-4xl font-semibold rounded-md w-fit px-12 py-2' style={{boxShadow :"0px 5px 10px 0px rgba(0,255,255,0.7)"}}>Milestone Events</h1>
        <CardTwo /> 
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
};
export default App;
