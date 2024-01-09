import React from 'react'

const GenericForm = ({
    children,
    onSubmitHandler
}) => {
  return (
    <form
        onSubmit={onSubmitHandler}
    >
        {children}
    </form>
  )
}

export default GenericForm