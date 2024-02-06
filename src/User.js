import React, { useEffect, useState } from 'react'
import axios from 'axios';
function User() {
  var [val, setval] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // handle success
        // console.log(response.data);
        // console.log(response.data.address);
        // setval(response.data.address);
        setval(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <table border=" ">
        <tr style={{color:"white",backgroundColor:"black"}}>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th colSpan={6}>address
            <tr>
              <th style={{padding:" 10px 30px"}} >STREET</th>
              <th style={{padding:"10px 30px"}}>SUITE</th>
              <th style={{padding:"10px 40px"}}>CITY</th>
              <th style={{paddingLeft:"40px"}}>ZIPCODE</th>
              <th colSpan={2} style={{padding:"10px",paddingRight:"0px"}}>GAP
                <tr>
                  <th style={{padding:" 10px 30px",paddingRight:"10px"}}>LAT</th>
                  <th style={{padding:"10px 30px",paddingRight:"0px"}}>LNG</th>
                </tr>
                </th>
            </tr>
            </th>
          <th>PHONE</th>
          <th>WEDSITE</th>
          <th colSpan={3} >COMPANY     
          <tr>   
              <th style={{padding:"10px 30px"}}>NAME</th>
              <th style={{padding:"10px 30px"}}>CATCHPARSE</th>
              <th style={{padding:"10px 30px"}}>BS</th>
              </tr>   
            </th>
           
        </tr>

        {
          val.map((ele, ind) => {
            return(
                <tr>
          <td>{ele.id}</td>
          <td>{ele.name}</td>
          <td>{ele.username}</td>
          <td>{ele.email}</td>
              <td>{ele.address.street}</td>
              <td>{ele.address.suite}</td>
              <td>{ele.address.city}</td>
              <td>{ele.address.zipcode}</td>
                  <td>{ele.address.geo.lat}</td>
                  <td>{ele.address.geo.lat}</td>
          <td>{ele.phone}</td>
          <td>{ele.website}</td>

              <td>{ele.company.name}</td>
              <td>{ele.company.catchPhrase}</td>
              <td>{ele.company.bs}</td>
        </tr>
            )
          })
        }
        </table>
  )
}
export default User;
