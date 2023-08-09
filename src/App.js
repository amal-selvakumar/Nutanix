import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import AppRouting from './Components/Routing/AppRouting';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className='sub-app'>
      <Navbar></Navbar>
      <AppRouting></AppRouting>
      </div>
    </div>
  );
}

export default App;
