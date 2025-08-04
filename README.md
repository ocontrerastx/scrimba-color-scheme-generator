# scrimba-color-scheme-generator

This project was a learning journal exercise from the "Working with APIs" section of the Scrimba Frontend Developer Career Path. The goal was to build a web application that generates color palettes based on user input, leveraging a third-party API.

The design for the project was provided in the following Figma file:

[Figma Design File](https://www.figma.com/design/twasy8Bca4hW7gunLFSLoY/Color-Scheme-Generator?node-id=2-1155&t=QPHgVRwls0CKmfYN-1)

The primary objective was to connect the front-end interface with a color scheme API to dynamically fetch and display different color palettes. This project provided practical experience in applying the following concepts:

**Key Concepts Applied:**

- **Working with APIs:** The core of this project was making `fetch` requests to a third-party color API. This involved constructing the correct URL with query parameters based on user selections (e.g., a base color and a scheme mode).
- **Asynchronous JavaScript:** Because API calls are asynchronous, the project utilized `async/await` syntax to handle the responses. This ensured that the application waited for the data to be returned from the API before attempting to render the color scheme on the page.
- **Dynamic DOM Manipulation:** The application dynamically generated color hex codes and displayed them. This included creating color swatches and their corresponding hex codes.
- **Event Handling:** Event listeners were used to capture user input from the color picker and the scheme mode dropdown menu, triggering a new API request whenever a value changed.
- **Passing Data as Query Parameters:** The user's selections for the base color and scheme were passed to the API by constructing a URL with query parameters. This was a key part of making the API request specific to the user's needs.

**Learning Journey Highlight:**

The most significant learning experience in this project was gaining confidence in fetching and handling data from an external API. It was a hands-on introduction to the entire process, from constructing the request URL to parsing the JSON response and using the data to update the UI.
