/*
 Manages the Page-level logic.
 The z-indexed logic of sub-pages are managed here, either through
 link-actions, or else global events.

 Backbone Router is initialized here and broadcasts events, including initial boot-up of entire site based on deep-link (address) values.

 IntroColumn represents the 'landing-page' first-column of the wall
 */
(function($, $m) {

    $m.Page = Class.extend({
        _construct : function(el) {
            this._el = $(el);
        }
    });

    $.extend($m.Page,
        {	// associate element class to Page for auto initialization
            _selectors : {},
            _extend : $m.Page.extend,
            extend : function(prop, selector) {
                var klass = $m.Page._extend(prop);
                if (typeof selector == 'string')
                    $m.Page._selectors[selector] = klass;
                return klass;
            },
            Init : function() {
                //$m.Page._selectors;
                $.each($m.Page._selectors,
                    function(selector, klass) {
                        $(selector).each(function() {
                            var i = new klass(this);
                            $(this).data(selector, i);
                        });
                    });
            }
        }
    );

    $m.Page.Home = $m.Page.extend({
        cellRouter:null,
        _logo:null,
        toplinks:null,
        currentContent:null,
        contentSwap:null,
        closeButton:null,
        subcontentOpened:false,
        refineNav:null,
        introColumn:null,
        _current:null,
        _currentscroller:null,
        backgrounds:null,
        tiles:null,
        _construct : function(el) {
            this._el = $(el);
            this._super(this._el);
            this.toplinks = $(this._el.find('.header .toplink'));
            this._logo = $('#logo').parent('a');
            this.initPage();

        },

        initPage : function(){
            var _this = this;
            this.closeButton = $('.sub-close-cta a').click($.proxy(this.pageCollapse, this));

            this.toplinks.click($.proxy(this.clickAnimate, this));
//            $log("LOGO:");
//            $dir(this._logo)
            this._logo.click(function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
                $m.cellRouter.navigate("/", {trigger:true});
            });

//            $m.EventManager.addEventHandler($m.Event.PAGECHANGE, this.catchPageChange.bind(this));

            this.initRouter();

            this.initBackground();
        },

        initBackground:function(){


            this.backgrounds = $('.backgrounds');
            this.tiles = this.backgrounds.find('.tile');

            var rand = _.random(1,7);
            var bg_asset = 'img/backgrounds/bg'+rand+'.jpg';
            $log("BG:"+bg_asset);
            this.tiles.append('<img src="'+bg_asset+'">');
        },

        initRouter : function(){
            //BACKBONE ROUTER
            var _this = this;
            var router = Backbone.Router.extend({
                routes: {

                    "posts/:id": "getPost",
                    // <a href="http://example.com/#/posts/121">Example</a>
                    "client/:id": "getClient",
                    "author/:id": "getAuthor",
                    "portal/:id": "getPortal",
                    "tag/:id": "getTag",
                    "search/:query":        "search",  // #/search/subject
                    "*action": "defaultRoute" // Backbone will try match the route above first
                }
            });


            $m.cellRouter = new router;

            $m.cellRouter.on('route:getPost', function (id) {
                //$log( "Get post number " + id );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_POST, this, id);
            });

            $m.cellRouter.on('route:getClient', function (id) {
                //$log( "Get client number " + id );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_CLIENT, this, id);
            });

            $m.cellRouter.on('route:getPortal', function (id) {
                //$log( "Get portal:" + id );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_PORTAL, this, id);
            });

            $m.cellRouter.on('route:getAuthor', function (id) {
                //$log( "Get author number " + id );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_AUTHOR, this, id);
            });

            $m.cellRouter.on('route:getTag', function (word) {
                //$log( "Get tag: " + word );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_TAG, this, word);
            });

            $m.cellRouter.on('route:search', function (word) {
                //$log( "Search term: " + word );
                $m.EventManager.fireEvent(Marcocom.Event.ROUTER_SEARCH, this, word);
            });

            $m.cellRouter.on('route:defaultRoute', function (action) {
                //$log( "DEFAULT ROUTE:" + action + " subcontentOpened:"+this.subcontentOpened);

                if(action == "jobs" || action == "about" || action == "contact"){
                    _this.remoteAnimate(action);
                    $m.EventManager.fireEvent(Marcocom.Event.ROUTER_MAIN_MOSAIC, _this, action || null);
                } else if(action == "people"){
                    $m.EventManager.fireEvent(Marcocom.Event.REFINE_PEOPLE, _this);
                    //$log("--------------------POEPLE ROUTE-------------------")
                } else if(action == "clients"){
                    $m.EventManager.fireEvent(Marcocom.Event.REFINE_CLIENTS, _this);
                    //$log("--------------------CLIENT ROUTE-------------------")
                } else if(action == null){
                    //$log("DEFAULT ROUTE - NO ACTION");
                    if(_this.subcontentOpened == true) _this.pageCollapse(null);
                    $m.EventManager.fireEvent(Marcocom.Event.ROUTER_MAIN_MOSAIC, _this, action || null);
                }
            });

//            Backbone.emulateHTTP = true;
//            Backbone.emulateJSON = true;
//
//            Start Backbone history a necessary step for bookmarkable URL's
//            - See more at: http://thomasdavis.github.io/2011/02/07/making-a-restful-ajax-app.html#sthash.oYCvSDf5.dpuf
            Backbone.history.start({pushState: true, root: '/'});
        },

        catchPageChange : function(e, props){
            ////$log("PAGECHANGE e:"+e+" props:"+props);
            this.remoteAnimate(props);
        },

        remoteAnimate : function(remoteLink){

            if(remoteLink != undefined && remoteLink.length < 2) return;
            this._current = remoteLink;
            var ref = "."+( remoteLink ? remoteLink : clicksource.id) + "-content";
            var $content = $(ref);
//            //$log("REMOTE ANIMATE subcontentOpened:"+this.subcontentOpened);

            this.subcontentOpened == false ? this.pageAnimateFromClosed($content) : this.pageAnimateFromOpened($content, null);
        },

        clickAnimate : function(e){
            e.preventDefault();

            var clicksource = $(e.currentTarget)[0];

            this._current = clicksource.id;

            var ref = "." + clicksource.id + "-content";
            var $content = $(ref);

            $m.cellRouter.navigate(clicksource.id, {trigger:true});
            ////$log("CLICK ANIMATE subcontentOpened:"+this.subcontentOpened);

            //this.subcontentOpened == false ? this.pageAnimateFromClosed($content) : this.pageAnimateFromOpened($content, clicksource);
        },

        pageAnimateFromClosed : function(el){
            var _this = this;
            el.show();
//                $content.addClass('opened');

            var t = el.find('.content')[0];
            var targetHeight = $(t).height() + ($('body').hasClass('ipad-iphone') ? 10 : 40);
            var maxHeight = $m.windowHeight - 30;

            if(targetHeight > maxHeight) targetHeight = maxHeight;

            ////$log("ANIMATEFROM-CLOSED: subOpened:"+this.subcontentOpened+" targetHeight:"+targetHeight+" currentContent:"+ this.currentContent);

            this.setScrollable(false);

            this.currentContent = el;
            var hasSlider = this.currentContent.hasClass('sliding');
            //$log("PAGE ANIMATE has slider:"+hasSlider );

            if(hasSlider) this._currentscroller = new $m.Page.SubPage(this.currentContent);

//             this._el.css('top', (targetHeight + 'px'));

            this._el.animate({
                top:targetHeight
            }, 500, function(){
                _this.onOpenTransitionEnd();
            });
        },

        pageAnimateFromOpened : function(el, c){
            var _this = this;
            ////$log("ANIMATEFROM-OPEN: subOpened:"+this.subcontentOpened+" currentContent:"+this.currentContent.selector);
            ////$log("NEW CONTENT:"+el.selector);
            if(this.currentContent.selector != el.selector){
                this.contentSwap = c;
                ////$log("CONTENTSWAP REASSIGNED-------")
            } else {
                this.contentSwap = null;
            }

            this._el.animate({
                top:'0'
            }, 500, function(){
                _this.onCloseTransitionEnd();
            });
        },

        onOpenTransitionEnd : function(){

            this.subcontentOpened = true;

            ////////////////////////////////////////BACKGROUND CLICK TO CLOSE
            var bg = this.currentContent.find('.content');
            $(bg).bind('click', $.proxy(this.pageCollapse, this));
            this._el.bind('tap click swipe focus', $.proxy(this.pageCollapse, this));


            ////$log("OPEN TRANSITION END - subcontentOpened:"+this.subcontentOpened);
        },

        onCloseTransitionEnd : function(){
            // THIS ALLOWS FOR A SWAPPING FROM LINKED SECTION TO SECTION THROUGH HAND-OFF OF THE 'currentSwap' VALUE.  BUT IS NOT NEEDED WITH THE MOUSEOVER LOGIC.
//            //$log("CLOSE TRANSITION END - subcontentOpened:"+this.subcontentOpened+" contentSwap:");
            $dir(this.contentSwap);
            if(this.subcontentOpened == true){
                this.subcontentOpened = false;
                this.currentContent.hide();
                this.currentContent = null;
                this.setScrollable(true);
                if(this._currentscroller){
                    this._currentscroller._slider.destroy();
                    this._currentscroller.removeEventHandlers();
                    this._currentscroller = null;
                }

                if(this.contentSwap != null){

                    $(this.contentSwap).trigger('click');
//                    this.remoteAnimate(this._current);

                    //$log("CONTENT SWAP:"+this._current);
                    this.contentSwap = null;
                } else {
                    $m.cellRouter.navigate("/", {trigger:false});

                }

            }
        },

        pageCollapse : function(e){
//            if(this.subcontentOpened) this._el.css('top', '0px');
            var _this = this;
            $m.cellRouter.navigate("/", {trigger:false});
            if(this.subcontentOpened){
                this._el.animate({
                    top:'0'
                }, 500, function(){
                    _this.onCloseTransitionEnd();
                });
                this._el.mouseover(null);
                this._el.unbind('tap click swipe focus');
                //            this._el.touch(null);
            }
        },

        setScrollable : function(setOn){
            var topdoc = $('html, body');

            if(!setOn){
                topdoc.css({
                    'overflow':'hidden',
                    'height':'100%'
                });
            } else {
                topdoc.css({
                    'overflow':'auto',
                    'height':'100%'
                });
            }

        }
    });



















    $m.Page.SubPage = $m.Page.extend({
        _mosaic:null,
        _columns:null,
        loading_items:false,
        building:false,
        currentColumnWidth:null,
        currentScrollX:0,
        _slider : null,
        _scroller : null,
        _content:null,
        columnWidths:{
            'xs':480,
            'md':720,
            'sh':540,
            'tl':700
        },
        _construct : function(el) {
            this._el = el;
            this._super(this._el);
            this.initContainer();

        },

        initContainer : function(){
//            if(!$m.isIE8){
            this._content = this._el.find('.content')[0];
            var m = $(this._content).find('.items');
            this._mosaic = $(m[0]);

            this._scroller = $(this._content).find('.scroller');

            this._slider = new IScroll(this._content, {
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                click:true,
                startX:0,
                useTransform: !$m.isIE8,
                snap: 'li'
//                deceleration:0.05,
//                momentum:!$m.isIE8
//                scrollbars:$m.isIE8,
//                interactiveScrollbars:$m.isIE8
            });

//            this._slider.on('scrollStart', $.proxy(this.onScrollStart, this));
//            this._slider.on('scrollCancel', $.proxy(this.onScrollCancel, this));
//            this._slider.on('scrollEnd', $.proxy(this.onScrollEnd, this));
//            this._slider.on('flick', $.proxy(this.onFlick, this));
//            this._slider.on('refresh', $.proxy(this.positionMosaic, this));
//            this._slider.on('beforeScrollStart', this.onBeforeScrollStart.bind(this));

            this.loading_items = true;
//            //$log("SUBPAGE INITCONTAINER ()  -- DETECTIONS =======  isMSGesture:"+$m.msGesture+" isTouch:"+$m.isTouch);

            var c = this._mosaic.find('li');

            this._columns = $(c);

//            this._columns.each(function(){
//                var mc = new $m.Page.ParentColumn(this);
//            });

            this.addEventHandlers();

            this.onResize(null);
        },

        addEventHandlers : function(){
            $m.EventManager.addEventHandler($m.Event.RESIZE, $.proxy(this.onResize, this));//this.onResize.bind(this));
        },

        removeEventHandlers : function(){

            $m.EventManager.removeEventHandler($m.Event.RESIZE, $.proxy(this.onResize, this));
        },

        onResize : function(e){

            var w = $(this._columns[0]).width();
            var totalw = (this._columns.length + 1) * w;
            var _this = this;
            //$log("SUB RESIZE() w:"+w+" totalwidth:"+totalw);


            $(this._scroller).width( totalw );

            if(w != this.currentColumnWidth && !$m.isIE8){  //one-time event fire when site shifts through a responsive media-query
                this.currentColumnWidth = w;
                setTimeout(function () {
                    _this._slider.refresh();
                }, 0);
            }

        },

        scaleColumns : function(w){
            var _this = this;
            //$log("SET WIDTH:"+w);
            this._columns.each(function(e){
                $(this).width(w);
            })
        },

        onFlick : function(e){
            //$log("FLICK----------------");
            $m.EventManager.fireEvent($m.Event.MOSAIC_FLICK, this);
        }

    });




    $m.Page.Init();


    if($('.home-content').length > 0) Marcocom._landingPage = new $m.Page.Home('.home-content');

})(jQuery, Marcocom);
