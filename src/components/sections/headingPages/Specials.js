import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.png';
import Bruschetta from '../../../assets/food/bruschetta.png';
import LemonDessert from '../../../assets/food/lemon-dessert.png';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <div> <h1>This weeks specials</h1></div>
               
                <button className="action-button" href={require('../../../assets/menu.jpg')} target="_blank" rel="noreferrer">Online Menu</button>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}