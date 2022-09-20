import { Session } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

const Footer = () => {
    const { data: session, status } = useSession();

    return (
        <div className="footer p-8 bg-base-200 text-base-content max-w-full ">
            <div>
                <span className="footer-title">Service</span>
                <Link href={"/marketplace"}>
                    <a className="link link-hover">MarketPlace</a>
                </Link>

                {status === "authenticated" ? (
                    <Link href={"/dashboard"}>
                        <a className="link link-hover">DashBoard</a>
                    </Link>
                ) : (
                    <></>
                )}
            </div>

            <div>
                <span className="footer-title">Home</span>
                <Link href={"/about"}>
                    <a className="link link-hover">About</a>
                </Link>

                {status === "authenticated" ? (
                    <div
                        className="link link-hover"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        LogOut
                    </div>
                ) : (
                    <div
                        className="link link-hover"
                        onClick={() => {
                            signIn("google");
                        }}
                    >
                        Login
                    </div>
                )}
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by NiFT Project</p>
            </div>
        </div>
    );
};

export default Footer;
