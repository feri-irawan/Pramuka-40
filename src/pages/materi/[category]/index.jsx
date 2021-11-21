import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import DaftarMateri from '../../../components/DaftarMateri'
import Layout from '../../../components/Layout'
import {capitalize, unSlug} from '../../../utils/string'

function Category() {
    const router = useRouter()

    const {category} = router.query
    const [title, setTitle] = useState('Materi')

    useEffect(() => {
        if (!category) return

        setTitle(`Materi ${capitalize(unSlug(category))}`)
    }, [category])

    return (
        <Layout pageTitle={title}>
            <h2 className="text-2xl font-bold text-center mt-3 mb-6">
                {title}
            </h2>

            <DaftarMateri category={category} />
        </Layout>
    )
}

export default Category

// import {useRouter} from 'next/router'
// import {useEffect, useState} from 'react'
// import CardMateri from '../../../components/CardMateri'
// import Layout from '../../../components/Layout'
// import {findContent} from '../../../utils/content-client'
// import makeSlug from '../../../utils/makeSlug'
// import Error404 from '../../404'

// export default () => {
//     const router = useRouter()
//     const {category} = router.query
//     const [materi, setMateri] = useState()

//     useEffect(async () => {
//         if (!category) return

//         setMateri()

//         const res = await findContent(category, '')
//         setMateri(res)
//     }, [category])

//     // Jika belum ada materi (masih mengambil data)
//     if (!materi)
//         return (
//             <Layout pageTitle="Materi">
//                 <p>Memuat...</p>
//             </Layout>
//         )

//     // Jika telah melaukan fetch data tapi hasilnya array kosong
//     if (materi.length === 0) return <Error404 />

//     // Jika sudah ada
//     const title = `Materi ${materi[0].category}`
//     return (
//         <Layout pageTitle={title}>
//             <h2 className="text-xl font-bold text-center mt-6 mb-3">{title}</h2>

//             {materi.map((m, i) => (
//                 <CardMateri
//                     title={m.title}
//                     href={`/materi/${category}/${makeSlug(m.title)}`}
//                     number={i + 1}
//                 />
//             ))}
//         </Layout>
//     )
// }
