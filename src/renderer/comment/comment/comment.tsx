import React from "react";
import CommentModel from "../comment-model";
import './comment.css';

export class Comment extends React.Component<CommentModel>{
    render() {
        return(
            <div className={"comment-container"}>
                <img className={"user-icon"} src={this.props.userIcon} alt={""}/>
                <div className={"dummy"}>
                    <p className={"user-name"}>{this.props.userName}</p>
                </div>
                <p className={"comment"}>{this.props.comment}</p>
            </div>
        );
    }
}