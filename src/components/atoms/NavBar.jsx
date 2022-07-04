import { Link } from 'react-router-dom'
import { NavBarStyled } from '../style/Styled'
import Title from '../atoms/Title'
import { useState } from 'react'

const NavBar = () => {
    const [theme, SetTheme] = useState(false)

    function changeTheme() {}

    return (
        <>
            <Title />
            <NavBarStyled>
                <Link to="/home">Accueil</Link>
                <Link to="/tabContainer">Accéder à mes tableaux</Link>
                <Link to="/login">Connexion</Link>
                <button onClick={changeTheme}>Changer de thème</button>
            </NavBarStyled>
        </>
    )
}

export default NavBar
