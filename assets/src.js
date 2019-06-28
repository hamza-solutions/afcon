$.getJSON('./players.json', function(data) {
  const players = data.players;
  for (var player of players) {
    $('.players').append(
      '<div class="one column wide">' +
        '<div class="player" data-position="bottom left" data-variation="basic">' +
        '<div class="image">' +
        '<img src="' +
        player.image +
        '"/>' +
        '</div>' +
        '</div>' +
        '<div class="ui popup">' +
        '<div class="ui yellow image label">' +
        player.name +
        '<div class="detail">' +
        player.number +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
  }
  $('.player').popup({ inline: true });
});

$('.selection.dropdown').dropdown();

$('.ui.form').form({
  fields: {
    name: {
      identifier: 'name',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your name'
        }
      ]
    },
    email: {
      identifier: 'email',
      rules: [
        {
          type: 'email',
          prompt: 'Please enter a valid email'
        }
      ]
    },
    facebook: {
      identifier: 'facebook',
      rules: [
        {
          type: 'url',
          prompt: 'Please enter a valid link'
        }
      ]
    },
    language: {
      identifier: 'language',
      rules: [
        {
          type: 'empty',
          prompt: 'Please select your programming language'
        }
      ]
    },
    code: {
      identifier: 'code',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your source code'
        }
      ]
    }
  }
});
