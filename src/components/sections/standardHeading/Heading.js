import HeroImage from '../../../assets/food/food2.png';
export default function Heading({text}) {
    return (
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="confirmation-header-text">
                <h1>{text}</h1>
            </div>
        </header>
    );
}