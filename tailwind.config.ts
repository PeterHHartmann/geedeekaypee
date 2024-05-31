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
                "raid-card": "linear-gradient(0deg, rgba(82,82,91,1) 0%, rgba(255,255,255,0) 100%);"
            },
            colors: {
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
                switch: {
                    '0%': {
                        'margin-left': '0%'
                    },
                    '50%': {
                        'margin-left': '50%'
                    },
                    '100%': {
                        'margin-left': 'auto'
                    }
                }
            }),
            borderWidth: {
                1: '1px'
            },
            transitionProperty: {
                'margin': 'margin'
            }
        },
    },
    plugins: [],
    darkMode: 'class',
};
export default config;
