import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ExchangePage.css';
import { Link } from "react-router-dom";

export default function ExchangePage() {
    const { exchangeId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/exchanges/" + exchangeId)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <main>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff">
                        <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path>
                    </svg>
                </Link>
                <h1 className='Title'>Exchange {items.name} </h1>
                <details>
                    <summary>Description</summary>
                    <p>{items.description}</p>
                </details>
                {items.fiats != "" ?
                    <div>
                        <h2>Fiat.s accepté.s</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.fiats.map(fiat => (
                                    <tr>
                                        <td>{fiat.symbol}</td>
                                        <td>{fiat.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    :
                    <div>
                        <h2>Aucun fiat n'est accepté</h2>
                    </div>
                }
            </main>
        )
    }
}