import React, {useEffect,useState} from 'react';

const initialState= {
    name: '',
    description:'',
    link: '',
    img_url:''
}

export const Form = (props) => { //controlando multiplos inputs
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    }) //evento que monitora alteração do input

    const handleSubmit = event => {
        props.addPlanet(fields);
        event.preventDefault();
        setFields(initialState);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div><br/>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input id='description' type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
                </div><br/>
                <div>
                    <label htmlFor='link'>Link:</label>
                    <input id='link' type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
                </div><br/>
                <div>
                    <label htmlFor='img_url'>Image:</label>
                    <input id='img_url' type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                </div><br/>
                <input type="submit"/>
            </form>
        </>
    )
}

/* export const Form = (props) => {
    const [name, setName] = useState('')
    const handleChange = (event) => setName(event.target.value) //evento que monitora alteração do input
    const handleSubmit = event => {
        props.addPlanet({name:name})
        event.preventDefault();
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type="text" value={name} onChange={handleChange}/>
                </div><br/>
                <input type="submit"/>
            </form>
        </>
    )
} */