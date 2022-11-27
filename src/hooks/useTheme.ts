import { useState } from "react";

export const useAppTheme = (): [boolean, () => void] => {
    const [isDark, setIsDark] = useState(false);

    const toogleTheme = () => setIsDark(!isDark);

    return [
        isDark,
        toogleTheme
    ]
};