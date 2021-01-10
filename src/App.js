import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'

import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'


function App() {
  return (

    <Router>
      <div className="App">
        <Route exact path='/' component={Dashboard}></Route>
        
        <Route path='/details/:id' component={MovieDetails}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
