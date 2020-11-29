import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'

export default (props) => (
    <div className="App">
        <Card titulo="#04 - Componente de repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
                </ComFilhos>
            <ComParametro titulo="Esse é o título 1234" 
            subtitulo="Esse é o subtitulo 4321" />
        </Card>

        <Card titulo="#02 - Componente com parametro">
            <ComParametro titulo="Esse é o título 1234" 
            subtitulo="Esse é o subtitulo 4321" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

        {/* <Primeiro />
        <ComParametro titulo="Opa" 
        subtitulo="Epa" /> */}
    </div>
)