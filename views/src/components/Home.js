import React from 'react'

export default function Home() {
    return (
        <div className="text-center">
            <h1>Turt1e</h1>
            <p>Write your thoughts anonymously</p>
            <p>Add cool images!</p>
            <h3>And most important, Have fun 👾</h3>
            <img width="250px" src={window.location.origin + "/turtle.jpg"} alt="turtle" />
        </div>
    )
}
