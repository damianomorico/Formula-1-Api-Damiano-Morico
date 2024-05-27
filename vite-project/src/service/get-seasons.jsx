import { useEffect, useState } from "react";

export function getAllSeasons() {
    const [seasons, getSeasons] = useState();
    const [seasonsLoading, setSeasonsLoading] = useState(false);
    const [errorSeasons, setErrorSeasons] = useState();

    useEffect(() => {
        setSeasonsLoading(true);
        fetch("http://ergast.com/api/f1/seasons.json")
            .then((response) => response.json())
            .then(res => {
                setSeasonsLoading(res['MRData']["SeasonTable"]['Seasons'])
                setSeasonsLoading(false)
            }
            )
            .catch(err => {
                setErrorSeasons(err)
                setSeasonsLoading(false)
            })
    }, [])
    return [seasonsLoading, seasons, errorSeasons]
}