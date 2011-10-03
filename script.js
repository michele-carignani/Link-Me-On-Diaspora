
var diasp_protocol_regexp = /diaspora:\/\//;
var diasp_protocol_string = 'diaspora://';


function with_diasp_protocol ( link ) {
	var info, user, user_pod;	
	info = link.href.split(diasp_protocol_string)[1].split('@');
	user = info[0];
	user_pod = info[1];
	if ( user != '' && user_pod != '')
		link.href = "http://" + user_pod + "/u/" + user;
}


for(var link in document.links) {
	if ( link.href.search( diasp_protocol_regexp ) != -1 )
		with_diasp_protocol( link );
		
}


