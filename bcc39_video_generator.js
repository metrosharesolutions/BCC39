// ============================================================================
// By Joseph Parzel aka The Generator
// ============================================================================

(() => {

	// ------------------------------------------------------------------------
	// Session data
	// ------------------------------------------------------------------------

	// Boston Code Camp 39, November 2025 (28 Sessions)

	// Image SRCs are constantly changing

	let cloudSrc = "https://chatgpt.com/backend-api/estuary/content?id=file_000000000240720cade8d6ece1392a3f&ts=489842&p=fs&cid=1&sig=35ca4b6538c3f137ef6ccfbd751b090d66302335b0eb3c632910b624d81e0d7e&v=0";
	let chooseHeaderSrc = "https://chatgpt.com/backend-api/estuary/content?id=file_000000006da87230a3bc77a08fb48a97&ts=489842&p=fs&cid=1&sig=c55e34ad07f56b4442020cf09128078db5b8fca588e7510d913ea742a7d23426&v=0";

	let sessionImgSrcs = [
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000878c71fb80fadf6939616214&ts=489842&p=fs&cid=1&sig=6c11a89611127ec344fe6af80b5fcd1540c1fcefdfae8f43ce7ceb655ca6c23e&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_000000007e98722fbf9a240b385af0ad&ts=489842&p=fs&cid=1&sig=8a37c7a49831fdac15d286542bc3aa5cb2be8d1c1c7ee958081438ae778b1040&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_000000001f2071fba29a02b2541d940a&ts=489842&p=fs&cid=1&sig=1a3f2576f627cfc5ad322a548fed2c01427dcddfb92f720156e326261aa026ce&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000ea90722f8d38a49bb40f4b00&ts=489842&p=fs&cid=1&sig=5f1640159029b530fc9a5b21bfe23178674e6ebec55e774db2d07e85fc071d6a&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000cff0722f8e3d72932696fd36&ts=489842&p=fs&cid=1&sig=e3dcdc6230542cfcd78690ef176438a6cfdcb5b223bc8324b33373b9eb1363b5&v=0",

		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000347c71f59adbc80c7ad2d131&ts=489843&p=fs&cid=1&sig=4ce877e48b996849db48cbafed57bdf09d67e5e96f13aefc0eb086312297f116&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_0000000031e0722f974b9ed0d2455692&ts=489843&p=fs&cid=1&sig=722563db52b6636a90d8143920034090dbc4c3be772f006323ade1895b2e1ea7&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000de94722f923fb1b3e42726d1&ts=489843&p=fs&cid=1&sig=946028d5f5a378e809f132fa4788a9d076971553c0378314792bf31381914140&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000ddf4722f8db2193c673b3684&ts=489843&p=fs&cid=1&sig=bb77b4ac63a83a854bfcb0c2a9afb33e02d298ef20c6f1e57e5109d497ed9fc7&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000a768722f80b9647fbdc849a1&ts=489843&p=fs&cid=1&sig=d9b6b2f5f8a0ab11957f7ace58e111a85b95dd01e9552a17eff683082817e8eb&v=0",

		"https://chatgpt.com/backend-api/estuary/content?id=file_000000009878722fb0ad243e3573a104&ts=489843&p=fs&cid=1&sig=c92f071c3db037c11915745203a9aae1b9c46203361acd987a992044d707ef48&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000f09c722f868d6eb94267417e&ts=489843&p=fs&cid=1&sig=aa15fc554a98959c563d80bac8b3f55aa875539063e12afdfb20072e0947545b&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000060c722fb49fb93a95013767&ts=489843&p=fs&cid=1&sig=e241a32b0a1e4b36ef16b5bae99850bfdc369b101cea95cba75068d1c424de83&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_000000000994722f9a202301d620d41f&ts=489843&p=fs&cid=1&sig=deb98304ba8f7c0ff8c10d94917cc63ee8bbba6b42892593a103833c6050ba9b&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000ada871fd93d314193a0d95ae&ts=489856&p=fs&cid=1&sig=d30dfb0030e706b452b2cec0579d20542c4decfc196539342c84c6c2a3ea29dd&v=0",

		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000de3471f5b42741c9a201aa3d&ts=489856&p=fs&cid=1&sig=94f252745feba2a96d1d933fa041ce839e3d901feaed03c59599a8731f2bc994&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_0000000029147230bd675dc92102eb6c&ts=489856&p=fs&cid=1&sig=9d577fd02dd91b8f69ead8dbc56a2c1664976cbaf1132d58a8b97abcd2461755&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000f17c722fb7289176ff35a7ad&ts=489856&p=fs&cid=1&sig=12980b80dcb7a56c6d615720a36ab431d2ec45fed56dee7918ffed11455cdab8&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_0000000075bc722f8d1e6cba6861646b&ts=489856&p=fs&cid=1&sig=878fa39aaf5895a0fb552776969569be8cdf000f814502d27a1962c4ab7c8429&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_000000005ea072309e7c6ead25fbd042&ts=489856&p=fs&cid=1&sig=38a1862c241f291bd6bcf83ca323c517dbabba62cb3f602b2ddbb74c8b7f1874&v=0",

		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000037c71f587fb01c7924aae64&ts=489857&p=fs&cid=1&sig=33ba4922871d7f64ef2add713d7b892cf9f610d6d4a539926baada51aab86861&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000d1c071f5baaccaa7fbe9be4d&ts=489858&p=fs&cid=1&sig=47c4e23092fd27fff28aecc5a4c5050d0c5966a79f98fe9148bffa2e488e95cb&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000eba871f59f487cb05ba87265&ts=489859&p=fs&cid=1&sig=9221e5fa0e57540ae8ed01fcfd2c821c4a6a4d39b7dc1e5240f06dc3b04842dc&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_0000000041c071f9a5cd4ad5e587ddf4&ts=489859&p=fs&cid=1&sig=c6e407bc4b106ccd3456bca02e82179a8eebbc9307a3e50efe9a106991e6765e&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000a8ec71f9b0c25d8f6073796f&ts=489859&p=fs&cid=1&sig=5e7501ade7837f694d92d7c9a3510d1cd1b16b55b9fdc430703f74c4b62c19b2&v=0",

		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000537471f98344efd7a9a3523f&ts=489859&p=fs&cid=1&sig=3726a462f14dee76916377dc5c28d011c8a1961208bb21d9b993714f1a11f0a3&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_0000000037c871f59d9a554fe9f50130&ts=489860&p=fs&cid=1&sig=285a9b38466f46521dd14b11c2709effc36dacb965be5fd817762c494ce78a84&v=0",
		"https://chatgpt.com/backend-api/estuary/content?id=file_00000000031471f58515c44d6090245a&ts=489860&p=fs&cid=1&sig=a2da654e327f2bd5de2823206650359ab525c1e72037890d6f0f73b51e5ebe04&v=0"
	];

	let sessionTitles = [
		"Inter-Agent Communication in .NET: Exploring Microsoft’s A2A SDK",
		"AI Chatbot → Agent with Model Context Protocol",
		"Building Production-Ready AI Agents with Amazon Bedrock AgentCore",
		"Automating anywhere on the web - Live Demos!",
		"AI + Relational Data: Hybrid ML + SQL Architectures",
		"Vibers vs. Doomers: The AI Coding Debate",
		"Responsible AI and Content Safety",
		"Lessons Learned from a Year of Building Copilot Agents & RAG Applications",
		"Docker - The Developer's Best Friend",
		"Setting Up a C# Pit of Success",
		"Building Portable Serverless Applications",
		"Get Git",
		"security.txt - What does it actually tell you?",
		"Data Engineering with Microsoft Fabric",
		"UX for AI Apps",
		"Software Architecture and Design for the Rest of Us",
		"Guardrails in Action: Implementing Azure AI Content Safety for Responsible AI Apps",
		"Creating a Cover Letter using AI to Respond to a Job Ad",
		"Shhhhh It's a secret. The ins and outs of using secrets in AKS",
		"Battle of the Browsers: Exploring ChatGPT Atlas, Perplexity Comet, and Claude for Chrome",
		"An Introduction to Spec-Driven Development with Spec Kit",
		"Unified Platform for Agentic AI",
		"Preparing a resume using AI",
		"What does it mean to write Clean Code (in C#)?",
		"Using AI to Enhance your Personal Wellness",
		"Generate AI Videos w/o AI Video Generator",
		"Usage of AI in healthcare for detecting Anomalies in Medical claims processing",
		"Open Sourcing Your Career: The Pathway Through Collaborative Development"
	];

	let sessionDescriptions = [
		"Chaos in multi-agent messaging gets flattened once Protocol Puncher steps in, showing how the A2A .NET SDK handles discovery, streaming, and long-running tasks inside real ASP.NET Core apps.",
		"Autonomous tools stop acting wild during the MCP session the moment Agent Wrangler lays out how Model Context Protocol gives AI agents structure, capabilities, and responsible guardrails.",
		"Enterprise deployment finally looks manageable as Bedrock Barricade demonstrates how Amazon AgentCore moves AI agents from concept to production with security and scale intact.",
		"Live web automation becomes strangely simple when Web Automator X bypasses bot-detection and proves how Python, GitHub Actions, and AI browsers can orchestrate nearly anything online.",
		"Hybrid SQL-plus-ML architectures stop arguing with themselves once Data Dynamo shows how relational backends, embeddings, caching, and vector sync strategies actually work together.",
		"The debate on AI coding swings between hype and doom until The Debate Droid Duo breaks it down with sharp arguments about speed, fragility, and the future of developer work.",
		"Content safety finally makes sense when Safety Sentinel demonstrates how responsible-AI tools filter harmful inputs and outputs far more effectively than prompt tweaks ever could.",
		"Retrieval quality stops embarrassing itself as RAG Ranger walks through chunking, indexing, and orchestration lessons learned from real RAG applications built for Copilot-style assistants.",
		"Container sprawl gets cleaned up fast once Captain Container explains how Docker makes local environments spin up, run isolated stacks, and disappear without residue or clutter.",
		"Warning storms and dependency churn settle down after The Pit Boss outlines how .editorconfig, analyzers, and project-wide rules keep C# repos disciplined, reliable, and future-ready.",
		"Cloud lock-in loses its grip when Serverless Striker shows how portable serverless patterns let functions run across providers or on-prem with minimal friction and maximum control.",
		"Merge conflicts retreat quickly as Git Guardian delivers fast, practical Git techniques using Visual Studio and GitHub, helping teams resolve code tangles and bad branches swiftly.",
		"security.txt myths fall apart when Secret Signal reveals real-world patterns, mistakes, and surprising stats from thousands of scanned files across diverse domains and industries.",
		"Fabric confusion dissolves after Fabric Forger demonstrates how delta tables and medallion architecture shape Microsoft Fabric into an orderly data pipeline with practical examples.",
		"AI UX pain points get carved cleanly as UX Sawblade explains how to build interfaces that handle agentic models safely and predictably, even when autonomy introduces uncertainty.",
		"Over-designed systems lose their swagger when Simple Smasher lays out pragmatic architecture meant for real teams, real constraints, and realistic business goals—not Netflix fantasies.",
		"Unsafe outputs don’t get far once Guardrail Guardian shows Azure AI Content Safety and Foundry guardrails acting as the system’s seatbelts, enforcing thresholds and blocking harm.",
		"Job-application clutter sharpens up fast when The Cover Letter Construct walks through AI-driven techniques for producing targeted, screen-ready letters tailored for ATS systems.",
		"Leaky Kubernetes setups get locked tight after Secret Keeper demonstrates how AKS secrets and operational patterns should actually be handled—securely, scalably, and automatically.",
		"AI-powered browsers face real pressure once Browser Brawler compares Atlas, Comet, and Claude for Chrome in live workflows involving coding, research, and document summarization.",
		"Spec chaos disappears when Spec Smasher uses GitHub Spec Kit to show how clear intent and scope make AI-assisted coding precise instead of lucky, using real SDD workflows.",
		"Multi-agent systems behave sensibly as Agentic Architect outlines how planning, orchestration, and safety produce reliable autonomous workflows that can run in production stacks.",
		"Resume tailoring becomes a structured operation after The Resume Reactor Unit demonstrates how AI aligns resumes with job-screening logic and job description keyword patterns.",
		"C# messes lose their hiding spots when Clean Code Crusader breaks down real techniques for writing clean, maintainable .NET code across teams, repos, and feature branches.",
		"Wellness data stops floating around pointlessly as Wellness Warrior shows how AI, wearables, and biohacking insights turn noise into usable guidance for daily health decisions.",
		"Video generation takes an unexpected turn when The Generator shows how HTML, JS, .NET, and AI images can build full motion without touching Sora, using code and creativity.",
		"Fraud signals stop slipping by once Claim Hunter walks through ML techniques for anomaly detection in medical claim workflows, showing how AI reduces waste and flags abuse.",
		"Open-source career growth suddenly has direction when Open-Source Outrider explains how contribution strategy transforms professional momentum into reputation and real results."
	];

	let sessionCharacters = [
		"Protocol Puncher",
		"Agent Wrangler",
		"Bedrock Barricade",
		"Web Automator X",
		"Data Dynamo",
		"The Debate Droid Duo",
		"Safety Sentinel",
		"RAG Ranger",
		"Captain Container",
		"The Pit Boss",
		"Serverless Striker",
		"Git Guardian",
		"Secret Signal",
		"Fabric Forger",
		"UX Sawblade",
		"Simple Smasher",
		"Guardrail Guardian",
		"The Cover Letter Construct",
		"Secret Keeper",
		"Browser Brawler",
		"Spec Smasher",
		"Agentic Architect",
		"The Resume Reactor Unit",
		"Clean Code Crusader",
		"Wellness Warrior",
		"The Generator",
		"Claim Hunter",
		"Open-Source Outrider"
	];

	let sessionImgs = [];
	for (let i = 0; i < sessionImgSrcs.length; i++) {
		let img = new Image();
		img.crossOrigin = "anonymous";
		img.src = sessionImgSrcs[i];
		sessionImgs.push(img);
	}

	// Choose your presenter

	let chooseHeaderImg = new Image();
	chooseHeaderImg.crossOrigin = "anonymous";
	chooseHeaderImg.src = chooseHeaderSrc;

	// ------------------------------------------------------------------------
	// Clear the page
	// ------------------------------------------------------------------------

	document.body.innerHTML = "";
	document.body.style.margin = "0";
	document.body.style.padding = "0";
	document.documentElement.style.margin = "0";
	document.documentElement.style.padding = "0";

	// ------------------------------------------------------------------------
	// Canvas setup
	// ------------------------------------------------------------------------

	let c = document.createElement("canvas");
	let dpr = window.devicePixelRatio || 1;

	c.width = 1920 * dpr;
	c.height = 1080 * dpr;
	c.style.width = "1920px";
	c.style.height = "1080px";
	document.body.appendChild(c);

	let ctx = c.getContext("2d");
	ctx.scale(dpr, dpr);
	ctx.imageSmoothingEnabled = true;

	// ------------------------------------------------------------------------
	// Dimensions and timing
	// ------------------------------------------------------------------------

	let w = 1920;
	let h = 1080;
	let t = 0;
	let fps = 60;

	// Independent control values (seconds)
	let introSeconds = 12;
	let messageSeconds = 6;
	let chooseSeconds = 6;
	let perSessionSecs = 14;
	let outroSeconds = 20;

	// Converted to frames
	let textIn = 0;
	let textOut = textIn + introSeconds * fps;

	let msgIn = textOut;
	let msgOut = msgIn + messageSeconds * fps;

	let chooseIn = msgOut;
	let chooseOut = chooseIn + chooseSeconds * fps;

	let imgIn = chooseOut;
	let imgOut = imgIn + perSessionSecs * fps * sessionTitles.length;

	let outroIn = imgOut;
	let outroOut = outroIn + outroSeconds * fps;

	let dur = outroOut;

	// ------------------------------------------------------------------------
	// Cloud image and fade
	// ------------------------------------------------------------------------

	let cloudImg = new Image();
	cloudImg.crossOrigin = "anonymous";
	cloudImg.src = cloudSrc;

	let fadeCanvas = (img, x, y) => {
		let fade = document.createElement("canvas");
		fade.width = img.width;
		fade.height = img.height;

		let fctx = fade.getContext("2d");
		fctx.drawImage(img, 0, 0);

		let r = Math.min(img.width, img.height) / 1.5;
		let grad = fctx.createRadialGradient(x, y, 0, x, y, r);
		grad.addColorStop(0, "rgba(0,0,0,0)");
		grad.addColorStop(1, "black");

		fctx.globalCompositeOperation = "destination-in";
		fctx.fillStyle = grad;
		fctx.fillRect(0, 0, img.width, img.height);

		return fade;
	};

	let clouds = [];
	let bigClouds = [];
	let lastBigCloud = 0;

	let makeClouds = () => {
		clouds.length = 0;
		let variants = [];

		let cx = [
			img => img.width * 0.25,
			img => img.width * 0.5,
			img => img.width * 0.75,
			img => img.width * 0.25,
			img => img.width * 0.5,
			img => img.width * 0.75
		];

		let cy = [
			img => img.height * 0.25,
			img => img.height * 0.25,
			img => img.height * 0.25,
			img => img.height * 0.75,
			img => img.height * 0.75,
			img => img.height * 0.75
		];

		for (let i = 0; i < 6; i++) {
			variants.push(fadeCanvas(cloudImg, cx[i](cloudImg), cy[i](cloudImg)));
		}

		for (let i = 0; i < 30; i++) {
			let img = variants[Math.random() * variants.length | 0];
			let scale = 0.05 + Math.random() * 0.2;
			clouds.push({
				img: img,
				x: Math.random() * w,
				y: Math.random() * h,
				speed: 1 + scale * 6,
				alpha: 0.1 + 0.3 * scale,
				scale: scale
			});
		}
	};

	cloudImg.onload = () => { makeClouds(); };

	// ------------------------------------------------------------------------
	// MediaRecorder  (canvas video + tab/system audio via getDisplayMedia)
	// ------------------------------------------------------------------------

	let m = MediaRecorder;
	let v = c.captureStream(60);
	let chunks = [];
	let rec = null;
	let stopRequested = false;

	(async () => {
		const displayStream = await navigator.mediaDevices.getDisplayMedia({
			video: true,
			audio: true
		});

		const combinedStream = new MediaStream([
			...v.getVideoTracks(),
			...displayStream.getAudioTracks()
		]);

		rec = new m(combinedStream, {
			mimeType: "video/webm;codecs=vp9",
			videoBitsPerSecond: 8000000
		});

		rec.ondataavailable = e => { chunks.push(e.data); };

		rec.onstop = () => {
			let b = new Blob(chunks, { type: "video/webm" });
			let u = URL.createObjectURL(b);
			let a = document.createElement("a");
			a.href = u;
			a.download = "boston_code_camp_39_clouds_gradient_85alpha.webm";
			a.click();
		};

		rec.start();

		if (stopRequested && rec.state === "recording") {
			rec.stop();
		}
	})();

	// ------------------------------------------------------------------------
	// MUSIC ENGINE
	// ------------------------------------------------------------------------

	let musicContext = new (window.AudioContext || window.webkitAudioContext)();
	let musicStarted = false;
	let musicMasterGain = musicContext.createGain();
	musicMasterGain.gain.value = 0;

	let musicDestination = musicContext.createMediaStreamDestination();
	musicMasterGain.connect(musicDestination);
	musicMasterGain.connect(musicContext.destination);

	let musicBuffer = null;
	let musicSource = null;

	let musicStartSeconds = 1;
	let musicFadeSeconds = 0;
	let musicLoopSeconds = 32;

	function buildSong(ctx, durationSec) {
		const sr = ctx.sampleRate;
		const off = new OfflineAudioContext(2, sr * durationSec, sr);

		// master + simple bus compressor
		const master = off.createGain();
		master.gain.value = 0.15;

		const comp = off.createDynamicsCompressor();
		comp.threshold.value = -18;
		comp.knee.value = 30;
		comp.ratio.value = 3;
		comp.attack.value = 0.003;
		comp.release.value = 0.25;

		master.connect(comp);
		comp.connect(off.destination);

		// ------------------------------------------------------------------
		// TEMPO / LOOP FORM: continuous high-energy rock
		// ------------------------------------------------------------------
		const bpm = 160;             // fast rock
		const beat = 60 / bpm;       // quarter note
		const bar = beat * 4;        // 4/4 bar
		const loopLengthSec = 120;   // musical loop length: 2 minutes
		const barsPerLoop = Math.round(loopLengthSec / bar); // 80 bars
		const totalBars = Math.floor(durationSec / bar);

		// ------------------------------------------------------------------
		// DRUM KIT
		// ------------------------------------------------------------------

		function kick(t) {
			const o = off.createOscillator();
			o.type = "sine";
			o.frequency.setValueAtTime(80, t);
			o.frequency.exponentialRampToValueAtTime(40, t + 0.12);

			const g = off.createGain();
			g.gain.setValueAtTime(1.0, t);
			g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

			o.connect(g).connect(master);
			o.start(t);
			o.stop(t + 0.25);
		}

		function snare(t) {
			const len = sr * 0.18;
			const buf = off.createBuffer(1, len, sr);
			const d = buf.getChannelData(0);
			for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

			const src = off.createBufferSource();
			src.buffer = buf;

			const hp = off.createBiquadFilter();
			hp.type = "highpass";
			hp.frequency.value = 900;

			const bp = off.createBiquadFilter();
			bp.type = "bandpass";
			bp.frequency.value = 2000;
			bp.Q.value = 0.8;

			const g = off.createGain();
			g.gain.setValueAtTime(1.1, t);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

			src.connect(hp).connect(bp).connect(g).connect(master);
			src.start(t);
			src.stop(t + 0.19);
		}

		function hat(t, open) {
			const len = sr * (open ? 0.20 : 0.06);
			const buf = off.createBuffer(1, len, sr);
			const d = buf.getChannelData(0);
			for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

			const src = off.createBufferSource();
			src.buffer = buf;

			const hp = off.createBiquadFilter();
			hp.type = "highpass";
			hp.frequency.value = 6000;

			const g = off.createGain();
			const startGain = open ? 0.55 : 0.32;
			g.gain.setValueAtTime(startGain, t);
			g.gain.exponentialRampToValueAtTime(0.0001, t + (open ? 0.18 : 0.05));

			src.connect(hp).connect(g).connect(master);
			src.start(t);
			src.stop(t + (open ? 0.21 : 0.07));
		}

		function tom(t, freq, level) {
			const o = off.createOscillator();
			o.type = "triangle";
			o.frequency.setValueAtTime(freq, t);
			o.frequency.exponentialRampToValueAtTime(freq * 0.7, t + 0.22);

			const g = off.createGain();
			g.gain.setValueAtTime(level, t);
			g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

			o.connect(g).connect(master);
			o.start(t);
			o.stop(t + 0.32);
		}

		const tomLowFreq = 110;
		const tomMidFreq = 147;
		const tomHiFreq = 196;

		// constant driving rock groove
		function grooveBusy(tBar) {
			// kicks
			kick(tBar);                     // 1
			kick(tBar + beat * 0.5);        // 1+
			kick(tBar + beat * 2);          // 3
			kick(tBar + beat * 2.75);       // 3e

			// snares 2 and 4
			snare(tBar + beat);
			snare(tBar + beat * 3);

			// hats on 8th-notes, small lift on & of 4
			const step = beat / 2;
			for (let i = 0; i < 8; i++) {
				hat(tBar + step * i, false);
			}
		}

		// tom fill, but still no drop in intensity
		function grooveFill(tBar) {
			// keep full backbeat
			grooveBusy(tBar);

			// layered tom run over last beat
			const start = tBar + beat * 3;
			tom(start, tomLowFreq, 0.9);
			tom(start + beat * 0.2, tomMidFreq, 0.95);
			tom(start + beat * 0.4, tomHiFreq, 1.0);
			tom(start + beat * 0.6, tomMidFreq * 1.1, 1.0);
		}

		// ------------------------------------------------------------------
		// BASS: distorted rock bass line
		// ------------------------------------------------------------------

		function playBassNote(t, freq, length, level) {
			const osc = off.createOscillator();
			osc.type = "sawtooth";
			osc.frequency.value = freq;

			const lp = off.createBiquadFilter();
			lp.type = "lowpass";
			lp.frequency.value = 900;
			lp.Q.value = 0.7;

			const drive = off.createWaveShaper();
			const curveLen = 256;
			const curve = new Float32Array(curveLen);
			const k = 4.5;
			for (let i = 0; i < curveLen; i++) {
				const x = (i / (curveLen - 1)) * 2 - 1;
				curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
			}
			drive.curve = curve;

			const g = off.createGain();
			g.gain.setValueAtTime(0, t);
			g.gain.linearRampToValueAtTime(level, t + 0.01);
			g.gain.exponentialRampToValueAtTime(0.001, t + length);

			osc.connect(lp).connect(drive).connect(g).connect(master);
			osc.start(t);
			osc.stop(t + length + 0.05);
		}

		// 8-bar rock progression for the loop (repeats across 80 bars)
		const bassRoots = [
			41.20, // E
			41.20, // E
			55.00, // A
			55.00, // A
			49.00, // G
			49.00, // G
			41.20, // E
			62.00  // D
		];

		function scheduleBassBar(barIndex, tBar) {
			const loopBar = barIndex % barsPerLoop;
			const local8 = loopBar % 8;
			const root = bassRoots[local8];

			const stepsPerBar = 8; // 8th-note drive
			const stepDur = bar / stepsPerBar;

			for (let s = 0; s < stepsPerBar; s++) {
				const t = tBar + s * stepDur;

				let freq = root;
				let level = 0.7;
				let len = stepDur * 0.9;

				const isDownbeat = (s % 2 === 0);

				if (!isDownbeat) {
					level = 0.45;
					if (s === 3) freq = root * 1.5;           // fifth
					if (s === 7 && local8 === 7) freq = root * 2; // octave into loop
					len = stepDur * 0.7;
				}

				if (local8 === 7 && s >= 4) {
					level *= 1.1;
				}

				playBassNote(t, freq, len, level);
			}
		}

		for (let i = 0; i < totalBars; i++) {
			const tBar = i * bar;
			grooveBusy(tBar);
			scheduleBassBar(i, tBar);
		}

		return off.startRendering();
	}

	buildSong(musicContext, musicLoopSeconds).then(buf => {
		musicBuffer = buf;
	});

	function playSwoosh() {
		let ctx = musicContext;

		// noise source
		let bufferSize = 2 * ctx.sampleRate;
		let noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
		let data = noiseBuffer.getChannelData(0);
		for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

		let noise = ctx.createBufferSource();
		noise.buffer = noiseBuffer;

		// filter sweep for whip-like movement
		let filt = ctx.createBiquadFilter();
		filt.type = "bandpass";
		filt.frequency.setValueAtTime(300, ctx.currentTime);
		filt.frequency.exponentialRampToValueAtTime(4000, ctx.currentTime + 0.7);
		filt.Q.value = 6;

		// gain envelope
		let g = ctx.createGain();
		g.gain.setValueAtTime(0.0001, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(1.0, ctx.currentTime + 0.1);
		g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.0);

		noise.connect(filt).connect(g).connect(musicMasterGain);
		noise.start();
		noise.stop(ctx.currentTime + 1.0);
	}

	function startMusicLoop() {
		if (!musicBuffer || musicStarted) return;
		musicStarted = true;

		musicSource = musicContext.createBufferSource();
		musicSource.buffer = musicBuffer;
		musicSource.loop = true;

		musicSource.connect(musicMasterGain);

		let musicStartTime = 1;
		let musicVolume = 0.8;
		let now = musicContext.currentTime;
		musicMasterGain.gain.setValueAtTime(0, now);
		musicMasterGain.gain.linearRampToValueAtTime(musicVolume, now + musicStartTime);

		musicSource.start(now);
	}

	function fadeOutMusic() {
		if (!musicStarted || !musicSource) return;
		let now = musicContext.currentTime;
		musicMasterGain.gain.setValueAtTime(musicMasterGain.gain.value, now);
		musicMasterGain.gain.linearRampToValueAtTime(0, now + musicFadeSeconds);
	}

	// ------------------------------------------------------------------------
	// Sound Effects
	// ------------------------------------------------------------------------

	function buildSfx(id, ctx) {
		switch (id) {

			case 1:
				return buildSfx1(ctx);  // Protocol Puncher
			case 2:
				return buildSfx2(ctx);  // Agent Wrangler
			case 3:
				return buildSfx3(ctx);  // Bedrock Barricade
			case 4:
				return buildSfx4(ctx);  // Web Automator X
			case 5:
				return buildSfx5(ctx);  // Data Dynamo
			case 6:
				return buildSfx6(ctx);  // Debate Droid Duo
			case 7:
				return buildSfx7(ctx);  // Safety Sentinel
			case 8:
				return buildSfx8(ctx);  // RAG Ranger
			case 9:
				return buildSfx9(ctx);  // Captain Container
			case 10:
				return buildSfx10(ctx); // Pit Boss
			case 11:
				return buildSfx11(ctx); // Serverless Striker
			case 12:
				return buildSfx12(ctx); // Git Guardian
			case 13:
				return buildSfx13(ctx); // Secret Signal
			case 14:
				return buildSfx14(ctx); // Fabric Forger
			case 15:
				return buildSfx15(ctx); // UX Sawblade
			case 16:
				return buildSfx16(ctx); // Simple Smasher
			case 17:
				return buildSfx17(ctx); // Guardrail Guardian
			case 18:
				return buildSfx18(ctx); // Cover Letter Construct
			case 19:
				return buildSfx19(ctx); // Secret Keeper
			case 20:
				return buildSfx20(ctx); // Browser Brawler
			case 21:
				return buildSfx21(ctx); // Spec Smasher
			case 22:
				return buildSfx22(ctx); // Agentic Architect
			case 23:
				return buildSfx23(ctx); // Resume Reactor Unit
			case 24:
				return buildSfx24(ctx); // Clean Code Crusader
			case 25:
				return buildSfx25(ctx); // Wellness Warrior
			case 26:
				return buildSfx26(ctx); // The Generator
			case 27:
				return buildSfx27(ctx); // Claim Hunter
			case 28:
				return buildSfx28(ctx); // Open-Source Outrider

			default:
				return null;
		}
	}

	function buildSfx1(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "sine";

				let gain = ctx.createGain();
				let comp = ctx.createDynamicsCompressor();
				comp.threshold.value = -20;
				comp.knee.value = 5;
				comp.ratio.value = 12;
				comp.attack.value = 0.005;
				comp.release.value = 0.08;

				// pitch drop
				osc.frequency.setValueAtTime(600, now);
				osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

				// amplitude
				gain.gain.setValueAtTime(0.0001, now);
				gain.gain.exponentialRampToValueAtTime(1.0, now + 0.05);
				gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

				// connection
				osc.connect(gain).connect(comp).connect(this._dest);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx2(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				// noise buffer
				let size = ctx.sampleRate * 2;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let noise = ctx.createBufferSource();
				noise.buffer = buf;

				// bandpass sweep downward
				let bp = ctx.createBiquadFilter();
				bp.type = "bandpass";
				bp.frequency.setValueAtTime(5000, now);
				bp.frequency.exponentialRampToValueAtTime(300, now + 1.0);
				bp.Q.value = 5;

				// gain envelope
				let g = ctx.createGain();
				g.gain.setValueAtTime(0.0001, now);
				g.gain.exponentialRampToValueAtTime(1.0, now + 0.05);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

				noise.connect(bp).connect(g).connect(this._dest);

				noise.start(now);
				noise.stop(now + 1.5);
			}
		};
	}

	function buildSfx3(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
				master.connect(this._dest);

				// deep sub-hit
				let sub = ctx.createOscillator();
				sub.type = "sine";
				sub.frequency.setValueAtTime(60, now);
				sub.frequency.exponentialRampToValueAtTime(30, now + 0.25);

				let subG = ctx.createGain();
				subG.gain.setValueAtTime(1.2, now);
				subG.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

				// chunky gravel layer
				let size = ctx.sampleRate * 0.6;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) {
					d[i] = (Math.random() * 2 - 1) * (i < 2000 ? 1 : 0.4);
				}

				let gravel = ctx.createBufferSource();
				gravel.buffer = buf;

				let lp = ctx.createBiquadFilter();
				lp.type = "lowpass";
				lp.frequency.setValueAtTime(350, now);
				lp.Q.value = 5;

				let gG = ctx.createGain();
				gG.gain.setValueAtTime(1.5, now);
				gG.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

				sub.connect(subG).connect(master);
				gravel.connect(lp).connect(gG).connect(master);

				sub.start(now);
				gravel.start(now);

				sub.stop(now + 1.25);
				gravel.stop(now + 1.5);
			}
		};
	}

	function buildSfx4(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
				master.connect(this._dest);

				// bright noise burst
				let size = ctx.sampleRate * 0.4;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) {
					d[i] = (Math.random() * 2 - 1);
				}

				let noise = ctx.createBufferSource();
				noise.buffer = buf;

				let hp = ctx.createBiquadFilter();
				hp.type = "highpass";
				hp.frequency.setValueAtTime(2500, now);
				hp.Q.value = 10;

				let nG = ctx.createGain();
				nG.gain.setValueAtTime(1.3, now);
				nG.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

				// snap blip
				let osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(2000, now);
				osc.frequency.exponentialRampToValueAtTime(500, now + 0.12);

				let oG = ctx.createGain();
				oG.gain.setValueAtTime(1.4, now);
				oG.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

				noise.connect(hp).connect(nG).connect(master);
				osc.connect(oG).connect(master);

				noise.start(now);
				osc.start(now);

				noise.stop(now + 1.35);
				osc.stop(now + 1.22);
			}
		};
	}

	function buildSfx5(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
				master.connect(this._dest);

				let count = 14;

				for (let i = 0; i < count; i++) {
					let t0 = now + i * 0.05;

					let osc = ctx.createOscillator();
					osc.type = "square";

					let freq = 400 + Math.random() * 1600;
					osc.frequency.setValueAtTime(freq, t0);

					let g = ctx.createGain();
					g.gain.setValueAtTime(1.0, t0);
					g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);

					osc.connect(g).connect(master);

					osc.start(t0);
					osc.stop(t0 + 1.5);
				}
			}
		};
	}

	function buildSfx6(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
				master.connect(this._dest);

				let steps = 40;
				let a = 900;
				let b = 1400;

				for (let i = 0; i < steps; i++) {
					let t0 = now + i * 0.02;

					let osc = ctx.createOscillator();
					osc.type = "sine";
					osc.frequency.setValueAtTime(i % 2 === 0 ? a : b, t0);

					let g = ctx.createGain();
					g.gain.setValueAtTime(1.0, t0);
					g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.04);

					osc.connect(g).connect(master);

					osc.start(t0);
					osc.stop(t0 + 1.5);
				}
			}
		};
	}

	function buildSfx7(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				// master
				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
				master.connect(this._dest);

				// noise source for the shield burst
				let size = ctx.sampleRate * 1.0;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);

				for (let i = 0; i < size; i++) {
					d[i] = (Math.random() * 2 - 1);
				}

				let noise = ctx.createBufferSource();
				noise.buffer = buf;

				// resonant bandpass
				let bp = ctx.createBiquadFilter();
				bp.type = "bandpass";
				bp.frequency.setValueAtTime(1200, now);
				bp.Q.value = 15;

				// pop envelope
				let env = ctx.createGain();
				env.gain.setValueAtTime(0.0001, now);
				env.gain.exponentialRampToValueAtTime(1.2, now + 0.03);
				env.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

				noise.connect(bp).connect(env).connect(master);

				noise.start(now);
				noise.stop(now + 1.5);
			}
		};
	}

	function buildSfx8(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
				master.connect(this._dest);

				// sweeping scanner tone with a tail
				let osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(300, now);
				osc.frequency.exponentialRampToValueAtTime(3000, now + 0.3);
				osc.frequency.exponentialRampToValueAtTime(200, now + 1.5);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.2, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(g).connect(master);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx9(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.0, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
				master.connect(this._dest);

				// metallic triangle hit
				let osc = ctx.createOscillator();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(800, now);
				osc.frequency.linearRampToValueAtTime(600, now + 0.1);

				// metallic shimmer modulation
				let mod = ctx.createOscillator();
				mod.type = "sine";
				mod.frequency.setValueAtTime(40, now);

				let modGain = ctx.createGain();
				modGain.gain.value = 120;

				mod.connect(modGain).connect(osc.frequency);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.4, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(g).connect(master);

				osc.start(now);
				mod.start(now);

				osc.stop(now + 1.5);
				mod.stop(now + 1.5);
			}
		};
	}

	function buildSfx10(ctx) {
		return {
			connect(dest) { this._dest = dest; },

			start() {
				let now = ctx.currentTime;

				let master = ctx.createGain();
				master.gain.setValueAtTime(1.3, now);
				master.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
				master.connect(this._dest);

				// heavy sine thud
				let thud = ctx.createOscillator();
				thud.type = "sine";
				thud.frequency.setValueAtTime(90, now);
				thud.frequency.exponentialRampToValueAtTime(40, now + 0.25);

				let thudG = ctx.createGain();
				thudG.gain.setValueAtTime(1.5, now);
				thudG.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

				// sub-harmonic dirt layer
				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) {
					let n = Math.random() * 2 - 1;
					d[i] = n * (1 - i / size); // fading gravel
				}

				let dirt = ctx.createBufferSource();
				dirt.buffer = buf;

				let lp = ctx.createBiquadFilter();
				lp.type = "lowpass";
				lp.frequency.setValueAtTime(300, now);
				lp.Q.value = 6;

				let dirtG = ctx.createGain();
				dirtG.gain.setValueAtTime(1.2, now);
				dirtG.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				thud.connect(thudG).connect(master);
				dirt.connect(lp).connect(dirtG).connect(master);

				thud.start(now);
				dirt.start(now);

				thud.stop(now + 0.6);
				dirt.stop(now + 1.5);
			}
		};
	}

	function buildSfx11(ctx) { // Serverless Striker v2
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				// main tonal zap
				let osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(1800, now);
				osc.frequency.exponentialRampToValueAtTime(300, now + 0.18);

				let og = ctx.createGain();
				og.gain.setValueAtTime(1.2, now);
				og.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

				// transient spark ticks
				for (let i = 0; i < 5; i++) {
					let t = now + i * 0.03;

					let buf = ctx.createBuffer(1, 256, ctx.sampleRate);
					let d = buf.getChannelData(0);
					for (let j = 0; j < 256; j++) d[j] = (Math.random() * 2 - 1) * (j < 12 ? 1 : 0);

					let spark = ctx.createBufferSource();
					spark.buffer = buf;

					let sg = ctx.createGain();
					sg.gain.setValueAtTime(1.4, t);
					sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);

					spark.connect(sg).connect(this._dest);
					spark.start(t);
					spark.stop(t + 0.1);
				}

				// bass punch
				let sub = ctx.createOscillator();
				sub.type = "sine";
				sub.frequency.setValueAtTime(120, now);
				sub.frequency.exponentialRampToValueAtTime(60, now + 0.12);

				let subG = ctx.createGain();
				subG.gain.setValueAtTime(1.3, now);
				subG.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

				osc.connect(og).connect(this._dest);
				sub.connect(subG).connect(this._dest);

				osc.start(now);
				sub.start(now);

				osc.stop(now + 1.5);
				sub.stop(now + 1.5);
			}
		};
	}

	function buildSfx12(ctx) { // Repo Click
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				for (let i = 0; i < 12; i++) {
					let t = now + i * 0.05;

					let buf = ctx.createBuffer(1, 256, ctx.sampleRate);
					let d = buf.getChannelData(0);
					for (let j = 0; j < 256; j++) d[j] = (Math.random() * 2 - 1) * (j < 10 ? 1 : 0);

					let src = ctx.createBufferSource();
					src.buffer = buf;

					let bp = ctx.createBiquadFilter();
					bp.type = "highpass";
					bp.frequency.value = 3000;

					let g = ctx.createGain();
					g.gain.setValueAtTime(1, t);
					g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

					src.connect(bp).connect(g).connect(this._dest);
					src.start(t);
					src.stop(t + 0.1);
				}
			}
		};
	}

	function buildSfx13(ctx) { // Coded Ping
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(1400, now);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

				let delay = ctx.createDelay();
				delay.delayTime.value = 0.08;
				let fb = ctx.createGain();
				fb.gain.value = 0.3;

				delay.connect(fb).connect(delay);
				osc.connect(g).connect(delay).connect(this._dest);
				g.connect(this._dest);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx14(ctx) { // Loom Strike
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 0.3;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let bp = ctx.createBiquadFilter();
				bp.type = "bandpass";
				bp.frequency.value = 1800;
				bp.Q.value = 12;

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.2, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(bp).connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 1.5);
			}
		};
	}

	function buildSfx15(ctx) { // Saw Grind
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "sawtooth";
				osc.frequency.setValueAtTime(300, now);

				let lp = ctx.createBiquadFilter();
				lp.type = "lowpass";
				lp.frequency.setValueAtTime(2000, now);
				lp.frequency.exponentialRampToValueAtTime(200, now + 1.5);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(lp).connect(g).connect(this._dest);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx16(ctx) { // Block Smash
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.4, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 1.5);
			}
		};
	}

	function buildSfx17(ctx) { // Rail Ring
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(2500, now);

				let chorus = ctx.createOscillator();
				chorus.type = "sine";
				chorus.frequency.setValueAtTime(25, now);

				let chorusG = ctx.createGain();
				chorusG.gain.value = 60;
				chorus.connect(chorusG).connect(osc.frequency);

				let g = ctx.createGain();
				g.gain.setValueAtTime(0.9, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(g).connect(this._dest);

				osc.start(now);
				chorus.start(now);
				osc.stop(now + 1.5);
				chorus.stop(now + 1.5);
			}
		};
	}

	function buildSfx18(ctx) { // Paper Flick
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let buf = ctx.createBuffer(1, 256, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < 256; i++) d[i] = (Math.random() * 2 - 1) * (i < 5 ? 1 : 0);

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let g = ctx.createGain();
				g.gain.setValueAtTime(1, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

				src.connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 0.1);
			}
		};
	}

	function buildSfx19(ctx) { // Whisper Pulse
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = (Math.random() * 2 - 1) * 0.3;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let bp = ctx.createBiquadFilter();
				bp.type = "bandpass";
				bp.frequency.setValueAtTime(600, now);
				bp.Q.value = 6;

				let mod = ctx.createOscillator();
				mod.type = "sine";
				mod.frequency.value = 2;

				let mg = ctx.createGain();
				mg.gain.value = 0.4;

				let g = ctx.createGain();
				g.gain.setValueAtTime(0.5, now);
				mod.connect(mg).connect(g.gain);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(bp).connect(g).connect(this._dest);

				src.start(now);
				mod.start(now);
				src.stop(now + 1.5);
				mod.stop(now + 1.5);
			}
		};
	}

	function buildSfx20(ctx) { // Tab Snap
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let buf = ctx.createBuffer(1, 128, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < 128; i++) d[i] = i === 0 ? 1 : 0;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.2, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

				src.connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 0.1);
			}
		};
	}

	function buildSfx21(ctx) { // Spec Crack
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let hp = ctx.createBiquadFilter();
				hp.type = "highpass";
				hp.frequency.value = 2500;

				let peak = ctx.createBiquadFilter();
				peak.type = "peaking";
				peak.frequency.value = 1800;
				peak.Q.value = 10;
				peak.gain.value = 6;

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.0, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(hp).connect(peak).connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 1.5);
			}
		};
	}

	function buildSfx22(ctx) { // Draft Sweep
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(200, now);
				osc.frequency.exponentialRampToValueAtTime(1200, now + 1.5);

				let g = ctx.createGain();
				g.gain.setValueAtTime(0.9, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(g).connect(this._dest);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx23(ctx) { // Reactor Hum
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let base = ctx.createOscillator();
				base.type = "sine";
				base.frequency.setValueAtTime(80, now);

				let det = ctx.createOscillator();
				det.type = "sine";
				det.frequency.setValueAtTime(82, now);

				let mix = ctx.createGain();
				mix.gain.setValueAtTime(1.0, now);
				mix.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				base.connect(mix).connect(this._dest);
				det.connect(mix);

				base.start(now);
				det.start(now);
				base.stop(now + 1.5);
				det.stop(now + 1.5);
			}
		};
	}

	function buildSfx24(ctx) { // Clean Chime
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(1200, now);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.0, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

				osc.connect(g).connect(this._dest);

				osc.start(now);
				osc.stop(now + 1.5);
			}
		};
	}

	function buildSfx25(ctx) { // Calm Whoosh
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let bp = ctx.createBiquadFilter();
				bp.type = "bandpass";
				bp.frequency.value = 300;
				bp.Q.value = 2;

				let g = ctx.createGain();
				g.gain.setValueAtTime(0.0001, now);
				g.gain.exponentialRampToValueAtTime(0.8, now + 0.4);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(bp).connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 1.5);
			}
		};
	}

	function buildSfx26(ctx) { // Power Spin
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let osc = ctx.createOscillator();
				osc.type = "sine";

				let mod = ctx.createOscillator();
				mod.type = "sine";
				mod.frequency.value = 30;

				let modG = ctx.createGain();
				modG.gain.value = 200;

				mod.connect(modG).connect(osc.frequency);

				osc.frequency.setValueAtTime(200, now);
				osc.frequency.exponentialRampToValueAtTime(2000, now + 1.5);

				let g = ctx.createGain();
				g.gain.setValueAtTime(1.0, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				osc.connect(g).connect(this._dest);

				osc.start(now);
				mod.start(now);
				osc.stop(now + 1.5);
				mod.stop(now + 1.5);
			}
		};
	}

	function buildSfx27(ctx) { // Target Lock
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				for (let i = 0; i < 4; i++) {
					let t = now + i * 0.2;

					let osc = ctx.createOscillator();
					osc.type = "sine";
					osc.frequency.setValueAtTime(i % 2 === 0 ? 900 : 1100, t);

					let g = ctx.createGain();
					g.gain.setValueAtTime(1.0, t);
					g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);

					osc.connect(g).connect(this._dest);

					osc.start(t);
					osc.stop(t + 0.1);
				}
			}
		};
	}

	function buildSfx28(ctx) { // Freedom Flare
		return {
			connect(dest) { this._dest = dest; },
			start() {
				let now = ctx.currentTime;

				let size = ctx.sampleRate * 1.5;
				let buf = ctx.createBuffer(1, size, ctx.sampleRate);
				let d = buf.getChannelData(0);
				for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;

				let src = ctx.createBufferSource();
				src.buffer = buf;

				let lp = ctx.createBiquadFilter();
				lp.type = "lowpass";
				lp.frequency.setValueAtTime(400, now);
				lp.frequency.exponentialRampToValueAtTime(6000, now + 1.5);

				let g = ctx.createGain();
				g.gain.setValueAtTime(0.9, now);
				g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

				src.connect(lp).connect(g).connect(this._dest);

				src.start(now);
				src.stop(now + 1.5);
			}
		};
	}

	function playSfx(id) {
		if (!musicContext) return;
		let src = buildSfx(id, musicContext);
		if (!src) return;
		src.connect(musicMasterGain);
		src.start();
	}

	// HELPERS

	function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
		const words = text.split(' ');
		let line = '';
		for (let n = 0; n < words.length; n++) {
			const testLine = line + words[n] + ' ';
			const metrics = ctx.measureText(testLine);
			const testWidth = metrics.width;
			if (testWidth > maxWidth && n > 0) {
				ctx.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			} else {
				line = testLine;
			}
		}
		ctx.fillText(line, x, y);
	}

	// ------------------------------------------------------------------------
	// Main draw loop
	// ------------------------------------------------------------------------

	let draw = () => {

		ctx.clearRect(0, 0, w, h);

		let phase = t / fps;

		let sky1 = `hsl(${210 + Math.sin(phase) * 10},100%,40%)`;
		let sky2 = `hsl(${200 + Math.sin(phase / 2) * 10},100%,60%)`;
		let sun = `hsl(${50 + Math.sin(phase / 3) * 10},100%,60%)`;

		let g = ctx.createLinearGradient(0, 0, w, h);
		g.addColorStop(0, sky1);
		g.addColorStop(0.5, sky2);
		g.addColorStop(1, sun);
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, w, h);

		for (let cObj of clouds) {
			ctx.globalAlpha = cObj.alpha;
			let iw = cObj.img.width;
			let ih = cObj.img.height;
			let scale = cObj.scale;
			ctx.drawImage(cObj.img, cObj.x, cObj.y, iw * scale, ih * scale);
			cObj.x -= cObj.speed;
			if (cObj.x < -iw * scale) {
				cObj.x = w;
				cObj.y = Math.random() * h;
				cObj.scale = 0.05 + Math.random() * 0.2;
				cObj.alpha = 0.1 + 0.3 * cObj.scale;
				cObj.speed = 1 + cObj.scale * 6;
			}
		}

		ctx.globalAlpha = 0.85;

		if (t - lastBigCloud > fps * 2 && Math.random() < 0.05) {
			bigClouds.push({ x: w, y: Math.random() * h - 100, speed: 8 });
			lastBigCloud = t;
		}

		for (let i = bigClouds.length - 1; i >= 0; i--) {
			let b = bigClouds[i];
			ctx.drawImage(cloudImg, b.x, b.y, 700, 400);
			b.x -= b.speed;
			if (b.x < -800) bigClouds.splice(i, 1);
		}

		ctx.globalAlpha = 1;

		// Intro
		if (t >= textIn && t < textOut) {
			let slide = t < textIn + 20 ? (t - textIn) / 20 : 1;
			let exit = t > textOut - 20 ? (t - (textOut - 20)) / 20 : 0;
			let posX = (slide - 1) * w;
			if (exit > 0) posX += exit * w;

			ctx.fillStyle = "#fff";
			ctx.textAlign = "left";

			ctx.font = "bold 160px Impact, Arial Black, sans-serif";
			ctx.fillText("BOSTON", posX + 0.25 * w, 220);
			ctx.fillText("CODE", posX + 0.25 * w, 360);
			ctx.fillText("CAMP 39", posX + 0.25 * w, 500);

			ctx.font = "bold 42px sans-serif";
			wrapText(ctx, "Saturday, November 22, 2025", posX + 0.25 * w, 600, 900, 50);
			wrapText(ctx, "at Microsoft Sales & Technology Center", posX + 0.25 * w, 650, 900, 50);
			wrapText(ctx, "in Burlington, MA", posX + 0.25 * w, 700, 900, 50);
		}

		// Message
		if (t >= msgIn && t < msgOut) {
			let slide = t < msgIn + 20 ? (t - msgIn) / 20 : 1;
			let exit = t > msgOut - 20 ? (t - (msgOut - 20)) / 20 : 0;
			let posX = (slide - 1) * w;
			if (exit > 0) posX += exit * w;

			ctx.fillStyle = "#fff";
			ctx.textAlign = "center";
			ctx.font = "bold 54px sans-serif";

			// unified wrapped block
			const textBlock = [
				"This video was generated using the ChatGPT web app",
				"and JavaScript running in browser dev tools - not Sora.",
				"(see code at the end)"
			].join(" ");

			// center anchor
			let maxWidth = w * 0.75;
			let startX = posX + 0.5 * w;
			let startY = h / 2 - 80;

			// call wrapped text
			wrapText(ctx, textBlock, startX, startY, maxWidth, 70);
		}

		// Choose slide
		if (t >= chooseIn && t < chooseOut) {
			let slide = t < chooseIn + 20 ? (t - chooseIn) / 20 : 1;
			let exit = t > chooseOut - 20 ? (t - (chooseOut - 20)) / 20 : 0;
			let posX = (slide - 1) * w;
			if (exit > 0) posX += exit * w;

			ctx.fillStyle = "#fff";
			ctx.textAlign = "center";

			// ------------------------------------------------------------
			// Header centered
			// ------------------------------------------------------------
			if (chooseHeaderImg.complete) {
				let hw = chooseHeaderImg.naturalWidth;
				let hh = chooseHeaderImg.naturalHeight;

				let maxW = w * 0.45;
				let scale = maxW / hw;

				let dw = hw * scale;
				let dh = hh * scale;

				let x = posX + (w - dw) / 2;
				let y = (h - dh) / 2;

				ctx.drawImage(chooseHeaderImg, x, y, dw, dh);
			}

			// ------------------------------------------------------------
			// Dynamic perimeter placement for however many characters exist
			// ------------------------------------------------------------
			let count = sessionImgs.length;

			// small padding so they don't touch edges
			let pad = 100;

			// character size smaller to avoid overlap
			let charSize = 90;

			// compute perimeter points
			let slots = [];
			let perSideTop = Math.floor(count * 0.4);
			let perSideRight = Math.floor(count * 0.2);
			let perSideBottom = Math.floor(count * 0.3);
			let perSideLeft = count - (perSideTop + perSideRight + perSideBottom);

			// top
			for (let i = 0; i < perSideTop; i++) {
				slots.push({
					x: pad + (i + 0.5) * ((w - pad * 2) / perSideTop),
					y: pad
				});
			}

			// right
			for (let i = 0; i < perSideRight; i++) {
				slots.push({
					x: w - pad,
					y: pad + (i + 0.5) * ((h - pad * 2) / perSideRight)
				});
			}

			// bottom
			for (let i = 0; i < perSideBottom; i++) {
				slots.push({
					x: w - pad - (i + 0.5) * ((w - pad * 2) / perSideBottom),
					y: h - pad
				});
			}

			// left
			for (let i = 0; i < perSideLeft; i++) {
				slots.push({
					x: pad,
					y: h - pad - (i + 0.5) * ((h - pad * 2) / perSideLeft)
				});
			}

			// ------------------------------------------------------------
			// Draw characters around the frame
			// ------------------------------------------------------------
			for (let i = 0; i < count; i++) {
				let p = slots[i];
				let cx = posX + p.x;
				let cy = p.y;

				let img = sessionImgs[i];
				if (img && img.complete) {
					let scale = charSize / img.naturalWidth;
					let iw = img.naturalWidth * scale;
					let ih = img.naturalHeight * scale;

					ctx.drawImage(img, cx - iw / 2, cy - ih / 2, iw, ih);
				}
			}
		}

		// Session slides
		if (t >= imgIn && t < imgOut && sessionImgs.length > 0) {
			let sessionCount = sessionImgs.length;
			let framesPerSession = (perSessionSecs * fps);
			let sessionFrame = t - imgIn;
			let sessionIndex = Math.min(sessionCount - 1, Math.floor(sessionFrame / framesPerSession));
			let localFrame = sessionFrame - sessionIndex * framesPerSession;

			if (localFrame === 0) playSwoosh();
			if (localFrame === framesPerSession - 20) playSfx(sessionIndex + 1);

			let slide = localFrame < 20 ? localFrame / 20 : 1;
			let exit = localFrame > framesPerSession - 20 ? (localFrame - (framesPerSession - 20)) / 20 : 0;
			let xOffset = -w + slide * w;
			if (exit > 0) xOffset += exit * w;

			let frameCenterY = h * 0.5;
			let leftCenterX = w * 0.25 + xOffset;
			let rectHeight = h * 0.5;
			let rectWidth = w * 0.4;

			ctx.save();
			ctx.translate(leftCenterX, frameCenterY);
			ctx.transform(1, 0, -0.3, 1, 0, 0);
			ctx.fillStyle = "rgba(255,255,255,0.2)";
			ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
			ctx.restore();

			let currentImg = sessionImgs[sessionIndex];
			if (currentImg && currentImg.complete) {
				let iw = currentImg.naturalWidth;
				let ih = currentImg.naturalHeight;
				let targetH = h * 0.75;
				let scale = targetH / ih;
				let iw2 = iw * scale;
				let ih2 = targetH;
				let imgX = leftCenterX - iw2 / 2;
				let imgY = frameCenterY - ih2 / 2;
				ctx.drawImage(currentImg, imgX, imgY, iw2, ih2);
			}

			let txtX = w * 0.5 + xOffset;
			ctx.fillStyle = "#fff";
			ctx.textAlign = "left";

			// Character Name
			ctx.font = "bold 68px sans-serif";
			let characterName = sessionCharacters[sessionIndex];
			ctx.fillText(characterName, txtX, frameCenterY - 200);

			// Title (auto-wrapped)
			ctx.font = "bold 48px sans-serif";
			let title = sessionTitles[sessionIndex];
			wrapText(ctx, title, txtX, frameCenterY - 120, w * 0.4, 54);

			// Measure how tall the wrapped title is to position description just below
			let titleLines = Math.ceil(ctx.measureText(title).width / (w * 0.4));
			let titleHeight = titleLines * 54;

			// Description (one long string, wrapped)
			ctx.font = "36px sans-serif";
			let descY = frameCenterY - 120 + titleHeight + 40;
			let description = sessionDescriptions[sessionIndex];
			wrapText(ctx, description, txtX, descY, w * 0.4, 44);

			// Footer
			ctx.fillStyle = "white";
			ctx.font = "20px sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("Boston Code Camp 39 - November 22nd, 2025", w / 2, h - 30);
		}

		// Outro
		if (t >= outroIn && t < outroOut) {
			let slide = t < outroIn + 20 ? (t - outroIn) / 20 : 1;
			let exit = t > outroOut - 20 ? (t - (outroOut - 20)) / 20 : 0;
			let posX = w - slide * w;
			if (exit > 0) posX += exit * w;

			ctx.fillStyle = "rgba(0,0,0,0.6)";
			ctx.fillRect(posX, 0, w, h);

			ctx.fillStyle = "#0f0";
			ctx.textAlign = "center";
			ctx.font = "bold 60px monospace";
			ctx.fillText("JavaScript", posX + w / 2, 120);

			ctx.font = "28px monospace";

			// join code block for wrapping
			const codeBlock = '(()=>{let f=document.createElement("canvas"),s=window.devicePixelRatio||1;f.width=1920*s;f.height=1080*s;f.style.width="1920px";f.style.height="1080px";document.body.appendChild(f);let n=f.getContext("2d");n.scale(s,s);n.imageSmoothingEnabled=!0;let i=1920,r=1080,t=0,u=60,l=2*u,a=7*u,v=7*u,y=17*u,p=18*u,w=28*u,nt=30*u,o=new Image;o.crossOrigin="anonymous";o.src="https://chatgpt.com/backend-api/estuary/content?id=file_0000000006f4722fa0140d923b29506e&ts=489737&p=fs&cid=1&sig=63101b2d211d3e6b1d049a14ccc6e8d532c071c2363391575a20ab4b2de0bad3&v=0";let e=new Image;e.crossOrigin="anonymous";e.src="https://chatgpt.com/backend-api/estuary/content?id=file_000000000240720cade8d6ece1392a3f&ts=489714&p=fs&cid=1&sig=bb82548ce160b0e0ec2ec8e23dc5583eff756606d6d5d21454c04517d958416f&v=0";let b=[],tt=(n,t,i)=>{let u=document.createElement("canvas");u.width=n.width;u.height=n.height;let r=u.getContext("2d");r.drawImage(n,0,0);let e=Math.min(n.width,n.height)/1.5,f=r.createRadialGradient(t,i,0,t,i,e);return f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"black"),r.globalCompositeOperation="destination-in",r.fillStyle=f,r.fillRect(0,0,n.width,n.height),u},it=()=>{b.length=0;let n=[],t=[n=>n.width*.25,n=>n.width*.5,n=>n.width*.75,n=>n.width*.25,n=>n.width*.5,n=>n.width*.75],u=[n=>n.height*.25,n=>n.height*.25,n=>n.height*.25,n=>n.height*.75,n=>n.height*.75,n=>n.height*.75];for(let i=0;i<6;i++)n.push(tt(e,t[i](e),u[i](e)));for(let t=0;t<30;t++){let u=n[Math.random()*n.length|0],t=.05+Math.random()*.2;b.push({img:u,x:Math.random()*i,y:Math.random()*r,speed:1+t*6,alpha:.1+.3*t,scale:t})}},k=0,h=[];e.onload=()=>{it()};let rt=MediaRecorder,ut=f.captureStream(60),d=[],c=new rt(ut,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8e6});c.ondataavailable=n=>d.push(n.data);c.onstop=()=>{let t=new Blob(d,{type:"video/webm"}),i=URL.createObjectURL(t),n=document.createElement("a");n.href=i;n.download="boston_code_camp_39_clouds_gradient_85alpha.webm";n.click()};c.start();let g=()=>{n.clearRect(0,0,i,r);let s=t/u,d=`hsl(${210+Math.sin(s)*10},100%,40%)`,tt=`hsl(${200+Math.sin(s/2)*10},100%,60%)`,it=`hsl(${50+Math.sin(s/3)*10},100%,60%)`,f=n.createLinearGradient(0,0,i,r);f.addColorStop(0,d);f.addColorStop(.5,tt);f.addColorStop(1,it);n.fillStyle=f;n.fillRect(0,0,i,r);for(let t of b){n.globalAlpha=t.alpha;let f=t.img.width,e=t.img.height,u=t.scale;n.drawImage(t.img,t.x,t.y,f*u,e*u);t.x-=t.speed;t.x<-f*u&&(t.x=i,t.y=Math.random()*r,t.scale=.05+Math.random()*.2,t.alpha=.1+.3*t.scale,t.speed=1+t.scale*6)}n.globalAlpha=.85;t-k>u*2&&Math.random()<.05&&(h.push({x:i,y:Math.random()*r-100,speed:8}),k=t);for(let t=h.length-1;t>=0;t--){let i=h[t];n.drawImage(e,i.x,i.y,700,400);i.x-=i.speed;i.x<-800&&h.splice(t,1)}if(n.globalAlpha=1,t>=l&&t<a){let f=t<l+20?(t-l)/20:1,u=t>a-20?(t-(a-20))/20:0,r=-i/2+f*i;u>0&&(r+=u*i);n.fillStyle="#fff";n.textAlign="left";n.font="bold 160px Impact, Arial Black, sans-serif";n.fillText("BOSTON",r,240);n.fillText("CODE",r,370);n.fillText("CAMP 39",r,500);n.font="bold 42px sans-serif";n.fillText("Saturday, November 22, 2025",r,600);n.fillText("at Microsoft Sales & Technology Center",r,650);n.fillText("in Burlington, MA",r,700)}if(t>=v&&t<y){let h=t<v+20?(t-v)/20:1,e=t>y-20?(t-(y-20))/20:0,s=-i+h*i;e>0&&(s+=e*i);let u=300+s,f=u+540;if(n.save(),n.translate(u-60,r/2-180),n.transform(1,0,-.3,1,0,0),n.fillStyle="rgba(255,255,255,0.2)",n.fillRect(0,0,520,400),n.restore(),o.complete){let t=o.naturalWidth,i=o.naturalHeight,f=Math.min(300/t,300/i),s=t*f,e=i*f;n.drawImage(o,u,r/2-e/2,s,e)}n.fillStyle="#fff";n.textAlign="left";n.font="bold 48px sans-serif";n.fillText("Generate AI Videos w/o AI Video Generator",f,r/2-30);n.font="30px sans-serif";n.fillText("In a world tired of flawless cringe, one dev dares to fight back.",f,r/2+30);n.fillText("Armed with HTML, JS, and pure chaos â€” heâ€™ll out-code Sora itself!",f,r/2+70)}if(t>=p&&t<w){let e=t<p+20?(t-p)/20:1,u=t>w-20?(t-(w-20))/20:0,f=i-e*i;u>0&&(f+=u*i);n.fillStyle="#fff";n.textAlign="center";n.font="bold 38px sans-serif";n.fillText("This video was generated using ChatGPT in a web browser â€“ not Sora.",f+i/2,r-100)}t++;t<nt?requestAnimationFrame(g):c.stop()};g()})();';

			let maxWidth = w * 0.8;
			let startX = posX + w / 2;
			let startY = 180;

			wrapText(ctx, codeBlock, startX, startY, maxWidth, 40);
		}

		// Music

		// start music at 5 seconds
		if (!musicStarted && t >= musicStartSeconds * fps) {
			startMusicLoop();
		}

		// trigger fade-out near movie end
		let movieDurationSeconds = dur / fps;
		if (musicStarted && t >= (movieDurationSeconds - musicFadeSeconds) * fps) {
			fadeOutMusic();
		}

		t++;
		if (t < dur) {
			requestAnimationFrame(draw);
		} else {
			stopRequested = true;
			if (rec && rec.state === "recording") {
				rec.stop();
			}
		}
	};

	setTimeout(() => { draw(); }, 10000);

})();
