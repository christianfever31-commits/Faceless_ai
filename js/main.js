/* ==========================================
   FACeless AI — ULTRA FUTURISTIC ENGINE
========================================== */

// MAIN BUTTONS
const startBtn = document.querySelector(".primary");
const demoBtn = document.querySelector(".secondary");

// START CREATING
startBtn.onclick = () => {

    cinematicBootSequence();

    setTimeout(() => {

        document.querySelector("#features")
        .scrollIntoView({
            behavior: "smooth"
        });

    }, 2000);
};

// WATCH DEMO
demoBtn.onclick = () => {
    launchHologramDemo();
};

/* ==========================================
   CINEMATIC AI BOOT SEQUENCE
========================================== */

function cinematicBootSequence(){

    const overlay = document.createElement("div");

    overlay.className = "ai-overlay";

    overlay.innerHTML = `
    
    <div class="ai-core">

        <div class="scanner"></div>

        <h1>FACeless AI</h1>

        <div class="terminal">

            <p>> Connecting neural systems...</p>
            <p>> Initializing prompt engine...</p>
            <p>> Building AI pipelines...</p>
            <p>> Deploying quantum rendering...</p>

        </div>

        <div class="loader"></div>

    </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(()=>{
        overlay.remove();
    },3500);
}

/* ==========================================
   HOLOGRAM DEMO
========================================== */

function launchHologramDemo(){

    const hologram = document.createElement("div");

    hologram.className = "hologram";

    hologram.innerHTML = `
    
    <div class="hologram-box">

        <span class="close-holo">×</span>

        <video autoplay muted controls loop>
            <source 
            src="https://www.w3schools.com/html/movie.mp4"
            type="video/mp4">
        </video>

        <h2>AI Generation In Progress</h2>

        <div class="gen-lines">
            <span>✓ Website generated</span>
            <span>✓ Backend created</span>
            <span>✓ Database optimized</span>
            <span>✓ Deployment completed</span>
        </div>

    </div>
    `;

    document.body.appendChild(hologram);

    hologram.querySelector(".close-holo")
    .onclick = ()=> hologram.remove();
}

/* ==========================================
   LIVE AI TERMINAL
========================================== */

const promptText = document.querySelector(".typing");

const futuristicLogs = [

    "Synthesizing AI logic...",
    "Rendering futuristic UI...",
    "Compiling React components...",
    "Training deployment systems...",
    "Launching neural infrastructure..."
];

let logIndex = 0;

setInterval(()=>{

    promptText.style.opacity = 0;

    setTimeout(()=>{

        promptText.innerHTML = futuristicLogs[logIndex];

        promptText.style.opacity = 1;

        logIndex++;

        if(logIndex >= futuristicLogs.length){
            logIndex = 0;
        }

    },400);

},3000);

/* ==========================================
   PARTICLE SYSTEM
========================================== */

for(let i=0;i<60;i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random()*100 + "vw";

    particle.style.animationDuration =
    (Math.random()*8 + 4) + "s";

    particle.style.opacity = Math.random();

    document.body.appendChild(particle);
}

/* ==========================================
   AI STYLES
========================================== */

const futuristicStyle = document.createElement("style");

futuristicStyle.innerHTML = `

.ai-overlay{
    position:fixed;
    inset:0;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999999;
}

.ai-core{
    text-align:center;
}

.ai-core h1{
    font-size:4rem;
    color:#00d9ff;
    margin-bottom:20px;
    text-shadow:0 0 20px #00d9ff;
}

.terminal{
    background:#081122;
    padding:25px;
    border-radius:18px;
    margin-top:20px;
    font-family:monospace;
    color:#00ff9d;
    line-height:2;
    border:1px solid rgba(255,255,255,.08);
}

.loader{
    width:90px;
    height:90px;
    border:4px solid rgba(255,255,255,.1);
    border-top:4px solid #00d9ff;
    border-radius:50%;
    margin:30px auto;
    animation:spin 1s linear infinite;
}

@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}

.hologram{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.8);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999999;
    backdrop-filter:blur(10px);
}

.hologram-box{
    width:90%;
    max-width:900px;
    background:rgba(0,10,30,.85);
    border:1px solid rgba(0,217,255,.3);
    border-radius:30px;
    padding:30px;
    box-shadow:0 0 60px rgba(0,217,255,.25);
}

.hologram video{
    width:100%;
    border-radius:20px;
}

.hologram h2{
    margin-top:25px;
    color:#00d9ff;
}

.gen-lines{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    gap:10px;
    color:#9dffcb;
}

.close-holo{
    position:absolute;
    right:40px;
    top:20px;
    font-size:2.5rem;
    cursor:pointer;
    color:white;
}

.particle{
    position:fixed;
    width:4px;
    height:4px;
    background:#00d9ff;
    border-radius:50%;
    top:-10px;
    animation:particles linear infinite;
    z-index:-1;
}

@keyframes particles{
    to{
        transform:translateY(110vh);
    }
}
`;

document.head.appendChild(futuristicStyle);
