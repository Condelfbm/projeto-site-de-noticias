import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineBell } from 'react-icons/ai'
import '../Css/navbar.css'


export function NavBar(){
    return (
        <>
        <div className='navBar'>
                <div className='row'>
                    <div className='col s4 m4 l4' id='menu'>
                        <AiOutlineMenu className='menu-icon' />
                    </div>
                    <div className='col s4 m4 l4' id='title'>
                        Folclöre
                    </div>  
                    <div className='col s2 m2 l2' id='notes'>
                        <AiOutlineBell className='notes-icon' />
                    </div>
                    <div className='col s1 m1 l1' id='search' name="search">
                        <AiOutlineSearch className='search-icon' />
                    </div>
                    <div className='col s1 m1 l1' id='profile'>
                        <AiOutlineUser className='profile-icon' />
                    </div>
                </div>
        </div>
        
        
        </>
    )
}