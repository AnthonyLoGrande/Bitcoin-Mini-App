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
      time: [] ,
      bpi: [],
      selectedCurrency: null,
      disclaimer:[], 
    }
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  selectCurrency(code){
    this.setState({selectedCurrency:code) 
  }


  
  async componentDidMount(){ 

    let res = await fetch(url);
    let json = await res.json();
    let time = json.time;
    let bpi =json.bpi;
    let chartName =json.chartName;
    let disclaimer =json.disclaimer;
    this.setState({isLoaded: true, time: time, bpi: bpi, chartName: chartName, disclaimer: disclaimer})
    console.log(this.state.bpi)
  }
  
  render() { 
    const { handleClick} = this
    const {time, bpi, disclaimer } = this.state
  

    return ( 
      <div className = 'App'> 
        <h1 className = 'title' >  Bitcoin Application </h1> 
        <h2> Select Your Currency </h2>
        <CurrencySelector  bpi={bpi} currencySelectorFunc={selectCurrency}/>
        {console.log(value)}
        </div>
    )
  }
}



export default App;
