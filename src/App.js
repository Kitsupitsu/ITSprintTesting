import './App.css';
import React, { useEffect, useState } from 'react';
import Hello from './components/HelloComponent';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

function incrementCounter(num) {
  return { type: 'INCREMENT', num: num };
}

const mapDispatchToProps = {
  incrementCounter
}

function App(props) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("1990-01-01");
  const [submitted, setSubmitted] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleClick() {
    props.incrementCounter(1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{props.count}</p>
        <button onClick={() => handleClick()}>Increment</button>
        {!submitted &&
          <form onSubmit={submit}>
            <p>Insert your name</p>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <p>Insert your birthday</p>
            <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)}/>
            <p>Insert your height on left and weight to right</p>
            <input type="number" value={height || ""} onChange={e => setHeight(parseInt(e.target.value))}/>
            <input type="number" value={weight || ""} onChange={e => setWeight(parseInt(e.target.value))}/>
            <br/>
          </form>
        }
        {submitted && 
          <Hello name={name} birthday={birthday}/>}
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
