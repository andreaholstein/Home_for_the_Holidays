// ---------- FXNALITY ----------
import { Link } from "react-router-dom";
// --------- COMPONENTS ---------
import Recommendation from "../../components/Recommendation/Recommendation";
import RedoButton from "../../components/RedoButton/RedoButton";
// ----------- STYLES -----------
import "./RecoPage.scss";

// path="/MovieToWatch"
function RecoPage({ movie }) {
  // need props from CategoryPage Buttons!, pass again to Recommendation to use to render out different API obj elements!

  return (
    <>
      <Recommendation movie={movie} />
      <Link to="/ChooseCategory">
        <RedoButton />
      </Link>
    </>
  )
}

export default RecoPage
