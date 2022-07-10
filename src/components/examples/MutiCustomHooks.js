import React from 'react';
import { useCounterHooks, useFetch } from '../../hooks';
import { Quote } from './Quote';
import { LoadingQuote } from './LoadingQuote';

export const MutiCustomHooks = () => {

    const { state, increment } = useCounterHooks(1);
 
    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${state}`);

    const {quote, author} = !!data && data[0];


    return (
        <>
            <h3>BreakingBad Notes</h3>
            {
                loading
                ?
                 <LoadingQuote />
                :
                <Quote quote={quote} author={author} />

            }
            <button className='btn btn-success' disabled={loading} onClick={ increment }>
                Next
            </button>

        </>);
};
