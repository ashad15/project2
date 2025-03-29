const Card = ({title, description, image, selected, onClick}) => {
    return (
        <div className={`card ${selected ? "card--selected": ""}`} onClick={onClick}>
            <div className="card__content">
                <div className="card__image">
                    <img src={image} alt={title} />
                </div>
                <div className="card__title">{title}</div>
                <div className="card__description">{description}</div>
            </div>
            <div className="card__radio">
                <div className={`radio-button ${selected ? "radio-button--active" : ""}`}></div>
            </div>
        </div>
    )
}

export default Card;