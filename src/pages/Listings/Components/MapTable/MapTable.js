import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import DeleteIcon from '../../../../icons/DeleteIcon'
import cookie from 'cookie'
import classes from './MapTable.module.scss'
const MapTable = ({name, description, hours, address, index}) => {

  const dispatch = useDispatch()
  const cookies = cookie.parse(document.cookie);

  let isAdmin = cookies['loginToken']

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', payload: index})
  }


  return (
    <table className={classes.topTable}>
    <tr>
    <Link className={classes.link} to="/details"><td>{name}</td></Link>
      
      <td>{description}</td>
      <td>{hours}</td>
      <td>{address}</td>
      {isAdmin && <td onClick={handleDelete}><DeleteIcon /></td>}
    </tr>
  </table>
  )
}

export default MapTable