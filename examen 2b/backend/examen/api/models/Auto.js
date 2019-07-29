/**
 * Auto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    chasis:{
      type:'number'
    },
    marca:{
      type:'string'
    },
    color:{
      type:'string'
    },
    modelo:{
      type:'string'
    },
    valor:{
      type:"number"
    },
    fkConductor:{
      model:'conductor'
    }
  },

};

