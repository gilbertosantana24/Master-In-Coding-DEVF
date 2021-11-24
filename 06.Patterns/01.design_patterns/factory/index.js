//factory va a estar creando objetos
//que permitan a las subclases decidir que clase instanciar

const iPhoneXR = require('./iphone-xr')
const iPhoneXS = require("./iphone-xs")

//INSTANCIAR Y A CREAR NUESTROS OBJETOS 
const myIphoneXR = new iPhoneXR("987654321")
const myIphoneXS = new iPhoneXS("123456789")

myIphoneXR.displayConfig();
myIphoneXS.displayConfig();