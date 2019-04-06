import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa */}
            <NavItem link="/" icon="home" label="Início" />
            <NavItem link="/users" icon="user" label="Usuário" />
            <NavItem link="https://github.com/GabrielCamp96" icon="github" label="Github" />
            <NavItem link="https://www.linkedin.com/in/gcamp96/" icon="linkedin" label="LinkedIn" />
        </nav>
    </aside>