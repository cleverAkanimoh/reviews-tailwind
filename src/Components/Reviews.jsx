import { FaQuoteRight, FaStar } from "react-icons/fa";
// import "tailwind.css"

export default function ({ reviews }) {
    return (
        <article className="reviews__container">
            <div className="reviews__div_container">
                <h2 className="reviews__text">our reviews</h2>
                {
                    reviews.map(
                        review => {
                            const { id, quotes, name } = review;

                            return <div className="reviews_boxes" key={id}>
                                <FaQuoteRight className="quote__icon" />
                                <div className="stay__up">
                                    <p className="stay__up_para">{quotes}</p>
                                </div>

                                <div className="stay__down">
                                    <h3 className="stay__down__h3">{name}</h3>
                                    <div>
                                        <FaStar className="star_icon" />
                                        <FaStar className="star_icon" />
                                        <FaStar className="star_icon" />
                                        <FaStar className="star_icon" />
                                        <FaStar className="star_icon" />
                                    </div>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </article>
    )
}