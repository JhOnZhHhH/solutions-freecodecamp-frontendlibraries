import "./QuoteButtons.css";

function QuoteButtons(props){

    const stylesButtons = {
        backgroundColor : props.randomColor, 
        borderColor : props.randomColor
    }

    const URL_TWITTER= `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.quote}`;

    return(
        <div className="buttons row">
            <div className="col-6">
                <button type="button" className="btn btn-primary" style={stylesButtons}><a href={URL_TWITTER} id="tweet-quote" target="_blank" rel="noreferrer noopener"><i className="fa fa-twitter"></i></a></button>
                <button type="button" className="btn btn-primary" style={stylesButtons}><i className="fa fa-tumblr"></i></button>
            </div>
            <div className="col-6" id="div-new-quote">
                <button type="button" className="btn btn-primary" style={stylesButtons} id="new-quote" onClick={props.onClickHandler}>New Quote</button>
            </div>    
        </div>
    )
}

export default QuoteButtons;