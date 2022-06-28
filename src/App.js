import { Route, Routes } from 'react-router-dom';
import AppToolBar from './components/UI/AppToolbar/AppToolbar';
import Register from './containers/Register/Register.js';
import './App.css';
import Login from './containers/Login/Login';

function App() {
  return (
    <>
      <AppToolBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<div>Main</div>} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/account' exact element={<div>Profile</div>} />
          <Route path='/people' exact element={<div>Accounts</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
