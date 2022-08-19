import React from 'react';
import './TodoHeader.css'


function TodoHeader(
    {
      children, loading
    }
) {
    
  return (
    <header className='TodoHeader-container'>
    {React.Children.toArray(children).map(
      child =>  {
        return React.cloneElement(child, {loading: loading})
      }
    )}
    </header>
   );
}

export {TodoHeader};