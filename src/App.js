import './App.css';
import Slides from './components/Slides';
import Calendar from './components/Calendar';
import Video from './components/Video';
import Activities from './components/Activities';


function App() {
  return (
    <div className="App">
      <Slides/>
      <Calendar/>
      <Video/>
      <Activities/>

    </div>
  );
}

export default App;
