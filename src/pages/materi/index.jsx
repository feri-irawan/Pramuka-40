import DaftarMateri from '../../components/DaftarMateri'
import Layout from '../../components/Layout'

export default () => {
    const title = 'Daftar Materi'

    return (
        <Layout pageTitle={title}>
            <h2 className="text-2xl font-bold text-center mt-6 mb-3">
                {title}
            </h2>
            <p className="text-center">
                Berikut ini daftar materi yang sudah tersedia.
            </p>
            <h2 className="text-xl font-bold text-center mt-6 mb-3">
                Materi Kenegaraan
            </h2>
            <DaftarMateri category="kenegaraan" />

            <h2 className="text-xl font-bold text-center mt-6 mb-3">
                Materi Kepramukaan
            </h2>
            <DaftarMateri category="kepramukaan" />
        </Layout>
    )
}
