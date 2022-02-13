
import './App.css';
import Message from './Message.js';

const name = 'Anna';

function App() {

  return (
    <div className="App-header">
        <Message myName = {name} />
    </div>
  );
}

export default App;
