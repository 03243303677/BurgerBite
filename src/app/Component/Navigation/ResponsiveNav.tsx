"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Mobile from './Mobile'

const ResponsiveNav = () => {
  const [showNav, setShowNav ]  = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav (false);

  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <Mobile showNav={showNav} closeNav = {closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav
