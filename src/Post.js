import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Post(){
    var [val,setval] =useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            <table border={2}>
                <tr style={{color:"white",backgroundColor:"black"}}>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            {
                val.map((ele,ind)=>{
                    return(
                    <tr style={{color:"black",backgroundColor:"grey",textTransform:"capitalize"}}>
                        <td>{ele.userId}</td>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.body}</td>
                    </tr>
                    )

                })
                    }
            </table>
        </div>
    )
}
export default Post;
