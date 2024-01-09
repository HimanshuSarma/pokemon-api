import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetResource = (pokemon) => {

    const [resource, setResource] = useState();


    useEffect(() => {
        if (pokemon) {
            (async () => {
                try {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                    if (res?.status === 200) {
                        setResource(res?.data);
                    }
                } catch (err) {
                    alert(`${err?.message || `Some error occured`}`)
                    setResource()
                }
                
            })();
        }
        
    }, [pokemon]);

    console.log(resource, 'resource')

    return {
        resource
    };
}

export default useGetResource;