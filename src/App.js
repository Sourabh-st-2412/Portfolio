import logo from './logo.svg';
import './App.css';
import Home from './Screen/Home/Home';
import {Route,Routes} from 'react-router-dom';
import ProjectDetail from './Screen/ProjectDetail/PrjDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
