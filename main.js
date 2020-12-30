/*
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l'immagine corrispondente
Generiamo i pallini con JS
*/


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

  //Seleziono le foto al click dei pallini

  $('.nav > i').click(function(){
    var selectedElementIndex = $(this).index()

    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var selectedImgEl = $('.images > img').eq(selectedElementIndex)

    selectedImgEl.addClass('active')
    selectedImgEl.siblings().removeClass('active')
  })

  // Imposto lo slide tramite la pressione delle frecce sulla tastiera

  $(document).keydown(function(event){
    if (event.which == 39) {
      moveOn()
    } else if (event.which == 37) {
      moveBack()
    }
  })


})
