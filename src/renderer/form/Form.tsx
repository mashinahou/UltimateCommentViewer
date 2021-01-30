import React from "react";
import './form.css'
import UrlForm from "./url-form";

export default class Form extends  React.Component{
    render() {
        return (
            <div id={"form"}>
                <UrlForm />
            </div>
        );
    }
}