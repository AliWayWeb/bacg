import { Route, Switch } from 'react-router-dom';
import Login from '../src/components/login';
import './App.css';
import Registr from './components/registr';
import Main from './components/main';
import Prava from './components/prava';
import Jaloba from './components/jaloba';
import Evidence from './components/evidence';
import DonateMap from './components/mapDonate';
import UpMap from './components/map_Up';
import Rating from './components/rating';
import About from './components/aboutUs';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/registr">
          <Registr/>
        </Route>
        <Route path="/main">
          <Main/>
        </Route>
        <Route path="/prava">
          <Prava/>
        </Route>
        <Route path="/jaloba">
          <Jaloba/>
        </Route>
        <Route path="/evidence">
          <Evidence/>
        </Route>
        <Route path="/map">
          <DonateMap/>
        </Route>
        <Route path="/upsity">
          <UpMap/>
        </Route>
        <Route path="/rating">
          <Rating/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
