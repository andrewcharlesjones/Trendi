function getMyTimeline(query) {
    console.log('we in this');
    $.ajax({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=4ndyJones&count=2',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
        }
    });
}

getMyTimeline('doesnt matter')