import React, { useState } from 'react'

import s from './Header.module.css';
import { FaBars } from 'react-icons/fa';


type Props = {}

const Header = (props: Props) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    return (
        <header className={`${s.Header} ${expanded ? s.expanded : ''}`}>
            <nav>
                <div className='container'>
                    <h1>Mairala</h1>
                    <ul>
                        <li className="underline underline-offset-8"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className="hamburger-menu" onClick={handleToggle}>
                        <FaBars className='text-white' />
                    </button>
                </div>
            </nav>



        </header>
    )
}

export default Header;