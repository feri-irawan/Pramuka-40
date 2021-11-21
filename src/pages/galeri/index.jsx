import Image from 'next/image'
import Layout from '../../components/Layout'

function Galeri() {
    return (
        <Layout pageTitle="Galeri">
            <h1 className="my-4 font-bold text-3xl text-center">Galeri</h1>
            <div className="py-4">
                <Image
                    className="rounded-lg"
                    loading="lazy"
                    src="/images/pramuka.jpg"
                    width={300}
                    height={160}
                    layout="responsive"
                />
            </div>
        </Layout>
    )
}

export default Galeri
