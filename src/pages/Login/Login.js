import React from 'react'

import Card from './Components/Card/Card'
import BasicTextFields from './Components/BasicTextFields/BasicTextFields'
import classes from './Login.module.scss'

const Login = () => {
  return (
    <div className={classes['main-container']}>
        <Card>
            <BasicTextFields />
        </Card>
    </div>
  )
}

export default Login