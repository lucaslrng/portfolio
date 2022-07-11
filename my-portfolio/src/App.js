import './App.css';
import { MyNavBar } from './components/Navbar';
import { MyBanner } from './components/Banner'
import { MyProjetcs } from './components/Projects';
import { MyContact } from './components/Contact';
import { MySkills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyBanner />
      <MySkills />
      <MyProjetcs />
      <MyContact />
    </div>
  );
}

export default App;