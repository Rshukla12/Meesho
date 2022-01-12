import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import store from './Redux/store';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <AllRoutes/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
