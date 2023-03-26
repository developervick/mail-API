import React from "react";


export default Button;
export {Button,  MainHeading, SeconderyHeading, mailList, MailInfo}

function Button (props){
    return(
        <button className="m-1 btn btn-sm btn-outline-primary" >
            {props.name}
        </button>
    )
}

function MainHeading (props) {
    return(
        <h1>{props.value}</h1>
    )
}

function SeconderyHeading (props){
    return (
        <h2>
            {props.value}
        </h2>
    )
}


function mailList(props) {
    
    return (
    <ul className="row p-0 m-0">
        <li className="d-flex column justify-content-between">
            <text className="column m-1"><strong>sender:</strong>
            subject </text>
            <text className="column m-1 ">timstamp</text>
        </li>
    </ul>
    )
    
}


function MailInfo (props) {
    return(
        <div className="row d-flex justify-content-start">
            <div className="d-flex m-1"><strong className="mx-2">From:</strong>vick@gmail.com</div>
            <div className="d-flex m-1"><strong className="mx-2">To: </strong>pukku@gmail.com</div>
            <div className="d-flex m-1"><strong className="mx-2">Subject: </strong>This is mail subject</div>
            <div className="d-flex m-1"><strong className="mx-2">Body:</strong>After spending hours you completed static UI in react</div>
        </div>
    )
}


