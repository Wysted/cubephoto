import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



function Layout({ children }){
    return (
        <>
        <Header/>
            <main className='flex justify-center box-border min-full p-6'>
                { children }
            </main>
        <Footer/>
        </>
    );
}

export default Layout