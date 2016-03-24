var Pusher = require('pusher-js');
var rest = require('reslter');

var pusher = new Pusher('50ed18dd967b455393ed');

var trendingReddits = pusher.subscribe('trendingreddits');

trendingReddits.bind('new-listing', function (listing) {
  rest.post('https://hooks.slack.com/services/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', {data: listing}).on('complete', function (data, resp) {
    console.log(resp);
  })
});
