import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CubePhoto from "./pages/CubePhoto.jsx";
import Form from './pages/Form.jsx'
import { Route, Routes } from "react-router-dom";

function App() {
    
    return (
        <div className="m-0 p-0 bg-slate-200 min-h-screen">
            <Layout className="h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<CubePhoto />} />
                    <Route path="/agregar_imagen" element={<Form />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
