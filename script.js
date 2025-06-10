const mensagens = [
    "Te amo infinitamente 💖",
    "Você é meu tudo 💘",
    "Nosso amor é eterno 💍",
    "Com você, tudo é melhor 💫",
    "Para sempre nós 💑",
    "Você é meu lar ❤️",
  ];
  
  let nomeUsuario = prompt("Qual é o seu nome?")?.trim();
  if (!nomeUsuario) nomeUsuario = "amor";
  
  const mensagemPersonalizada = `Hoje é dia de celebrar o amor, o carinho e todos os momentos especiais que vivemos juntos, ${nomeUsuario}.`;
  
  function digitarTexto(element, texto, intervalo = 50) {
    let i = 0;
    element.textContent = "";
    const timer = setInterval(() => {
      element.textContent += texto.charAt(i);
      i++;
      if (i >= texto.length) clearInterval(timer);
    }, intervalo);
  }
  
  window.addEventListener("load", () => {
    digitarTexto(document.getElementById("mensagem"), mensagemPersonalizada);
    document.querySelector(".imagem-amor").style.opacity = "1";
    document.getElementById("mostrarVideo").style.opacity = "1";
    document.getElementById("botaoPlayPauseMusica").style.opacity = "1";
  
    setInterval(criarCoracao, 800);
    setInterval(criarPetala, 600);
    setInterval(criarConfete, 700);
  });
  
  const musica = document.getElementById("musicaFundo");
  const botaoMusica = document.getElementById("botaoPlayPauseMusica");
  musica.volume = 0.01;
  
  botaoMusica.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      botaoMusica.textContent = "🔈 Pausar Música";
    } else {
      musica.pause();
      botaoMusica.textContent = "▶️ Tocar Música";
    }
  });
  
  const contadorElem = document.getElementById("contador");
  const proximaData = new Date("2026-01-30T00:00:00");
  
  function atualizarContador() {
    const agora = new Date();
    const diff = proximaData - agora;
  
    if (diff <= 0) {
      contadorElem.textContent = "Hoje é o grande dia! ❤️";
      return;
    }
  
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
  
    contadorElem.textContent = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s para a próxima data especial 💖`;
  }
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  const video = document.getElementById("video");
  video.addEventListener("ended", () => {
    mostrarMensagemSurpresaCentral("Obrigado por assistir! ❤️");
  });
  
  function criarConfete() {
    const confete = document.createElement("div");
    confete.className = "confete";
    confete.style.left = Math.random() * 100 + "vw";
    confete.style.top = "-10px";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    confete.style.width = 6 + Math.random() * 6 + "px";
    confete.style.height = confete.style.width;
    confete.style.animationDuration = 5 + Math.random() * 3 + "s";
    document.body.appendChild(confete);
    setTimeout(() => confete.remove(), 8000);
  }
  
  function criarCoracao() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    document.body.appendChild(heart);
  
    heart.addEventListener("click", (e) => {
      mostrarMensagemSurpresa(e);
      heart.classList.add("explodir");
      setTimeout(() => heart.remove(), 300);
    });
  
    setTimeout(() => heart.remove(), 5000);
  }
  
  function criarPetala() {
    const petala = document.createElement("div");
    petala.className = "petala";
    petala.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(petala);
    setTimeout(() => petala.remove(), 10000);
  }
  
  function mostrarMensagemSurpresa(e) {
    const msg = document.createElement("div");
    msg.className = "mensagem-surpresa";
    msg.textContent = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.body.appendChild(msg);
  
    requestAnimationFrame(() => {
      const offsetX = msg.offsetWidth / 2;
      const offsetY = msg.offsetHeight / 2;
      msg.style.left = e.clientX - offsetX + "px";
      msg.style.top = e.clientY - offsetY + "px";
    });
  
    setTimeout(() => msg.remove(), 3000);
  }
  
  function mostrarMensagemSurpresaCentral(texto) {
    const msg = document.createElement("div");
    msg.className = "mensagem-surpresa";
    msg.textContent = texto;
    msg.style.left = "50%";
    msg.style.top = "50%";
    msg.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
  }
  
  document.getElementById("mostrarVideo").addEventListener("click", function () {
    const box = document.getElementById("videoBox");
    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth" });
  });
  