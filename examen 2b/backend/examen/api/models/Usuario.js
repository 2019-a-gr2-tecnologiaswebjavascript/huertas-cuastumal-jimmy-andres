/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    cedula:{
      type:'string'
    },
    email:{
      type:'string',
      isEmail:true
    },
    contrasenia:{
      type:'string'
    },

    facturasDeUsuario:{
      collection:'factura',
      via:'fkUsuario'
    }

  },

};

