
$(document).ready(function(){

  // Definisco la funzione dello slide verso destra, con aggiornamento del colore dei pallini, ricominciando dal primo elemento una volta terminati

  function moveOn(){
    var currentImgEl = $('img.active')
    var currentDotEl = $('i.active')

    currentImgEl.toggleClass('active')
    currentDotEl.toggleClass('active')

    if(currentImgEl.hasClass('last') && currentDotEl.hasClass('last')){
      $('img.first').toggleClass('active')
      $('i.first').toggleClass('active')
    } else {
      currentImgEl.next().toggleClass('active')
      currentDotEl.next().toggleClass('active')
    }
  }

  // Definisco la funzione dello slide verso sinistra, con aggiornamento del colore dei pallini, ricominciando  dall'ultimo elemento una volta terminati

  function moveBack(){
    var currentImgEl = $('img.active')
    var currentDotEl = $('i.active')

    currentImgEl.toggleClass('active')
    currentDotEl.toggleClass('active')

    if(currentImgEl.hasClass('first') && currentDotEl.hasClass('first')){
      $('img.last').toggleClass('active')
      $('i.last').toggleClass('active')
    } else {
      currentImgEl.prev().toggleClass('active')
      currentDotEl.prev().toggleClass('active')
    }
  }


  //Collego le funzioni al click delle frecce

  $('.next').click(moveOn)
  $('.prev').click(moveBack)

  // Imposto lo slide tramite la pressione delle frecce sulla tastiera

  $(document).keydown(function(event){
    if (event.which == 39||event.keyCode == 39) {
      moveOn()
    } else if (event.which == 37||event.keyCode == 37) {
      moveBack()
    }
  })

















})
