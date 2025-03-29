import Image from 'next/image';
const image = require('../assets/SignUpCardImage.svg');

const Card = ({title, description, imagesrc, selected, onClick}) => {
    console.log("Hello there!" + imagesrc);
    // const image = require(imagesrc);
    return (
        <div className={`card ${selected ? "card--selected": ""}`} onClick={onClick}>
            <div className="card__content">
                <div className="card__image">
                    <Image src={image} alt={title} width={200} height={200}/>
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