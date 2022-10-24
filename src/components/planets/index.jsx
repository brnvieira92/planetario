import React, { Fragment, useState, useEffect } from 'react';
import { Planet } from '../planet';
import {Form} from '../form';

async function getPlanets(){
    let response = await fetch('http://127.0.0.1:5173/api/planets.json') //primeiro await é para retornar a api, colocando no response
    let data = await response.json() //segundo await é o tempo para processar em json e retornar para varaivel data
    return data;
}

export const Planets = () =>{
    const [planets, setPlanets] = useState([]) //useState configurando os states para o component Planets

    useEffect(()=>{
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    },[])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

   const removeLast = ()=>{
        let new_planets = [...planets]
        new_planets.pop() // metodo pop retira o ultimo elemento do array
        setPlanets(new_planets)
    }

   const duplicateLastPlanet = ()=>{
        let last_planet = planets[planets.length -1]
        setPlanets([...planets, last_planet])
    }
    return(
        <>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLastPlanet}>Duplicate Last</button>
                <hr/>
                {planets.map((planet, index)=>{
                    return( 
                        <Planet
                            name={planet.name}
                            description={planet.description}
                            link={planet.link}
                            img_url={planet.img_url}
                            id={planet.id}
                            key={index}
                        />
                     )})
                }
        </>
    )

}


//abaixo é uma forma de usar state com class
/* async function getPlanets(){
    let response = await fetch('http://127.0.0.1:5173/api/planets.json') //primeiro await é para retornar a api, colocando no response
    let data = await response.json() //segundo await é o tempo para processar em json e retornar para varaivel data
    return data;
}

export class Planets extends React.Component{
    constructor(props){ //esse construtor é chamado assim que a classe é inicializada assim como em outras linguagens; iniclaizado com as props que foram passados
        super(props); // essa super(props) vai passar as props lá para as classes que estão herdando (REACT.COMPONENT, exemplo)
        this.state = {
            planets: []
        }
    }

    componentDidMount(){ //componentdidmount quando o component for montado esse metodo vai rodar, chamando essa api ai abaixo
        getPlanets().then(data=>{ //esse .then é para aguardar a funcao ser resolvida ja que é async
            this.setState(state=> ({
                planets: data['planets']
            }))
        })
    }

    removeLast = ()=>{
        let new_planets = [...this.state.planets]
        new_planets.pop() // metodo pop retira o ultimo elemento do array
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = ()=>{
        let last_planet = this.state.planets[this.state.planets.length -1]
        this.setState(state=>({
            planets:[...this.state.planets, last_planet]
        }))
    }

    render(){
        return(
            <>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
                <hr/>
                {this.state.planets.map((planet, index)=>{
                    return( 
                        <Planet
                            name={planet.name}
                            description={planet.description}
                            link={planet.link}
                            img_url={planet.img_url}
                            id={planet.id}
                            key={index}
                        />
                     )})
                }
            </>
        
        )
    }
} */


