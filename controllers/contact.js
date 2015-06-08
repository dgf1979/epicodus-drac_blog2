Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Enter your secret message');
      this.set('messageSent', true);
      this.set('confirmationNumber', Math.round(Math.random()*10000));
    },

  }
});
