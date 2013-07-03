Redd.Views.TrackUser = Backbone.View.extend({
  initialize: function() {
    this.trackuser_data = new Redd.Views.TrackUserData({
      model: this.model
    });
    this.trackuser_posts = new Redd.Views.TrackUserPosts({
      collection: this.collection
    });
  },
  el: '#trackuser',
  template: Redd.Templates('trackuser'),
  events: {
    'submit form': 'enterUsername',
    'click #myTab a': 'clickTabs'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  clickTabs: function(e) {
    e.preventDefault();
    $(e.currentTarget).tab('show');
    return false;
  },
  enterUsername: function(e) {
    var username = $('#tracking-username').val();
    console.log('username submitted', username);
    this.model.trigger('usernameSubmitChange', username);
    this.collection.trigger('usernameSubmitChange', username);
    $('#tracking-username').val('');
    return false;
  }
});
