import React, { useState } from 'react'

import classes from './Add.module.scss'

const Add = () => {

    const [newListing, setNewListing] = useState({
        name: "",
        address: "",
        hours: "",
        description: ""
    })

    const handleSave = () => {
        // Add newListing to redux store
    }

    const handleChange = (e) => {
        setNewListing({ 
            [e.target.name]: e.target.value
        })
    }






  return (
    <div className={classes.add}>
        <input className={classes.input} onChange={handleChange} type="text" name="name" placeholder="Name" />
        <input className={classes.input}  onChange={handleChange} type="text" placeholder="Address" name="address" />
        <input className={classes.input}  onChange={handleChange} type="text" placeholder="Hours" name="hours" />
        <input className={classes.input}  onChange={handleChange} type="text" placeholder="Description" name="description" />
        <button onClick={handleSave} className={classes.button}>Save</button>
    </div>
  )
}

export default Add