// const heading = document.createElement("h1");
// heading.innerHTML = "seperate file";

// const root = document.getElementById("root");
// root.appendChild(heading);


// <div id ="parent">
//     <div id="child">
//         <h1>hello child</h1>
//         <h2>siblings h1</h2>
//     </div>
// </div>

const heading = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{id:"heading"},"hello nested")
    )
);


// const heading = React
//     .createElement("h1"
//         , {id:"heading"}
//         , "Hello World From React");

const reactSt = ReactDOM.createRoot(document.getElementById("reactScript"));

reactSt.render(heading);
