import React from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Course from "./component/Course/Course";

function App() {
	return (
		<BrowserRouter className="App">
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
        <Route path='/course'>
				<Course/>
        </Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
