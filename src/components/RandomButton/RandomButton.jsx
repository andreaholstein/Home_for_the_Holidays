// ---------- FXNALITY ----------
// --------- COMPONENTS ---------
// ----------- STYLES -----------
import "./RandomButton.scss";

// WORKS!

function RandomButton({ handleSubmit }) {

    return (
        <>
            <button className="random-button button" onClick={() => { handleSubmit }}>Surprise Me!
            </button >
        </>
    )
}

export default RandomButton