import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Todo(){
    var [val,setval] =useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
            <table border={2} style={{margin:"auto"}}>
                <tr style={{color:"white",backgroundColor:"black"}}>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>COMPLETED</th>
                </tr>
            {
                val.map((ele,ind)=>{
                    return(
                    <tr>
                        <td>{ele.userId}</td>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.completed}</td>
                    </tr>
                    )

                })
                    }
            </table>
        </div>
    )
}
export default Todo;