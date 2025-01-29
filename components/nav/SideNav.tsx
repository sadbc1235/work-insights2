'use client'

export default function SideNav(props:any) {
    const {sideNavBgClassName, sideNavClassName, showSideNav} = props;
    const commonTransition = 'transform .45s cubic-bezier(.4,0,.2,1), -webkit-transform .45s cubic-bezier(.4,0,.2,1)';

    return (
        <>
        <div
            className={"fixed top-0 left-0 h-full bg-[#000] opacity-[.6] z-10 transition-all duration-300 ease-in-out " + sideNavBgClassName}
            onClick={showSideNav}
        ></div>
        <nav 
            className={"fixed top-0 max-w-[250px] h-full p-3 z-10 bg-[#fff] pt-[56px] transition-all duration-300 ease-in-out " + sideNavClassName}
            style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}
        >
            <div 
                className="absolute top-0 left-0 p-[16px] pl-[10px]"
                onClick={showSideNav}
            >
                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" stroke="currentColor" focusable="false" style={{transform: 'rotate(90deg)', transition: 'transform .45s cubic-bezier(.4,0,.2,1), -webkit-transform .45s cubic-bezier(.4,0,.2,1)'}}>
                    <g transform="translate(12,12)">
                        <path d="M-9 -5 L9 -5" fill="none" stroke-width="2" style={{transform: 'rotate(45deg) translate(0, 5px)', transition: commonTransition}}></path>
                        <path d="M-9 0 L9 0" fill="none" stroke-width="2" style={{opacity: 0, transition: commonTransition}}></path>
                        <path d="M-9 5 L9 5" fill="none" stroke-width="2" style={{transform: 'rotate(135deg) translate(0, -5px)', transition: commonTransition}}></path>
                    </g>
                </svg>
            </div>
            <p className="text-base max-xl:text-sm text-[#000c] cursor-pointer mt-[10px]">
                홈
            </p>
            <p className="text-base max-xl:text-sm text-[#000c] cursor-pointer mt-[10px]">
                HTC VIVE 업무자료
            </p>
            <p className="text-base max-xl:text-sm text-[#000c] cursor-pointer mt-[10px]">
                Logitech VC 업무자료
            </p>
            <p className="text-base max-xl:text-sm text-[#000c] cursor-pointer mt-[10px]">
                Sense Robot Go 업무자료
            </p>
        </nav>
        </>
    );
}
