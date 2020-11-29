/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'


export default () => (
    <div className="App">
        <Card titulo="#06 - Componente Condicional v2">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Componente Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>

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