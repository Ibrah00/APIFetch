import logo from './logo.svg';
import './App.css';
import YoutubeSearch from './components/YoutubeSearch';
import Search from './components/Search';
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <div >
        <Nav/>
        <Switch>
            <Route path="/youtubesearch" component={YoutubeSearch} />
            <Route path="/search" component={Search}/>
        </Switch>
      </div>
    </div>
    
    </Router>
   
  );
}

export default App;
