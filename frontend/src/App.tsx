import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddBusPage from './pages/AddBusPage'; // Import the AddBusPage component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here */}
          <Route path="add-bus" element={<AddBusPage />} /> {/* Add the route for AddBusPage */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
