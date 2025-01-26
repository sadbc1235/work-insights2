'use client'

import { useCallback, useEffect, useState } from "react"
import HeaderNav from "../nav/HeaderNav";

export default function Header() {
    useEffect(() => {
        window.addEventListener('scroll', handle.onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handle.onScroll);
        }
    }, []);

    const baseHeaderClassName = 'w-full h-[56px] pl-10 max-md:pl-5 pr-5 flex justify-between items-center fixed top-0 z-10 transition-all duration-300 ease-in-out border-b-[1px] ';
    const [headerClassName, setHeaderClassName] = useState('bg-[#fff0] border-[#fff0]');
    const [logoClassName, setLogoClassName] = useState('text-[#000c]');
    const [headerNavClassName, setHeaderNavClassName] = useState('hidden');

    const handle = {
        onScroll: useCallback((event:any) => {
            const { scrollY } = window;
            if (scrollY >= 56) {
                setHeaderClassName('bg-[#fff] border-[#b8b8b8]');
                setLogoClassName('text-[#cea964]');
            } else {
                setHeaderClassName('bg-[#fff0] border-[#fff0]');
                setLogoClassName('text-[#000c]');
            }
        }, [])
        , onMouseEnter: () => {
            setHeaderNavClassName('blpck');
        }
        , onMouseLeave: () => {
            setHeaderNavClassName('hidden');
        }
    }

    return (
        <>
        <header className={baseHeaderClassName+headerClassName}>
            <div className="h-full flex items-center">
                <svg className="w-[20px] fill-[#000c] mr-5 hidden max-md:block cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" focusable="false">
                    <g transform="translate(12,12)">
                        <path d="M-9 -5 L9 -5" fill="none" stroke-width="2"></path>
                        <path d="M-9 0 L9 0" fill="none" stroke-width="2"></path>
                        <path d="M-9 5 L9 5" fill="none" stroke-width="2"></path>
                    </g>
                </svg>
                <div className={"font-bold transition-all duration-300 ease-in-out cursor-pointer " + logoClassName}>Work Insights</div>
            </div>
            <div className="h-full flex items-center">
                <div 
                    className="flex items-center mr-5 max-md:hidden cursor-pointer"
                    onMouseEnter={handle.onMouseEnter}
                >
                    <div className="font-bold text-[#000c] mr-1">홈</div>
                    <svg className="w-[20px] fill-[#000c]" viewBox="0 0 24 24" stroke="currentColor" focusable="false">
                        <g transform="translate(9.7,12) rotate(45)">
                            <path d="M-4.2 0 L4.2 0" stroke-width="2"></path>
                        </g>
                        <g transform="translate(14.3,12) rotate(-45)">
                            <path d="M-4.2 0 L4.2 0" stroke-width="2"></path>
                        </g>
                    </svg>
                </div>
                <svg className="w-[20px] fill-[#000c] cursor-pointer" viewBox="0 0 24 24" focusable="false">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </div>
        </header>
        <HeaderNav
            headerNavClassName={headerNavClassName}
            onMouseLeave={handle.onMouseLeave}
        />
        </>
    );
}
