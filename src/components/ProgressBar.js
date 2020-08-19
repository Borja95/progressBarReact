import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ProgressBar.css';

function ProgressBar(props) {
    return (
        <div className="contenedorProgressBar">
            <span className="progressText">{props.texto ? props.texto : "Procesando Archivo(s)"}</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "100%"}}>
                </div>
            </div>
            
        </div>
    );
}

export default ProgressBar;