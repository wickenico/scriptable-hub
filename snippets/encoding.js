let url = "https://scriptable.app/assets/appicon.png"
let req = new Request(url)
let image = await req.loadImage()

let base = Data.fromPNG(image).toBase64String()

let decodedImage = Image.fromData(Data.fromBase64String(base))