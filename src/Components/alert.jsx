import React from 'react'

function alert(active) {
    const { active: num } = active; 
    return (
        <div className={`${(num === true) ? "alert-box-active" : "alert-box"}`}>
            Hallo
        </div>
    )
}

export default alert
