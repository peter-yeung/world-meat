require.config(
{
    baseUrl : "./js",
    paths :
    {
        'App'          : 'App',
        'jquery'       : require.toUrl("./libs/jquery-2.2.3.min")
    }
});

require(['App','jquery'], function (App,jquery) {
	
});
