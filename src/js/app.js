import WebFont from 'webfontloader';
import React from "react";
import ReactDOM from "react-dom";

import Main from './app/containers/Main.jsx';

WebFont.load({
    google: {
        families: ['Lato', 'Exo 2']
    },
    active: function()
    {
        ReactDOM.render(
            <Main />,
            document.getElementById("root")
        );
    }
});

