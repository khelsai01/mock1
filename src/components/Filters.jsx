import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const Filters = () => {
  return (
    <div style={{ borderRight: '1px solid gray', margin: 'center' ,marginLeft:"50px"}}>
      <div>
        <h3>Color</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Red" />
          <FormControlLabel control={<Checkbox />} label="Green" />
          <FormControlLabel control={<Checkbox />} label="Blue" />
        </FormGroup>
      </div>
      <div>
        <h3>Shape</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Small" />
          <FormControlLabel control={<Checkbox />} label="Medium" />
          <FormControlLabel control={<Checkbox />} label="Large" />
        </FormGroup>
      </div>
      <div>
        <h3>Size</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Round" />
          <FormControlLabel control={<Checkbox />} label="Oval" />
        </FormGroup>
      </div>
    </div>
  )
}

export default Filters