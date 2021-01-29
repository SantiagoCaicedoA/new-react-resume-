import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export default class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h6>{this.props.startYear} - {this.props.endYear}</h6>
                    <p style={{color: 'grey'}}>{this.props.major}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia quisquam reiciendis fuga consectetur alias minus, ipsa debitis amet nobis inventore modi velit in eaque illum corrupti impedit, aperiam placeat.</p>
                </Cell>
            </Grid>
        )
    }
}
