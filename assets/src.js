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
