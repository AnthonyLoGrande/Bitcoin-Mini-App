import './App.css';
import {Component} from "react";
import CostBasis from './FunComponents/CostBasis.js'
import BitCoinValue from './FunComponents/BitCoinValue.js'
import CurrencySelector from './FunComponents/CurrencySelector.js'
const url = `https://api.coindesk.com/v1/bpi/currentprice.json`

class App extends Component{
  constructor(){
    super();
    this.state = {
      time: {} ,
      bpi: {},
      selectedCurrency: "USD",
    }
  }

 
  async componentDidMount(){ 
          let res = await fetch(url);
          let json = await res.json();
          this.setState({time: json.time, bpi: json.bpi})
          console.log(this.state.bpi)
  }
      


  selectCurrency(code){
    this.setState({selectedCurrency:code}) 
  }

  
  render() { 
    const {selectCurrency} = this
  

    return ( 
      <div className = 'App'> 
        <h1 className = 'title' >  Bitcoin Application </h1>
        <h2>current price: {Object.keys(this.state.bpi).length ? `${this.state.bpi[this.state.selectedCurrency]?.rate} ${this.state.selectedCurrency}`: ""}</h2> 
        <h2> Select Your Currency </h2>
        <CurrencySelector  bpi={this.state.bpi} currencySelectorFunc={selectCurrency}/>
        </div>
    )
  }
}
export default App;
