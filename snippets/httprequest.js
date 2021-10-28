// Define variable with the url
const url = 'https://example.com'

// Execute the request
const req = new Request(url);

// Write the json response to variable res
const res = await req.loadJSON();