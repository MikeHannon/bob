// import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import averyAndBob2019 from "./static/img/averyAndBob2019.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <img className="App-logo" alt="Avery and Bob" src={averyAndBob2019} />
        
      
      <p> Enjoy the mountains. </p>

      <img src={"https://sepwww.stanford.edu/sep/morgan/images/scenery/yosemite/tresidder/tp21-cathedral-peak-lake-pano.jpg"} className="App-logo" alt="Yosemite" />
      <p> I thought we had more time, but I will never regret the time we had. </p>

      <p> Ann, Jenny, Doug - Much love to all of you.  And thank you, Bob has a huge presence in my life. </p>
      </header>
    </div>
  );
}

export default App;
