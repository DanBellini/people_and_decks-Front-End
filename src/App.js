import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/screens/View';
import Signin from './components/pages/Signin.page';
import Signup from './components/pages/Signup.page';
import './assets/styles/reset.css';
import './assets/styles/style.css';

function App() {
  return (
    <Router>
      <View>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </View>
    </Router>
  );
}

export default App;
