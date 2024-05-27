import { Link } from "react-router-dom/dist";

export function Races() {


    return (
        <>
            <h1>Races</h1>
            <button>
                <Link to="Race">
                    vai alla singola gara
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