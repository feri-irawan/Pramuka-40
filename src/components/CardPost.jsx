import Image from 'next/image'
import Link from 'next/link'
import {makeSlug} from '../utils/string'
import removeTags from '../utils/removeTags'

function CardPost(props) {
    const post = props.post

    return (
        <Link href={`/blog/${makeSlug(post.title)}`}>
            <a
                data-aos="zoom-in-up"
                className="card-materi cursor-pointer flex items-center p-3 mb-3 rounded-lg border border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-50 hover:shadow-none shadow-md duration-300 dark:text-gray-200 dark:bg-gray-800"
            >
                <div className="text-3xl font-bold pr-2">{props.number}</div>
                <div className="pl-3 border-l w-full">
                    <Image
                        className="rounded-lg"
                        loading="lazy"
                        src={props.image}
                        width={300}
                        height={180}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <h2 className="text-lg capitalize my-2 font-bold">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {removeTags(post.content.slice(0, 60))}...
                    </p>
                </div>
            </a>
        </Link>
    )
}

export default CardPost
