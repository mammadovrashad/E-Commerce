import React, { FC } from 'react'
import Head from '../Head'
import Navbar from '../Navbar'
import Search from '../Search'

const Header:FC = () => {
  return (
   <>
          <Head/>
          <Navbar/>
          <Search/>
   </>
  )
}

export default Header