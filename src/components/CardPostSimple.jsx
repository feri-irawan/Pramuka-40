import Link from 'next/link'
import {makeSlug} from '../utils/string'

function CardPostSimple({post}) {
    return (
        <Link href={`/blog/${makeSlug(post.title)}`}>
            <a className="border border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-50 block rounded-lg p-3 mb-3 divide-y shadow hover:shadow-md group">
                <h2 className="font-semibold capitalize mb-2 dark:text-gray-200">
                    {post.title}
                </h2>
                <p className="pt-2 text-gray-600 dark:text-gray-400 text-opacity-50 group-hover:text-opacity-100 duration-300">
                    {post.content.slice(0, 60)}...
                </p>
            </a>
        </Link>
    )
}

export default CardPostSimple
