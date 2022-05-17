import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emojiArray = []
    if (minutes < 30) {
        for (let i = 0; i < Math.ceil(minutes / 5); i++) {
            emojiArray.push("☕️")
        }

    } else {

        for (let i = 0; i < Math.ceil(minutes / 10); i++) {
            emojiArray.push("🍱")
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date + ` • ${emojiArray.join("")} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;