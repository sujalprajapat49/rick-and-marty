import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Photos(){
    var [val,setval] =useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
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
        <div style={{display:"flex",justifyContent:"space-between",padding:"20px 0px 20px 10px"}} className='row row-cols-4 d-flex'>
        {
            val.map((ele,ind)=>{
                return(
                    <Card className='col' style={{width:"20%",margin:"8px",padding:"0px",objectFit:"cover"}}>
                    <img variant="top" src={ele.url} style={{width:"100%",height:"200px",margin:"auto",border:"none"}} />
                    <Card.Body style={{display:"flex"}}>
                        <div>
                        <img src={ele.thumbnailUrl} style={{width:"50px",height:"50px"}}></img>
                        </div>
                        <div>
                                <h6>TITLE</h6>
                      
                                <p>{ele.id}.{ele.title}</p>
                        </div>

                      <Card.Text>
                      </Card.Text>
                    </Card.Body>
                  </Card>              
                )
            })
        }
        </div>
      )
}
export default Photos;