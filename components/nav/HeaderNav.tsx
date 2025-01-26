'use client'

export default function HeaderNav(props:any) {
    const {headerNavClassName, onMouseLeave} = props;

    return (
        <nav 
            className={"fixed top-[50px] right-10 min-w-[100px] p-3 z-10 bg-[#fff] grid grid-cols-1 gap-2 max-xl:gap-1 " + (headerNavClassName || '')}
            style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}
            onMouseLeave={onMouseLeave}
        >
            <p className="text-base max-xl:text-sm text-[#939393] hover:text-[#000c] cursor-pointer">
                HTC VIVE 업무자료
            </p>
            <p className="text-base max-xl:text-sm text-[#939393] hover:text-[#000c] cursor-pointer">
                Logitech VC 업무자료
            </p>
            <p className="text-base max-xl:text-sm text-[#939393] hover:text-[#000c] cursor-pointer">
                Sense Robot Go 업무자료
            </p>
        </nav>
    );
}
