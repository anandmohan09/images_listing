import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import {BiCloudUpload} from 'react-icons/bi';
// import {IoIosAddCircleOutline} from 'react-icons/io';
import {BsFillPersonFill} from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
function Example({image,setImage}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const[image,setImage]=useState([]);
const[dragging,setDragging]=useState(false);

  function handleChange(e){
    e.preventDefault();
  const{name,value, files}=e.target;
//   console.log("----e",e)
  var file = files[0];
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);
//   console.log("----",URL.createObjectURL(e.target.files[0])) // Would see a path?

  setImage([...image,{["name"]:URL.createObjectURL(e.target.files[0])}]);
  }
console.log(image,'images')
function submit(e){
    e.preventDefault();
    // const record=[...image]
    setImage(image)
}

// function onDragOver(e){
//   e.preventDefault();
//   setDragging(true)
//   e.dataTransfer.dropEffect='copy';
//   // handleClose()
//   }
//   function onDragLeave(e){
//     e.preventDefault()
//     setDragging(false)
//     handleClose()
//   }
  
//   function onDrag(e){
//     e.preventDefault()
//   setDragging(true)
//   // handleClose()
//   }




  return (
    <>
      <Button style={{width:"60px",height:'40px',marginTop:'10px'}} variant="primary" onClick={handleShow}>
        Add
      </Button>
      {/* <IoIosAddCircleOutline onClick={handleShow} style={{fontSize:'30px'}}/> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <BsFillPersonFill style={{fontSize:'45px',marginBottom:'10px',marginRight:'10px'}}/>Add Employee Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            {/* <button>Select Files</button> */}
         
        <Form className='addForm' onSubmit={submit}>
        <div className='dropzone'>
            <h3>Drag and Drop Files to upload</h3>
            {/* <h2>Or</h2> */}
            <BiCloudUpload style={{fontSize:'116px',color:'blue',opacity:'0.3'}}/>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="file" onChange={handleChange} name={image}  value={image.image} 
        />
      </Form.Group>
      </div>
      <div style={{display:"flex",justifyContent:'end',marginTop:'10px'}}>
      <Button variant="secondary" onClick={handleClose} style={{marginRight:"10px"}}>
            Close
          </Button>
          <Button type='submit' variant="primary" onClick={handleClose}>
            Add
          </Button>
          </div>
    </Form>
   
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;