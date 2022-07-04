import { LoginStyled } from '../style/Styled'
import { useHandleElm } from '../hooks/UseHandleElm'

const Login = () => {
    const { blockLoading } = useHandleElm()

    return (
        <LoginStyled>
            <form onSubmit={blockLoading}>
                <input type="email" placeholder="Email..." />
                <br />
                <input type="text" placeholder="Indentifiant..." />
                <br />
                <button>Connectez-vous</button>
            </form>
        </LoginStyled>
    )
}

export default Login
