import { useEffect, useState } from 'react';

export function Routes() {

    const [articles, setArticles] = useState([]);

    function getRoutesAsync() {
       return fetch('http://10.0.46.10:32100/routes')
       .then((response) => response.json())
       .then((responseJson) => {
         setArticles(responseJson);
       })
       .catch((error) => {
         console.error(error);
       });
    }

    useEffect(() => getRoutesAsync, []);

    function Route({row}) {
        return (
            <>
                <h4>{row.FromMetric} to {row.ToGauge}</h4>
            </>
        )
    };

    const listItems = articles.map(row =>  <li key={row.ToGauge}><Route row={row} /></li>);

    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
}
