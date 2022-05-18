import React from 'react'

import classes from './Details.module.scss'

const Details = () => {
  return (
    <div className={classes['main-container']}>
        <h1>Austin Business</h1>
        <h4>19467 whatevs road</h4>
        <h4>Hours: 9 - 5</h4>
        <p>A Description of this business</p>
        <div className={classes['image-container']}>
            <img className={classes.image} src="https://imgs.search.brave.com/j0G5sw5zcPQ1WoC7doMKCLmOv3cVfXWNtt0KZS27nzY/rs:fit:572:400:1/g:ce/aHR0cDovL3d3dy5k/ZXN0aW5hdGlvbjM2/MC5jb20vbm9ydGgt/YW1lcmljYS91cy90/ZXhhcy9hdXN0aW4v/bm9ydGhjcm9zcy1z/dWl0ZXMtYXVzdGlu/LW53LW1hcC5naWY.gif" alt="google maps" />
        </div>
    </div>
  )
}

export default Details