
        /* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");  // Select the <html> element to change background
var sliders = document.getElementsByTagName("input");  // Get all input elements (sliders)
var rgb = [0, 0, 0];  // Initial RGB values set to black

/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i++) {
    // Loop through the range inputs and add an input event listener to them
    sliders[i].oninput = function () {
        // Grab the id attribute of the slider to identify which color channel was changed
        var whichSlider = this.getAttribute("id");
        // Get the numerical value that the slider is currently set to
        var sliderValue = parseInt(this.value);  // Parse the slider value as an integer
        
        // Call the function to update the RGB array based on the slider's ID and value
        newRgb = changeRgb(whichSlider, sliderValue);
        
        // Generate the CSS string for background-color from the updated RGB array
        var newCSS = writeCSS(newRgb);
        
        // Set the background color of the page to the new RGB value
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions
-------------------------------------------------- */

// STEP 1: Write a function called changeRgb that accepts two parameters: channel and value
function changeRgb(channel, value) {
    // STEP 2: Use a switch case to update the appropriate color channel in the rgb array
    switch (channel) {
        case "red":
            // Update the red channel (index 0 in the array)
            rgb[0] = value;
            break;
        case "green":
            // Update the green channel (index 1 in the array)
            rgb[1] = value;
            break;
        case "blue":
            // Update the blue channel (index 2 in the array)
            rgb[2] = value;
            break;
        default:
            console.log("Unknown channel:", channel);  // Log an error if the channel is invalid
    }

    // STEP 3: Return the updated rgb array
    return rgb;
}

// STEP 4: Write a function called writeCSS that accepts the updated rgb array and returns a CSS string
function writeCSS(newRgb) {
    // STEP 5: Create a string to represent the RGB value in CSS format
    var newColor = 'rgb(';

    // STEP 6: Iterate over the rgb array to build the RGB string
    var i = 0;
    while (i < newRgb.length) {
        newColor += newRgb[i] + ",";  // Append each color value with a comma
        i++;
    }

    // STEP 7: Remove the last comma from the string
    newColor = newColor.slice(0, -1);

    // STEP 8: Finish the string by adding the closing parenthesis
    newColor += ')';

    // STEP 9: Return the formatted CSS string
    return newColor;
}
