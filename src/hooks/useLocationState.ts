import { useLocation } from "react-router-dom";

export const useLocationState = <T extends unknown>(): T => {
    const location = useLocation();

    console.log({location});

    return location.state as T;
}