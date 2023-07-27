import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies currenciesList={currencies} />
      <Amount />
    </div>
  );
}

export default App;
