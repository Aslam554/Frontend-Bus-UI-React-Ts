import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddBusPage from './pages/AddBusPage'; // Import the AddBusPage component
import BusBookings from './pages/BusBookings'
import AddComplaint from './pages/AddComplaint';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here */}
          <Route path="add-bus" element={<AddBusPage />} /> {/* Add the route for AddBusPage */}
          <Route path="bookings" element={<BusBookings />} /> {/* Add the route for AddBusPage */}
          <Route path="complaint" element={<AddComplaint />} /> {/* Add the route for AddBusPage */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
