function dragStartHandler(ev) {
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dragCardStart(e) {
  console.log(e);
}

function dragOvertHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("application/my-app");
  ev.target.appendChild(document.getElementById(data));
}

function handleInputKeys({ key }) {
  switch (key) {
    case "Enter":
      break;

    default:
      break;
  }
}

const onInputClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.disabled = false;
  e.target.focus();
};

const onInputLostFocus = (e) => {
  console.log(e);
  e.target.disabled = true;
};

function addNewCard(e) {
  //   console.log(e);
  //   console.log(column);
  //   console.log(body);
  //   console.log(body.children);
  //   console.log(body.children[0].getAttributeNames());
  const [, , , column] = e.path;
  const [, body] = column.children;
  const addButton = body.children[body.children.length - 1];
  const card = document.createElement("div");
  const input = document.createElement("textarea");
  input.cols = 30;
  input.rows = 10;
  input.disabled = true;
  card.appendChild(input);
  card.classList.add("card");
  card.draggable = "true";
  card.addEventListener("click", onInputClick);
  card.addEventListener("focusout", onInputLostFocus);
  card.addEventListener("dragstart", dragCardStart);
  body.removeChild(addButton);
  body.appendChild(card);
  body.appendChild(addButton);
}
