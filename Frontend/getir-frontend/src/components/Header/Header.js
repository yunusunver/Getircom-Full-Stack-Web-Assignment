import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Getir.com</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Tüm Görev Listesi </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tamamlanan Görevler</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Tamamlanmayan Görevler</a>
                </li>
              </ul>
            
            </div>
          </nav>
        )
    }
}
