export default function CurrencySelector({bpi, currencySelectorFunc}){
 
  function handleChange(e) {
    console.log(e.target.value);
  }


  return(
  <select name="selectList" id="selectList" onChange={() =>handleChange}>
     <option value="USD" onClick={() => currencySelectorFunc('USD')}>USD</option>
     <option value="GBP" onClick={()=>currencySelectorFunc('GBP')}>GBP</option>
     <option value="EUR" onClick={()=>currencySelectorFunc('EUR')}>EUR</option>
  </select>
 
 
  
 
 )

  
}



