import React, { useState, useEffect } from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import MethodGeneral from './MethodGeneral'
import MethodRegresion from './Regresion'
import MethodAnalisis from './MetodoAnalisis'

export const Home = () => {

  const [delegacion, setDelegacion] = useState("");
  const [metodo, setMetodo] = useState("");
  const AzcapotzalcoImg = '/azcapotzalco.png'
  const AzcapotzalcoImg2 = '/azcapotzalco2.png'
  const AzcapotzalcoImg3 = '/azcapotzalco3.png'
  const AlvaroImg = '/alvaro.png'
  const AlvaroImg2 = '/alvaro2.png'
  const AlvaroImg3 = '/alvaro3.png'
  const BenitoImg = '/Benito.png'
  const BenitoImg2 = '/Benito2.png'
  const BenitoImg3 = '/Benito3.png'
  const CoyoacanImg = '/Coyoacan.png'
  const CoyoacanImg2 = '/Coyoacan2.png'
  const CoyoacanImg3 = '/Coyoacan3.png'
  const CuauhtemocImg = '/Cuahutemoc2.png'
  const CuauhtemocImg2 = '/Cuahuatemoc.png'
  const CuauhtemocImg3 = '/Cuahutemoc3.png'
  const CuajimalplaImg = '/Cuaji.png'
  const CuajimalplaImg2 = '/Cuaji2.png'
  const CuajimalplaImg3 = '/Cuaji3.png'
  const GustavoImg = '/Gustavo.png'
  const GustavoImg2 = '/Gustavo2.png'
  const GustavoImg3 = '/Gustavo3.png'
  const IztacalcoImg = '/Iztacalco.png'
  const IztacalcoImg2 = '/Iztacalco2.png'
  const IztacalcoImg3 = '/Iztacalco3.png'
  const IztapalapaImg = '/Iztapalapa.png'
  const IztapalapaImg2 = '/Iztapalapa2.png'
  const IztapalapaImg3 = '/Iztapalapa3.png'
  const MagdalenaImg = '/Magdalena.png'
  const MagdalenaImg2 = '/Magdalena2.png'
  const MagdalenaImg3 = '/Magdalena3.png'
  const MiguelImg = '/Miguel.png'
  const MiguelImg2 = '/Miguel2.png'
  const MiguelImg3 = '/Miguel3.png'
  const MilpalltaImg = '/Milpallta.png'
  const MilpalltaImg2 = '/Milpalta2.png'
  const MilpalltaImg3 = '/Milpalta3.png'
  const TlahuacImg = '/Tlahuac.png'
  const TlahuacImg2 = '/Tlahuac2.png'
  const TlahuacImg3 = '/Tlahuac3.png'
  const TlalpanImg = '/Tlalpan.png'
  const TlalpanImg2 = '/Tlalpan2.png'
  const TlalpanImg3 = '/Tlalpan3.png'
  const VenustianoImg = '/Venustiano.png'
  const VenustianoImg2 = '/Venustiano2.png'
  const VenustianoImg3 = '/Venustiano3.png'
  const XochiImg = '/Xochi.png'
  const XochiImg2 = '/Xochi2.png'
  const XochiImg3 = '/Xochimilco3.png'


  const _handleMetodo = event => {
    switch (event.target.value) {
      case 'Prediccion': setMetodo('prediccion'); break;
      case 'Analisis estadistico': setMetodo('analisis'); break;
      case 'Regresiones lineales': setMetodo('regresiones'); break;
      default:
        break;
    }
  }

  const _updateData = event => {
    switch (event.target.value) {
      case 'Azcapotzalco': setDelegacion('Azcapotzalco'); break;
      case 'Alvaro Obregon': setDelegacion('Alvaro'); break;
      case 'Benito Juarez': setDelegacion('Benito'); break;
      case 'Coyoacan': setDelegacion('Coyoacan'); break;
      case 'Cuajimalpa de Morelos': setDelegacion('Cuajimalpa'); break;
      case 'Cuauhtemoc': setDelegacion('Cuauhtemoc'); break;
      case 'Gustavo A. Madero': setDelegacion('Gustavo'); break;
      case 'Iztacalco': setDelegacion('Iztacalco'); break;
      case 'Iztapalapa': setDelegacion('Iztapalapa'); break;
      case 'Magdalena Contreras': setDelegacion('Magdalena Contreras'); break;
      case 'Miguel Hidalgo': setDelegacion('Miguel Hidalgo'); break;
      case 'Milpa Alta': setDelegacion('Milpa Alta'); break;
      case 'Tlahuac': setDelegacion('Tlahuac'); break;
      case 'Tlalpan': setDelegacion('Tlalpan'); break;
      case 'Venustiano Carranza': setDelegacion('Venustiano Carranza'); break;
      case 'Xochimilco': setDelegacion('Xochimilco'); break;
      default:
        break;
    }


  }

  useEffect(() => {
    if (delegacion === 'Azcapotzalco') {
      console.log('imprime azcapotsalco')
    }
  }, [delegacion]);

  return (
    <div>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container tolbar-text d-flex justify-content-between">
            <img className="icon-toolbar tolbar" src={'/ipn.png'} />
            <a href="#" className=" navbar-brand d-flex align-items-center ">
              <strong className="tolbar-text" >Predicción de Homicidios Intencionales Empleando Análisis Estadístico y Regresiones Lineales
              </strong>
            </a>
            <img className="icon-toolbar2" src={'/esime.png'} />

          </div>
        </div>
      </header>
      <main role="main">
        <section className="jumbotron text-center margin-15px container">
          <div className=" ">
            <h1 className="jumbotron-heading">Prediccion de Alcaldias</h1>
            <p className="lead text-muted ">En la actualidad, el crimen siempre ha sido un tema sensible para la sociedad y afecta de manera directa la vida diaria y el desarrollo de la misma, por ello, crear una herramienta que ayude a resolver el problema es de suma importancia.</p>
            {/* <div class="form-group section-full">
              <label for="exampleFormControlSelect1" className="section-text" >Seleccione Metodo</label>
              <select onChange={_handleMetodo} class="form-control " id="exampleFormControlSelect1" placeholder={'Seleccione una opcion'}  >
                <option className="section-Subtext" >Seleccione una opcion </option>
                <option className="section-Subtext" >Prediccion </option>
                <option>  Analisis estadistico </option>
                <option>  Regresiones lineales </option>
              </select>
            </div> */}


            <div class="form-group margin-Section">
              <label for="exampleFormControlSelect1" className="section-text" >Seleccione Delegacion</label>
              <select onChange={_updateData} class="form-control" id="exampleFormControlSelect1">
                <option>Delegacion</option>
                <option>Alvaro Obregon</option>
                <option>Azcapotzalco</option>
                <option>Benito Juarez</option>
                <option>Coyoacan</option>
                <option>Cuajimalpa de Morelos</option>
                <option>Cuauhtemoc</option>
                <option>Gustavo A. Madero</option>
                <option>Iztacalco</option>
                <option>Iztapalapa</option>
                <option>Magdalena Contreras</option>
                <option>Miguel Hidalgo</option>
                <option>Tlahuac</option>
                <option>Tlalpan</option>
                <option>Venustiano Carranza</option>
                <option>Xochimilco</option>
              </select>
            </div>
          </div>
        </section>



        <div className="album py-5 bg-light centerMap" >
          <div className="centerMap" >


            {delegacion === 'Alvaro' &&
              <>
                <h1 className="tittle-delegacion" >Alvaro Obregon</h1>
                <p className="tittle-delegacion" >Delito: Lesiones </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='MSE: 11.946'
                      datos2=' Correlación máxima 0.337'
                      // info='infornacion q poner'
                      // info2='infornacion q poner'
                      img={AlvaroImg}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      info='Robo'
                      info2='Violacion Equiparada'
                      img={AlvaroImg2}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='Violacion Equiparada'
                      img={AlvaroImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }

            {delegacion === 'Azcapotzalco' &&

              <>
                <>
                  <h1 className="tittle-delegacion" >Azcapotzalco</h1>
                  <p className="tittle-delegacion" >Delito: Lesiones </p>
                  <div className="card-border" >
                    <CardDeck  >
                      <MethodGeneral
                        metodo='Analisis'
                        datos='MSE: 0.141'
                        datos2='Correlación máxima 7.519'
                        info='infornacion q poner'
                        info2='infornacion q poner'
                        img={AzcapotzalcoImg}
                      />
                      <MethodRegresion
                        metodo='Regresiones Lineales'
                        img={AzcapotzalcoImg2}
                      />
                      <MethodAnalisis
                        info='Lesiones'
                        info2='Robo'
                        img={AzcapotzalcoImg3}
                      />
                    </CardDeck>
                  </div>
                </>
              </>
            }
            {delegacion === 'Benito' &&
              <>
                <>
                  <h1 className="tittle-delegacion" >Benito Juarez</h1>
                  <p className="tittle-delegacion" >Delito: Lesiones </p>
                  <div className="card-border" >
                    <CardDeck  >
                      <MethodGeneral
                        datos='MSE: 4.998'
                        datos2='Correlación máxima 7.519'
                        info='infornacion q poner'
                        info2='infornacion q poner'
                        img={BenitoImg2}
                      />
                      <MethodRegresion
                        metodo='Regresiones Lineales'
                        datos=' Correlación máxima 0.337'
                        info='infornacion q poner'
                        info2='infornacion q poner'
                        img={BenitoImg}
                      />
                      <MethodAnalisis
                        info='Lesiones'
                        info2='Amenaza'
                        img={BenitoImg3}
                      />
                    </CardDeck>
                  </div>
                </>
              </>
            }

            {delegacion === 'Coyoacan' &&
              <>
                <h1 className="tittle-delegacion" >Coyoacán</h1>
                <p className="tittle-delegacion" >Delito: Amenaza </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima:  0.212'
                      datos2='MSE : 6.563'
                      img={CoyoacanImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={CoyoacanImg}
                    />
                    <MethodAnalisis
                      info='Amenaza'
                      info2='Robo'
                      img={CoyoacanImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }

            {delegacion === 'Cuajimalpa' &&
              <>
                <h1 className="tittle-delegacion" >Cuajimalpa de Morelos</h1>
                <p className="tittle-delegacion" >Delito: info='Amenaza'
                      info2='Robo' </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.216'
                        datos2='MSE: 2.364'
                      img={CuajimalplaImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={CuajimalplaImg}
                    />
                    <MethodAnalisis
                      info='Amenaza'
                      info2='Robo'
                      img={CuajimalplaImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Cuauhtemoc' &&
              <>
                <h1 className="tittle-delegacion" >Cuauhtémoc</h1>
                <p className="tittle-delegacion" >Delito: Lesiones </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.109'
                        datos2='Mse: 7.519'
                      img={CuauhtemocImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={CuauhtemocImg}
                    />
                    <MethodAnalisis
                      info='Violasion simple'
                      info2='Amenaza'
                      img={CuauhtemocImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Gustavo' &&
              <>
                <h1 className="tittle-delegacion" >Gustavo A. Madero</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.369'
                      datos2='Mse: 25.542'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={GustavoImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={GustavoImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='N/A'
                      img={GustavoImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Iztacalco' &&
              <>
                <h1 className="tittle-delegacion" >Iztacalco</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.121'
                      datos2='Mse: 6.351'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={IztacalcoImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={IztacalcoImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='Lesiones'
                      img={IztacalcoImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Iztapalapa' &&
              <>
                <h1 className="tittle-delegacion" >Iztapalapa</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.490'
                      datos2='Mse: 51.761'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={IztapalapaImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={IztapalapaImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='N/A'
                      img={IztapalapaImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Magdalena Contreras' &&
              <>
                <h1 className="tittle-delegacion" >Magdalena Contreras</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.267'
                      datos2='Mse: 2.105'
                      img={MagdalenaImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={MagdalenaImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='Violacion equiparada'
                      img={MagdalenaImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Miguel Hidalgo' &&
              <>
                <h1 className="tittle-delegacion" >Miguel Hidalgo</h1>
                <p className="tittle-delegacion" >Delito: Lesiones </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.175'
                      datos2='Mse: 7.931'
                      img={MiguelImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={MiguelImg}
                    />
                    <MethodAnalisis
                      info='Lesiones'
                      info2='Violacion equiparada'
                      img={MiguelImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Milpa Alta' &&
              <>
                <h1 className="tittle-delegacion" >Milpa Alta</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.152'
                      datos2='Mse: 2.079'
                      img={MilpalltaImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={MilpalltaImg}
                    />
                    <MethodAnalisis
                 info='Robo'
                 info2='Violacion equiparada'
                      img={MilpalltaImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Tlahuac' &&
              <>
                <h1 className="tittle-delegacion" >Tláhuac</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.536'
                      datos2='Mse: 5.576'
                      img={TlahuacImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={TlahuacImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='N/A'
                      img={TlahuacImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Tlalpan' &&
              <>
                <h1 className="tittle-delegacion" >Tlalpan</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.422'
                      datos2='Mse: 15.882'
                      img={TlalpanImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={TlalpanImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='N/A'
                      img={TlalpanImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Venustiano Carranza' &&
              <>
                <h1 className="tittle-delegacion" >Venustiano Carranza</h1>
                <p className="tittle-delegacion" >Delito: Robo </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.2.36'
                      datos2='Mse: 20.221'
                      img={VenustianoImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={VenustianoImg}
                    />
                    <MethodAnalisis
                      
                      info='Robo'
                      info2='Amenaza'
                      img={VenustianoImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }
            {delegacion === 'Xochimilco' &&
              <>
                <h1 className="tittle-delegacion" >Xochimilco</h1>
                <p className="tittle-delegacion" >Delito: Amenaza </p>
                <div className="card-border" >
                  <CardDeck  >
                    <MethodGeneral
                      metodo='Analisis'
                      datos='Correlación máxima: 0.302'
                      datos2='Mse: 5.400'
                      img={XochiImg2}
                    />
                    <MethodRegresion
                      metodo='Regresiones Lineales'
                      datos=' Correlación máxima 0.337'
                      info='infornacion q poner'
                      info2='infornacion q poner'
                      img={XochiImg}
                    />
                    <MethodAnalisis
                      info='Robo'
                      info2='Amenaza'
                      img={XochiImg3}
                    />
                  </CardDeck>
                </div>
              </>
            }



          </div>
        </div>
      </main>
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Subir al inicio</a>
          </p>
          <p>Aqui van muchos agardecimientos</p>

        </div>
      </footer>
    </div>
  );

}

