import Head from 'next/head'
import BottomNavigation from './BottomNavigation'
import Content from './Content'
import FeedbackSection from './FeedbackSection'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children, pageTitle}) {
    const web = {
        name: 'Pramuka 40',
    }

    return (
        <>
            <Head>
                <title>
                    {pageTitle} | {web.name}
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                ></script>
                <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </Head>
            <div className="min-h-screen pb-16 text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                <Navbar title={web.name} />
                <div className="w-full max-w-lg mx-auto">
                    <Content content={children} />
                    <FeedbackSection />
                    <Footer />
                </div>
            </div>
            <BottomNavigation />
        </>
    )
}

export default Layout
