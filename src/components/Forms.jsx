function Input({type, className, name, id, value}) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={
                `w-full inline-block duration-300 px-3 py-1 rounded-md border focus:ring-2 focus:ring-yellow-600 dark:ring-gray-800 ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-600 outline-none ` +
                className
            }
            value={value}
        />
    )
}

function TextArea({className, name, id, cols, rows, value}) {
    return (
        <textarea
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            className={
                `w-full inline-block duration-300 px-3 py-1 rounded-md border focus:ring-2 focus:ring-yellow-600 dark:ring-gray-800 ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-600 outline-none ` +
                className
            }
            value={value}
        >
            {value}
        </textarea>
    )
}

function Button({type, className, onClick, children}) {
    return (
        <button
            type={type}
            className={
                `inline-block text-white bg-yellow-600 dark:text-gray-200 dark:bg-gray-800 duration-300 px-3 py-1 rounded-md focus:ring-2 focus:ring-yellow-600 dark:ring-gray-800 ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-600 outline-none ` +
                className
            }
            onClick={onClick}
        >
            {children}
        </button>
    )
}

module.exports = {
    Input,
    TextArea,
    Button,
}
