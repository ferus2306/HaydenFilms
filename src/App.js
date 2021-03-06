import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'

import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
// import DataContextProvider from './assets/contexts/DataContext';


function App() {
  return (

    <Router>
      <Switch>
      <div className="App">
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/details/' component={MovieDetails}></Route>
        <Footer />
        </div>
        </Switch>
    </Router>
  );
}

export default App;
