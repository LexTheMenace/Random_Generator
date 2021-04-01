import { useEffect, useState } from 'react';

const RandNames = ({variable}) => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [random, setRandom] = useState(null);

  const drawTwo = () => {
    const choice1 = names[(Math.floor(Math.random() * names.length))]
    const choice2 = names.filter(name => name !== choice1)[(Math.floor(Math.random() * (names.length - 1)))]
    return `${choice1} and ${choice2}` 
  };

  return (
    <div className="rand_names">
      <div style={{
        display: random ? 'block' : 'none',
        height: '40px',
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: '800',
        color: 'darkred'
      }}>
{random}
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      
      <label>Enter {variable}s</label>
    <span style={{ maxHeight: '60px', display: 'flex', justifyContent: 'center', width: '100%' }}>
    <input style={{ maxHeight: '60px' }} htmlFor='name' onKeyDown={(e) => {
      if(e.key === 'Enter'){
        if(!name) return;
        setNames([...names, name]) 
        setName('')
      }
    }} id='name_input' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => {
        if(!name) return;
        setNames([...names, name]) 
        setName('')
        document.getElementById('name_input').focus()
      }}>Add {variable}</button>
      </span>  
        <button onClick={() => {
            setRandom(names.filter(name => name !== random)[(Math.floor(Math.random() * names.length - (random ? 1 : 0)))])
          }}> Draw {variable}</button>
        <button onClick={() => setRandom(drawTwo())}> Draw Two</button>
        <button  onClick={() => {
          if(window.confirm('Are you sure you want to empty the bucket?')){
            setNames([])
            setName('')
            setRandom(null)
          } 
        }}>Empty Bucket</button>
        {names.length > 0 && <p>{variable}s in Bucket: {names.map(name => <span style={{display:'block'}}>{name} <span style={{color: 'red'}} onClick={() => setNames([...names.filter(tname => tname !== name)])}>x</span></span>)}</p>}
      </div>
    </div>
  );
};

export default RandNames;
