const time = document.getElementById('time'),
  jina = document.getElementById('jina'),
  salamu = document.getElementById('salamu'),
  focus = document.getElementById('focus');

  function OnyeshaMuda(){

    let leo = new Date(),
    saa = leo.getHours(),
    dakika = leo.getMinutes(),
    sekunde = leo.getSeconds();



    saa = saa % 12 || 12;

    time.innerHTML = `${addSifuri(saa)}<span>:</span>${addSifuri(dakika)}<span>:</span>${addSifuri(sekunde)}`;


    setTimeout(OnyeshaMuda,1000);


  }



  


  OnyeshaMuda()


