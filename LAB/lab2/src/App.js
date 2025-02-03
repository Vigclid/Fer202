
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponents from './components/NavBarComponents'
import Banner from './components/Banner'
import Oath from './components/Oath';
import WishYunsul from './components/WishYunsul';


function App() {
  return (
    <div className="container-fluid" >
      <NavBarComponents />
      <Banner />
        <Oath />
        <WishYunsul />

    </div>
  );
}

export default App;
