
import './App.css';
import "./css/fonts.css"
import EconomicPlans from './components/EconomicPlans';
import PortfolioPlans from './components/portfolioPlans';
import SalesBlock from './components/salesBlock';
import ServicesPlans from './components/servicesPlans';
import TalktoExperts from './components/talktoExperts';

function App() {
  return (
    <div className="App">

       {/* remove top margin mt-20 after putting navbar */}
      <h1 className='font-bold text-4xl mt-20 mb-10 txt-gradient roboto '>Special Weekend Offer</h1>
     
      <SalesBlock/>
      <ServicesPlans/>
      <PortfolioPlans/>
      <EconomicPlans/>
      <TalktoExperts/>

      
      
     
    </div>
  );
}

export default App;
