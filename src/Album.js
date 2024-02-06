import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Album(){
        var [val,setval] =useState([])
        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/albums')
              .then(function (response) {
                // handle success
                console.log(response.data);
                setval(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          },[])
        return(
            <div>
                <table border={1} style={{margin:"auto"}}>
                    <tr style={{color:"white",backgroundColor:"black"}}>
                        <th>USER ID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                {
                    val.map((ele,ind)=>{
                        return(
                        <tr style={{color:"black",backgroundColor:"grey",textTransform:"capitalize"}}>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                        </tr>
                        )
    
                    })
                        }
                </table>
            </div>
        )
}
export default Album;