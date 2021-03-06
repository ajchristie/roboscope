$(document).ready( function() {

  /*Dropdown Menu*/
  $('.dropdown').click(function () {
          $(this).attr('tabindex', 1).focus();
          $(this).toggleClass('active');
          $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
          $(this).removeClass('active');
          $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
          $(this).parents('.dropdown').find('span').text($(this).text());
          $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });
  /*End Dropdown Menu*/

  /* Form Submission, Page Transition */
  $('.dropdown-menu li').click(function () {
    var input = $(this).parents('.dropdown').find('input');
    var form = $(this).parents('form');
    /*var csrftoken = getCookie('csrftoken'); --let this be handled by template engine instead */
    $('.front').delay(1000).fadeOut('slow')
    $('.transition').toggleClass('anim-trans').on('animationend', function() {
      $('.transition').removeClass('transition');
      form.append(input);
      form.submit();
    });
  });


  /* Fade In Results Page */
  $('.result').fadeIn('slow');

});

/* Additional CSRF Handling -- this will be left to the template engine instead */
/*function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});*/
