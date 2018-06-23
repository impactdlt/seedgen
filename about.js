var converter = new showdown.Converter();
$.get( "https://raw.githubusercontent.com/acycliclabs/seedgen/master/README.md", function( inputText ) {
    var convertedHtml = converter.makeHtml(inputText);
    console.log('convertedHtml', convertedHtml);
    $('#about-div').html(convertedHtml);
});
