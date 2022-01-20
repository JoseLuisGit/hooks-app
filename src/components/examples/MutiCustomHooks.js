import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const MutiCustomHooks = () => {

    const state = useFetch(`https://breakingbadapi.com/api/quotes/1`);

    console.log(state);


    return (
        <>
            <h3>MultiCustomHooks</h3>
        </>);
};
