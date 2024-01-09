import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API } from '../API/api.config';

const useGetResource = (baseUrl, pokemon) => {

    const [resource, setResource] = useState();


    useEffect(() => {
        if (pokemon) {
            (async () => {
                try {
                    const res = await axios.get(`${baseUrl || API.hostUrl}/${pokemon}`);
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