//import logo from './logo.svg';
//import './App.css';
import "./../Home/Home.css";
import React,{Component} from 'react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import Main from './Main';
export class Home extends Component {
	render() {
	  
	  return (
		<Provider store={store}> 
		<div className="">
		<Main></Main>
		</div>
		</Provider>
	  );
	}
  }

  export default Home;
