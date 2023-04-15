const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "123",
  },
  "Namaste React heading1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    key: "456",
  },
  "Namaste React heading2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
