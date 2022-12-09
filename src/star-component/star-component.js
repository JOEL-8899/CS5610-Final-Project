import "./startComponent.css"

const StarComponent = ({disabled  , rating }) =>{

    const starRatingVal = (clickedStar) =>{
        // return the corresponding rating given by the user
        //use state to keep track of data and update accordingly... use
        rating = clickedStar;
    }
    return(
                <div className="d-flex align-items-center justify-content-center">
                    <div className="row justify-content-center">
                        <div className="rating-wrapper align-self-center border-5 d-inline-flex pt-2 pe-3 " dir="rtl">
                            <input type="radio" id="5-star-rating"  name="star-rating"
                                  className="h-100 w-100 d-none" disabled={disabled} onChange={() => starRatingVal(5)}
                            checked={rating == 5}/>
                                <label htmlFor="5-star-rating" className="star-rating d-inline-flex  pt-4 ps-2" role="button">
                                    <i className="fas fa-star d-inline-block"  ></i>
                                </label>
                                <input type="radio" id="4-star-rating" checked={rating == 4} name="star-rating" disabled={disabled} onChange={() => starRatingVal(4)} className="h-100 w-100 d-none"/>
                                    <label htmlFor="4-star-rating"
                                            className="star-rating star  d-inline-flex  pt-4 ps-2" role="button">
                                        <i className="fas fa-star d-inline-block"  ></i>
                                    </label>
                                    <input type="radio" id="3-star-rating"
                                           checked={rating == 3} disabled={disabled} onChange={() => starRatingVal(3)} name="star-rating"  className="h-100 w-100 d-none"/>
                                        <label htmlFor="3-star-rating" className="star-rating star  d-inline-flex  pt-4 ps-2" role="button">
                                            <i className="fas fa-star d-inline-block" ></i>
                                        </label>
                                        <input type="radio" id="2-star-rating"
                                               checked={rating == 2} disabled={disabled} onChange={() => starRatingVal(2)} name="star-rating"  className="h-100 w-100 d-none"/>
                                            <label htmlFor="2-star-rating" className="star-rating star  d-inline-flex  pt-4 ps-2" role="button">
                                                <i className="fas fa-star d-inline-block" ></i>
                                            </label>
                                            <input type="radio" id="1-star-rating"
                                                   checked={rating == 1} disabled={disabled} onChange={() => starRatingVal(1)} name="star-rating"  className="h-100 w-100 d-none"/>
                                                    <label htmlFor="1-star-rating" className="star-rating star d-inline-flex pt-4 ps-2"
                                                       role="button">
                                                    <i className="fas fa-star d-inline-block" ></i>
                                                </label>
                        </div>
                    </div>
                </div>
    );
}

export default StarComponent;