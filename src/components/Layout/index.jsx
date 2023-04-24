import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpButton from "./components/UpButton";

const Layout = ({children}) => {
    return (
        <div>
            <Header
                header="Гыгыгы"
                navButtons={[]}
            />
            <div className='container'>
                {children}
            </div>
            <Footer links="" />
            <UpButton />
        </div>
    )
}

export default Layout; 