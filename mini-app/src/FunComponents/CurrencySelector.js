export default function CurrencySelector({changeFunc}){
 
  return(
  <select name="selectList" id="selectList" onChange={(event) => changeFunc(event.target.value)} >
     <option value="USD" >USD</option>
     <option value="GBP">GBP</option>
     <option value="EUR">EUR </option>
  </select>
 
 )

  
}



