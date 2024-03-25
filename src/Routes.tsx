import { useEffect, useState } from 'react';

export function Routes({routes}) {

    function Route({row}) {
        return (
            <>
                <h4>{row.FromMetric} to {row.ToGauge}</h4>
            </>
        )
    };

    const listItems = routes.map(row =>  <li key={row.Id}><Route row={row} /></li>);

    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
}
