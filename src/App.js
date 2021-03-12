import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'
import Footer from './components/Footer'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [gitPath, setGitPath] = useState(window.location.pathname)

    return (
    <div>
        <Header gitPath={gitPath}/>

        <div style={{ marginTop: '30px' }} className="ui container">
            <Route path={gitPath === '/WidgetApp/' ? gitPath : '/'} onSetPath={setGitPath}>
                 <Accordion items={items} />
            </Route>

            <Route path={gitPath === '/WidgetApp/list' ? gitPath : '/list'} onSetPath={setGitPath}>
                  <Search />
            </Route>

            <Route path={gitPath === '/WidgetApp/dropdown' ? gitPath : '/dropdown'} onSetPath={setGitPath}>
                <Dropdown label="Select a color" selected={selected} onSelectedChange={setSelected} options={options} />
            </Route>

            <Route path={gitPath === '/WidgetApp/translate' ? gitPath : '/translate'} onSetPath={setGitPath}>
                 <Translate />
            </Route>
        </div>

        <Footer />
    </div>
    )
}

export default App