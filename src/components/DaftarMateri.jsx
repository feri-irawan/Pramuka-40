import {useEffect, useState} from 'react'
import {findContent} from '../utils/content-client'
import {makeSlug} from '../utils/string'
import CardMateri from './CardMateri'
import {LoaderSpin} from './Loader'

export default function DaftarMateri({category}) {
    const [materi, setMateri] = useState()

    useEffect(async () => {
        if (!category) return

        setMateri()

        const res = await findContent(category, '')
        setMateri(res)
    }, [category])

    // Jika belum ada materi (masih mengambil data)
    if (!materi) return <LoaderSpin />

    // Jika telah melaukan fetch data tapi hasilnya array kosong
    if (materi.length === 0) return <p className="text-center">Tidak ada.</p>

    // Jika sudah ada
    const title = `Materi ${materi[0].category}`
    return (
        <>
            {materi.map((m, i) => (
                <CardMateri
                    key={i}
                    title={m.title}
                    href={`/materi/${category}/${m.id}/${makeSlug(m.title)}`}
                    number={i + 1}
                />
            ))}
        </>
    )
}

// {DaftarMateri.map((materi) => (
//     <>
//         <h2 className="text-xl font-bold text-center mt-6 mb-3">
//             {materi.name}
//         </h2>
//         {materi.subMateri.map((sub, i) => (
//             <CardMateri
//                 title={sub.name}
//                 href={makeSlug(materi.url + '/' + sub.name)}
//                 number={i + 1}
//             />
//         ))}
//     </>
// ))}
