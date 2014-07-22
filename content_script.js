function main(){
    $("<div id='dialog'>").appendTo($('body'));
    $( "#dialog" ).text('あなたは今、やる気のない時に見られることの多いサイトを見ようとしています');
    $( "#dialog" ).dialog({
        dialogClass: "no-close",
	autoOpen: false,
	width: 600,
        title: "やる気を出すシステム",
        modal: true,
        close: false,
	buttons: [
		{
		    text: "やる気を出す",
		    click: function() {
			$( this ).dialog( "close" );
                        document.location = 'http://nhiro.org/yaruki/?ext';
		    }
		},
	    {
		text: "5分だけ見る",
		click: function() {
                    port.postMessage({type: 'setTimeout', delay: 5 * 60 * 1000});
		    $( this ).dialog( "close" );
		}
	    }
	]
    });
}

function show_dialog(){
    $( "#dialog" ).dialog( "open" );
}

function record(){
    var domain = document.location.href.match(/\/\/([^/]+)/)[1];
}

var port = chrome.extension.connect({name: "yaruki_hook"});
port.postMessage({type: 'toRunMain'});
port.onMessage.addListener(function(msg) {
    if(msg.type == 'timeout'){
        show_dialog();
    }else if(msg.type == 'toRunMain'){
        if(msg.value == true){
            show_dialog();
        } // else already in rest
    }
});

main();



