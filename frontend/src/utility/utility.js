import React from "react";


export default Button;
export {Button,  MainHeading, SeconderyHeading, mailList, MailInfo, ComposeForm}

function Button (props){
    return(
        <button onClick={props.onClick} name={props.name} className="m-1 btn btn-sm btn-outline-primary" >
            {props.name}
        </button>
    )
}

function MainHeading (props) {
    return(
        <h1>{props.text}</h1>
    )
}

function SeconderyHeading (props){
    return (
        <h2>
            {props.text}
        </h2>
    )
}

function mailList(props) {
    
    return (
    <ul className="row p-0 m-0">
        <li className="d-flex column justify-content-between">
            <text className="column m-1"><strong>{props.sender}:</strong>
            {props.subject}</text>
            <text className="column m-1 ">{props.timestamp}</text>
        </li>
    </ul>
    )
    
}

function MailInfo (props) {
    return(
        <div className="row d-flex justify-content-start">
            <div className="d-flex m-1"><strong className="mx-2">From:</strong>{props.from}</div>
            <div className="d-flex m-1"><strong className="mx-2">To: </strong>{props.to}</div>
            <div className="d-flex m-1"><strong className="mx-2">Subject: </strong>T{props.subject}</div>
            <div className="d-flex m-1"><strong className="mx-2">Body:</strong>{props.body}</div>
        </div>
    )
}

function ComposeForm () {
    
    return (
        <div className="d-flex">
            <h1> This is Form component</h1>
        </div>
    )
}

