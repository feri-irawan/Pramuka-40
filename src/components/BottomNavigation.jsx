import {useRouter} from 'next/router'
import Link from 'next/link'
import Navigation from '../data/Navigation'

function BottomNavigation() {
    const router = useRouter()
    const url = router.asPath.split('/').slice(0, 3).join('/')

    const navs = Navigation.bottom

    let active = navs.find((item) => item.url === url)
    if (active) active = active.url

    return (
        <div className="bottom-navigation fixed bottom-0 left-0 right-0 bg-yellow-600 dark:bg-gray-800 overflow-x-auto">
            <div className="w-full max-w-lg mx-auto bg-yellow-700 dark:bg-gray-900 dark:bg-opacity-20">
                <div className="grid grid-cols-5 justify-center shadow">
                    {navs.map((nav, i) => (
                        <Link key={i} href={nav.url}>
                            <a
                                className={
                                    active == nav.url
                                        ? `block text-center text-gray-100 pt-2 pb-1 duration-300 bg-yellow-800 dark:bg-gray-900`
                                        : `block text-center text-gray-100 pt-2 pb-1 duration-300 bg-yellow-700 hover:bg-yellow-800 dark:bg-gray-900 dark:bg-opacity-20 dark:hover:bg-gray-900`
                                }
                            >
                                <ion-icon
                                    name={
                                        active == nav.url
                                            ? nav.icon.replace('-outline', '')
                                            : nav.icon
                                    }
                                    style={{fontSize: '24px'}}
                                ></ion-icon>
                                <div className="text-xs">{nav.name}</div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation
