import React, { useEffect, useState } from 'react';

import axios from 'axios';

import GenericForm from '../Forms/GenericForm';
import useGetResource from '../customHooks/useGetResource';
import PokemonCard from './PokemonCard';

// divyansh@dezyit.com
// prasad@dezyit.com
// haris@dezyit.com

const Pokemon = () => {

    // state varibales start...
    const [formState, setFormState] = useState({
        pokemon: {
            type: 'text',
            name: 'pokemon',
            value: '',
            placeholder: 'Enter you pokemon',
            id: 1
        }
    });

    const [debounceResourceVal, setDebounceResourceVal] = useState('');

    const [timerId, setTimerId] = useState(null);

    // const [localData, setLocalData] = useState({
    //     pokemon: null
    // })
    // state varibales start...

    // custom hooks...
    const { resource } = useGetResource(debounceResourceVal);
    // custom hooks...

    // handlers...
    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        console.log(value, name);

        setFormState(formState => {
            return {
                ...formState,
                [name]: {
                    ...formState[name],
                    value
                }
            }
        })
    }


    // onSubmitHandler...
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('submitted');
    }
    // handlers...


    // effects...
    useEffect(() => {
        if (formState?.pokemon?.value) {
            clearTimeout(timerId);
            const timerIdTemp = setTimeout(() => {
                // (async () => {
                //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formState?.pokemon?.value}`);
                //     console.log('res', res);
                //     if (res?.status === 200) {
                //         // setLocalData(res?.data?.payload);
                //     }
                // })();

                setDebounceResourceVal(formState?.pokemon?.value)
    
            }, 1000);
    
            setTimerId(timerIdTemp);
        }
    }, [formState?.pokemon?.value]);
    // effects...

    console.log(resource, 'resource');

    return (
        <>
            <GenericForm 
                onSubmitHandler={onSubmitHandler}
            >
                <input
                    value={formState?.pokemon?.value}
                    name={formState?.pokemon?.name}
                    onChange={onChangeHandler}
                    placeholder={formState?.pokemon?.placeholder}
                />

                {/* <button>
                    Submit
                </button> */}
            </GenericForm>

            
            <PokemonCard
                resource={resource}
            />
        </>
    )
}

export default Pokemon