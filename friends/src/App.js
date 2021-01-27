import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendList from './components/FriendList';

import Login from './components/Login';
import SignUp from './components/SignUp';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const logout = () => {
        localStorage.removeItem('token'); //Use just these two for logout
        window.location.href =  '/login';
  };
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            {(localStorage.getItem('token') && <Link to='/friendlist'>Friend's List</Link>)}
            {(localStorage.getItem('token') && <Link onClick={logout}>Logout</Link>)}
          </nav>
          <h1>Welcome To My Api Project</h1>
          {/* <FriendList /> */}
        </header>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          <PrivateRoute path='/add-friend' component={AddFriend}/>
          <PrivateRoute path='/friendlist' component={FriendList}/>
          {/* <Route component={Login}/> */}
        </Switch>

      </div>
  </Router>
  );
}

export default App;
