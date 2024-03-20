import { useEffect, useState } from 'react';

export function Articles() {

    const [articles, setArticles] = useState([]);

    function getArticlesAsync() {
       return fetch('https://wellington.gen.nz/json')
       .then((response) => response.json())
       .then((responseJson) => {
         setArticles(responseJson)
       })
       .catch((error) => {
         console.error(error);
       });
    }

    useEffect(() => getArticlesAsync, []);

    function Article({row}) {
        return (
            <li key={row.id}>
                <h4>{row.headline}</h4>
                <p>{row.description}</p>
            </li>
        )
    };

    return (
        <>
        <ul>
        {articles.map((row) => (
            <Article row={row} />
        ))}
        </ul>
        </>
    )
}
