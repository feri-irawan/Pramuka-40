import Link from 'next/link'
function CardMateri({title, href, number}) {
    return (
        <Link href={href}>
            <a
                data-aos="zoom-in-up"
                className="card-materi cursor-pointer flex items-center p-3 mb-3 rounded-lg border border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-50 hover:shadow-none shadow duration-300 dark:text-gray-200 dark:bg-gray-800 dark:bg-opacity-20"
            >
                <div className="text-3xl font-bold pr-2">{number}</div>
                <h2 className="text-lg pl-2 border-l">{title}</h2>
            </a>
        </Link>
    )
}

export default CardMateri
