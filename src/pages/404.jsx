import Link from 'next/link'
import Layout from '../components/Layout'

function Error404() {
    return (
        <Layout pageTitle="Error 404">
            <div className="text-center my-20 grid grid-cols-1">
                <div className="font-bold py-3 text-3xl">404</div>
                <div className="p-4 border-t">
                    Oops, halaman yang kamu cari tidak ada!
                </div>
            </div>
        </Layout>
    )
}

export default Error404
