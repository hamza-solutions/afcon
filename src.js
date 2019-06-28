// var Mode = function(name, caption, extensions) {
//   this.name = name;
//   this.caption = caption;
//   this.mode = 'ace/mode/' + name;
//   this.extensions = extensions;
//   var re;
//   if (/\^/.test(extensions)) {
//     re =
//       extensions.replace(/\|(\^)?/g, function(a, b) {
//         return '$|' + (b ? '^' : '^.*\\.');
//       }) + '$';
//   } else {
//     re = '^.*\\.(' + extensions + ')$';
//   }

//   this.extRe = new RegExp(re, 'gi');
// };

// var supportedModes = {
//   C_Cpp: ['cpp|c|cc|cxx|h|hh|hpp|ino'],
//   JavaScript: ['js|jsm|jsx'],
//   Java: ['java'],
//   CSharp: ['cs'],
//   Dart: ['dart'],
//   golang: ['go'],
//   PHP: ['php|inc|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module'],
//   Python: ['py'],
//   Ruby: ['rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile'],
//   Rust: ['rs'],
//   Swift: ['swift'],
//   ObjectiveC: ['m|mm']
// };

// var nameOverrides = {
//   ObjectiveC: 'Objective-C',
//   CSharp: 'C#',
//   golang: 'Go',
//   C_Cpp: 'C and C++'
// };

// var modes = [];
// var modesByName = {};

// for (var name in supportedModes) {
//   var data = supportedModes[name];
//   var displayName = (nameOverrides[name] || name).replace(/_/g, ' ');
//   var filename = name.toLowerCase();
//   var mode = new Mode(filename, displayName, data[0]);
//   modesByName[filename] = mode;
//   modes.push(mode);
// }

// function getModeForPath(path) {
//   var mode = modesByName.text;
//   var fileName = path.split(/[\/\\]/).pop();
//   for (var i = 0; i < modes.length; i++) {
//     if (modes[i].supportsFile(fileName)) {
//       mode = modes[i];
//       break;
//     }
//   }
//   return mode;
// }

// var editor = ace.edit('editor');
// editor.setTheme('ace/theme/monokai');
// editor.session.setMode('ace/mode/javascript');

var players = [
  {
    number: 16,
    name: 'محمد الشناوي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/7380.png'
  },
  {
    number: 1,
    name: 'أحمد الشناوي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/8381.png'
  },
  {
    number: 23,
    name: 'محمود جنش',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/18589.png'
  },
  {
    number: 3,
    name: 'أحمد المحمدي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/3601.png'
  },
  {
    number: 12,
    name: 'أيمن أشرف',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/9217.png'
  },
  {
    number: 6,
    name: 'أحمد حجازي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/9885.png'
  },
  {
    number: 4,
    name: 'عمر جابر',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/10185.png'
  },
  {
    number: 20,
    name: 'محمود علاء',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/16460.png'
  },
  {
    number: 15,
    name: 'محمود حمدي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/20063.png'
  },
  {
    number: 5,
    name: 'علي غزال',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/22612.png'
  },
  {
    number: 13,
    name: 'أحمد أيمن منصور',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/24066.png'
  },
  {
    number: 2,
    name: 'باهر المحمدي',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/27428.png'
  },
  {
    number: 19,
    name: 'عبد الله السعيد',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/2948.png'
  },
  {
    number: 11,
    name: 'وليد سليمان',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/5953.png'
  },
  {
    number: 8,
    name: 'طارق حامد',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/8780.png'
  },
  {
    number: 17,
    name: 'محمد النني',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/11254.png'
  },
  {
    number: 7,
    name: 'تريزيجيه',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/18632.png'
  },
  {
    number: 21,
    name: 'نبيل دونجا',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/115945.png'
  },
  {
    number: 22,
    name: 'عمرو وردة',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/23116.png'
  },
  {
    number: 14,
    name: 'أحمد علي كامل',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/6807.png'
  },
  {
    number: 10,
    name: 'محمد صلاح',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/10325.png'
  },
  {
    number: 9,
    name: 'مروان محسن',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/10773.png'
  },
  {
    number: 18,
    name: 'أحمد حسن كوكا',
    image: 'https://semedia.filgoal.com/Photos/Person/Medium/20252.png'
  }
];

for (var player of players) {
  $('.players').append(
    '<div class="one column wide" style="padding: 0">' +
      '<div class="player" data-position="bottom left" data-variation="basic">' +
      '<div class="image">' +
      '<img style="width: 100%;padding: 5px;border-radius: 10px;" src="' +
      player.image +
      '"/>' +
      '</div>' +
      '</div>' +
      '<div class="ui popup" style="width: 200px; padding: 0 !important; top: 50px !important; background: none; border: none; box-shadow: none;">' +
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
