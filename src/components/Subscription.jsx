import React from 'react'
import { Table,Button } from 'react-bootstrap'
import './Subscription.css'
import { useNavigate } from 'react-router-dom'
export default function Subscription() {
  const navigate=useNavigate();
  return (
    <div>
        <h1>Subscription</h1>
      <Table className='subs-table' striped bordered >
      <thead>
        <tr>
         
          <th>Options</th>
          <th>Price</th>
          <th>Add to Cart</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>1 Month</td>
          <td>Rs 3200/-</td>
          <td><Button className='additem' >Add +</Button></td>
        </tr>
        <tr>
          
          <td>2 Month</td>
          <td>Rs 6000/-</td>
          <td><Button className='additem' >Add +</Button></td>
        </tr>
        <tr>
          
          <td>3 Month</td>
          <td>Rs 8800/-</td>
          <td><Button className='additem'>Add +</Button></td>
        </tr>
        <tr>
          
          <td>4 Month</td>
          <td>Rs 11500/-</td>
          <td><Button className='additem'>Add +</Button></td>
        </tr>
        <tr>
          
          <td>5 Month</td>
          <td>Rs 13300/-</td>
          <td><Button className='additem' onClick={()=>navigate("/checkout")}>Add +</Button></td>
        </tr>
        <tr>
          
          <td>6 Month</td>
          <td>Rs 15000/-</td>
          <td><Button className='additem'>Add +</Button></td>
        </tr>
        
          
          
        
      </tbody>
    </Table>
    </div>
  )
}
