import React, { useState, useEffect } from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootswatch/dist/lux/bootstrap.min.css'
import MethodGeneral from './MethodGeneral'
//import MethodGeneral from './MethodGeneral'


export const Home = () => {

  const [delegacion, setDelegacion] = useState("");
  const AzcapotzalcoImg = '/azcapotzalco.png'
  const AzcapotzalcoImg2 = '/azcapotzalco2.png'
  const AzcapotzalcoImg3 = ''
  const AlvaroImg = '/alvaro.png'
  const AlvaroImg2 = '/alvaro2.png'
  const AlvaroImg3 = '/alvaro.png'
  const BenitoImg = '/Benito.png'
  const BenitoImg2 = '/Benito2.png'
  const BenitoImg3 = ''
  const CoyoacanImg= '/Coyoacan.png'
  const CoyoacanImg2= '/Coyoacan2.png'
  const CoyoacanImg3= ''
  const CuauhtemocImg = '/Cuahuatemoc.png'
  const CuauhtemocImg2 = '/Cuahuatemoc2.png'
  const CuauhtemocImg3 = '/Cuahuatemoc3.png'
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
  const MilpalltaImg= '/Milpallta.png'
  const MilpalltaImg2= '/Milpallta2.png'
  const MilpalltaImg3= '/Milpallta3.png'
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
  const XochiImg3 = '/Xochi3.png'




  const _updateData = event => {

    switch (event.target.value) {
      case 'Azcapotzalco':  setDelegacion('Azcapotzalco'); break;
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
  if(delegacion=== 'Azcapotzalco')
  {
    console.log('imprime azcapotsalco')
  }
}, [delegacion]);

 return (
  <div>
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Predicción de crimen violento empleando regresiones y optimización</strong>
          </a>

        </div>
      </div>
    </header>
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container ">
          <h1 className="jumbotron-heading">Prediccion de Alcaldias</h1>
          <p className="lead text-muted section-full">En la actualidad, el crimen siempre ha sido un tema sensible para la sociedad y afecta de manera directa la vida diaria y el desarrollo de la misma, por ello, crear una herramienta que ayude a resolver el problema es de suma importancia.</p>
          <div class="form-group section-full">
            <label for="exampleFormControlSelect1" className="section-text" >Seleccione Metodo</label>
            <select class="form-control " id="exampleFormControlSelect1">
              <option className="section-Subtext" >Prediccion </option>
              <option>  análisis estadístico </option>
              <option>  regresiones lineales </option>
            </select>
          </div>
          
    
          <div class="form-group">
            <label for="exampleFormControlSelect1" className="section-text" >Seleccione Delegacion</label>
            <select onChange={_updateData} class="form-control" id="exampleFormControlSelect1">
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

        { delegacion === 'Alvaro' &&
          <>
            <MethodGeneral 
              alcaldia= 'Alvaro Obregon'
              delito= 'Lesiones'
              metodo= 'análisis estadístico'
              datos= ' Correlación máxima 0.337'
              img=  {AlvaroImg}
              img1= {AlvaroImg2}
              img2= {AlvaroImg3}
            /> 
          </> 
        }  

        { delegacion === 'Azcapotzalco' &&
          <>
            <MethodGeneral 
              alcaldia= 'Azcapotzalco'
              delito= 'Lesiones'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {AzcapotzalcoImg}
              img1= {AzcapotzalcoImg2}
              img2= {AzcapotzalcoImg3}
            /> 
          </> 
        }
        { delegacion === 'Benito' &&
          <>
            <MethodGeneral 
              alcaldia= 'Benito Juarez'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {BenitoImg}
              img1= {BenitoImg2}
              img2= {BenitoImg3}
            /> 
          </> 
        }

        { delegacion === 'Coyoacan' &&
          <>
            <MethodGeneral 
              alcaldia= 'Coyoacán'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {CoyoacanImg}
              img1= {CoyoacanImg2}
              img2= {CoyoacanImg3}
            /> 
          </> 
        }

        { delegacion === 'Cuajimalpa' &&
          <>
            <MethodGeneral 
              alcaldia= 'Cuajimalpa de Morelos'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {CuajimalplaImg}
              img1= {CuajimalplaImg2}
              img2= {CuajimalplaImg3}
            /> 
          </> 
        }
        { delegacion === 'Cuauhtemoc' &&
          <>
            <MethodGeneral 
              alcaldia= 'Cuauhtémoc'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {CuauhtemocImg}
              img1= {CuauhtemocImg2}
              img2= {CuauhtemocImg3}
            /> 
          </> 
        }
        { delegacion === 'Gustavo' &&
          <>
            <MethodGeneral 
              alcaldia= 'Gustavo A. Madero'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {GustavoImg}
              img1= {GustavoImg2}
              img2= {GustavoImg3}
            /> 
          </> 
        }
        { delegacion === 'Iztacalco' &&
          <>
            <MethodGeneral 
              alcaldia= 'Iztacalco'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {IztacalcoImg}
              img1= {IztacalcoImg2}
              img2= {IztacalcoImg3}
            /> 
          </> 
        }
        { delegacion === 'Iztapalapa' &&
          <>
            <MethodGeneral 
              alcaldia= 'Iztapalapa'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {IztapalapaImg}
              img1= {IztapalapaImg2}
              img2= {IztapalapaImg3}
            /> 
          </> 
        }
        { delegacion === 'Magdalena Contreras' &&
          <>
            <MethodGeneral 
              alcaldia= 'Magdalena Contreras'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {MagdalenaImg}
              img1= {MagdalenaImg2}
              img2= {MagdalenaImg3}
            /> 
          </> 
        }
        { delegacion === 'Miguel Hidalgo' &&
          <>
            <MethodGeneral 
              alcaldia= 'Miguel Hidalgo'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {MiguelImg}
              img1= {MiguelImg2}
              img2= {MiguelImg3}
            /> 
          </> 
        }
        { delegacion === 'Milpa Alta' &&
          <>
            <MethodGeneral 
              alcaldia= 'Milpa Alta'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {MilpalltaImg}
              img1= {MilpalltaImg2}
              img2= {MilpalltaImg3}
            /> 
          </> 
        }
        { delegacion === 'Tlahuac' &&
          <>
            <MethodGeneral 
              alcaldia= 'Tláhuac'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {TlahuacImg}
              img1= {TlahuacImg2}
              img2= {TlahuacImg3}
            /> 
          </> 
        }
        { delegacion === 'Tlalpan' &&
          <>
            <MethodGeneral 
              alcaldia= 'Tlalpan'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {TlalpanImg}
              img1= {TlalpanImg2}
              img2= {TlalpanImg3}
            /> 
          </> 
        }
        { delegacion === 'Venustiano Carranza' &&
          <>
            <MethodGeneral 
              alcaldia= 'Venustiano Carranza'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {VenustianoImg}
              img1= {VenustianoImg2}
              img2= {VenustianoImg3}
            /> 
          </> 
        }
        { delegacion === 'Xochimilco' &&
          <>
            <MethodGeneral 
              alcaldia= 'Xochimilco'
              delito= 'Robo'
              metodo= 'análisis estadístico y regresiones lineales'
              datos= ' Correlación máxima 0.337'
              img=  {XochiImg}
              img1= {XochiImg2}
              img2= {XochiImg3}
            /> 
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
