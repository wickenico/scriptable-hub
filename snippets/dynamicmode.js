// Define a color for day and night
let lightColor = Color.black();
let darkColor = Color.white();

// With Color.dynamic you set the colors for day and night based on the settings of your phone
example.textColor = Color.dynamic(lightColor, darkColor);