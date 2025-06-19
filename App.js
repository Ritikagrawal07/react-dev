 const heading  = React.createElement("h1" , {id :"heading"} , "Hello World from React!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);



    const parent = React.createElement(
        "div" , {id: "parent"} , [React.createElement("div" , {id: "child"} , 
            [
                React.createElement("h2",{},"I am an h2"),
               React.createElement("h1",{},"i am an h1")]
    ),
              React.createElement("div" , {id: "child2"} , 
            [
                React.createElement("h2",{},"I am an h2"),
               React.createElement("h1",{},"i am an h1")]
    )]
    );
    root.render(parent);