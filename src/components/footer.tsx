'use client'
import { AiFillQqCircle } from "react-icons/ai";
import { FaSquareShareNodes } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t bg-stone-800">
            <small className="flex justify-center items-center space-x-1">
                <span>&copy; 2021. All rights reserved. 任复衡 | 硬件工程师</span>
                <AiFillQqCircle
                    onClick={() => {
                        window.open('https://connect.qq.com/widget/shareqq/index.html?url=http://www.coflery.cc&title=%E4%BB%BB%E5%A4%8D%E8%A1%A1%E7%9A%84%E7%AE%80%E5%8E%86', '_blank');
                    }}
                    className="text-white text-base hover:text-slate-300 cursor-pointer transition-colors duration-300"
                />
                <FaSquareShareNodes
                    onClick={() => {
                        window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.coflery.cc&title=%E4%BB%BB%E5%A4%8D%E8%A1%A1%E7%9A%84%E7%AE%80%E5%8E%86', '_blank');
                    }}
                    className="text-white text-base hover:text-slate-300 cursor-pointer transition-colors duration-300"
                />
            </small>
            <small className="hidden sm:block ">About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS.</small>
        </footer>
    )
}