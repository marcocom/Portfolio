(function($) {

    var thisJS = 'loader.js';
    var jsFiles = [ // files to be conditionally included
        'lib/jquery.easing.1.3.js',
        'lib/iscroll-probe.js',
        'lib/hammer.js',
        'lib/jquery.hammer.js',
        'lib/masonry.js',
        'lib/lodash.underscore.js',
        'lib/backbone.js',
        'utils.js',
        'helper.js',
        'lib/jquery.flexslider.js',
        'lib/jquery.fancybox.js',
        'marcocom.js',
        'marcocom.page.js',
        'marcocom.mosaic.js',
        'marcocom.model.js',
        'plugins.js'
    ];

    if (jsFiles.length > 0) {
        $('script').each(function() {
            var src = $(this).attr('src');
            var i;
            if (src && (i = src.indexOf(thisJS, this.length - thisJS.length)) > -1) {
                var path = src.substring(0, i);
                for (var j = 0, k = jsFiles.length; j < k; j++)
                    document.write('<script type="text/javascript" src="'+path+jsFiles[j]+'"></script>');
                return false;
            }
        });
    }

})(jQuery);
