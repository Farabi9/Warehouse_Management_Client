
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider,  } from "firebase/auth";

const auth = getAuth(app);

function App() {
 
  return (
    <div className="App">
        <button >
          Google Sign In
          </button>    
    </div>
  );
}

export default App;
