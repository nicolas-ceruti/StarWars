import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/profile/:id' element={ <Profile/> }/>
        </Routes>
      </BrowserRouter>
    );
}
export default App;