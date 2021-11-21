import Aos from 'aos'
import 'aos/dist/aos.css'

import {ThemeProvider} from 'next-themes'
import {useEffect} from 'react'

import 'tailwindcss/tailwind.css'
import '../styles.css'

import 'tinymce/skins/ui/oxide/skin.min.css'

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
