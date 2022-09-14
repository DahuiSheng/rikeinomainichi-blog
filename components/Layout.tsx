import { ReactNode } from "react";
import Navbar from "./Navbar";
import Seo from "./_common/Seo";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Seo />
            <Navbar />
            <main className="pt-16">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
