import React from "react"
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
      <div className="main">
        <div className="main-page">
            {/* <Header /> */}
            <Section />
            <Footer />
        </div>
      </div>
    )
  }

export default Home