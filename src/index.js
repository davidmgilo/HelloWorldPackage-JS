exports.say = function (){
    console.log('Hello world!');
}

//ENCAPSULAMENT : relacions amb l'exterior. Amagar estat intern dels objectes. Per canviar l'estat (propietats) obliguem a utilitzar funcions
//SETTER/GETTER => Evitar. No són expressius. Cal? Trobar noms millors.
//ENCAPSULAMENT: per dissenyar millor codi.  Per evitar code coupling / Acoblament de codi.
//
// Dependre d'especificacions/interfícies i no d'implementacions.
// ENCAPSULAR -> 1) Amagar implementació 2) Definir la interfície -> API Pública

// Si no es posa res la funció és privada.