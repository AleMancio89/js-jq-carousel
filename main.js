
$(document).ready(function(){

  //Imposto il funzionamento dello slide verso destra, con aggiornamento del colore dei pallini, ricominciando dal primo elemento una volta terminati
  $('.next').click(

    function(){
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

  )

  //Imposto il funzionamento dello slide verso sinistra, con aggiornamento del colore dei pallini, ricominciando dall' ultimo elemento una volta terminati
  $('.prev').click(

    function(){
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
  )




})
