document.getElementById('color-selection').addEventListener('submit', e => {
    e.preventDefault()
    getColorScheme()
})

function getColorScheme() {
    // Get values from form needed to request color scheme 
    const selectedColor = document.getElementById('selected-color').value.replace("#","")
    const selectedColorScheme = document.getElementById('color-scheme-type').value
    const numColors = 5

    // Build out endpoint, call Color API, and call renderColorScheme with data recieved from Color API
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedColorScheme}&count=${numColors}`)
    .then(response => response.json())
    .then(data => renderColorScheme(data))
}

function renderColorScheme(colorsObject) {
    let colorsArray = []
    for(color of colorsObject.colors) {
        colorsArray.push(`<div class="color">${color.hex.value}</div>`)
    }
    console.log(colorsArray)
}

