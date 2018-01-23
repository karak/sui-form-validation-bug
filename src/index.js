$(function () {
  $('form').on('submit', function(e) {
    if ('originalEvent' in e) {
      /*
       * Execute only at the 2nd onsubmit wrapped by semantic-ui,
       * since <Enter> causes *twice* onsubmit calls in Chrome with different argument.
       */
      if ($('form').form('is valid')) {
        console.log('AJAX submit');
      }
    }

    /* This preventing is always required.*/
      e.preventDefault();
      return false;
  });

  $('form').form({
    fields: {
      sex: 'checked'
    },
    onSuccess: function (e) {
      /*
       * Never called after being invalid by <Enter> on IE.
       */
      console.log('onSuccess');
    },
    onFailure: function () {
      /*
       * Never called after being invalid by <Enter> on IE.
       */
      console.log('onFailure');
    }
  });
});

