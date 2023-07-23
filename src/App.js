import './App.css';
import Slides from './components/Slides';
import Calendar from './components/Calendar';
import Video from './components/Video';
import Activities from './components/Activities';
import SimpleSlider from './components/SimpleSlider';

function App() {
  return (
    <div className="App">
      <Slides/>
      <Calendar/>
      <Video/>
      <Activities/>
      <SimpleSlider/>

    </div>
  );
}

export default App;
