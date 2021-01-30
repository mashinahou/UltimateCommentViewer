import React from "react";
import ReactDOM from "react-dom";
import './root.css';
import CommentList from "../comment/comment-list";
import Form from "../form/Form";

export class Root extends React.Component{
    render() {
        return(
          <React.StrictMode>
              <Form />
              <CommentList />

          </React.StrictMode>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById("root")
);