// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./components/modal";
import { BsFillPersonFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Examples from './components/viewModal';

function App() {
  // const[profile,setProfile]=useState([]);
  const[image,setImage]=useState([]);

  useEffect(()=>{
    console.log("appp profile",image);
    // console.log('app images',image);
  },[image]);
  


  function deleteImage(id){
    window.confirm('Are you sure u want to delete');
    console.log(id);
    const t=[...image];
    t.splice(id,1);
    setImage(t);
  }
  

  return (  
    <div className="App" style={{width:'100%',height:'100vh'}}>
      <div className="container mt-5">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          className="header"
        >
          <h2>
            <BsFillPersonFill
              style={{
                fontSize: "45px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            />
            Add New Employee Image:
          </h2>
          <Example  image={image} setImage={setImage} />
        </div>
        {/* <div style={{display:'flex',width:'100%'}}> */}
        <Row>
        {
          image.map((ele,id)=>{
            return (
              <Col md={3} style={{marginTop:"20px"}}>
              <Card style={{ width: "19rem",height:'300px' }}>
            <img src={ele.name} alt={ele.name} style={{width:'100%',height:'100%',position:"relative"}}/>
            <div className="button" style={{position:'absolute',bottom:'11px',left:'75px'}}>
              <Button variant='danger' onClick={()=>deleteImage(id)}>Delete</Button>
              <Examples image={image} setImage={setImage} id={id} ele={ele} />
            </div>
            {/* </div> */}
          </Card>
          </Col>

            )
          })
          
        }
        </Row>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
