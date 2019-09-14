import "./index.css"

import { makeSquare } from "./components"
import { groups } from "./data"
import { Group } from "./types"

const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)

const bookmarks = document.createElement("div")
bookmarks.classList.add("bookmarks")
container.append(bookmarks)

enum Actions {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    GO,
    INIT,
    CLEAR,
}

let groupIndex = -1
let linkIndex = -1
let firstAction = true
let currentLink: HTMLAnchorElement | null

function performAction(action: Actions) {
    console.log(action)
    if (firstAction) {
        firstAction = false
        performAction(Actions.INIT)
        return
    }
    switch (action) {
        case Actions.INIT:
            changeGroup(0)
            changeLink(0)
        case Actions.UP:
            changeLink(linkIndex - 1)
            selectLink()
            break
        case Actions.DOWN:
            changeLink(linkIndex + 1)
            selectLink()
            break
        case Actions.LEFT:
            changeGroup(groupIndex - 1)
            selectLink()
            break
        case Actions.RIGHT:
            changeGroup(groupIndex + 1)
            selectLink()
            break
        case Actions.GO:
            if (currentLink) {
                currentLink.click()
            }
            break
        case Actions.CLEAR:
            if (currentLink) {
                currentLink.blur()
            }
            currentLink = null
            firstAction = false
            break
    }
}

function changeLink(to: number) {
    if (to <= 0) {
        linkIndex = 0
    } else {
        linkIndex = Math.min(to, groupMax())
    }
}

function groupMax() {
    return groups[groupIndex].links.length - 1
}

function groupCount() {
    return groups.length
}

function changeGroup(to: number) {
    if (to <= 0) {
        groupIndex = 0
    } else {
        groupIndex = Math.min(to, groupCount())
    }
    changeLink(linkIndex)
}

function selectLink() {
    let href = groups[groupIndex].links[linkIndex].href
    let link = bookmarks.querySelector(`[href="${href}"]`) as HTMLAnchorElement
    if (link) {
        currentLink = link
        link.focus()
    }
}

document.body.addEventListener("keyup", e => {
    switch (e.keyCode) {
        case 38: // up
            performAction(Actions.UP)
            break
        case 39: // ->
            performAction(Actions.RIGHT)
            break
        case 40: // down
            performAction(Actions.DOWN)
            break
        case 37: // <-
            performAction(Actions.LEFT)
            break
        case 13: // enter
        case 32: // space
            performAction(Actions.GO)
            break
    }
})

groups.forEach((g: Group) => {
    bookmarks.append(makeSquare(g))
})

bookmarks.querySelectorAll("a").forEach(a => {
    a.addEventListener("mouseover", () => {
        performAction(Actions.CLEAR)
    })
})
