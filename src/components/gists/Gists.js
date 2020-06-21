import React, { useState } from 'react'; 
import GistsForm from "./GistForm"


export default function Gists() { 
    const [gists, setGists] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getGists = async username => { 
        try { 
            setLoading(true); 
            setError(false); 
            const gists = await fetch(`https://api.github.com/users/${username}`).then(res => {
                console.log('res: ', res); 
                if(res.status !== 200) { 
                    throw new Error('server error')
                }
                return res.json()
            }).then(gists => { 
                setGists(gists); 
                setLoading(false); 
                setError(false);
            })
        } catch(error) { 
            setLoading(false); 
            setError(true); 
            console.log('error: ', error); 
        }

    }
    return(
        <section>
            <h2>Gists</h2>
            <GistsForm getGists={getGists} error={error} loading={loading}/>
        </section>
    )

}