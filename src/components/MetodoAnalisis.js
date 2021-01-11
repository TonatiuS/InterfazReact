import React from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


class MethodAnalisis extends React.Component {
  render() {

    return (
      <Card border="dark" >
      <Card.Title className="card-tittleContainer" >
        <div className="card-tittle">{this.props.metodo}</div>
      </Card.Title>
      <div className="" >
        <img class="card-imag2" variant="top" src={this.props.img} alt="Card image cap"></img>
      </div>
      <Card.Body>
        <Card.Text  className="card-Text" >
          <p> {this.props.info} </p>
          <br/> 
          <p> {this.props.info2} </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"> {this.props.datos} </small> <br />
        <small className="text-muted">{this.props.datos2}</small>
      </Card.Footer>
    </Card>
    )
  }
}

export default MethodAnalisis

