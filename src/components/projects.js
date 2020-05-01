import React from "react"

import { rhythm } from "../utils/typography"

const Projects = () => {
    return (
        <section style={{display: `grid`, gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`, columnGap: `32px`,}}>
            <div>
                <a rel="nofollow noopener noreferrer" target="_blank" href="https://unsplash.com/@timalanjohnson">
                    <h3 style={{marginBottom: rhythm(1 / 4)}}>Free Stock Photography</h3>
                </a>
                <p style={{marginBottom: `0`}}>Stock photos from in and around Cape Town. Free for anything, forever.</p>
            </div>
            <div>
                <a rel="nofollow noopener noreferrer" target="_blank" href="https://github.com/timalanjohnson">
                    <h3 style={{marginBottom: rhythm(1 / 4)}}>GitHub</h3>
                </a>
                <p style={{marginBottom: `0`}}>Various code projects, including this blog.</p>
            </div>
        </section>
    )
}

export default Projects


