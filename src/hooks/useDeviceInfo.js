const { useState, useLayoutEffect } = React;

const useDeviceInfo = (maxWidth = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useLayoutEffect(() => {
        // Media query for mobile width
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
        setIsMobile(mediaQuery.matches);

        // Media query for orientation
        const orientationQuery = window.matchMedia("(orientation: portrait)");
        setIsPortrait(orientationQuery.matches);

        // Check for touch support
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        // Handlers for change events
        const handleResize = (e) => setIsMobile(e.matches);
        const handleOrientationChange = (e) => setIsPortrait(e.matches);

        // Initial check
        checkTouchDevice();

        // Add listeners
        mediaQuery.addEventListener('change', handleResize);
        orientationQuery.addEventListener('change', handleOrientationChange);
        window.addEventListener('resize', checkTouchDevice);

        // Cleanup listeners
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
            orientationQuery.removeEventListener('change', handleOrientationChange);
            window.removeEventListener('resize', checkTouchDevice);
        };
    }, [maxWidth]);

    return { isMobile, isPortrait, isTouchDevice };
};