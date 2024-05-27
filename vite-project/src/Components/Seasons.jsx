import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist"

export function Seasons() {

    const [seasons, setSeasons] = useState();
    useEffect(() => {
        fetch("https://ergast.com/api/f1/seasons")
            .then((res) => {
                console.log(res)
                setSeasons(res);
            })
    }, [])

    return (

        <>
            <h1> Seasons </h1>

            <button>
                <Link to=":seasonId">
                    vai alla singola stagione
                </Link>
            </button>

            <button>
                <Link to="Home">
                    torna alla Home
                </Link>
            </button>
        </>
    )
}