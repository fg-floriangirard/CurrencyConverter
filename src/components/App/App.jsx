import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies />
      <div>Amount</div>
    </div>
  );
}

export default App;
