import Home from "./components/homePage";
import UpComingShow from './components/upcmingshow/upComingShow';
import UsrReview from "./components/review/usrReview";

function App() {
  return (
    <div className="App">
      <Home/>
      <UpComingShow/>
      <UsrReview/>
    </div>
  );
}

export default App;
