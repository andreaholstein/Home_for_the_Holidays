// ---------- FXNALITY ----------
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// --------- COMPONENTS ---------
import RandomButton from "../../components/RandomButton/RandomButton";
// top part of mockup title and image - or render in-page?
// buttons with API Logic!
// ----------- STYLES -----------
import "./CategoryPage.scss";

function CategoryPage({ handleSubmit }) {

    return (
        <>
            <Link to="/MovieToWatch" >
                <RandomButton handleSubmit={handleSubmit} />
            </Link>
        </>
    )
}

export default CategoryPage
