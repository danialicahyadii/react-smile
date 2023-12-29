import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Learning from './components/Learning';
import Hook from './components/Hook';
import Check from './components/Check';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello name='Dani Ali Cahyadi' weight="20gm"/>
        <Hello name='Gilang Akbar Panggulu' weight="120gm"/>
        <Hello name='Ruth Alfonsina Worabay Tanjung' weight="50gm"/> */}
        <Learning/>
        <Hook/>
        <Check/>
        <Learning/>
      </header>
    </div>
  );
}

export default App;
