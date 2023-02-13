import logo from './logo.svg';
import './App.css';

function App() {

  let data = [
    {
      region: "US",
      model: "A",
      sales: 150
    },
    {
      region: "US",
      model: "B",
      sales: 120
    },
    {
      region: "US",
      model: "C",
      sales: 350
    },
    {
      region: "EU",
      model: "A",
      sales: 200
    },
    {
      region: "EU",
      model: "B",
      sales: 100
    },
    {
      region: "EU",
      model: "C",
      sales: 250
    },
    {
      region: "CA",
      model: "A",
      sales: 200
    },
    {
      region: "CA",
      model: "B",
      sales: 100
    },
    {
      region: "CA",
      model: "C",
      sales: 230
    },
    {
      region: "CA",
      model: "D",
      sales: 400
    }
  ]

  let result = []

  for (let index = 0; index < data.length; index++){
    let currentRegion = data[index].region
    result.push({
      region: currentRegion,
      model: 'sum',
      sales: 0
    })
    if (index != 0) index--
    let currentSumIndex = result.length - 1
    while (index < data.length && data[index].region === currentRegion){
      result.push(data[index])
      result[currentSumIndex].sales = result[currentSumIndex].sales + data[index].sales
      index++
    }

  }

  return (
    <div className="App">
      <table className='salestable'>
        <tbody>
          <tr>
            <th>region</th>
            <th>model</th>
            <th>sales</th>
          </tr>
          {result.map((entry, index) => {
            return <tr key = {index}>
              <td>{entry.region}</td>
              <td>{entry.model}</td>
              <td>{entry.sales}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
