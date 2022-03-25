import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile';
import PropTypes from "prop-types"

function App() {
  const handleName = fullName => alert(fullName);
  return (
    <div className="App" style={{margin:"15px 0"}}>
      <Profile 
      handleName = {handleName}
      fullName = "Future Hendrix"
      profession = "Musician"
      bio = 'Future Hendrix (born November 20, 1983), better known by the stage name Future, is an American rapper and singer. Known for his mumble-influenced vocal range and prolific output, Future is considered a pioneer of the use of melodies and vocal effects in modern trap music. Born and raised in Atlanta, Georgia, Future signed a recording contract with A1 Recordings and Epic Records in 2011, and released the albums Pluto (2012) and Honest (2014), which contained the platinum singles "Turn On the Lights", "Honest", "Move That Dope", and "I Won". He achieved major critical and commercial success with DS2 (2015) and its singles "Fuck Up Some Commas" and "Where Ya At", and followed it with Evol (2016) and the lead single "Low Life". Future eponymous fifth album and its successor Hndrxx both 2017) made him the first artist since 2014 to debut two albums in consecutive weeks atop the US Billboard 200; the former contained the international hit singles "Mask Off" and "Used to This". Future prolific output is derived by consistent accompanying solo and collaborative releases to his albums.'
      ><img style={{maxWidth:"100%"}} src='https://wallpapercave.com/dwp2x/wp2155663.jpg'></img>
      </Profile>
    </div>
  );
}

Profile.PropTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
}

export default App;
