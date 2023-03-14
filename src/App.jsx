import { useState } from 'react';
import './App.css'

const buttonsClasses = 'btn btn-primary w-75 mt-2';

function App() {
   const [screen, setScreen] = useState('0');

   const handleButtonClick = () => {
      if (screen === '0') {
         setScreen('9');
      } else {
         setScreen(`${screen}9`);
      }
   };

  return (
    <div className='app'>
      <h1>Calculator</h1>
      <hr />
      <table style={{ width: '400px', margin: 'auto'}}>
        
         {/*FIRT ROW */}
        <tr>
          <td colSpan={4} style={{
            border: '1px solid black', textAlign: 'end'
            }}>
            <h2>{screen}</h2>
          </td>
        </tr>

         {/*SECOND ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>C</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>/</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>*</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>-</button>
          </td>
        </tr>

         {/*THIRD ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>7</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>8</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}
             onClick={handleButtonClick}
             >9</button>
          </td>
          <td rowSpan={2}>
          <button 
             tipe='button' 
             className={buttonsClasses}
             style={{height:"85px"}}>+</button>
          </td>
        </tr>

         {/*FOURTH ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>4</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>5</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>6</button>
          </td>
        </tr>

        {/*FIFTH ROW */}
        <tr>
          <td>
            <button 
             tipe='button' 
             className={buttonsClasses}>1</button> 
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>2</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>3</button>
          </td>
          <td rowSpan={2}>
          <button 
             tipe='button' 
             className={buttonsClasses}
             style={{height: "85px"}}>=</button>
          </td>
        </tr>

        {/*SIXTH ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}> DEL </button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClasses}>0</button>
          </td>
          <td>
            <button 
             tipe='button' 
             className={buttonsClasses}>.</button>
          </td>
        </tr>

      </table>
    </div>
  )
}

export default App;