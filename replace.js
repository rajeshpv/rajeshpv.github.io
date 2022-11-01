function intoHtml(words) {
  var generatedHtml = '';
  var colCount = parseInt(document.getElementById('col-count').value);
  
  for (var i = 0; i < words.length; i++) {
    generatedHtml += '<input type="text" value="' + words[i] + '"  onclick="toClip(this)" style="margin:5px" />';
    if ( (i+1) % colCount === 0) generatedHtml += '<br />';
  }
  
  document.getElementById("demo").innerHTML = generatedHtml;
  //console.log(generatedHtml);
}

function generateClips() {
  try {
    var inputLines = document.getElementById('input-lines').value;
    var cleanLines = inputLines.replaceAll('  ', ' ').replaceAll('  ', ' ');
    var words = cleanLines.split(' ');
    var newWords = [];
    words.forEach(w => {
      const wr = ('' + w).trim();
      if (wr != '') newWords.push(wr);
      console.log(wr.trim());
    });
    intoHtml(newWords);
  } catch (err) {
    console.error(err);
  }
}


function runReplace() {
  try {
    var inputLines = document.getElementById('input-lines').value;

    var fromText = document.getElementById('from-char').value;
    var toText = document.getElementById('to-char').value;
    document.getElementById('input-lines').value = inputLines.replaceAll(fromText, toText);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}

function toClip(txt) {
  txt.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
        console.error(err);
  }
}
