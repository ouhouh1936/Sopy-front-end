import React from "react";
import {Route} from "react-router-dom";
import MM00 from "../MM00";
import MM04 from "../MM04";
import MM05 from "../MM05"

const Content = () => {
    return `Content`;
    <WholeWrapper>
        <Router exact path="/" component={MM00}/>
        <Router exact path="/singIn" component={MM04}/>
        <Router exact path="/singUp" component={MM05}/>
    </WholeWrapper>

}

export default Content;