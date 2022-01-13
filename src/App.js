import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const names = {
  suffix: {
    animal:
    [
    "bear",
    "panda",
    "bee",
    "fly",
    "lion",
    "spider",
    "monkey",
    "worm",
    "roach",
    "bird",
    "camel",
    "alpaca",
    "sheep",
    "dog",
    "cat",
    "mouse"
    ],
    object:
    [
    "book",
    "paper",
    "clip",
    "boat",
    "phone",
    "pin",
    "thunder",
    "bottle",
    "charger",
    "shoe"
    ],
    building:
    [
    "house",
    "shop",
    "club",
    "road",
    "point",
    "villa",
    "garage",
    "post"
    ],
    food:
    [
    "cookie",
    "juice",
    "lemon",
    "lime",
    "melon",
    "fig",
    "bites",
    "candy",
    "cream",
    "fry",
    "burrito"
    ],
    phrase:
    [
    "chat",
    "gram",
    "ly",
    "soft",
    "y",
    "i",
    "fy",
    "z",
    "crush",
    "smash",
    "straw"
    ],
  },
}

function App() {
  const [keyword, setKeyword] = useState('banner')
  const [bizNames, setNames] = useState([])

  const defaultFind = async () => {
    // e.preventDefault()
    let suffixNames = []
    Object.keys(names.suffix).map((keyName, keyIndex) => {
      if(keyName === "phrase") return names.suffix[keyName].map(i => suffixNames.push(keyword + i)) 
      else return names.suffix[keyName].map(i => suffixNames.push(keyword + ' ' + i)) 
    })
    console.log('@@@@@@@@@@@@@', suffixNames);
    setNames(shuffle(suffixNames))
  }

  const find = async (e) => {
    e.preventDefault()
    if(!keyword) return
    let suffixNames = []
    Object.keys(names.suffix).map((keyName, keyIndex) => {
      if(keyName === "phrase") return names.suffix[keyName].map(i => suffixNames.push(keyword + i)) 
      else return names.suffix[keyName].map(i => suffixNames.push(keyword + ' ' + i)) 
    })
    console.log('@@@@@@@@@@@@@', suffixNames);
    setNames(shuffle(suffixNames))
  }

  useEffect(() => {
    defaultFind()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="brand">Bizly</h1>
        <p className="desc">Name your buisness</p>
      </header>

      <form className="card" onSubmit={find}>
        <label className="input">Enter one keyword for your business</label>
        <input className="input__field" type="text" placeholder="Enter one keyword of your business" onChange={(e) => setKeyword(e.target.value)} value={keyword}/>
        <button type="submit">Find Names</button>
      </form>

      {bizNames?.length > 0 &&      
      <div className="bizNames">
        <h1>Results</h1>
        {bizNames?.map(bizName => (
          <div className="bizName"><span className="name">{bizName}</span><span className="links"><span><a href={`https://www.google.com/search?q=${bizName}`} target="_blank" rel="noreferrer">Search Google</a></span><span><a href={`https://www.namecheap.com/domains/registration/results/?utm_source=CJ&utm_medium=Affiliate&utm_campaign=100530391&ref=cj&affnetwork=cj&cjevent=e6808f56489d11ec816bca140a180513&domain=${bizName}`} target="_blank" rel="noreferrer">Find Domain</a></span><span><a href={`https://looka.com/onboarding?company_name=${bizName}`} target="_blank" rel="noreferrer">Design Logo</a></span></span></div>
          ))}
          </div>
      }
      {/* <label for="type">Choose a Type:</label>
      <select name="type" id="type">
        <option value="ONE_WORD">One word (Stripe, Bloby)</option>
        <option value="saab">Animal (FoodPanda, BannerBear)</option>
        <option value="mercedes"></option>
        <option value="audi">Audi</option>
      </select> */}

    </div>
  );
}

export default App;
