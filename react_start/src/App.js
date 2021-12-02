import Icon from './Icon';
import './App.css';
import {NavBar, Body, Background} from './components';

function App() {
	return (    
		<div className="App">
			<Background />
			<NavBar />
			<Body />
			<Icon name="Ayush"/>
		</div>
	);
}

export default App;
