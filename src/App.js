import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Product_detail } from './Pages/Product_detail';
import { Otp } from './Pages/Otp';
import {SignUp } from './Pages/SignUp';
import Home from './Pages/home';
import store from './Redux/store';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       {/* <SignUp/>
      <Otp/> 
      <Product_detail/> */}
      <BrowserRouter>
        <Provider store={store}>
          <AllRoutes/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
