/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type:'number',
      min: 1,
    },  // configuracion de hijo
    fkUsuario:{ // nombre de campo fk
      model:'usuario', // Modelo a relacionarse (PAPA)
      required: true  //ESTO ES OPCIONAL!!!
    },
    fkProducto:{ // nombre de campo fk
      model:'producto', // Modelo a relacionarse (PAPA)
      required: true  //ESTO ES OPCIONAL!!!
    }    
  },

};

