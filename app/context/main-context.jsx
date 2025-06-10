'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const MainContext = createContext(undefined);

export function MainProvider({ children }) {
    const pathname = usePathname();
    const [panelWidth, setPanelWidth] = useState(null); // Default width
    const [widthCall, setWidthCall] = useState(false);
    const [widthProcess, setWidthProcess] = useState(false);
    const [dashboardType, setDashboardType] = useState('movies');

    // Function to handle resize event
    const handleResize = (size) => {
        setPanelWidth(size);
    };

    // Optional: log the panel width on resize
    useEffect(() => {
        if (panelWidth <= 5) {
            setWidthCall(true);
        } else {
            setWidthCall(false);
        }
        if (panelWidth <= 10 && panelWidth > 5) {
            setWidthProcess(true);
        } else {
            setWidthProcess(false);
        }
    }, [panelWidth]);
    return (
        <MainContext.Provider value={{panelWidth, setPanelWidth, widthCall, setWidthCall, widthProcess, setWidthProcess, handleResize, pathname, dashboardType, setDashboardType}}>
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
