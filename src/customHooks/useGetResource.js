import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useGetResource = async (endpoint, setGroceries) => {

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:8080/${endpoint}`);
            if (res?.status === 200) {
                setGroceries(res?.data?.payload);
            }
        })();
    }, []);

    return {};
}

export default useGetResource;