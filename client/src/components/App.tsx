import { Navigation } from './navigation/navigation';
import { Header } from './header/header';
import Dashboard from '../pages/dashboard/dashboard';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='page-container'>
        <Dashboard />
      </div>
      <Navigation />
    </>
  )
}

export default App;
