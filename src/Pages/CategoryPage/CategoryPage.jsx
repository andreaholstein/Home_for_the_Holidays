// ---------- FXNALITY ----------
import { Link } from "react-router-dom";
// --------- COMPONENTS ---------
import RandomButton from "../../components/RandomButton/RandomButton";
// ----------- STYLES -----------
import "./CategoryPage.scss";

function CategoryPage({ handleSubmit }) {

    return (
        <section className="category__page">
            <div className="category__div">
                <img src="src/assets/images/category-image.jpeg" alt="tv screen" className="category__image" />
            </div>
            <Link to="/MovieToWatch" >
                <RandomButton handleSubmit={handleSubmit} />
            </Link>
        </section>
    )
}

export default CategoryPage;
