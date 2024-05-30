import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "icc": "url('/image/raids/icc/ICC.jpg')",
                "raid-card": "linear-gradient(0deg, rgba(82,82,91,1) 0%, rgba(255,255,255,0) 100%);"
            },
            colors: {
                primary: {
                    50: "#fafafa",
                    100: "#f4f4f5",
                    150: "#efeff0",
                    200: "#e4e4e7",
                    250: "#dcdce0",
                    300: "#d4d4d8",
                    350: "#bbbbc1",
                    400: "#a1a1aa",
                    450: "#898992",
                    500: "#71717a",
                    550: "#62626b",
                    600: "#52525b",
                    650: "#494951",
                    700: "#3f3f46",
                    750: "#333338",
                    800: "#27272a",
                    850: "#202023",
                    900: "#18181b",
                    950: "#09090b"
                },
                deathknight: "#c41f3b",
                druid: "#ff7c0a",
                hunter: "#acd473",
                mage: "#69ccf0",
                paladin: "#f58cba",
                priest: "#ffffff",
                rogue: "#fff569",
                shaman: "#0070de",
                warlock: "#9482c9",
                warrior: "#c79c6e"
            },
            keyframes: ({ theme }) => ({
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
            }),
            borderWidth: {
                1: '1px'
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
export default config;
