'use client'

import { useRouter } from "next/navigation"
import menuData from "./menuData"
import { HamMenuState } from "@/store/HamMenu/atom";
import { useRecoilState } from "recoil";

export const HamMenu = () => {
    const router = useRouter();
    const [ isOpen, setIsOpen ] = useRecoilState(HamMenuState);

    const handleClick = (path) => {
        setTimeout(() => { setIsOpen(!isOpen) }, 200);
        router.push(path);
    };

    return (
        <div className="">
            <div className="flex-col justify-between items-center text-black">
                {menuData.map((item, index) => (
                    <div key={item.path || index} className="m-8" onClick={() => handleClick(item.path)}>
                        <span className="cursor-pointer text-black text-bold hover:text-primary">
                            { item.title }
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex-cols justify-between items-center text-black text-bold">
                <div className="m-8 cursor-pointer hover:text-primary flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <span className="cursor-pointer hover:text-primary">Sign Up</span>
                </div>
                <div className="m-6 cursor-pointer w-20 h-12 hover:text-black hover:bg-primary p-3 border-2 rounded-3xl flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                    <span className="cursor-pointer">Login</span>
                </div>
            </div>
        </div>
    );
}
