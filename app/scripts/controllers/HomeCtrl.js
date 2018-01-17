(function() {
  function HomeCtrl(Room, Message, $cookies) {
    this.rooms = Room.all;
    this.activeRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.changeRoom = function(room) {
      this.activeRoom = room;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
