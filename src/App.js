import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import CustomProvider from "./CustomProvider"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App