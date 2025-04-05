import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{id:"heading"},"hello nested")
    )
);

const reactSt = ReactDOM.createRoot(document.getElementById("root"));

reactSt.render(heading);
