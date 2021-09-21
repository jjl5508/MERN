import './App.css';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import Pets from './views/Pets';
import EditPet from './views/EditPet';
import NewPet from './views/NewPet';
import Pet from './views/Pet';

function App() {
  return (
    <div className="App">
      <header style={{marginBottom: 20}}>

      </header>

      <Switch>
        <Redirect exact from="/" to="/pets" />

        <Route exact path="/pets">
          <Pets />
        </Route>

        <Route exact path="/pets/new">
          <NewPet />
        </Route>

        <Route exact path= "/pets/:id">
          <Pet />
        </Route>

        <Route exact path="/pets/:id/edit">
          <EditPet />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
