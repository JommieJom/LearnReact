import React from 'react'

const se = {
    software: 'Software',
    engineer: 'Engineering'
}

const nameNew = {
    firstName: 'Jammie',
    lastName: 'Jam'
}

const element = (
    <div>
            <h1>{nameFunc(nameNew)}</h1>
            <h2>I'm, {seFunc()}</h2>
            <p>Coding is love, have a great time</p>
            <ul>
                <li>HuaHin</li>
                <li>EU</li>
                <li>Japan</li>
            </ul>
        </div>
)

function seFunc() {
    return (
        se.software + " " + se.engineer
    )
}

function nameFunc(name) {
    return (
        name.firstName + " +" + name.lastName
    )
}

export default element