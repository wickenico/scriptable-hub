//Create Widget
const widget = new ListWidget()

//Get bolt SF Symbol
let sf = SFSymbol.named("bolt")

//Add SF Symbol to widget
let widgetImage = widget.addImage(sf.image)

//Change colour of SF Symbol
widgetImage.tintColor = Color.red()