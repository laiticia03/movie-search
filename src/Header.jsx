import React, { useState } from 'react'

function Header({ setSearch}) {
   const [InputValue, setInputValue]=useState('')
  return (
    <div className='header'>
       <h1>Movie shearch</h1>
       <form onSubmit={(e)=>e.preventDefault(e)}>
         <label htmlFor='search'>Search:</label>
         <div className='input'>
          <input type='text' name='search' placeholder='i.e batman' onChange={(e)=> setInputValue(e.target.value)} value={InputValue} />
          <button type='button' onClick={()=> setSearch(InputValue)}>search</button>           
         </div>
       </form>
    </div>
  )
}

export default Header