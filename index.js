// Get color scheme when page loads
getColorScheme()

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
            colorsArray.unshift({
                hex: color.hex.value,
                contrast: color.contrast.value
            })
        }
        renderColorScheme(colorsArray)
    })
}

function renderColorScheme(colorsArray) {
    
    colorsArray.forEach((color, index) => {
        const colorDiv = document.querySelector(`[data-index="${index}"]`)
        const colorText = document.querySelector(`[data-index="${index}"] .color-hex`)

        colorDiv.style.background = color.hex
        colorText.textContent = color.hex
        colorText.style.color = color.contrast
    })
}