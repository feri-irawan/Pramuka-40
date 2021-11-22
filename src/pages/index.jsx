import DaftarMateri from '../components/DaftarMateri'
import Layout from '../components/Layout'

function Home() {
    return (
        <Layout pageTitle="Home">
            <h1 className="text-3xl text-center my-4 mb-8">
                Selamat datang di{' '}
                <span className="font-semibold">Pramuka 40</span>
            </h1>

            <h2 className="text-xl font-bold text-center mt-6 mb-3">
                Materi Kenegaraan
            </h2>
            <DaftarMateri category="kenegaraan" />

            <h2 className="text-xl font-bold text-center mt-6 mb-3">
                Materi Kepramukaan
            </h2>
            <DaftarMateri category="kepramukaan" />

            <h2 className="text-xl font-bold text-center mt-6 mb-3">
                Materi Umum
            </h2>
            <DaftarMateri category="umum" />
        </Layout>
    )
}

export default Home
