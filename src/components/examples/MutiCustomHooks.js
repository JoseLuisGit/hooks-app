import React, { useEffect } from 'react';
import { useCounterHooks } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

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
                   <div className='alert alert-success'>
                      Loading...
                   </div>
                :

                    <blockquote className='blockquote text-end'>
                        <p>{ quote }</p>
                        <footer className='blockquote-footer'>
                            { author }
                        </footer>
                    </blockquote>

            }

            <button className='btn btn-success' onClick={ increment }>
                Next
            </button>

        </>);
};
