import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/main';
import { IndividualView } from './pages/individualView';

function App() {
  return (
    <BrowserRouter>
      {/* Para autentificacion o envolver estados */}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/individual' element={<IndividualView />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
