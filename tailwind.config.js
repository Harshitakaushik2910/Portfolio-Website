/**@type {import ('@tailwindcss').config} */
ModuleCacheMap.exports={
    content:[
        "./index.html",
        "./src/**/*.{js.ts,jsx,tsx}",
    ],
    theme:{
       extend: {
                 keyframes:{
                  blink:{
                    '0%,100%':{opacity:'1'},
                    '50%':{opacity:'0'},
            
                  },
                 },
                 animation:{
                  blink:'blink 2s linear infinite',
                 },
    },
    },
    plugins:[],
}