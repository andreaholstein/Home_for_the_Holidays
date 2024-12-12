// ---------- FXNALITY ----------
// --------- COMPONENTS ---------
// import Header from "../../components/Header"; // will need to make a Header with the art styling
import Recommendation from "../../components/Recommendation/Recommendation";
import RedoButton from "../../components/RedoButton/RedoButton";
// ----------- STYLES -----------
import "./RecoPage.scss";

function HomePage() {

  return (
    <>
      {/* <Header /> */}
      <Recommendation />
      <RedoButton />
    </>
  )
}

export default HomePage
