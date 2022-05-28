

import './Navbar.Index.scss';
import { useState } from 'react';
import classnames from 'classnames';
function NavbarIndex() {
    const [activeNavbar, setActiveNavbar] = useState(true);

    const handleActiveNavbar = () => {
        setActiveNavbar(!activeNavbar);
        console.log(activeNavbar)
    }
    return (
        <>
            <div className='navbar-form'>
                <div className='navbar-icon-collapse' onClick={handleActiveNavbar}>
                    <i class="fa-solid fa-bars nav-icon"></i>
                </div>
                <div className='navbar-brand'>
                    <div className='navbar-brand-text'>
                        Coding
                    </div>
                </div>
                <div className='navbar-collapse'>
                    <ul className='navbar-nav'>
                        <div className='nav-item'>Explore</div>
                        <div className='nav-item'>Problems</div>
                        <div className='nav-item'>Contest</div>
                        <div className='nav-item'>Rating</div>
                    </ul>
                </div>

            </div>
            <div className='navbar-collapse-table'>
                <ul className={classnames(
                    'navbar-nav-table',
                    { 'active': activeNavbar }
                )}>
                    <li className='nav-item-table'>Explore</li>
                    <li className='nav-item-table'>Problem</li>
                    <li className='nav-item-table'>Rating</li>
                    <li className='nav-item-table'>Contest</li>
                </ul>
            </div>
        </>

    )
}

export default NavbarIndex;