import React from 'react'

const PokemonCard = ({
    resource
}) => {
  return (
    <>
    {resource ? <div
            style={{
                border: "1px solid black",
                width: '50%',
                margin: '1rem auto',
            }}
        >
        <p>Pokemon Name: {resource?.name}</p>
        {resource?.abilities?.length > 0 ? (
            <>
                <p>
                    Abilities
                </p>

                {resource?.abilities?.map((ability, abilityIdx) => {
                    return (
                        <React.Fragment
                            key={ability?.ability?.name}
                        >
                            <p>{abilityIdx + 1}. {ability?.ability?.name}</p>
                        </React.Fragment>
                    )
                })}
            </>
        ) : null}
        </div>
    : null}
    </>
  )
}

export default PokemonCard