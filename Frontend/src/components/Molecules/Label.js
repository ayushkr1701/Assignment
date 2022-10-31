import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
import { Flex } from '../Atoms'
type Props = {
  name: string,
  title: string,
}

const Label = (props: Props): React.Element<React> => {
  const {  name, title} = props

  return (
    <div class="form-group">
        <label for={name}>{title}</label>
        {/* <input type="number" class="form-control" required="required"/> */}
    </div>
    
    
    
  )
}

export default Label