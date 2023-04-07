import React, {useState} from 'react';

const Sample = () => {
    const [name, setname] = useState('');

    function nnn(event){
        setname(event.target.value);
    }
  return (
    <div>
        <input type="text" onChange={nnn} value={name}/>
        <h1>{name}</h1>
        
    </div>
  )
}

export default Sample