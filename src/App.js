import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/footer'
import './style.css'

function App() {
    return (
        <div>
            <Navbar />
            <MainContent className="main-content"/>
            <Footer />
         </div>
    )
}

export default App