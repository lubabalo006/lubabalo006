import { useState } from "react";
import Heading from "./components/Heading"
import { Section } from './components/Section';
import LineChart from './components/LineChart';


function App() {

  const [amount, setAmount] = useState<number|''>('');
  
  const handleButtonClick = () => {
    console.log(amount);
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  }
  return (
    <div className="border-2 m-2 w-3/5 text-center mx-auto bg-slate-200">
      <Heading title="Currency App"/>
      <Section>
        <div>
        <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            id="amount" 
            className="border-2 m-1"
            value={amount === '' ? '' : amount.toString()}
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <label htmlFor="" id="baseCurrency">From</label>
          <input type="text" id="baseCurrency" className="border-2 m-1"/>
        </div>
        <div>
          <label htmlFor="" id="to-this-currency">To</label>
          <select id="to-this-currency" className="border-2 w-40 m-1" />
        </div>
        <div>
        <button onClick={handleButtonClick} className="p-4 py-2 rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50">CONVERT</button>
        </div>
      </Section>
      <LineChart/>
    </div>
  )
}

export default App
