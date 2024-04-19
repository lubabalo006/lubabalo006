import Heading from "./components/Heading"
import { Section } from './components/Section';
import LineChart from './components/LineChart';


function App() {
  
  return (
    <div>
      <Heading title="Currency App"/>
      <Section>
        <div>
          <label htmlFor="" id="amount">Amount</label>
          <input type="number" id="amount" className="border-2"/>
        </div>
        <div>
          <label htmlFor="" id="baseCurrency">From</label>
          <input type="text" id="baseCurrency" className="border-2"/>
        </div>
        <div>
          <label htmlFor="" id="to-this-currency">To</label>
          <select id="to-this-currency" />
        </div>
      </Section>
      <LineChart/>
    </div>
  )
}

export default App
