import './App.css';
import { Provider } from 'react-redux';
import { store } from './Api/Store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Main} from './components/Main/Main';
import {Layout} from './components/Layout/Layout';
import {TitlePage} from './components/TitlePage/TitlePage';
import {TypePage} from './components/TypePage/TypePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path='title/:id' element={<TitlePage/>}/> 
              <Route path='page/:type' element={<TypePage/>}/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='register' element={<RegisterPage/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
