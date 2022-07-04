import styled from 'styled-components'

const AppStyled = styled.div`
    text-align: center;
`

const TabStyled = styled.div`
    border: 2px solid black;
    padding: 10px;
    margin: 15px;
`
const ListStyled = styled.div`
    border: 2px solid green;
    padding: 10px;
    margin: 15px;
`

const TodoStyled = styled.div`
    border: 2px solid red;
    padding: 10px;
    margin: 15px;
`

const TabContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const TabFormStyled = styled.div`
    margin-top: 20px;
`

const LoginStyled = styled.div`
    margin-top: 20px;
`

const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;
`

export {
    AppStyled,
    ListStyled,
    TabStyled,
    TodoStyled,
    TabContainerStyled,
    LoginStyled,
    TabFormStyled,
    NavBarStyled,
}
