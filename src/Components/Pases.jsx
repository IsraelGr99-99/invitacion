import React from 'react'

function Pases() {
  return (
    <div className='pases mt-4'>
      <select className='form-select' name="pases" id="pases">
        <option value="1">1 Pase</option>
        <option value="2">2 Pases</option>
      </select>
    </div>
  )
}

export default Pases;