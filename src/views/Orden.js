import React, { useState, useEffect } from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import axios from 'axios'

function Orden() {

    const [listaOrde, setlistaOrde] = useState([])
    const Listaorden = async () => {
        const { data } = await axios.get("http://localhost:3002/dashboard/orden_lista")
        if (data) {
            setlistaOrde(data)
        }
    }
    useEffect(() => {
        Listaorden()
    }, [])

    function TablaOrden(){
        return listaOrde.map((iten) => (    
            <tr>
                <td>{iten.cliente_ws}</td>
                <td>{iten.cantidad}</td>
                <td>{"$"+iten.total.toFixed(2)}</td>
                <td>{iten.longitude_ws}</td>
                <td>{iten.estado_ws === 0 
                ? <button className="btn btn-danger">Pedido</button> 
                : <button className="btn btn-success">Enviado</button>}</td>
                <td>{iten.fecha_ws.replace(".000Z","").replace("T"," ")}</td>
                <td>{
                    iten.estado_ws === 0
                    ?<button className="btn btn-warning">
                        Por Enviar  
                    </button>
                    :iten.accion_ws === 0
                    ?<select className="btn btn-info">
                        <option value="" className="btn btn-info">Repartidor</option>
                        <option value="" className="btn btn-success">Entregado</option>
                        <option value="" className="btn btn-danger">Anulado</option>
                    </select>  
                    :""
                }</td>
                <td>
                    <button className="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Lista de Orden del dia</Card.Title>
                                <p className="card-category">

                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped" responsive>
                                    <thead>
                                        <tr>
                                            <th className="border-0">Cliente</th>
                                            <th className="border-0">Cantidad</th>
                                            <th className="border-0">P. Total</th>
                                            <th className="border-0">Localidad</th>
                                            <th className="border-0">Estado</th>
                                            <th className="border-0">Fecha</th>
                                            <th className="border-0">Accion</th>
                                            <th className="border-0">Ver</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <TablaOrden/>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Orden;
