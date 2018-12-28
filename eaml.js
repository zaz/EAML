var eaml = new Array();
var System = new Object();
var isOpened = false;
var api = {
	tag: {
		Button:"/eaml/tag/Button.js",
	},
	feature: {
		Window:"/eaml/feature/Window.js",
	},
};
eaml.Console = document.createElement("iframe");
eaml.Console.src = "/eaml/Console.html";
eaml.isDebug = function(bool) {
	if (bool = true) {
		
	} else {
		
	}
};
eaml.uses = function(scriptUrl) {
	var head = document.getElementsByTagName("head")[0];
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = scriptUrl;
	script.onload = function() {
		if (isOpened == false) {
			main();
			isOpened = true;
		} else {
			isOpened = true;
		}
	};
	script.onerror = function(e) { alert("failed: " + JSON.stringify(e)); };
	head.appendChild(script);
};

(function() {
	var oldLog = console.log;
	console.log = function(msg) {
		if (isDebug(true)) {
			document.write(msg);
		}
		oldLog.apply(console,arguments);
	};
});
