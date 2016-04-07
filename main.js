require.config(
{
    baseUrl : "./js",
    paths :
    {
        'App'          : 'App',
        'jQuery'       : require.toUrl("./libs/jquery-2.2.3.min")
    }
});

require(['App','jQuery'], function (App,jQuery) {

});
