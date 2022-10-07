import { useEffect, useState } from 'react';
import Card from './Card';
import './HomePage.css';

export default function HomePage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges")
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
                <h1 className='Title'>Exchanges acceptant le Dogecoin</h1>
                <ul className="Cards__container">
                    {items.map(item => (
                        <Card id={item.id} name={item.name} adjusted_volume_24h_share={item.adjusted_volume_24h_share} />
                    ))}
                </ul>
            </main>
        )
    }


}