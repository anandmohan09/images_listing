
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Examples({image,id, ele}) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [imageCicked, setImageCicked] = useState();

  function handleShow(breakpoint,id, ele) {
    setFullscreen(breakpoint);
    setShow(true);
    setImageCicked(ele?.name)
    console.log('viewsid',ele);
    // image.filter((id)=>id.)
    // setImage(image)
    // const a=[...image];
    // setImage(a);
    // console.log('a',a);
  }

//   useEffect(()=>{
//     console.log('views',image);
//   },[image])
// console.log('imageCicked',imageCicked)

  return (
    <>
      {values.map((v, idx) => (
        <Button variant='success' key={idx} className="me-2 mb-2" onClick={() => handleShow(v,id, ele)} style={{marginLeft:'10px',marginTop:'5px'}}>
          View
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={imageCicked} alt='imageCicked' style={{width:'100%',height:'620px'}}></img>
     
                    
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Examples;