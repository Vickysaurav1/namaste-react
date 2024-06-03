import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input type='text' className='p-2 m-2 border border-black' placeholder='name'></input>
        <input type='email' className='p-2 m-2 border border-black' placeholder='email'></input>
        <button className="border border-black p-2 m-2 bg-slate-400 rounded-lg" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact