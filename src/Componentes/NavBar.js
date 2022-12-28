import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineBell } from 'react-icons/ai'
import '../Css/navbar.css'


export function NavBar(){
    return (
        <>
        
        <div className='nav'>
            <div className='search'><AiOutlineSearch className='search-icon' /></div>
            <div className='profile'><AiOutlineUser className='profile-icon' /></div>
            <div className='notes'><AiOutlineBell className='notes-icon' /></div>
            <div className='menu'><AiOutlineMenu className='menu-icon' /></div>
            <div className='center-align'><a href='/' className='a'>Folclöre</a></div>
            
        </div> 
        
        </>
    )
}