import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './components.css'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}>React Project #1</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore veritatis facere, similique voluptatum blanditiis illum cum praesentium quod expedita.</CardText>
                        <CardActions border>
                            <Button >Github</Button>
                            <Button >Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}>React Project #2</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore veritatis facere, similique voluptatum blanditiis illum cum praesentium quod expedita.</CardText>
                        <CardActions border>
                            <Button >Github</Button>
                            <Button >Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}>React Project #3</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore veritatis facere, similique voluptatum blanditiis illum cum praesentium quod expedita.</CardText>
                        <CardActions border>
                            <Button >Github</Button>
                            <Button >Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>


            )
        }
        if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://tlabglobal.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png) center / cover' }}>Business Card</CardTitle>
                        <CardText>Interactive bussiness card, that allows the user to edit their card on the left side, while the final card on the right card is getting edited simultaneously</CardText>
                        <CardActions border>

                            <a href="https://github.com/SantiagoCaicedoA/businessCard" target="_blank" rel="noreferrer"><Button>Github</Button></a>
                            <a href="https://santiagocaicedoa.github.io/businessCard/" target="_blank" rel="noreferrer"><Button>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://tlabglobal.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png) center / cover' }}>Music Player</CardTitle>
                        <CardText>This is a Music Player, which has 6 preselected mp4 songs. The user is able to stop, resume or choose a song in the list to listen to.</CardText>
                        <CardActions border>
                            <a href="https://github.com/SantiagoCaicedoA/musicPlayer" target="_blank" rel="noreferrer"><Button>Github</Button></a>
                            <a href="https://santiagocaicedoa.github.io/musicPlayer/" target="_blank" rel="noreferrer"><Button>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover' }}>Yougurt Online Store</CardTitle>
                    <CardText>Responsive yogurt store. The website was designed to have lots of images, since the products needed to be shown and recognized by the customers.</CardText>
                    <CardActions border>

                        <a href="https://github.com/SantiagoCaicedoA/yogurtBrand" target="_blank" rel="noreferrer"><Button>Github</Button></a>
                        <a href="https://santiagocaicedoa.github.io/yogurtBrand/" target="_blank" rel="noreferrer"><Button>Live Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{ color: 'white' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card className="card" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover' }}>Logo Portfolio</CardTitle>
                    <CardText>This website was created to be colorful and full of cards with logos in them. It has multiple logo pictures, organized in columns.</CardText>
                    <CardActions border>
                        <a href="https://github.com/SantiagoCaicedoA/logoPortfolio" target="_blank" rel="noreferrer"><Button>Github</Button></a>
                        <a href="https://santiagocaicedoa.github.io/logoPortfolio/" target="_blank" rel="noreferrer"><Button>Live Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{ color: 'white' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }

    }


    render() {
        return (
            <div className="category-tabs">

                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
                    <Tab >React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Projects