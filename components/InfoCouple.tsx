import { Session } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

const InfoCouple = () => {
    return (
        // Containerの中で完結するよう、relativeを記述。
        <div className="relative bg-white pt-4">

            {/* 背景色と位置の情報 */}
            <div className="container max-w-screen-md h-9 bg-blue-300 absolute top-0 px-5">

                {/* テキストの情報 */}
               <span className="text-white text-lg font-bold px-2 my-auto">
                    理系カップルのブログについて
               </span>
            </div>

            {/* 運営の情報 */}
            <div className="pt-3">
                {/* だいちゃん */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="avatar">
                        <div className=" w-20 h-20 rounded-full ml-4">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid-rows-2">
                            {/* 名前 */}
                            <div className="font-semibold">
                                だいちゃん
                            </div>
                            {/* 紹介 */}
                            <div className="text-sm">
                                <p>
                                    エンジニア彼氏
                                </p>
                                <p>
                                    らなちゃんを愛してる。
                                </p>
                                <p>
                                    技術系・料理系の記事を大体担当。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* らなちゃん */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="avatar">
                        <div className=" w-20 h-20 rounded-full ml-4">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid-rows-2">
                            {/* 名前 */}
                            <div className="font-bold">
                                らなちゃん
                            </div>
                            {/* 紹介 */}
                            <div className="text-sm">
                                <p>
                                    だいちゃんを愛してる。
                                </p>
                                <p>
                                    旅行系・生活系の記事を大体担当
                                </p>
                                <p>
                                    ハムスター。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* devider */}
            <div className="divider"></div> 
        </div>
    );
};

export default InfoCouple;
