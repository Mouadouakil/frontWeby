import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import CreateForm from './CreateForm.js'
const Create = () => {
  return (
    <ReactCircleModal
    
      backgroundColor="#97349a"
      toogleComponent={onClick => (
        <button onClick={onClick} className='btn5'>
          CRÉER UN ÉVÈNEMENT
        </button>
        
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em' }} className='formCreate'>
    
            <CreateForm/>
            
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Create