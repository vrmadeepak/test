import React from 'react';
import './ReactJS.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo-main.png'

const ReactJS = () => {
    return(
        <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/"><img src={logo} alt="logo" width='156' /></Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header>

        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/courses/react">
                        <span data-feather="home">ReactJS</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="file"></span>
                        Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="shopping-cart"></span>
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="users"></span>
                        Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="layers"></span>
                        Integrations
                        </a>
                    </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="https://vermadeepak.in" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="file-text"></span>
                        Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="file-text"></span>
                        Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="file-text"></span>
                        Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://vermadeepak.in">
                        <span data-feather="file-text"></span>
                        Year-end sale
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>

                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                    </div>
                </div>

                <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                        </tr>
                        <tr>
                        <td>1,002</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>elit</td>
                        </tr>
                        <tr>
                        <td>1,003</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>Praesent</td>
                        </tr>
                        <tr>
                        <td>1,003</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>ante</td>
                        </tr>
                        <tr>
                        <td>1,004</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>nisi</td>
                        </tr>
                        <tr>
                        <td>1,005</td>
                        <td>Nulla</td>
                        <td>quis</td>
                        <td>sem</td>
                        <td>at</td>
                        </tr>
                        <tr>
                        <td>1,006</td>
                        <td>nibh</td>
                        <td>elementum</td>
                        <td>imperdiet</td>
                        <td>Duis</td>
                        </tr>
                        <tr>
                        <td>1,007</td>
                        <td>sagittis</td>
                        <td>ipsum</td>
                        <td>Praesent</td>
                        <td>mauris</td>
                        </tr>
                        <tr>
                        <td>1,008</td>
                        <td>Fusce</td>
                        <td>nec</td>
                        <td>tellus</td>
                        <td>sed</td>
                        </tr>
                        <tr>
                        <td>1,009</td>
                        <td>augue</td>
                        <td>semper</td>
                        <td>porta</td>
                        <td>Mauris</td>
                        </tr>
                        <tr>
                        <td>1,010</td>
                        <td>massa</td>
                        <td>Vestibulum</td>
                        <td>lacinia</td>
                        <td>arcu</td>
                        </tr>
                        <tr>
                        <td>1,011</td>
                        <td>eget</td>
                        <td>nulla</td>
                        <td>ClassName</td>
                        <td>aptent</td>
                        </tr>
                        <tr>
                        <td>1,012</td>
                        <td>taciti</td>
                        <td>sociosqu</td>
                        <td>ad</td>
                        <td>litora</td>
                        </tr>
                        <tr>
                        <td>1,013</td>
                        <td>torquent</td>
                        <td>per</td>
                        <td>conubia</td>
                        <td>nostra</td>
                        </tr>
                        <tr>
                        <td>1,014</td>
                        <td>per</td>
                        <td>inceptos</td>
                        <td>himenaeos</td>
                        <td>Curabitur</td>
                        </tr>
                        <tr>
                        <td>1,015</td>
                        <td>sodales</td>
                        <td>ligula</td>
                        <td>in</td>
                        <td>libero</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </main>
            </div>
            </div>
        </>
    );
}

export default ReactJS;