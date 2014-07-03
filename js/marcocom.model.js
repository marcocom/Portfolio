/*
Manages the Backbone data handling and sorting.
REST integration is not used for server data, so sequential JSON files are loaded until depleted.
JSON arrays are cast into Column collections with associated Views per block.
Views use templates which are pre-compiled in Mosaic object and then removed from DOM.
 */
(function($, $m) {

    $m.Model = Class.extend({
        _construct : function() {}
    });

    $.extend($m.Model,
        {	// associate element class to Model for auto initialization
            _selectors : {},
            _extend : $m.Model.extend,
            extend : function(prop, selector) {
                var klass = $m.Model._extend(prop);
                if (typeof selector == 'string')
                    $m.Model._selectors[selector] = klass;
                return klass;
            },
            Init : function() {
                $.each($m.Model._selectors,
                    function(selector, klass) {
                        $(selector).each(function() {
                            var i = new klass(this);
                            $(this).data(selector, i);
                        });
                    });
            }
        }
    );


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BASE
    $m.Model.Mosaic = $m.Model.extend({
        _totalDataFiles : 0,
        _totalPreload : 3,
        _currentColumn : 0,
        _columns : [],
        _firstLoad : false,
        _dataFinished : false,
        _directory : null,
        _mosaic:null,

        _construct : function(el, dir) {
            this._el = $(el);
            this._directory = dir;
            this._super(this._el);
            var m = this._el.find('.mosaic-container');
            this._mosaic = $(m);

            $.ajax({
                url: dir+"count.php",
                cache: false,
                async:true,
                dataType: 'html',
                success: $.proxy(this.getCount, this)
            });


        },

        getCount : function(e){
            this._totalDataFiles = Number(e) - 1;

            this.modifyPreload();
            this.compileTemplates();
            this.initModel();
            $m.EventManager.addEventHandler($m.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler.bind(this));
        },

        modifyPreload : function(){
            if($m.windowWidth <= 450){
                this._totalPreload -= 1;
            } else if($m.windowHeight >= 970 ){
                this._totalPreload += 1;
            }
        },

        mosaicScrollHandler : function(e, xdiff, maxscroll, directx, directy){
            if(xdiff <= maxscroll && !this._dataFinished) this.nextModel();
        },
        
        compileTemplates : function(){
            Marcocom.templates.cells.cell_a = _.template($('#tpl-cell-a').html());
            Marcocom.templates.cells.cell_b = _.template($('#tpl-cell-b').html());
            Marcocom.templates.cells.cell_c = _.template($('#tpl-cell-c').html());
            Marcocom.templates.cells.cell_d = _.template($('#tpl-cell-d').html());
            Marcocom.templates.cells.cell_e = _.template($('#tpl-cell-e').html());
            Marcocom.templates.cells.cell_f = _.template($('#tpl-cell-f').html());
            Marcocom.templates.cells.cell_g = _.template($('#tpl-cell-g').html());
            Marcocom.templates.cells.cell_h = _.template($('#tpl-cell-h').html());
            Marcocom.templates.cells.cell_i = _.template($('#tpl-cell-i').html());
            Marcocom.templates.cells.cell_j = _.template($('#tpl-cell-j').html());

            $('#tpl-cell-a').remove();
            $('#tpl-cell-b').remove();
            $('#tpl-cell-c').remove();
            $('#tpl-cell-d').remove();
            $('#tpl-cell-e').remove();
            $('#tpl-cell-f').remove();
            $('#tpl-cell-g').remove();
            $('#tpl-cell-h').remove();
            $('#tpl-cell-i').remove();
            $('#tpl-cell-j').remove();
        },
        
        initModel : function(){
            $log("-------------------------MODEL MOSAIC INIT-----------------------------");

//            this.components.Models.CellModel = Backbone.Model.extend({});
//            this.components.Collections.Column = Backbone.Collection.extend({
//                model: this.components.Models.CellModel,
//                url: "../data/column_0.json",
//                initialize: function(){
//                    //$log("JSON INIT:"+this.url);
//                }
//            });
            this.loadJsonFile(this._currentColumn);
        },
        
        nextModel : function(){
            var nextup  = (this._currentColumn+=1);

            $log("NEXTMODEL nextup:"+nextup+" totalpreload:"+this._totalPreload);

            if(nextup < this._totalPreload){
                this.loadJsonFile(nextup);
            } else if(!this._firstLoad){
                this._firstLoad = true;
                Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMNS_COMPLETE, this);
            } else if(!this._dataFinished){
                this.loadJsonFile(nextup);
            }
        },
        
        loadJsonFile : function(indexnum){
            var nextInverted = this._totalDataFiles - indexnum;
            var assetUrl = this._directory+"column_"+nextInverted+".json";
            $log("LOAD JSON:"+nextInverted+" index:"+indexnum+" asset:"+assetUrl);


            if(nextInverted >= 0) {
                Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMN_LOADING , this);
                $.ajax({
                    url:assetUrl,
                    cache: false,
                    async:true,
                    dataType: 'json',
                    success: $.proxy(this.parseColumn, this),
                    error:$.proxy(this.loadError, this)
                });
            } else {
                this.loadError(null);
            }

        },
        
        parseColumn : function(result){
            var style = Math.abs(this._currentColumn % 3);
            var el = this.injectColumn(style);

            console.log("COLUMN DATA RETURN:");
            console.dir(result);
            var c = new Marcocom.Model.Column(result, style, el, this._currentColumn);

            this._columns.push(c);
            !this._firstLoad ? this.nextModel() : $m.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMN_LOADED, this);
        },

        loadError : function(error){
            $log("LOAD ERROR!")
            this._dataFinished = true;
            Marcocom.EventManager.removeEventHandler($m.Event.MOSAIC_SCROLL_END, this.mosaicScrollHandler);
            Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMNS_NODATA, this);
//            Marcocom.EventManager.fireEvent(Marcocom.Event.JSON_NOT_FOUND, this);
        },

        injectColumn : function(style){
            var htm = $('<li class="column col-style-'+style+' col-count-'+this._currentColumn+'"></li>');
            var el = htm.appendTo(this._mosaic);
            return el;
        }


    });

   $m.Model.cellModel = Backbone.Model.extend({
        defaults:{
            CellType : "i",
            Ref : "",
            Date : new Date(),
            Client : "",
            Title : "",
            JobTitle : "Hero",
            Article : "",
            URL : "",
            Dimensions : "",
            Image :[]
        },
        initialize: function(opt){
            this.on("change:Viewed", function(model){
                var name = model.get("Viewed");
                $log("Changed Viewed: " + name );
            });

            this.on('invalid', function(model, error) {
                $log("invalid error:"+error);
            });
        },
        validate: function( attributes ){
        },
        addViewed: function(){
            var newnum = Number(this.get('Viewed')) + 1;
            this.set({ Viewed: newnum });
        }

    });



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////COLUMNS
    $m.Model.Column = $m.Model.extend({
        _cells:[],
        _style:null,
        _index:0,
        _collection:null,
        _construct : function(m, index, el, i) {
            this._el = $(el);
            this._style = index;
            this._index = i;

//            this._model = $(m).each(function(i){return new $m.Model.Mosaic.cellModel(i)});
            this.initModel(m);
        },

        initModel : function(_m){
            $log("-------------------------MODEL COLUMN INIT-----------------------------:"+this._style);



            var columnCollection = Backbone.Collection.extend({
                model: $m.Model.cellModel
            });

            var patm = this.patternFormatData(_m);

            var castm = $.map(patm, function(post) {
                return new $m.Model.cellModel(post);
            });
            this._collection = new columnCollection(castm);

            this.instantiateCells();
        },

        instantiateCells : function(){
            var _this = this;
            this._collection.each(function(model) {
                var c = new Marcocom.Model.CellView(model, _this._el);
            });
        },

        patternFormatData : function(_m){ //----------------------------------------------------THIS NEEDS CLEANUP


            var newArr = [];


            if(this._index == 0){
                var firstobj = this.pullAncillaryData("d");
                firstobj.CellType = "d";
                if(firstobj.Id) firstobj.Id = '0001';
                newArr.push(firstobj);
                //$log("INDEX ZERO:", firstobj, newArr);
            }

            for (var k = 0; k < _m.length; k++){

                var cl = _m[k].CellType;
//                        if(cl == cell_letter) ancil_obj = _m.splice(k, 1)[0];
                newArr.push(_m[k]);
            }

//            for(var i = 0; i < pattern.length; i++){
//
//                var ancil_obj = {};
//                var cell_letter = pattern[i];
//                var uId = "0" + this._index.toString() + i.toString();
//
//                if($.inArray(cell_letter, $m.AncillaryLetters) > -1){ //insert ancillary object when pattern calls for it. (not CMS fed)
//                    ancil_obj = this.pullAncillaryData(cell_letter);
//                    if(ancil_obj)ancil_obj.CellType = cell_letter;
//
//                } else {
//                    for (var k = 0; k < _m.length; k++){
//                        var cl = _m[k].CellType;
//                        if(cl == cell_letter) ancil_obj = _m.splice(k, 1)[0];
//
//                    }
//                    ancil_obj = _m.splice(k, 1)[0];
//
//                    if($m.isEmpty(ancil_obj)) ancil_obj = {};  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DISABLE TO FIND OUT IF YOURE MISSING DATA IN THE HARD-CODED FILES
//                }
//
//                if($m.isEmpty(ancil_obj) == false){
//                    if(ancil_obj.Id) ancil_obj.Id = uId;
//                    newArr.push(ancil_obj);
//                }
//            }


            return newArr;
        },

        pullAncillaryData : function(letter){
            var ran;
            var obj;
            if(letter == 'd'){
                ran = Math.floor(Math.random() * $m.ancillary_models.quote_data.length);
                obj = $m.ancillary_models.quote_data[ran];
//                obj = $q.ancillary_models.quote_data.splice(ran,1)[0];
            } else
            if(letter == 'e'){
                ran = Math.floor(Math.random() * $m.ancillary_models.action_data.length);
                obj = $m.ancillary_models.action_data[ran];
//                obj = $q.ancillary_models.action_data.splice(0,1)[0];
            } else
            if(letter == 'g'){
                ran = Math.floor(Math.random() * $m.ancillary_models.long_images.length);
                obj = $m.ancillary_models.long_images[ran];
//                obj = $q.ancillary_models.long_images.splice(0,1)[0];
            } else
            if(letter == 'i'){
                obj = {
                    'id':'4'
                };
            }
            return obj;
        },

        getObjects : function (obj, key, val) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(this.getObjects(obj[i], key, val));
                } else
                if (i == key && obj[key] == val) {
                    objects.push(obj);
                }
            }
            return objects;
        }

    });





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CELLS
    $m.Model.CellView = Backbone.View.extend({
        _tplname:null,
        _compiledTemplate:null,
        _style:null,
        _column:null,
        _model:{},

        initialize: function(m, col){
            this._model = m;
            this._column = col;
            this._style = this._model.get("CellType");
            this._tplname = 'cell_'+this._style;
            $log("CELL m:", this._model, " c:", this._column);
            this.render();
        },

        render: function(){
            var template = Marcocom.templates.cells[this._tplname](this._model.toJSON());
            this.$el.html( template );
            this.setElement(this.$el);
            this.$el.appendTo(this._column);
        },

        events: {
//            "click input[type=button]": "doSearch"
//            "click": "onClick"
        },

        onClick: function( e ){
            $log( "CLICK EVENT:"+ e.currentTarget );
        }
    });



    $m.Model.Init();

    Marcocom._model = new $m.Model.Mosaic("#slider-container", "data/cells/");

})(jQuery, Marcocom);
