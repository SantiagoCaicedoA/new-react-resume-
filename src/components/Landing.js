import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import './components.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="container" style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png" alt="avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Java | SQL</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http:google.com" target="_blank" rel="noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                {/* GitHub */}
                                <a href="http:google.com" target="_blank" rel="noreferrer">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                                {/* Instagram */}
                                <a href="http:google.com" target="_blank" rel="noreferrer">
                                    <i class="fa fa-instagram"aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
