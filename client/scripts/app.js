var app = {
    init: function () {
        $('#send .submit').on("click", this.handleSubmit());
    },
    send: function (message) {
        $.ajax({
            url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
            type: 'POST',
            data: JSON.stringify(message),
            contentType: 'application/json',
            success: function (data) {
                console.log('chatterbox: Message sent');
            },
            error: function (data) {
                console.error('chatterbox: Failed to send message', data);
            }
        });
    },
    fetch: function () {
``
        $.ajax({
            url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
            type: 'GET',
            dataType:'json',
            success: function (data) {
                console.log('chatterbox: Message recieved');
                console.table(data);
            },
            error: function (data) {
                // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
                console.error('chatterbox: Failed to recieve message', data);
            }
        });
    },
    clearMessages: function () {
        $('#chats').empty();
    },
    renderMessage: function (message) {
        $('#chats').append('<li class="messageLi" ><a class="username">' + message.username + '</a>' + message.text + '</li>');
        $('.username').on("click", this.handleUsernameClick(message.username));
    },
    renderRoom: function (roomname) {
        let $room = $('<div class ="room"></div>');
        $room.text(roomname);
        $room.appendTo($('#roomSelect'));
    },

    handleUsernameClick: function (username) {
        console.log(username + ' &' + username + 'are friends now ..');
    },
    handleSubmit: function (username, text, roomname) {

        var newMessage = {
            username: username,
            text: text,
            roomname: roomname
        }
    }
}