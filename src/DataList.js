import React from 'react'

const DataList = ({data , Deleting}) => {
  return (
     <tbody>
        {data.map((item) => (
            <tr key={item.id}>
             <td>{item.date}</td>
             <td>{item.description}</td>
             <td>{item.category}</td>
             <td>{item.amount}</td>
             <td ><button className='buttons' onClick={() => Deleting(item.id)}>Delete</button></td>
            </tr>
        ))}
     </tbody>
  )
}

export default DataList;