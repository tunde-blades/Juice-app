import {BrowserRouter} from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'


function App() {
  return (
    <BrowserRouter className="App">
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
