import { Route, Routes } from 'react-router-dom';
import AppToolBar from './components/UI/AppToolbar/AppToolbar';
import Register from './containers/Register/Register.js';
import './App.css';
import Login from './containers/Login/Login';
import Account from './containers/Account/Account';
import AccountEdit from './containers/AccountEdit/AccountEdit';
import People from './containers/People/People';

function App() {
  return (
    <>
      <AppToolBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<div>Main</div>} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/account' exact element={<Account />} />
          <Route path='/account/edit' exact element={<AccountEdit />} />
          <Route path='/people' exact element={<People />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
