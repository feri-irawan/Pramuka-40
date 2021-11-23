import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Layout from '../../../../components/Layout'
import {LoaderSpin} from '../../../../components/Loader'
import {findContent} from '../../../../utils/content-client'
import Error404 from '../../../404'

export default () => {
    const router = useRouter()
    const {category, id, slug} = router.query
    const [content, setContent] = useState()

    // Membuat konten dari server
    useEffect(async () => {
        if (!category && !slug && !id) return

        if (!content) {
            const res = await findContent(category, id, slug)
            setContent(res)
        }
    }, [category, id, slug])

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
        <Layout pageTitle={content.title}>
            <article>
                <h1 className="font-bold text-2xl mb-3 pb-3 border-b">
                    {content.title}
                </h1>
                <div
                    className="break-words prose prose-yellow dark:prose-dark"
                    dangerouslySetInnerHTML={{__html: content.content}}
                ></div>
            </article>
        </Layout>
    )
}
