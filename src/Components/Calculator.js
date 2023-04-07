import React, {useState} from 'react';
import './Style.css';

const Calculator = () => {

    const [value, setValue] = useState([]);
    const [secondaryValue, setSecondaryValue] = useState([]);
    const [operator, setOperator] = useState('');

    function operand(event){
        setOperator(event.target.value);
        setValue(prevList => [...prevList, event.target.value]);
        setSecondaryValue(value);
        setValue('');
    }

    function displayValue(event){
        setValue(prevState => [...prevState, event.target.value]);
    }

    function solve(){
        if(operator === "+"){
            setValue(Number(value.join('')) + Number(secondaryValue.join('')));
        }else if(operator === '-'){
            setValue(Math.abs(Number(value.join('')) - Number(secondaryValue.join(''))));
        }else if(operator === '*'){
            setValue(Number(value.join('')) * Number(secondaryValue.join('')));
        }else if(operator === '/'){
            setValue(Number(value.join('')) / Number(secondaryValue.join('')));
        }else if(operator === '%'){
            setValue(Number(value.join('')) % Number(secondaryValue.join('')));
        }else{
            alert('I myself dont know what this does');
        }
        setSecondaryValue('');
    }

    function clearAll(){
        setValue('');
        setSecondaryValue('');
    }

  return (
    <div className='calculator--container'>
        <div className="output--container">
            <div className="output--upper--container">{secondaryValue}</div>
            <div className="output--lower--container">{value}</div>
        </div>
        <div className='content--container'>
            <button onClick={clearAll}>AC</button>
            <button onClick={operand}>+/-</button>
            <button onClick={operand}>%</button>
            <button onClick={operand}>/</button>
            <button onClick={displayValue} value="7">7</button>
            <button onClick={displayValue} value="8">8</button>
            <button onClick={displayValue} value="9">9</button>
            <button onClick={operand} value="*">*</button>
            <button onClick={displayValue} value="4">4</button>
            <button onClick={displayValue} value="5">5</button>
            <button onClick={displayValue} value="6">6</button>
            <button onClick={operand} value="-">-</button>
            <button onClick={displayValue} value="1">1</button>
            <button onClick={displayValue} value="2">2</button>
            <button onClick={displayValue} value="3">3</button>
            <button onClick={operand} value="+">+</button>
            <button className='span--two'>0</button>
            <button onClick={displayValue}>.</button>
            <button onClick={solve}>=</button>
        </div>

    </div>
  )
}

export default Calculator