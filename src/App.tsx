import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Transactions } from './pages/Transactions';
import './App.css'; // Add this line to include App CSS

function App() {
  return (
    <BrowserRouter>
      <div className="app flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;