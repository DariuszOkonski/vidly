import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import RegisterForm from './components/common/registerForm';
import LoginForm from './components/common/loginForm';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Movies from './components/movies';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
