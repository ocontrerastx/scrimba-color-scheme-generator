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
    .then(data => {
        let colorsArray = []
        for(color of data.colors) {
            colorsArray.unshift(color.hex.value)
        }
        renderColorScheme(colorsArray)
    })
}

function renderColorScheme(colorsArray) {
    colorsArray.forEach((color, index) => {
        document.querySelector(`[data-index="${index}"`).style.background = color
    })
}