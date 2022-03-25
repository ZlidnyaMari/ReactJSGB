import './App.css';
import Routers from './pages/Routers';
import { AuthProvider } from './hooks/AuthProvider';



function App() {
 
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
}

export default App;
