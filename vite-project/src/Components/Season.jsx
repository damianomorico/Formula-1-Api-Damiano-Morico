import { Link } from "react-router-dom/dist";

export function Season() {


    return (
        <>
            <h1>Season</h1>
            <button>
                <Link to="Races">
                    vai alle gare
                </Link>
            </button>

            <button>
                <Link to="/">
                    torna alla Home
                </Link>
            </button>
        </>
    )
}