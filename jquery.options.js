;(function(root, undefined) {

  var pluginName = 'options';

  var $ = root.jQuery;

  if ('undefined' === typeof $) {
    if ('undefined' === typeof require) {
      throw new Error('The plugin "' + pluginName + '" requires jQuery');
    }
    $ = require('jquery');
  }

  $.fn[pluginName] = function(options, blankOption) {
    return this.each(function() {
      var $elem = $(this).empty();
      if ($elem.data('blank-option')) {
        blankOption = $elem.data('blank-option');
      }
      if (blankOption) {
        $elem.append(new Option(blankOption, ''));
      }
      $.each(options, function(index, item) {
        var value, name;
        switch ($.type(item)) {
          case 'array':
            value = item[0];
            name = item[1];
            break;
          case 'object':
            value = item.value || item.val;
            name = item.name || item.key;
            break;
          default:
            value = item;
            name = item;
        }
        $elem.append(new Option(name, value));
      });
    });
  };

}(this));
