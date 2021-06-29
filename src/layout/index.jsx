import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        
        <div onClick={scrollToTop}
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 30,
          right: 30,
          cursor: 'pointer',
          padding: 5,
          backgroundColor: '#e9ecef',
          opacity: '70%',
          borderRadius: 10,
          color: '#22179d'
        }}>
          <ArrowUpwardIcon fontSize="large" />
        </div>
        
        <Footer />
      </div>
    </React.Fragment>
  )
}
