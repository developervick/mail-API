import React from "react";
import * as util from "../utility/utility"
export { Body }


function Body () {
    return (
        <div className="my-2 container column align-items-start">
            <div className="row gy-5">
                <Header></Header>
            </div>
            <div className="row gy-5">
                <Navigation></Navigation>
            </div>
            <hr></hr>
            <div className="row gy-5">
                <Inbox></Inbox>
            </div>
            <div className="row gy-5">
                <MailBody></MailBody>
            </div>
        </div>
    )
}

function Header () {
    return (
        <div className="d-flex justify-content-start">
            <util.MainHeading value="update user id"></util.MainHeading>
        </div>
    )
}

function Navigation () {
    return(
        <div className="d-flex justify-content-start">
        <util.Button name="Inbox"></util.Button>
        <util.Button name="Compose"></util.Button>
        <util.Button name="Sent"></util.Button>
        <util.Button name="Archive"></util.Button>
        <util.Button name="Logout"></util.Button>
        </div>
    )
}

function Inbox () {
    return (
        <div className="d-flex justify-content-start">
            <util.SeconderyHeading value="inbox"></util.SeconderyHeading>
        </div>
    )
}

function MailBody () {
    return (
        <div className="p-0">
            <util.mailList></util.mailList>
            <util.MailInfo></util.MailInfo>
        </div>
    )
}

