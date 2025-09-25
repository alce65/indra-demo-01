console.log("Loaded index js")

const button = document.createElement("button")
button.innerText = "Click me"
button.onclick = () => alert("Hello from index.js!")
document.body.appendChild(button)
