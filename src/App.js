import Header from "./Navbar/Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./Carrito/CustomProvider"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App