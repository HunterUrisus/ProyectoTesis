// esto es la configuracion de tailwind para configurar el modo oscuro
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
        extend: {
            keyframes: {
                    fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                },
                animation: {
                    fadeIn: 'fadeIn 0.8s ease-out forwards',
                },
        },
    },
    plugins: [],
}


