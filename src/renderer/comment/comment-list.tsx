import React from "react";
import './comment-list.css'
import CommentModel from "./comment-model";
import {Comment} from "./comment/comment";
import {NicoRestClient} from "../../main/rest/nico-rest-client";

interface CommentListState{
    commentList: Array<CommentModel>;
}


export default class CommentList extends React.Component<{}, CommentListState>{

    constructor(p:{}) {
        super(p);

        const comment = new Array<CommentModel>();
        comment.push({comment: "test", userIcon:"",userName:"aaa", userId:""});
        this.state  = {
            commentList: comment,
        };
    }


    render() {
       
        const list = this.state.commentList.map(model =>
        <Comment
            userId={model.userId}
            userName={model.userName}
            userIcon={model.userIcon}
            comment={model.comment}
        />);

        return(
            <div id={"comment-container"}>
                {list}
            </div>
        );
    }
}