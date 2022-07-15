import "./QuoteButtons.css";

function QuoteButtons(props){
    return(
        <div className="buttons row">
            <div className="col-6">
                <button type="button" className="btn btn-primary"><i className="fa fa-twitter"></i></button>
                <button type="button" className="btn btn-primary"><i className="fa fa-tumblr"></i></button>
            </div>
            <div className="col-6" id="div-new-quote">
                <button type="button" className="btn btn-primary" id="btn-new-quote" onClick={props.onClickHandler}>New Quote</button>
            </div>    
        </div>
    )
}

export default QuoteButtons;