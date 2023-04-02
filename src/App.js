import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Layout from './container/Layout/Layout';
import Home from './container/Home/Home';
import Notfound from './container/Error/Notfound';
import List from './container/Car/List';
import Detail from './container/Car/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/car" element={<List />} />
          <Route path="/car/:id" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
