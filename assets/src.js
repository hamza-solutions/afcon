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
        },
        {
          type: 'minLength[5]',
          prompt: 'Name must be at least {ruleValue} characters'
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
          type: 'regExp',
          value: /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
          prompt: 'Please enter a valid facebook link'
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

function getFieldValue(fieldId) {
  return $('.ui.form')
    .form('get field', fieldId)
    .val();
}

$('.ui.form .submit.button').api({
  url: 'https://codecoursez-afcon.herokuapp.com/submissions',
  method: 'POST',
  beforeSend: function(settings) {
    if (!$('.ui.form').form('is valid')) return false;
    settings.data = {
      problemId: '5d162b973bff010023cd5a56',
      name: getFieldValue('name'),
      email: getFieldValue('email'),
      facebookProfileLink: getFieldValue('facebook'),
      langId: getFieldValue('language'),
      sourceCode: getFieldValue('code')
    };
    $('.ui.form').addClass('loading');
    $('.verdict').addClass('hidden');
    return settings;
  },
  onSuccess: function(data) {
    $('.ui.form').removeClass('loading');
    $('.ui.form').form('reset');
    $('.successfully-submitted').removeClass('hidden');
    insertParam('submission', data._id);
  },
  onFailure: function(response) {
    // [TODO] handle rejection
  }
});

function insertParam(key, value) {
  key = encodeURI(key);
  value = encodeURI(value);
  document.location.search = [key, value].join('=');
}

function getParam(key) {
  const params = document.location.search.substr(1).split('&');
  for (param of params) {
    var pair = param.split('=');
    if (pair[0] == key) {
      return pair[1];
    }
  }
  return null;
}

const submission = getParam('submission');
if (submission) {
  $('.verdict').removeClass('hidden');
  $('.verdict').html(
    '<p>Submission #' +
      submission +
      ' <i class="notched circle loading icon"></i></p>'
  );
  $.ajax({
    type: 'GET',
    url: 'https://codecoursez-afcon.herokuapp.com/submissions/' + submission
  })
    .done(function(res) {
      let label = 'red';
      if (
        res.verdict === 'JUDGING' ||
        res.verdict === 'IN_QUEUE' ||
        res.verdict === 'PROCESSING'
      ) {
        label = 'yellow';
      } else if (res.verdict === 'ACCEPTED') {
        label = 'green';
      }
      $('.verdict').html(
        '<p>Submission #' +
          submission +
          ' <span class="ui ' +
          label +
          ' label">' +
          res.verdict +
          '</span></p>'
      );
    })
    .fail(function(res) {
      if ((res.status = 404)) {
        $('.verdict').html(
          '<p>Submission #' +
            submission +
            ' <span class="ui red label">Not Found</span></p>'
        );
      } else {
        $('.verdict').addClass('hidden');
      }
    });
}
