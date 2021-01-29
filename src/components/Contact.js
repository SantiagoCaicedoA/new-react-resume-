import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} xs={12}>
                        <h2>Santiago Caicedo</h2>
                        <img src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png" alt="avatar"
                            style={{ width: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam tempore ex, assumenda itaque eos. Hic impedit unde, qui ipsa maxime beatae soluta ex consequatur reprehenderit quis modi molestias.</p>
                    </Cell>
                    <Cell col={6} xs={12}>
                        <h2>Contact Me</h2>

                        <div className="contact-list">

                            <List className="list"> 
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '23px', fontFamily: 'Varela Round, sans-serif' }}>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        (+1)(403)(614 6242)
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '23px', fontFamily: 'Varela Round, sans-serif' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        santiagocaicedo.a@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '23px', fontFamily: 'Varela Round, sans-serif' }}>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                        @santiagocaicerdo
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}
