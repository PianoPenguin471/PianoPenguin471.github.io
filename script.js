var names = []

const output = document.getElementById("output")
function getRandomName(nameList) {
    let index = Math.round(Math.random() * (nameList.length - 1))
    let name = nameList[index]
    if (name == undefined) name = "Names depleted"
    if (name.includes("\n")) name = name.replaceAll("\n", "")
    nameList.splice(index, 1)
    output.innerText = "Name chosen: " + name
    return name
}
function addName(name) {
    names.push(name)
}
function getName() {
    return document.getElementById("addName").value
}

document.getElementById('nameFile')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
    if ('files' in input && input.files.length > 0) {
        const reader = new FileReader()
        new Promise((resolve, reject) => {
            reader.onload = event => resolve(event.target.result)
            reader.onerror = error => reject(error)
            reader.readAsText(input.files[0])
    }).then(content => {names=content.split(",")}).catch(error => console.error(error))
  }
}

function placeFileContent(file) {
	readFileContent(file).then(content => {
  	names = content.split(",")
  }).catch(error => console.log(error))
}
