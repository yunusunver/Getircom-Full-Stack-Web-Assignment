import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Getir.com</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Tüm Görev Listesi </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Tamamlanan Görevler</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Tamamlanmayan Görevler</a>
                </li>
              </ul>
            
            </div>
          </nav>
        )
    }
}
