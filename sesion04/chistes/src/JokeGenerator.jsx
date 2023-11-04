import { useEffect, useState } from 'react'
import './JokeGenerator.css'

const JokeGenerator = () => {
    const [jokes, setJokes] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getJoke = async () => {
        setIsLoading(true)
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        setJokes(data.joke)
        setIsLoading(false)
    }

    useEffect(() => {
        getJoke()
    }, [])

    return (
        <>
            <div className='JokeApp'>
                <h1>🤡 Joke Generator 🤣</h1>
                {isLoading ? <h3>Cargando...</h3> : <p>{jokes}</p>}
                <button onClick={getJoke}>New Joke</button>
            </div>
        </>
    )
}

export default JokeGenerator