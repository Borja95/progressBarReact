import React, { Component } from 'react';
import './components/ProgressBar';
import ProgressBar from './components/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
state={
  archivosRestantes: 0,
  porcentaje: 0.0
}

simular=async()=>{
  await this.setState({archivosRestantes: 8});
  const archivosTotales=this.state.archivosRestantes;
  var porcentajeUnitario=100/this.state.archivosRestantes;
  const self=this;
  for (let i = 0; i < this.state.archivosRestantes; i++) {
    await setTimeout(function timer(){
      self.setState({porcentaje: self.state.porcentaje+porcentajeUnitario,
      archivosRestantes: self.state.archivosRestantes-1});

      if(i==archivosTotales-1){
        self.setState({porcentaje: 0.0});
      }
    }, (2000*i))
    
  }
}

  render(){
  return (
    <div className="App">
      <button className="btn btn-success" onClick={()=>this.simular()}>Simular</button>
      {this.state.archivosRestantes>0 &&
      <ProgressBar 
        porcentaje={this.state.porcentaje}
        texto="Subiendo Archivos(s) desde App"
      />
      }
      
    </div>
  );
}
}
export default App;
