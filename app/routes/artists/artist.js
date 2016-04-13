import Ember from 'ember';
export default Ember.Route.extend({
  model : function(params){
    return Ember.$.getJSON(`http://itp-api.herokuapp.com/artists/${params.id}`);
  }
});
