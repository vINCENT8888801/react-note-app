import React, { useContext, useState } from "react";

export const HeaderSizeContext = React.createContext(false);
export const HeaderSizeUpdateContext = React.createContext(() => {});

export function useHeaderSizeUpdate() {
    return useContext(HeaderSizeUpdateContext);
}

export function useHeaderSizeContext() {
    return useContext(HeaderSizeContext);
}

export function HeaderSizeProvider({ children }: any) {

    const [bigHeader, setBigHeader] = useState(true);

    function toggleHeaderSize() {
        setBigHeader(prevBigHeader => !prevBigHeader);
    }

    return (
        <HeaderSizeContext.Provider value={bigHeader}>
            <HeaderSizeUpdateContext.Provider value={toggleHeaderSize}>
                {children}
            </HeaderSizeUpdateContext.Provider>
        </HeaderSizeContext.Provider>
    )
}