function iniciar() {
    let alvo = document.querySelector('div');
    alvo.style.display = 'grid';
    let tiros = 0;
    let tirosDentro = 0;
    let tirosFora = 0;
    let intervalo;
    let intervalo1;
  
    let p = document.createElement('p');
    p.style.top = '120px';
    let p1 = document.createElement('p');
    p1.style.top = '170px';
  
    function contarTiros() {
      tiros += 0.5;
    }
    setInterval(contarTiros, 100);
  
    alvo.addEventListener('mouseenter', () => {
      clearInterval(intervalo1);
      intervalo = setInterval(adicionar1, 100);
    });
  
    alvo.addEventListener('mouseout', () => {
      clearInterval(intervalo);
      intervalo1 = setInterval(reduzir1, 100);
    });
  
    function adicionar1() {
      let valorPositivo = 1;
      tirosDentro += valorPositivo;
    }
  
    function reduzir1() {
      let valorNegativo = 1;
      tirosFora += valorNegativo;
    }
  
    function precisao() {
      let precisao = (tirosDentro / tiros) * 100;
  
      p.innerHTML = 'Sua precisão está: ' + precisao.toFixed() + '%';
      document.body.appendChild(p);
  
      document.body.appendChild(p1);
      if (precisao < 10) {
        p1.innerHTML = 'Você é um dos piores que eu já vi';
      } else if (precisao < 20) {
        p1.innerHTML = 'Você é ruim em pae';
      } else if (precisao < 50) {
        p1.innerHTML = 'nhééééé';
      } else if (precisao < 75) {
        p1.innerHTML = 'Você é bom!';
      } else if (precisao < 90) {
        p1.innerHTML = 'CARAI, tu é mto bom ';
      } else if (precisao < 100) {
        p1.innerHTML = 'AI TOMAAAA O MANO SABE MUITO';
      }
    }
    setInterval(precisao, 100);
  }