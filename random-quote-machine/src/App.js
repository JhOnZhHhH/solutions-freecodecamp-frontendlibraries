import QuoteText from "./components/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor";
import QuoteButtons from "./components/QuoteButtons";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    quotes: [],
    isFetching: true,
    idQuote: 0,
    color: "#0000ff"
  });

  const URL_QUOTES =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  useEffect(() => {
    const fetchQuotesWithFetchApi = () => {
      setData(d => {return { ...d, isFetching: true }});
      fetch(URL_QUOTES)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData(d => {return { ...d, quotes: result.quotes, isFetching: false }});
        })
        .catch((e) => console.log(e));
    };
    fetchQuotesWithFetchApi();
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * data.quotes.length);
    const randomColor = getRandomColor();
    document.querySelector("body").style.backgroundColor = randomColor;
    setData({ ...data, idQuote: randomNumber, color: randomColor});
    
  };

  if (data.isFetching) {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <p>..isFetching</p>
        </div>
      </div>
    );
  }

  return (
    <div id="container-box">
      <div id="wrapper">
        <div id="quote-box">
          <QuoteText quote={data.quotes[data.idQuote].quote} randomColor={data.color}/>
          <QuoteAuthor author={data.quotes[data.idQuote].author} randomColor={data.color}/>
          <QuoteButtons onClickHandler={getRandomQuote} randomColor={data.color} quote={data.quotes[data.idQuote].quote}/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
