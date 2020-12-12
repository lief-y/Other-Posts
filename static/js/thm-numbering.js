$( document ).ready(function() {
  $('.thm').each(function(index,value) {
      thmnumber=index+1;
      $(this).attr('number', thmnumber);
      thmid=(this).getAttribute('id');
      thmtitle=(this).getAttribute('title');
      if (thmtitle==null) {
          thmtitle='';
      };
      if (thmid==null) {
          $(this).prepend('<span><strong>'+
          'Theorem '+thmnumber+' '+ thmtitle +
          '</strong></span>');
      }
      else {
          $(this).prepend('<span id="'+thmid+'"><strong>'+
          'Theorem '+thmnumber+' '+ thmtitle +
          '</strong></span>');
      }
  });
});