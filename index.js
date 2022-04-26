const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(cat) {
    return cats.push(cat)
}
function destructivelyPrependCat(cat) {
    return cats.unshift(cat)
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(cat) {
    return [...cats, cat]
}
function prependCat(cat) {
    return [cat, ...cats]
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat() {
    return cats.slice(1)
}