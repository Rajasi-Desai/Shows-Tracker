import { useEffect, useState } from "react";

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
        <div>
            <h1>Popular TV</h1>

            <pre>
                {JSON.stringify(popular, null, 2)}
            </pre>
        </div>
    );
}

export default ShowList;