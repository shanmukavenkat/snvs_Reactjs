const parent = React.createElement("h1",{id:"parent"},
               React.createElement("div",{id:"child1"},
               React.createElement("h2",{class:"heading"},"Hello World Welcome to the React"),)

    );
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

///React.createElement("type of element", attributes for that element,content to be present inside the createelement)

// React gave us the bundlers which take care all the above things
// npx create-react-app , vite