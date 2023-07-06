import './App.css';
import Slides from './data/data';
import Calendar from './components/Calendar';
import Video from './components/Video';


function App() {
  return (
    <div className="App">
      <Slides/>
      <Calendar/>

      <Video/>

    </div>
  );
}

export default App;
