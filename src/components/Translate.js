import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Chinese",
        value: "zh-CN"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Japanese",
        value: "ja"
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown label={"Select a Language"} selected={language} removeHeading={true} onSelectedChange={setLanguage} options={options} />

            <hr style={{ marginTop: '30px' }} />

            <h3 className="ui header">Translation:</h3>

            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate