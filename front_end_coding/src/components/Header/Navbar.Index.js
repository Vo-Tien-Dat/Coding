

import './Navbar.Index.scss';
import { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
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
                        <li className='nav-item'>
                            <Link
                                to={{
                                    pathname: '/explore'
                                }}
                                className='nav-link'
                            >Explore</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to={{
                                    pathname: '/problems'
                                }}
                                className='nav-link'
                            >Problem</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to={{
                                    pathname: '/contest'
                                }}
                                className='nav-link'
                            >Contest</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to={{
                                    pathname: '/rating'
                                }}
                                className='nav-link'
                            >Rating</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='navbar-collapse-table'>
                <ul className={classnames(
                    'navbar-nav-table',
                    { 'active': activeNavbar }
                )}>
                    <li className='nav-item-table'>
                        <Link
                            to={{
                                pathname: '/explore'
                            }}
                            className='nav-link'
                        >Explore</Link>
                    </li>
                    <li className='nav-item-table'>
                        <Link
                            to={{
                                pathname: '/problems'
                            }}
                            className='nav-link'
                        >Problem</Link>
                    </li>
                    <li className='nav-item-table'>
                        <Link
                            to={{
                                pathname: '/rating'
                            }}
                            className='nav-link'
                        >Rating</Link>
                    </li>
                    <li className='nav-item-table'>
                        <Link
                            to={{
                                pathname: '/contest'
                            }}
                            className='nav-link'
                        >Contest</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default NavbarIndex;