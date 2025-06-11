'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useState } from 'react';

const MainContext = createContext(undefined);

export function MainProvider({ children }) {
    const pathname = usePathname();
    const [activeTeam, setActiveTeam] = useState(null);

    return (
        <MainContext.Provider value={{
            pathname,
            activeTeam,
            setActiveTeam
        }}>
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    const context = useContext(MainContext);
    if (context === undefined) {
        throw new Error('useMainContext must be used within a MainProvider');
    }
    return context;
}
