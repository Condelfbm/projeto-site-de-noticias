import { render } from '@testing-library/react';
import React from 'react';
import { Title } from './Title';
import 'materializecss'

export default function NavBar(){
    return(
        <div className='' style={{backgroundColor: 'brown lighten-2'}}>
        <Title/>
        </div>
    )
}