import { Link, Group } from "./types"

export function makeSquare(group: Group) {
    const square = document.createElement("div")
    square.classList.add("square")

    const squareHeader = document.createElement("div")
    squareHeader.classList.add("square-header")

    const squareLogo = document.createElement("i")
    if (!group.fontAwesome) {
        group.fontAwesome = ["far", "fa-folder"]
    }
    squareLogo.classList.add(...group.fontAwesome)

    squareHeader.append(squareLogo)

    squareHeader.append(group.title)

    square.append(squareHeader)

    group.links.forEach((l: Link) => {
        const a = document.createElement("a")
        a.classList.add("nav-link")
        a.target = "_blank"
        a.href = l.href
        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-angle-right")
        a.append(icon)
        a.append(l.label)
        square.append(a)
    })
    return square
}
