import { render } from '@testing-library/react';
import React from 'react';
import { Title } from './Title';
import 'materialize-css/dist/css/materialize.min.css'

export default function NavBar(){
    return(
        <div className='container fluid'>
            <div className='row'>
                <div className='col s3 m3 l3 valign-wrapper'>
                    um terço
                </div>
                <div className='col s6 m6 l6'>
                    <Title/>
                </div>
                <div className='col s3 m3 l3 right-align'>
                    um terço
                </div>
            </div>
        
        </div>
    )
}