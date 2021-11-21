function makeSlug(string) {
    return string.toLowerCase().split(' ').join('-')
}

function unSlug(slug) {
    return slug.replace('-', ' ')
}

function capitalize(string) {
    return string
        .split(' ')
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join(' ')
}

module.exports = {
    makeSlug,
    unSlug,
    capitalize,
}
