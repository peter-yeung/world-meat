require.config(
{
    baseUrl : "./js",
    paths :
    {
        'App'          : 'App',
        'jquery'       : require.toUrl("./libs/jquery-1.10.2.min")
    }
});

require(['App','jquery'], function (App,jquery) {
	
});
