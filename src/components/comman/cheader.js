import React, { Component } from 'react';

class cheader extends Component {
    render() {
        return (
            
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="https://uttarakhandrojgar.com/"><img src='https://uttarakhandrojgar.com/wp-content/uploads/2019/08/logo.png' /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="https://uttarakhandrojgar.com/">Find Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://uttarakhandrojgar.com/post-a-job/#jform">Post Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://uttarakhandrojgar.com/contact-us/">Contact</a>
      </li>
    </ul>
    
  </div>
</nav>

        );
    }
}

export default cheader;