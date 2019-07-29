/**
 * Conductor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type:'string'
    },
    apellido:{
      type:'string'

    },
    numeroAutos:{
      type:'number'
    },
    licenciaValida:{
      type:'boolean'
    },
    autosDeConductor:{
      collection:'auto',
      via:'fkConductor'
    }
  },

};

