/**
 * @author iMac 9
 */
var pull_example = new Lungo.Element.Pull('#main-article', {
    onPull: "Pull down to refresh",      //Text on pulling
    onRelease: "Release to get new data",//Text on releasing
    onRefresh: "Refreshing...",          //Text on refreshing
    callback: function() {   
    	 Lungo.Core.log(1, "Pull & Refresh completed!");        //Action on refresh
        pull_example.hide();
    }
});
 
           
           
           
           