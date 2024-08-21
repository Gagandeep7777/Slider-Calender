import './App.css';
import CalendarNew1 from './calender';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
function App() {
  return (
  <div className='flex'>
  <ImageSlider slides={SliderData} />
  <CalendarNew1/>
  </div>

  )
}

export default App;
