import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../atoms/NavBar'
import Home from '../molecules/Home'
import TabContainer from '../molecules/TabContainer'
import Login from '../atoms/Login'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/tabContainer" element={<TabContainer />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter
