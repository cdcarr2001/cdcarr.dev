import Footer from "@components/footer/Footer";
import NavBar from "@components/navbar/NavBar";
import type { ReactElement } from "react";
import { Outlet } from "react-router";

export default function MainLayout(): ReactElement {

    return(
        <div
            className='layout main'
        >
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}