import 'react-hot-loader';
import * as React from "react";
import {
    hydrate
} from "react-dom";
import {
    App
} from '../App';

window.addEventListener("load", () => {
    hydrate( < App / > , document.getElementById("react_root"));
});