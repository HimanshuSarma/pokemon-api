import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useGetResource from '../customHooks/useGetResource';
import usePostResource from '../customHooks/usePostResource';

const Inventory = () => {

    // state variables start...
    const [groceries, setGroceries] = useState([]);
    const [formState, setFormState] = useState({
        newGroceryItem: {
            name: ''
        }
    });
    const [uiState, setUIState] = useState({
        newGroceryItem: {
            showInput: false
        }
    });
    // state variables end...

    
    // handlers start...
    // clear state handlers start...
    const clearGroceryStateHandler = () => {
        setUIState(uiState => {
            return {
                ...uiState,
                newGroceryItem: {
                    ...uiState,
                    showInput: false
                }
            }
        });

        setFormState(formState => {
            return {
                ...formState,
                newGroceryItem: {
                    ...formState?.newGroceryItem,
                    name: ''
                }
            }
        })
    }
    // clear state handlers end...

    const onSubmitHandler = async (e) => {
        e?.preventDefault();
        const payload = formState?.newGroceryItem;

        const res = await axios.post(`http://localhost:8080/grocery/single`, payload);
        if (res?.status === 200) {
            setGroceries(groceries => {
                return [
                    ...groceries,
                    res?.data?.payload
                ]
            });

            clearGroceryStateHandler();
        }


        alert(res?.data?.message);
    }
    // handlers end...


    // custom hooks start...
    const {} = useGetResource(`grocery/all`, setGroceries);
    // custom hooks end...

    return (
        <div>
            <h2>
                Inventory
            </h2>

            {groceries?.length > 0 ? <div>
                {groceries?.map((grocery, groceryIdx) => {
                    return (
                        <React.Fragment key={grocery?._id}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                <p>{groceryIdx + 1}.</p>
                                <p>{grocery?.name}</p>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div> : null}

            {!uiState?.newGroceryItem?.showInput ? (
                <button
                    onClick={() => {
                        setUIState(uiState => {
                            return {
                                ...uiState,
                                newGroceryItem: {
                                    ...uiState?.newGroceryItem,
                                    showInput: true
                                }
                            }
                        })
                    }}
                >
                    Add Item
                </button>
            )  : (
                null
            )}

            {uiState?.newGroceryItem?.showInput ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <form 
                            onSubmit={onSubmitHandler}
                        >
                            <input 
                                type="text" 
                                placeholder='Grocery name'  
                                value={formState?.newGroceryItem?.name}
                                onChange={(e) => {
                                    const value = e?.target?.value;
                                    setFormState(formState => {
                                        return {
                                            ...formState,
                                            newGroceryItem: {
                                                ...formState?.newGroceryItem,
                                                name: value
                                            }
                                        }
                                    })
                                }}
                            />

                            <button>
                                Submit
                            </button>
                        </form>

                        <button
                            onClick={() => {
                                setUIState(uiState => {
                                    return {
                                        ...uiState,
                                        newGroceryItem: {
                                            ...uiState?.newGroceryItem,
                                            showInput: false
                                        }
                                    }
                                })
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                null
            )}
        </div>
    )
}

export default Inventory