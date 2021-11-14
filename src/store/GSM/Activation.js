const fs = require('fs')
const NodeRSA = require('node-rsa'); 
const Cryptr = require('cryptr');
const path = require("path");
const electron = require("electron");
const cryptr = new Cryptr('myTotalySecretKey'); 
export let key = "1331e23de0f96cec33194567c580bd22cec8891f49e1bd240a1de3a4c774e29a465a5aa14a86669cc7746138f7f6aaaba19a350c2b392268d55c70d7210ad870d87fd531d23d5552307f67454e2f714965deb39d1fdcfbd9f3abe6d6eb61357e6308fb413954b963b3b999fde0e0a772a7abb80a6432fc2fef40d10d5223964a992342514448cd9784d0b1cac48262bbdcc330adb04c67d2e522c74a3d4a360416c9d531c6d6d1cabe0a1c57bea6bbda20f09faca188a87059122d1a1f0fbeb41fe3cf2148f9a9dac5886b485398db1970efa041a2ccbd949dd5caf975e239ceed48ec12e527c6a433f13629535b5f9904542fbd658d0d6b9975a24d593faf69ff2ee06384007da8dd557fdd2bfc1ad2d21191f9c10a17a2ee510af5146eb545b6c909e9e0cafc28341750d346dac319273f707850040e508b43e0573c3e4d06320b646cbd15e0bf101e77484d742e531c2d803c17877ffdf9e1140aa927bdbb1efe829d070ea18369928c5a4804a7038e4eb4a9aa81900bd1b776a3fbab42fcea01fb1cc1a67a9b4d29e31ed05fb7b7a83ec3fc3f39cf972953c76f603408de05c0a6ff8b8091757869cab5c2f086c205a62a6d0126bfd9240aa7758cbc91bcb106cc674992bbb702b0d4c95f12ce40a3a72d87d1bc10e84dbafb1d638cd5eb3373e680eba049beddf342cf77cfbdec083d87a41b6970ea1f0e0412cfb4b521206e45fe3026b375283dc7370c3ba857afb66b0de3de06fa206a8bd9ca08e9289c68df3a30b22852ab5bf931666093816dbfc3bf66f81cb5a22cc3430bb05c2415447555a38f6df2e46e55eec3f5f5885dd8b325afca4a0a0f18728d4ad3734832b2750ac931a36daa3867a23c03025c22e495fdc6a75778dabbd986729d2b3115a345f4c646f7034f5b6c1cb29ef04137759401cdf06794eb75ae391ae98ce34358150b1461d1b427b3ac608003e478acff6bdc0461ee23cfe3f01cdd5d906c8cd011bed467555e86dc13f61657700bbbeba061c594bf2dd25bbe1414ad40a7134eff0905b6864b4fe01ade8620ce66020bee324fd3197c98f9d8b95ec780f306c3273baddd6ca1f13058c2e456c8b1ad27e8991cf81f6ae8724067ed89a08779668e546bb20e0776b43d1a434e9f34098bbb62334828c85c7b7a1bd5f3e840d24ac25aa3fe3ea171ff691128e4c37fe43dbf39b3fa1e284403aa9d51be05571746dc83ae99a21834f37b19171bcccddce5c3539593b9301bc02df1370a4a1811541528e20c253211b5c81ce66bd66da5983ea6df2da87a9725cd60d4b2755f5fdba7e39435b7b5ac09af9d5b3ce45892c954dad492d5f8e794d3b88fc7079bd2f08374abe2739c816bd52cfa53c7e9715718e01d2038193a6548f3eb3ca32fd5f1283245d63a1d410ebf6077e55a9ec6c9f1"
export let token = "aa3c46a66d664b2249a764264b4fb6228270042d7ac2116257b1be4deca4aa8ada105432777faec0477d514f457df52b261fdfea4dd6bf431e55ed41c1bf9440f29cedbc49c25b2cec68de678f712726581ba572d4defe84778f65e5c3a930213930c4b498bf3d24c4d5a67b64023c0c82e650e2318a32cf704cca0fdc951043f5be7b0fe42252b4454c5400f012e16ca82f4c7f51d27a0d8a46dab0001898a5a74bfb83289fae6a76f522544df7e7744ce6a8433686dab88353d843924fc510596b2b2d806ddded2cc6aa53556b047c5ed01881c3a66ce4f7eb5c2e136b18c38c51b104377e3f520ec26fd5070db88ba2043fbf3068286decb853dafe072c702ec4de64a47cf26a45ea3ead"
 
export async function encrypt(License) {
  try {
    let filePublicKey = await fs.readFileSync('./keys/public.pem', "utf8")
    let publicKey = new NodeRSA() 
    publicKey.importKey(filePublicKey)
    let lis = await EncryptionFile(publicKey.encrypt(License, 'base64'))
    //  fs.writeFileSync('license.txt', lis) 
    return lis
    
  } catch (err) {
    console.log('err encrypt:>> ', err);
  }
}
export async function decrypt(License) {
  try { 
    let filePrivetKey = await DecryptionFile(key) 
    let privetKey = new NodeRSA()  
    privetKey.importKey(filePrivetKey) 
    return privetKey.decrypt(License, 'utf8')
  } catch (err) {
    console.log('err decrypt:>> ', err);
  }
}
export async function checkLicense() {
  try {
    let IMSI = 603016030559064;
    let IMEI = 866481022645563; 
    let license = await fs.readFileSync('./license.txt', "utf8") 
    let decrypts = await DecryptionFile(license)

    console.log('decrypt(IMSI + IMEI) :>> ', await decrypt(decrypts));
    
  } catch (err) {
    console.log('err checkLicense:>> ', err);
  }
}
  
export async function EncryptionFile(data) { 
  try {
    return cryptr.encrypt(data); 
  } catch (err) {
    console.log('err EncryptionFile:>> ', err);
  } 
} 
export async function DecryptionFile(data) {
  try { 
    const cryptr = new Cryptr('myTotalySecretKey');  
    return cryptr.decrypt(data.toString());  
  } catch (err) {
    console.log('err DecryptionFile:>> ', err);
  } 
}