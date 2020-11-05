
import './App.css';
import MyPhoto from './component/profil/ProfilPhoto';
import MyName from './component/profil/FullName';
import MyAdress from './component/profil/Adress';

function App() {
  return (
    <div className='app' >
      <MyPhoto />
      <MyName />
      <MyAdress />
    </div>
  );
}

export default App;
