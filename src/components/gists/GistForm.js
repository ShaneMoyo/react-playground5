import React, { useState } from 'react'; 


export default function GistsForm({ getGists, error, loading }) { 
    const [username, setUsername ] = useState(""); 
    const handleSubmit = event => { 
        console.log('Submitting: ', username)
        event.preventDefault(); 
        getGists(username); 
    }
    return (
        <form>
            <fieldset>
                <label> Search Gists</label> 
                <input 
                    onChange={({ target: { value }}) => setUsername(value)}
                    type="text"
                    value={username}
                    placeholder="username"
                    /> 
            </fieldset>
            <fieldset>
                <label> Search Gists</label> 
                {!loading? 
                    <input type="submit" onClick={event => handleSubmit(event)}/> : 
                <p style={{ fontSize: 12, color: "yellow"}}> Loading...</p> } 
                {error ? <p style={{ fontSize: 12, color: "red"}}> There was a problem...</p> : null}
            </fieldset>
        </form>
    )
}