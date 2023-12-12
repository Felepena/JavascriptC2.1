function getInnerTextOfElement(element) {
    return element.innerText;
}

function getTextContentOfElement(element) {
    return element.textContent;
}

const actionButton = document.querySelector("#button");
const displayResult = document.querySelector("#result2");
const sampleElement = document.querySelector("#testElement");

function handleButtonClick() {
    displayResult.appendChild(createElementWithInnerText());
    displayResult.appendChild(createElementWithTextContent());
}

function createElementWithInnerText() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("div-style");
    const headerWithInnerText = document.createElement("h4");
    headerWithInnerText.classList.add("inner-text");
    headerWithInnerText.innerText = getInnerTextOfElement(sampleElement);

    const newElementHeader = document.createElement("h1");
    newElementHeader.innerText = "New Element Created";
    containerDiv.appendChild(newElementHeader);
    containerDiv.appendChild(headerWithInnerText);
    return containerDiv;
}

function createElementWithTextContent() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("div-style");
    const headerWithTextContent = document.createElement("h4");
    headerWithTextContent.textContent = getTextContentOfElement(sampleElement);

    const newElementHeader = document.createElement("h1");
    newElementHeader.innerText = "New Element Created 🌈";
    containerDiv.appendChild(newElementHeader);
    containerDiv.appendChild(headerWithTextContent);
    return containerDiv;
}

actionButton.addEventListener("click", handleButtonClick);
