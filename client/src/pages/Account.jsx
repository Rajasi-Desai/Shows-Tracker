import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { accountId } = useParams();

    useEffect(() => {
      if (!accountId) {
        console.error("No account_id provided");
        return;
      }

      fetch(`/api/account?account_id=${accountId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch account data");
            }

            return response.json();
        })
        .then((data) => {
            setAccount(data);
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
            <h1>Account</h1>

            <pre>
                {JSON.stringify(account, null, 2)}
            </pre>
        </div>
    );
}

export default Account;