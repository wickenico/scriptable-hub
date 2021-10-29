let params = null;

// No parameter are given by input 
if (args.widgetParameter == null) {
    params = ["p1", "p2", "p3"]; // Default input without parameters
} else {
    // Separate input parameters at ,
    // example input: dog, cat, mouse
    params = args.widgetParameter.split(",")
}

// result:
// params[0] = dog
// params[1] = cat
// params[2] = mouse
