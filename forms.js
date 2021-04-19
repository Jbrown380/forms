let todo = "";
const todoField = document.querySelector("#todoField")

document.querySelector("form").addEventListener("submit", function(event) {
     event.preventDefault();

todo = todoField.value;
let template =
`
<ul>the todo list</ul>
<li>${todo}</li>
`;
})