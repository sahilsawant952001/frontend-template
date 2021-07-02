import './App.css';
import AuthForm from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch ,Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

function App() {

  const user = useSelector(state => state.user);

  let routes =  <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/auth' component={AuthForm} exact/>
                    <Route path='/not-found' component={NotFound} exact/>
                    <Redirect to='/not-found'/>
                </Switch>

  if(user.token){
    routes =  <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/profile' component={Profile} exact/>
                  <Route path='/not-found' component={NotFound} exact/>
                  <Redirect to='/not-found'/>
              </Switch>
  }

  return (
    <div className="App">
        <Navbar/>
        {routes}
    </div>
  );
}

export default App;
