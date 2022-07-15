import QuoteText from './components/QuoteText';
import QuoteAuthor from './components/QuoteAuthor';
import QuoteButtons from './components/QuoteButtons';
import { useState } from 'react';
import './App.css';

function App() {

  const [idQuote, setIdQuote] = useState(0);

  const listQuotes = [
    {
      quoteId: "1",
      quoteText: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      quoteAuthor: "Bob Dylan",
      quoteColor: "Aquamarine"
    },
    {
      quoteId: "2",
      quoteText: "Life is what happens to you while you’re busy making other plans.",
      quoteAuthor: "John Lennon",
      quoteColor: "BlueViolet"
    },
    {
      quoteId: "3",
      quoteText: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      quoteAuthor: "Mark Twain",
      quoteColor: "BlanchedAlmond"
    }
  ]

  const getRandomQuote = () =>{
    const randomNumber = Math.floor(Math.random()*(listQuotes.length));
    setIdQuote(randomNumber);
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <QuoteText quote={listQuotes[idQuote].quoteText}/>
        <QuoteAuthor author={listQuotes[idQuote].quoteAuthor} />
        <QuoteButtons onClickHandler={getRandomQuote}/>
      </div>
    </div>
  );
}

export default App;
