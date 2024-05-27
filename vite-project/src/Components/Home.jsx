import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

export function Home() {


    return (
        <>
            <h1>Home</h1>
            <button>
                <Link to="seasons">
                    vai alle stagioni
                </Link>
            </button>
        </>
    )
}