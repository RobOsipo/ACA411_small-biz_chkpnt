import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import cookie from 'cookie'
import classes from './Navigation.module.scss'

const Navigation = () => {

  const cookies = cookie.parse(document.cookie);

    let isAdmin = cookies['loginToken']

    console.log('is admin', isAdmin)


    const handleLogout = () => {
      console.log(isAdmin)
      document.cookie = `loginToken=false;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    }

    const conditionalLinks = () => {
      if (isAdmin) {
        return (<>
          <Link className={classes.link} to="/add">Add</Link>
          <button className={classes.button} onClick={() => isAdmin = false}>Logout</button>
        </>)
      } else {
        return (
          <Link className={classes.link} to="/login">Login</Link>
        )
      }
    }


  return (
    <header className={classes.header}>
        <Link className={classes.link} to="/"><h1 className={classes.title}>Austin Small Business</h1></Link>
        <div className={classes['link-container']}>
            <Link className={classes.link} to="/">Listings</Link>
            {/* {!isAdmin && <Link className={classes.link} to="/login">Login</Link>}
            {isAdmin && <Link className={classes.link} to="/add">Add</Link>}
            {isAdmin && <button className={classes.link} onClick={handleLogout}>Logout</button>} */}
            {conditionalLinks()}
        </div>
    </header>
  )
}

export default Navigation