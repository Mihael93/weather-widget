import './App.css';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loader/Loader';
import Widget from './components/Widget';


function App() {
   return (
      <div className="App">
         <h3 className='title'>Title here</h3>
         <div className='title-wrapper'>
            <MyInput />
            <MyButton>Search</MyButton>
         </div>
         <Widget />
         {/* <Loader /> */}
      </div>
   );
};

export default App;
