import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) { //props = what we are passing from parent (app.js here) to child (header.js) component
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "props.searchBar from Appjs to Headerjs is false"}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Title from defaultProps", // this value of title will be displayed if no value for title is passed to Headerjs from Appjs
    searchBar: false
}

Header.propTypes = {
    title: PropTypes.string, // this states a rule that title prop should be string, 
    // if anything else there will be an error in console (app will work)
    // this title corresponds to props.title that is coming from Appjs, we can define for any number of such props that are coming
    searchBar: PropTypes.bool.isRequired //similar for searchBar coming from Appjs, it should be bool and 
    // SHOULD be sent by Appjs else there will be a warning in console (app will work)
}