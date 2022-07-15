import "./QuoteAuthor.css";

function QuoteAuthor(props){
    return(
        <div className="quote-author"> - <span id="author">{props.author}</span></div>
    )
}

export default QuoteAuthor;