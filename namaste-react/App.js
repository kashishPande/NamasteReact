const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
); // {} to give attribute in the tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
