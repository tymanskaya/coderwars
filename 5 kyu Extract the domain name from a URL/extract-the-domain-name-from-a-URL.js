// DESCRIPTION:
//
//     Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
//
//
// SOLUTION:

    const www = 'www.'
const slashes = '//'

const getDomain = (url, str) => {
    const startDomain = url.indexOf(str) + str.length
    url = url.substring(startDomain)
    return url.split('.')[0]
}

const domainName = url => {
    if (url.includes(www)) return getDomain(url, www)

    if (url.includes(slashes)) return getDomain(url, slashes)

    return url.split('.')[0]
}