// import logo from './logo.svg';
import './App.css';
import Ex2_1 from './components/ex2.1/ex2.1';
import Ex2_2 from './components/ex2.2/ex2.2';
import Ex3_1 from './components/ex3.1/box1';
import Ex3_2 from './components/ex3.2/Quiz';
import Buttons from './components/ex4.1/button';
import Card from './components/ex4.2/card';
import img1 from './components/ex4.2/Romantic-Love.jpg';

function App() {
  return (
    <div>
        {/*<Ex2_1 /><br/>*/}
        {/*<Ex2_2 />*/}
        {/*<Ex3_1 />*/}
        {/*<Ex3_2 />*/}
        {/*<Buttons name={"important"} fontWeight={"bold"} /> /!*4.2*!/*/}
        {/*<Buttons name={"not important"} fontWeight={"normal"} />/!*4.2*!/*/}
        <Card img={img1}/>
    </div>
  );
}

export default App;
