import React from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'



class MethodRegresion extends React.Component {
  render() {

    return (
      <>
        <h1 className="tittle-delegacion" >{this.props.alcaldia}</h1>
        <p className="tittle-delegacion" >Delito: {this.props.delito} </p>
        <p className="subtitle-delegacion">predicción de homicidios intencionales empleando {this.props.metodo} </p>
        <p> Aqui le podemos poner mas Info </p>
          <img className="" src={this.props.img} />
      </>
    )
  }
}

export default MethodRegresion

