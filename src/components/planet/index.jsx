import React, { useEffect, useState } from 'react';
import '../shared/gray_img/style.css'
import { GrayImg } from '../shared/gray_img';
import { DescriptionWithLink } from '../shared/DescriptionWithLink';

async function getSatellites(id){
    let response = await fetch(`http://127.0.0.1:5173/api/${id}.json`);
    let data = await response.json();
    return data;
}

export const Planet = (props) => {
    const [satellite, setSatellite] = useState([])

    useEffect(()=>{
        getSatellites(props.id).then(data =>{
            setSatellite(data['satellites'])
        })
    },[])
    
    let title;
        if(props.title_with_underline)
            title = <h4><u>{props.name}</u></h4>
        else
            title = <h4>{props.name}</h4>
    return(
        <>
             {title}
                <DescriptionWithLink description={props.description} link={props.link} />
                <GrayImg img_url={props.img_url} gray={props.gray} />
                <h4>Satelites</h4>
                <ul>
                    {satellite.map((satelite, index)=>
                        <li key={index}>{satelite.name}</li>
                    )}
                </ul>
        </>
    )

}
 /* async function getSatellites(id){
    let response = await fetch(`http://127.0.0.1:5173/api/${id}.json`);
    let data = await response.json();
    return data;
}

export class Planet extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        satellites:[]
    }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data=>{
            this.setState(state=>({
                satellites: data['satellites']
            }))
        })
    }

    render(){
        let title;
        if(this.props.title_with_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>
        return(
            <>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link} />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
                <h4>Satelites</h4>
                <ul>
                    {this.state.satellites.map((satelite, index)=>
                        <li key={index}>{satelite.name}</li>
                    )}
                </ul>
            </>
        )
    }
} */

/* export const Planet = (props)=>{

    const names = ['a', 'b', 'c', 'd', 'e', 'f'];

    let title;

    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
        else
            title = <h4>{props.name}</h4>
    return(
        <>
        <div>
            {title}
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <hr />
        </div>
        </>
    )
}  */

/* export const Planet = (props)=>{

    const names = ['a', 'b', 'c', 'd', 'e', 'f'];

    let title;

    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
        else
            title = <h4>{props.name}</h4>
    return(
        <>
        <div>
            {title}
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <hr />
        </div>
        </>
    )
} */