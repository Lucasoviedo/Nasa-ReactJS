import React from 'react'
import './header.css'
import NasaNegroLogo from '../../assets/logos/nasa-negro-logo.svg'

export const Header = () => {

    return (
        <div className='header-container'>
            <a className='footer-link' href='https://github.com/Lucasoviedo/Portfolio/' 
            target='_blank' rel="noreferrer">
                <img src={NasaNegroLogo} className='header-logo'/>
            </a>
        </div>
    )
}