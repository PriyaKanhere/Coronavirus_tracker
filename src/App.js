import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState('')

  const getData = async () => {
    const api = "https://disease.sh/v3/covid-19/all"

    const resp = await fetch(api)
    const data = await resp.json()
    console.log(data)
    setData(data)
  }

  function setApiData(e) {
    e.preventDefault()
    setData(getData)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coronavirus Tracker</h1>
        <button onClick={setApiData}>Click for data</button>
        {console.log(data)}
        {data ?
          <div>
            <h5>updated : {data.updated}</h5>
            <h5>cases : {data.cases}</h5>
            <h5>todays cases : {data.todayCases}</h5>
            <h5>Deaths : {data.deaths}</h5>
            <h5>Todays Deaths : {data.todayDeaths}</h5>
          </div>
          :
          <div></div>
        }

      </header>

    </div >
  );
}




export default App;
