import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends Component {
    render() {
        return (
            <div className="container">
                <Grid>
                    <Cell col={4} xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png" alt="avatar" className="avatar-img"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Santiago Caicedo</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid rgb(30,181,215)', width: '50%' }} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione sed reprehenderit sint, labore nam enim beatae? Asperiores, unde?orem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione sed reprehenderit sint, labore nam enim beatae? Asperiores, unde</p>
                        <hr style={{ borderTop: '3px solid rgb(30,181,215)', width: '50%' }} />
                        <h5>Phone</h5>
                        <p>(+1)(403)(614 6242)</p>
                        <h5>Email</h5>
                        <p>santiagocaicedo.a@gmail.com</p>
                        <h5>Github</h5>
                        <p>SantiagoCaicedoA</p>
                        <hr style={{ borderTop: '3px solid rgb(30,181,215)', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8} xs={12}>
                        <h2>Education</h2>
                        <Education
                            startYear={2005}
                            major={"Elentary School - High School"}
                            endYear={2019}
                            schoolName={"Colegio Andino - Deutsche Schule (Bogotá, Colombia)"}
                        />
                        <Education
                            startYear={2020}
                            endYear={2022}
                            major={"IT - Software Developer"}
                            schoolName={"Southern Alberta Institute of Technology (Calgary, Canada)"}
                        />

                        <hr style={{ borderTop: "3px solid black" }} />

                        <h2>Experience</h2>
                        <Grid>
                            <Cell col={4}>
                                <Experience
                                    job={"Programmer"}
                                    startYear={"Since 2019"}

                                />
                            </Cell>
                            <Cell col={8} >
                                <p style={{marginTop: '50px'}}>To see some of the projects that I have built, go to the
                                <a style={{ color: 'rgb(30,181,215)', textDecoration: 'none' }} href="/projects"> Projects </a>
                                section.</p>
                            </Cell>
                        </Grid>

                        <Experience
                            job={"Barista at Starbucks"}
                            startYear={2019}
                            endYear={"- Ongoing"}
                            jobDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione sed reprehenderit sint, labore nam enim beatae? Asperiores, unde?orem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione sed reprehenderit sint, labore nam enim beatae? Asperiores, unde"}

                        />

                        <hr style={{ borderTop: "3px solid black" }} />

                        <h2>Skills</h2>
                        <h6 style={{ color: "rgb(30,181,215)" }}>Programming</h6>
                        <Skills
                            skill="Html/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={85}
                        />
                        <Skills
                            skill="React"
                            progress={75}
                        />
                        <Skills
                            skill="Java"
                            progress={80}
                        />
                        <Skills
                            skill="Photoshop"
                            progress={60}
                        />
                        <h6 style={{ color: "rgb(30,181,215)" }}>Languages</h6>
                        <Skills
                            skill="Spanish"
                            progress={100}
                        />
                        <Skills
                            skill="English"
                            progress={90}
                        />
                        <Skills
                            skill="German"
                            progress={40}
                        />

                        <hr style={{ borderTop: "3px solid black" }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
