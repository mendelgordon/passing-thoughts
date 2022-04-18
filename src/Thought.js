import React, { useEffect } from 'react';

export const Thought = props => {
   const { thought, removeThought } = props;

   const handleRemoveClick = f => {
      removeThought(thought.id);
   };

   useEffect(
      f => {
         const timeRemaining = thought.expiresAt - Date.now();
         const timeout = setTimeout(f => handleRemoveClick(), timeRemaining);
         return f => clearTimeout(timeout);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [thought]
   );

   return (
      <li className='Thought'>
         <button aria-label='Remove thought' className='remove-button' onClick={handleRemoveClick}>
            &times;
         </button>
         <div className='text'>{thought.text}</div>
      </li>
   );
};
