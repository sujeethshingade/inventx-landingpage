'use client'

import { useRouter } from "next/navigation"
import menuData from "./menuData"
import { HamMenuState } from "@/store/HamMenu/atom";
import { useRecoilState } from "recoil";

export const HamMenu = () => {
    const router = useRouter();
    const [ isOpen, setIsOpen ] = useRecoilState(HamMenuState);

    return <div className="">
        <div className="flex-col justify-between items-center text-waterloo">
            {menuData.map((item, index) => (
                <div key={index} className="m-8" onClick={() => router.push(`${item.path}`)}>
                    <span className="cursor-pointer hover:text-primary" 
                        onClick={() => {
                            router.push(`${item.path}`);
                            setTimeout(() => { setIsOpen(false) }, 100);
                        }}>
                            { item.title }
                    </span>
                </div>
            ))}
        </div>
        <div className="flex-cols justify-between items-center text-waterloo">
            <div className="m-8 cursor-pointer hover:text-primary flex items-center"><span className="cursor-pointer hover:text-primary" onClick={() => setIsOpen(false)}>Signup</span></div>
            <div className="m-6 cursor-pointer w-20 h-12  hover:text-black hover:bg-primary p-3 border-2 rounded-3xl flex justify-center items-center">
                <span className="cursor-pointer" onClick={() => setIsOpen(false)}>Login</span>
            </div>
        </div>
    </div>
}