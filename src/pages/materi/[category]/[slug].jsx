import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Layout from '../../../components/Layout'
import {LoaderSpin} from '../../../components/Loader'
import {findContent} from '../../../utils/content-client'
import Error404 from '../../404'

export default () => {
    const router = useRouter()
    const {category, slug} = router.query
    const [content, setContent] = useState()

    // Membuat konten dari server
    useEffect(async () => {
        if (!category && !slug) return

        if (!content) {
            const res = await findContent(category, slug)
            setContent(res)
        }
    }, [category, slug])

    // Jika tidak ada konten
    if (!content)
        return (
            <Layout pageTitle="Materi">
                <LoaderSpin />
            </Layout>
        )

    // Jika sudah ada konten tapi object kosong
    if (JSON.stringify(content) === '{}') return <Error404 />

    // Jika sudah ada kontent
    return (
        <Layout pageTitle="Materi">
            <h1 className="font-bold text-2xl mb-3">{content.title}</h1>
            <div
                className="break-words"
                dangerouslySetInnerHTML={{__html: content.content}}
            ></div>
        </Layout>
    )
}
