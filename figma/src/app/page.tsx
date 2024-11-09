import React from 'react'
import Project from './componenets/Project'
import Hero from './componenets/Hero'
import Appusing from './componenets/Appusing'
import Clients from './componenets/Clients'
import Customize from './componenets/Customize'
import Data from './componenets/Data'
import Extention from './componenets/Extention'
import Logo from './componenets/Logo'
import Plan from './componenets/Plan'
import Work from './componenets/Work'


function page() {
  return (
    <div>
      <Hero/>
      <Project/>
      <Extention/>
      <Customize/>
       <Plan/>
       <Work/>
      <Data/>
      <Logo/>
      <Appusing/>
      <Clients/>
    </div>
  )
}

export default page
