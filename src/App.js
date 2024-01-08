import './App.css';

import Logo from './components/Logo';
import Users from './components/Users';
import UserInfo from './components/UserInfo';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-black from-black to-gray-700 bg-gradient-to-r'>
      <div className='container py-3 '>
        <Logo/>
        
        <>
          <Routes>
            <Route path='/' element={<Users/>}></Route>

            <Route path='/:name' element={<UserInfo/>}></Route>

          </Routes>
        </>
        
      </div>
    </div>
  );
}

export default App;
