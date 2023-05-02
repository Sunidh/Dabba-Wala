import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import './Menu.css'
export default function Menu() {
    
  return (
    <div >
      <h1>Menubar</h1>
       <Table className='menutable'  bordered  hover>
        
      <thead>
          
        <tr>
          
          <th>Week Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sunday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
          
        </tr>
        <tr>
          <td>Monday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
         
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
          
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
          
        </tr>
        <tr>
          <td>Thursday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
         
        </tr>
        <tr>
          <td>Friday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
          
        </tr>
        <tr>
          <td>Saturday</td>
          <td>Paratha</td>
          <td>Dal,Chawal,2 Roti<br/> and Mix Veg </td>
          <td>Nan Manchurian</td>
        
        </tr>
      </tbody>
    </Table>
   

    

    </div>
  )
}
