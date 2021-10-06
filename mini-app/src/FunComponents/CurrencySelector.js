export default function CurrencySelector({bpi, currencySelectorFunc}){
 


  return(
  <select name="selectList" id="selectList" >
     <option value="USD" onClick={() => currencySelectorFunc('USD')}>USD</option>
     <option value="GBP" onClick={()=>currencySelectorFunc('GBP')}>GBP</option>
     <option value="EUR" onClick={()=>currencySelectorFunc('EUR')}>EUR</option>
  </select>
 
 
  
 
 )

  
}



