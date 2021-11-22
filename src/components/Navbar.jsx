import {useTheme} from 'next-themes'
import Link from 'next/link'
import {useEffect, useState} from 'react'

function Navbar({title}) {
    const {theme, setTheme} = useTheme()
    const [icon, setIcon] = useState('moon')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setIcon(icon === 'moon' ? 'sunny' : 'moon')
    }

    useEffect(() => {
        setIcon(theme === 'light' ? 'moon' : 'sunny')
    }, [icon])

    return (
        <header className="bg-yellow-700 text-gray-100 dark:bg-gray-800">
            <nav className="p-3 bg-yellow-800 dark:bg-gray-900 w-full max-w-lg mx-auto grid grid-cols-2 items-center duration-200">
                <Link href="/">
                    <a className="font-semibold text-2xl text-gray-100 dark:text-gray-200">
                        Pramuka 40
                    </a>
                </Link>
                <div className="text-right">
                    <button
                        onClick={toggleTheme}
                        className="px-5 pt-2 pb-1 inline-block rounded-md shadow hover:bg-yellow-700 dark:hover:bg-gray-700 hover:shadow-none duration-200"
                    >
                        <ion-icon
                            name={`${icon}-outline`}
                            size="small"
                        ></ion-icon>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
