import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Connection  from './pages/Connecter/Connection';
import Inscription from './pages/Inscrir/Inscription';
import NoPage from "./pages/NoPage";
import ForgotPassW from './pages/ForgotenPassW/ForgotPassW';
// import { Navbars } from './Navbar';
// import { Liaison } from './pages/Liaison/Liaison';


export default function App() {
 return(
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Liaison />} /> */}
            {/* <Route path='/' element={<Navbars />} /> */}
            <Route path="/" element={<Layout />} >
            <Route path='home'  element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route index element={<Connection />} />
            <Route path="Inscrir/Inscription" element={<Inscription />} />
            <Route path="ForgotenPassW/ForgotPassW" element={<ForgotPassW />} />
            <Route path="*" element={<NoPage />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
