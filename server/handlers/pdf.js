var wkhtmltopdf = require('node-wkhtmltopdf');

module.exports = {

  create(request, reply) {

    var uri = 'http://localhost:3000/party';

    var pdfProc = _getPDFStream(uri, {
      orientation: request.query.orientation || 'landscape',
      size: request.query.size || 'letter'
    });

    var fileName = 'partytime.pdf';

    reply(pdfProc.stdout)
      .header('Content-disposition', 'attachment; filename=' + fileName)
      .header('Content-type', 'application/pdf');

    pdfProc.stdout.on('error', function (err) {
      console.error("A PDF generation error occurred for the PDF URI", uri, err);
      reply(Boom.internalError());
    });

    /**
     * Time out the child process after 60 seconds..
     *
     */
    var exited = false;
    var timeout = setTimeout(function () {
      if (!exited) {
        console.warn('Killing PDF process due to timeout!');
        pdfProc.kill();
      }
    }, 60*1000);

    pdfProc.on('exit', function () {
      console.log('PDF child process exiting..');
      exited = true;
      clearTimeout(timeout);
    });

  }
}


function _getPDFStream(uri, cfg) {

    var options = [
      '--margin-bottom 25pt',
      '--margin-left 10pt',
      '--margin-right 10pt',
      '--margin-top 30pt',
      '--header-font-size 10',
      '--header-left "Orlando Devs"',
      '--header-center "Time to Party"',
      '--header-right "Party Invites"',
      '--header-spacing 5',
      '--footer-font-size 8',
      '--footer-right "[date] [time]"',
      '--footer-center "([page] of [toPage])"',
      '--footer-left "Made by Josh Pagley"',
      '--footer-spacing 5',
      '--javascript-delay 8000'
    ];

    if (true) {
      options.push('--debug-javascript');
      console.log('wkhtmltopdf options', options.join(" "));
    }

    var doc = wkhtmltopdf(options, uri);

    return doc;

}
