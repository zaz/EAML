let eaml = new Array()
let System = new Object()
let isOpened = false
let api = {
	tag: {
		Button: "/eaml/tag/Button.js",
	},
	feature: {
		Window: "/eaml/feature/Window.js",
	},
}
eaml.Console = document.createElement("iframe")
eaml.Console.src = "/eaml/Console.html"
eaml.isDebug = myBool => {
	// returns bool?
	if (myBool) {
		
	} else {
		
	}
}
eaml.uses = scriptUrl => {
	let head = document.getElementsByTagName("head")[0]
	script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = scriptUrl
	script.onload = () => {
		if (! isOpened) {
			main()  // FIXME: We have not yet defined main()
		}
		isOpened = true
	}
	script.onerror = e => { alert("failed: " + JSON.stringify(e)) }
	head.appendChild(script)
}

// WTF?? Just use console.debug
(() => {
	let oldLog = console.log
	console.log = msg => {
		if (isDebug(true)) {
			document.write(msg)
		}
		oldLog.apply(console,arguments)  // arguments is undefined
	}
})
