import {useRef, useState} from 'react'
import Layout from '../../components/Layout'
import config from '../../data/config'
import {Editor} from '@tinymce/tinymce-react'
import {addContent} from '../../utils/content-client'

function Dashboard() {
    const editorRef = useRef(null)

    const [alert, setAlert] = useState(false)

    const getInputData = (e) => {
        e.preventDefault()

        let apiKey, title, category, content

        if (editorRef.current) {
            apiKey = e.target.elements.apiKey.value
            title = e.target.elements.contentTitle.value
            category = e.target.elements.contentCategory.value
            content = editorRef.current.getContent()

            addContent({apiKey, title, content, category})
                .then(({data}) => {
                    console.log(data)

                    if (data.status === 401) {
                        setAlert(() => {
                            return (
                                <div className="px-3 py-2 rounded-lg border mb-3 border-red-500 bg-red-200 text-red-600">
                                    {data.description}
                                </div>
                            )
                        })
                    } else {
                        setAlert(() => {
                            return (
                                <div className="px-3 py-2 rounded-lg border mb-3 border-green-500 bg-green-200 text-green-600">
                                    Postingan berhasil dipublikasikan
                                </div>
                            )
                        })
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <Layout pageTitle="Tulis">
            <h1 className="text-2xl font-bold text-center mb-3">Tulis</h1>

            {alert}

            <form onSubmit={getInputData}>
                <div className="grid grid-cols-6 gap-2 pb-3">
                    <div className="col-span-4">
                        <input
                            type="text"
                            name="title"
                            id="contentTitle"
                            className="text-2xl font-bold px-3 py-2 border-b-2 outline-none rounded-none bg-transparent focus:border-yellow-500 w-full h-full"
                            required={true}
                            autoComplete="off"
                            placeholder="Judul..."
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            type="text"
                            name="title"
                            id="apiKey"
                            className="px-3 py-2 border-b-2 outline-none rounded-none bg-transparent focus:border-yellow-500 mb-3 w-full"
                            required={true}
                            autoComplete="off"
                            placeholder="API Key..."
                        />

                        <select
                            type="text"
                            name="title"
                            id="contentCategory"
                            className="px-3 cursor-pointer py-2 border-b-2 outline-none rounded-none bg-transparent focus:border-yellow-500 w-full"
                            required={true}
                        >
                            <option value="" disabled={true} selected>
                                Pilih Kategori
                            </option>
                            <option>Kenegaraan</option>
                            <option>Kepramukaan</option>
                            <option>Umum</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <Editor
                        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        init={config.TinyMCE}
                    />
                </div>
                <button
                    className="p-3 rounded-md bg-yellow-600 text-white"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </Layout>
    )
}

export default Dashboard
