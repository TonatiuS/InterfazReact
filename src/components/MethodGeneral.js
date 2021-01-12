import React, { useState, useEffect } from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


class MethodGeneral extends React.Component {

  render() {
    return (
      <>
        <Card border="dark" >
          <Card.Title className="card-tittleContainer" >
            <div className="card-tittle">{'Matríz  de correlaciónes'}</div>
          </Card.Title>
          <div className="prueba-img" >
            <img class="card-img-top " src={this.props.img} alt="Card image cap"></img>
          </div>
          <Card.Body>
            <Card.Text>
              <p className="card-bodyText3" > {this.props.datos} </p>
              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted"> {this.props.info} </small> 
            <small className="text-muted">{this.props.info2}</small> */}
          </Card.Footer>
        </Card>
      </>
    )
  }
}

export default MethodGeneral

