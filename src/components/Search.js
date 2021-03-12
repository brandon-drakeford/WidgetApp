import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])
    const [debouncedTerm, setDebouncedTerm] = useState(term)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedTerm
            },
          });
     
          setResults(data.query.search);
        };
        if (debouncedTerm) {
          search();
        }
      }, [debouncedTerm])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>

                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                </div>

                 {/* Note: I DO NOT recommend using the below syntax unless you know the trusted source. 
                     This will open your app to XSS Scripting Attacks! This is just an example since I am
                     using the Wikipedia Search API to list out search results.*/}

                <span dangerouslySetInnerHTML ={{ __html: result.snippet}}></span>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input className="input" onChange={e => setTerm(e.target.value)}value={term}/>    
                </div>    
            </div>

            <div className="ui celled list">{renderedResults}</div> 
        </div>
    )
}

export default Search