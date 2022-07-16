import "./QuoteText.css";

function QuoteText(props){
    return(
        <div className="quote-text" style={{color : props.randomColor}}>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            <span id="text">{props.quote}</span>
        </div>
    )
}

export default QuoteText;