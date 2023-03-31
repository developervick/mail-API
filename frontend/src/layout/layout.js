import React, { Component, useRef, useState } from "react";
import * as util from "../utility/utility"
export { Body }


function Body (props) {

    const [mailState, setMailState] = useState()

    const buttonState = (buttonClicked) => {
        setMailState(buttonClicked)
    }

    return (
        <div className="m-0 p-4 container row d-flex">
            <div className="p-2 column d-flex">
                <Header userId="userId"></Header>
            </div>
            <div className="p-2 column d-flex">
                <Navigation buttonState={buttonState}></Navigation>
            </div>
            <hr></hr>
            <div className="p-2 column d-flex">
                <MailBox mailName={mailState}></MailBox>
            </div>
        </div>
    )
}
function Header (props) {
    return (
        <div className="d-flex justify-content-start">
            <util.MainHeading text={props.userId}></util.MainHeading>
        </div>
    )
}
function Navigation (props) {

    const [value, setValue] = useState('Inbox')   


    return(
        <div className="d-flex justify-content-start">
        <util.Button onClick={(e) => {props.buttonState(e.target.name)}} name="Inbox"></util.Button>
        <util.Button onClick={(e) => {props.buttonState(e.target.name)}} name="Compose"></util.Button>
        <util.Button onClick={(e) => {props.buttonState(e.target.name)}} name="Sent"></util.Button>
        <util.Button onClick={(e) => {props.buttonState(e.target.name)}} name="Archive"></util.Button>
        <util.Button onClick={(e) => {props.buttonState(e.target.name)}} name="Logout"></util.Button>
        </div>
    )
}
function MailBox (props) {

    switch(props.mailName){
        case "Compose":
            return (
                <div className="row d-flex container justify-content-start">
                    <div className="column d-flex align-items-center">
                        <util.SeconderyHeading text={props.mailName}></util.SeconderyHeading>
                    </div>
                    <div className="row d-flex justify-items-start">
                        <util.ComposeForm></util.ComposeForm>
                    </div>
                    
                </div>
            )

        default:
            return (
                <div className="row d-flex container justify-content-start">
                    <div className="column d-flex align-items-center">
                        <util.SeconderyHeading text={props.mailName}></util.SeconderyHeading>
                    </div>
                    <div className="row d-flex justify-items-start">
                        <util.mailList sender="sdasv" subject="fvdsfv" timestamp="fvsdv"></util.mailList>
                    </div>
                    
                </div>
            )
    }

}


