// ---------- FXNALITY ----------
import { Link } from "react-router-dom";
// --------- COMPONENTS ---------
import Recommendation from "../../components/Recommendation/Recommendation";
import RedoButton from "../../components/RedoButton/RedoButton";
// ----------- STYLES -----------
import "./RecoPage.scss";

function RecoPage({ movie }) {

  return (
    <section className="reco__page">
      <Recommendation movie={movie} />
      <Link to="/ChooseCategory">
        <RedoButton />
      </Link>
    </section>
  );
}

export default RecoPage;
