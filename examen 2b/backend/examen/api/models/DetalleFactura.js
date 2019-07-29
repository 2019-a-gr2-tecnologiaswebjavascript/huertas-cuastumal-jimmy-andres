/**
 * DetalleFactura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      fkFactura:{
        model:'factura'
      },
      modelo:{
        type :"string"
      },
      valor:{
        type :"string"
      },
      nombreCajero:{
        type :"string"
      },
      cantidad:{
        type :"number"
      }
    }

};

