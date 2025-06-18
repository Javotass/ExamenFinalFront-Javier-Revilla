import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx"
import {PageProps} from "$fresh/server.ts"


export default function Layout({Component}: PageProps){
    return (
        <div class = "layout">
            <Header/>
            <Component/>
            <Footer/>
        </div>
    );
}