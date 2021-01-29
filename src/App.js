import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Main from './components/Main'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">  
    <Layout>
        <Header className="header-color"  scroll>
            <h6><img src="https://www.seedlang.com/images/seedlang_logo_with_background3.png" alt=""/> 
            <a href="/" style={{ textDecoration: 'none', color: 'white'}}>Santiago<span style={{fontWeight: 'bold'}}>Caicedo</span></a>
            </h6>
            
            <Navigation >
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{background: 'rgb(30,181,215) '}}>
            <h6>
            <img style={{height: '40px', marginBottom: '5px',marginLeft: '8px'}}src="https://www.seedlang.com/images/seedlang_logo_with_background3.png" alt=""/> 
                <a href="/" style={{ textDecoration: 'none', color: 'white', marginLeft: '5px',marginTop: '5px'}}>Santiago<span style={{fontWeight: 'bold'}}>Caicedo</span></a>
            </h6>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
} 

export default App;
