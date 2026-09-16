import { useEffect, useState } from "react";
import "./ShowList.css";

const genreNames = {
    10751: "Family",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    16: "Animation",
    18: "Drama",
    35: "Comedy",
    37: "Western",
    80: "Crime",
    9648: "Mystery",
};

function ShowList() {
    const [popular, setPopular] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('/api/popular')
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch account data");
            }

            return response.json();
        })
        .then((data) => {
            setPopular(data);
            setLoading(false);
        })
        .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    
    return (
        <main className="show-list">
            <header className="show-list__header">
                <p className="show-list__eyebrow">TMDB collection</p>
                <h1>Popular TV</h1>
                <p>Find your next series from what viewers are watching now.</p>
            </header>

            <section className="show-grid" aria-label="Popular TV shows">
                {popular.results.map((show) => (
                    <article className="show-card" key={show.id}>
                        {show.poster_path ? (
                            <img
                                className="show-card__poster"
                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                alt={`${show.name} poster`}
                                loading="lazy"
                            />
                        ) : (
                            <div className="show-card__poster show-card__poster--empty" aria-label="No poster available">
                                No poster
                            </div>
                        )}
                        <div className="show-card__content">
                            <div className="show-card__title-row">
                                <h2>{show.name}</h2>
                                <span className="show-card__rating" aria-label={`Rating ${show.vote_average.toFixed(1)} out of 10`}>
                                    {show.vote_average.toFixed(1)}
                                </span>
                            </div>
                            <p className="show-card__meta">
                                {show.first_air_date?.slice(0, 4) || "Unknown year"}
                                {show.origin_country?.length > 0 && `  ·  ${show.origin_country.join(", ")}`}
                            </p>
                            <div className="show-card__genres">
                                {show.genre_ids.slice(0, 2).map((genreId) => (
                                    <span key={genreId}>{genreNames[genreId] || "Other"}</span>
                                ))}
                            </div>
                            <p className="show-card__overview">
                                {show.overview || "No overview is available for this show."}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default ShowList;