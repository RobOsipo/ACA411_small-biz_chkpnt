import React from 'react'
import {Link} from 'react-router-dom'

import cookie from 'cookie'
import classes from './Navigation.module.scss'

const Navigation = () => {

  const cookies = cookie.parse(document.cookie);

    const isAdmin = cookies['loginToken']


    const handleLogout = () => {
      cookies['loginToken'] = false
    }


  return (
    <header className={classes.header}>
        <Link className={classes.link} to="/"><h1 className={classes.title}>Austin Small Business</h1></Link>
        <div className={classes['link-container']}>
            <Link className={classes.link} to="/">Listings</Link>
            {!isAdmin && <Link className={classes.link} to="/login">Login</Link>}
            {isAdmin && <Link className={classes.link} to="/add">Add</Link>}
            {isAdmin && <Link className={classes.link} to="/logout">Logout</Link>}
        </div>
    </header>
  )
}

export default Navigation