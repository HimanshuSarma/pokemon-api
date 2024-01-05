import React, { useState, useEffect } from 'react';
import axios from 'axios';


const usePostResource = async (endpoint, body) => {

    const [resource, setResource] = useState();

    useEffect(() => {
        (async () => {
            const res = await axios.post(`http://localhost:8080/${endpoint}`, body);
            if (res?.status === 200) {
                setResource(res?.data);
            }
        })();
    }, []);

    return {
        resource
    };
}

export default usePostResource;