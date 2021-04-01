import React, {useState, useEffect} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";

function User() {

  const [datosEmpresa, setdatosEmpresa] = useState({
    empresa:'',
    email:'',
    whatsapp:'',
    nombre:'',
    apellido:'',
    direccion:'',
    ciudad:'',
    provincia:'',
    stado:''
  })
  const handleState=(e)=>{
    setdatosEmpresa({
      ...datosEmpresa,
      [e.target.name]:e.target.value
    })
  }
  const handleEmpresa=async()=>{
    const {data} = await axios.get("http://localhost:3002/datos/empresa")
    if (data){
      console.log(data)
      setdatosEmpresa(data)
    }
  }
  const GrabarEmpresa=async(e)=>{
    e.preventDefault();
    const { empresa,email,whatsapp,nombre,apellido,direccion,ciudad,provincia } = datosEmpresa
    if(empresa === "" || email === "" || whatsapp === "" || nombre === ""
      || apellido === "" || direccion === "" || ciudad === "" || provincia === ""){
      alert("Llenar todo los campos")
    }else{
      const {data} = await axios.post("http://localhost:3002/datos/empresa",{datosEmpresa})
      if(data){
        alert(data)
      }
    }
  }

  const handle=()=>{
      let empresa = document.getElementById("empresa")
       empresa.setAttribute("disabled", "")
      let email = document.getElementById("email")
      email.setAttribute("disabled", "")
       let whatsapp = document.getElementById("whatsapp")
      whatsapp.setAttribute("disabled", "")
      let nombre = document.getElementById("nombre")
      nombre.setAttribute("disabled", "")
      let apellido = document.getElementById("apellido")
      apellido.setAttribute("disabled", "")
      let direccion = document.getElementById("direccion")
      direccion.setAttribute("disabled", "")
      let ciudad = document.getElementById("ciudad")
      ciudad.setAttribute("disabled", "")
      let provincia = document.getElementById("provincia")
      provincia.setAttribute("disabled", "")
  }

  const [boo, setboo] = useState(true)
  const Stado=async()=>{
    let empresa = document.getElementById("empresa")
       empresa.removeAttribute("disabled", "")
      let email = document.getElementById("email")
      email.removeAttribute("disabled", "")
       let whatsapp = document.getElementById("whatsapp")
      whatsapp.removeAttribute("disabled", "")
      let nombre = document.getElementById("nombre")
      nombre.removeAttribute("disabled", "")
      let apellido = document.getElementById("apellido")
      apellido.removeAttribute("disabled", "")
      let direccion = document.getElementById("direccion")
      direccion.removeAttribute("disabled", "")
      let ciudad = document.getElementById("ciudad")
      ciudad.removeAttribute("disabled", "")
      let provincia = document.getElementById("provincia")
      provincia.removeAttribute("disabled", "")
    // const {data} = await axios.post("http://localhost:3002/stado",{boo})
    // if(data){
    //   handleEmpresa()
    // }
  }

  useEffect(()=>{
    handleEmpresa()
    handle()
  },[])

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Datos de Empresariales</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Nombre de la Empresa</label>
                        <Form.Control
                          defaultValue={datosEmpresa.empresa}
                          name="empresa"
                          id="empresa"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={datosEmpresa.email}
                          placeholder="Email"
                          name="email"
                          id="email"
                          type="email"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Whatsapp conctanto
                        </label>
                        <Form.Control
                          defaultValue={datosEmpresa.whatsapp}
                          id="whatsapp"
                          name="whatsapp"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nombre</label>
                        <Form.Control
                          defaultValue={datosEmpresa.nombre}
                          placeholder="Company"
                          id="nombre"
                          name="nombre"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Apellido</label>
                        <Form.Control
                          defaultValue={datosEmpresa.apellido}
                          placeholder="Last Name"
                          id="apellido"
                          name="apellido"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Direccion</label>
                        <Form.Control
                          defaultValue={datosEmpresa.direccion}
                          placeholder="Home Address"
                          name="direccion"
                          id="direccion"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Ciudad</label>
                        <Form.Control
                          defaultValue={datosEmpresa.ciudad}
                          placeholder="City"
                          name="ciudad"
                          id="ciudad"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Provincia</label>
                        <Form.Control
                          defaultValue={datosEmpresa.provincia}
                          placeholder="Country"
                          name="provincia"
                          id="provincia"
                          type="text"
                          onChange={(e)=>handleState(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={(e)=>GrabarEmpresa(e)}
                  >
                    Guardar Datos
                  </Button>
                  <Button
                    className="btn btn-dark"
                    variant="dark"
                    onClick={()=>Stado()}
                  >
                    Show
                  </Button>
                  </div>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/*//img presentacion*/}
          
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                </div>
              </Card.Body>
              <input type="file" name="logo" id="logo" className="form-control" />
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn btn-info"
                  onClick={(e) => e.preventDefault()}
                  variant="info"
                >
                  Subir Logo
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
