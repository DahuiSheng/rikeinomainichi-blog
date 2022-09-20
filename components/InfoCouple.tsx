import { Session } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

const InfoCouple = () => {
    return (
        <footer className="footer footer-center p-4 bg-white text-base-content">
            <div>
                <Link href={"/"}>
                    <p className="text-base">♫ 利用規約</p>
                </Link>
                <p>Copyright © 2022 理系カップルのブログ</p>
                <p>All right reserved</p>
            </div>
        </footer>
    );
};

export default InfoCouple;
