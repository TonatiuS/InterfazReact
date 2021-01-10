import React, { useState, useEffect } from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'



class MethodGeneral extends React.Component {
  render() {

    return (
      <>
        <h1 className="tittle-delegacion" >{this.props.alcaldia}</h1>
        <p className="tittle-delegacion" >Delito: {this.props.delito} </p>
        <p className="subtitle-delegacion">predicción de homicidios intencionales empleando {this.props.metodo} </p>
        <div>
          <p className="centerMap2 more-info " > {this.props.datos} </p>
          <p className="centerMap2 more-info " >  MSE 11.946</p>
          <img className="" src={this.props.img} />
        </div>
          <img  className="image3" src={this.props.img1} />
      </>
    )
  }
}

export default MethodGeneral

