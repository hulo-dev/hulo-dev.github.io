import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const { setTheme } = useTheme();

    return (
        <div className="switcher-theme">
            <button onClick={() => setTheme("light")} className="switch-light">
                Light
            </button>
            <button onClick={() => setTheme("dark")} className="switch-dark">
                Dark
            </button>
        </div>
    );
};

export default ThemeChanger;
