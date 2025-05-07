import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Topbar() {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-topbar sticky-top shadow-sm">
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand name-logo" to="/">Navanesh <span>Kanth N A</span></Link>



                    <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'About', path: '/about' },
                            { label: 'Skills', path: '/skills' },
                            { label: 'Projects', path: '/projects' },
                            { label: 'Contact', path: '/contact' }
                        ].map(({ label, path }) => (
                            <li className="nav-item" key={path}>
                                <Link
                                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                                    to={path}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <style jsx>{`
                .custom-topbar {
                    background: linear-gradient(135deg, #43cea2, #185a9d);
                    padding: 1rem 0;
                    z-index: 1000;
                }

                .name-logo {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
                }
                .name-logo span {
                    color: #fff700;
                    font-weight: 700;
                }

                .nav-link {
                    position: relative;
                    color: #f0f0f0;
                    font-weight: 500;
                    transition: all 0.3s ease-in-out;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: #fff700;
                    transition: width 0.3s ease-in-out;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .nav-link.active {
                    color: #fff700;
                    font-weight: 600;
                }

                .nav-link.active::after {
                    width: 100%;
                }
            `}</style>
        </>
    );
}
