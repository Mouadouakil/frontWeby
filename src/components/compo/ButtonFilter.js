import React from 'react'
import './ButtonFilter.css'
function ButtonFilter({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default ButtonFilter;