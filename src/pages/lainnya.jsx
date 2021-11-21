import Link from 'next/link'
import Layout from '../components/Layout'
import Navigation from '../data/Navigation'

function Lainnya() {
    const navs = Navigation.others

    return (
        <Layout pageTitle="Lainnya">
            <h1 className="font-medium text-2xl mb-3">Lainnya</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {navs.map((nav) => (
                    <Link href={nav.url}>
                        <a className="text-center p-3 rounded-lg border border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-50 hover:shadow-none shadow duration-300 dark:text-gray-200 dark:bg-gray-800 dark:bg-opacity-25">
                            <ion-icon name={nav.icon}></ion-icon>
                            <div className="text-sm">{nav.name}</div>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export default Lainnya
