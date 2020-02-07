zaz.use(function(pkg){

    "use strict";

    pkg.require(['dictFactory'], function(dicFactory){

        dicFactory.create({
            "name": 'galleryBuilder',
            "version": '1.0.0',
            "state": 'ok',
            "extends": [],
            "langs": {
                "global": {
                    "termWithPlural": ["plural", "singular"]
                },
                "pt": {
                    "photo": "Foto",
                    "replay": "ver novamente",
                    "advertisement": "publicidade",
                    "skip_ad": "Pular publicidade"
                },
                "es": {
                    "photo": "Foto",
                    "replay": "ver de nuevo",
                    "advertisement": "publicidad",
                    "skip_ad": "Saltar publicidad"
                },
                "en": {
                    "photo": "Photo",
                    "replay": "see again",
                    "advertisement": "advertisement",
                    "skip_ad": "Skip ad"
                }
            }
        }); // end create

    }); // end requiring dictFactory

}); // end zaz.use

/**
 * App: GalleryBuilder
 * Project: gallery-builder
 * Docs: http://github.tpn.terra.com/pages/terra/gallery-builder
 * Source: http://github.tpn.terra.com/Terra/gallery-builder
 *
 * Just another app
 *
 * @name GalleryBuilder
 * @namespace App
 * @uses pkg.utils.make.Observable
 *
 * "Generated using Jarvis"
 */
 /*globals tgmKey, AdManager, terra_stats_regTraffic, terra_info_objembd*/
zaz.use(function appGalleryBuilder(pkg) {

/*******************************************/
/*    READ and REMOVE the comments below   */
/*******************************************/

    "use strict";

    var console = pkg.console,
        require = pkg.require,
        define = pkg.define,
        PUBLIC_STATIC = null,
        STATIC = {
            singletonInstance: null
        }; // add static properties here

    pkg.require(['appFactory'], function (appFactory) {
        appFactory.create({

            name: "galleryBase",
            version: "1.0.0",
            state: "ok", // change to deprecated in case its use is not advisable
            docs: "http://github.tpn.terra.com/pages/terra/mosaic-builder",
            source: "http://github.tpn.terra.com/Terra/mosaic-builder",
            description: "Just another app",
            tests: "http://s1.trrsf.com/fe/mosaic-builder/tests/index.htm?zaz[env]=tests",
            dependencies: ["Promise", "mod.carousel", "dictFactory","mod.xRequest"],
            dictionaries: ['galleryBuilder'],
            templates: {
                base: "<div id=\"gallery-${ id }\" class=\"gallery-layer\"><a href=\"#closeGallery\" class=\"btn-close close32\"></a><!-- <div class=\"gallery-layer\"></div> --><div class=\"gallery-container\"><div class=\"gallery-container-main\">{% if title %}<h2 class=\"title\">${ title }</h2>{% endif %}<div class=\"embbed-gallery\"><div class=\"thumbs\"><div class=\"thumblist\"><ul>{% for image in items %}{% if config.thumbs.initial %} {% set initial = config.thumbs.initial %}{% else %} {% set initial = items[0].id %}{% endif %}{% set url = image.url|replace(\'http://\', \'\') %}{% set author = image.author %}{% set width = image.width %}{% set height = image.height %}{% set orientation = image.imageOrientation %}{% set caption = image.caption | escape %}<li id=\"thumb_${ id }_${ image.id }\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"{% if initial == image.id%}selected{% endif %}\"><a href=\"https://p2.trrsf.com/image/fget/cf/619/464/${ url }\" itemprop=\"contentUrl\" ts.idz=\"content_gallery_thumbs\"><hr />{% if image.imageOrientation == \"W\" and image.horizontalCrop %}<img id=\"${ image.id }\" data-index=\"${ image.index }\" alt=\"${ caption }\" height=\"59px\" width=\"88px\" src=\"https://p2.trrsf.com.br/image/fget/cf/88/59/p2.trrsf.com/image/fget/cf${ image.horizontalCrop }${ url }\" data-url=\"${ url }\" data-caption=\"${ caption }\" data-orientation=\"${ orientation }\" data-author=\"${ author}\" alt=\"${ alt }\">{% endif %}{%if image.imageOrientation == \"V\" and image.verticalCrop %}<img id=\"${ image.id }\" data-index=\"${ image.index }\" alt=\"${ caption }\" height=\"59px\" width=\"88px\" src=\"https://p2.trrsf.com.br/image/fget/cf/88/59/p2.trrsf.com/image/fget/cf${ image.verticalCrop }${ url }\" data-url=\"${ url }\" data-caption=\"${ caption }\" data-orientation=\"${ orientation }\" data-author=\"${ author}\" alt=\"${ alt }\">{% endif %}{% if not image.horizontalCrop and not image.verticalCrop %}<img id=\"${ image.id }\" data-index=\"${ image.index }\" alt=\"${ caption }\" height=\"59px\" width=\"88px\" src=\"https://p2.trrsf.com.br/image/fget/cf/88/59/${ url }\" data-url=\"${ url }\" data-caption=\"${ caption }\" data-author=\"${ author}\" alt=\"${ alt }\">{% endif %}</a></li>{% endfor %}</ul><a href=\"photonext\" ts.idz=\"content_gallery_arrow;next\" class=\"arrow arrow-next icon-40 icon-chevron-right-white\" rel=\"next\"></a><a href=\"photoprev\" ts.idz=\"content_gallery_arrow;previous\" class=\"arrow arrow-prev icon-40 icon-chevron-left-white\" rel=\"prev\"></a></div></div><div class=\"big-photo-container\"><div class=\"end-layer\"><div class=\"gallery-restart\"><div class=\"icon icon-20 icon-replay replay20\"></div><a><span>${replayButton}</span></a></div><div class=\"related-galleries\"><ul>{% for relatedGallery in relatedGalleries %}<li><a href=\"${relatedGallery.url}\" data-thumb=\"${relatedGallery.image}\" ts.idz=\"gal_rel_${ loop.index }\"><img src=\"${relatedGallery.image}\"/>${ relatedGallery.caption }</a></li>{% endfor %}</ul></div></div><div class=\"big-photo\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\"><div class=\"progress\"><div class=\"progress-bar spinner\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\"></div></div>{% set orientation = image.imageOrientation %}{% if currentElement.height > currentElement.width %} {% set orientationClass = \"vertical\" %}{% else %} {% set orientationClass = \"horizontal\" %}{% endif %}{% if currentElement.imageOrientation == \"W\" %}{% if currentElement.wideCrop %}<img src=\"https://p2.trrsf.com.br/image/fget/cf/fit-in/940/627/p2.trrsf.com/image/fget/cf${ currentElement.wideCrop }${ currentElement.url|replace(\'http://\', \'\') }\" alt=\"${ currentElement.alt }\" class=\"photo ${ orientationClass }\" data-index=\"${ currentElement.order - 1 }\"/>{% else %}<img src=\"https://p2.trrsf.com.br/image/fget/cf/fit-in/940/627/${ currentElement.url|replace(\'http://\', \'\') }\" alt=\"${ currentElement.alt }\" class=\"photo ${ orientationClass }\" data-index=\"${ currentElement.order - 1 }\"/>{% endif %}{% elif currentElement.imageOrientation == \"V\" and currentElement.verticalCrop %}{% if currentElement.verticalCrop %}<img src=\"https://p2.trrsf.com.br/image/fget/cf/fit-in/940/627/p2.trrsf.com/image/fget/cf${ currentElement.verticalCrop }${ currentElement.url|replace(\'http://\', \'\') }\" alt=\"${ currentElement.alt }\" class=\"photo ${ orientationClass }\" data-index=\"${ currentElement.order - 1 }\"/>{% else %}<img src=\"https://p2.trrsf.com.br/image/fget/cf/fit-in/940/627/${ currentElement.url|replace(\'http://\', \'\') }\" alt=\"${ currentElement.alt }\" class=\"photo ${ orientationClass }\" data-index=\"${ currentElement.order - 1 }\"/>{% endif %}{% else %}<img src=\"https://p2.trrsf.com.br/image/fget/cf/fit-in/940/627/${ currentElement.url|replace(\'http://\', \'\') }\" alt=\"${ currentElement.alt }\" class=\"photo ${ orientationClass }\" data-index=\"${ currentElement.order - 1 }\"/>{% endif %}<a href=\"photonext\" ts.idz=\"content_gallery_arrow;next\" class=\"arrow arrow-next icon-128 icon-chevron-right-white\" rel=\"next\"></a><div class=\"shadowright\"></div><a href=\"photoprev\" ts.idz=\"content_gallery_arrow;previous\" class=\"arrow arrow-prev icon-128 icon-chevron-left-white\" rel=\"prev\"></a><div class=\"shadowleft\"></div></div><div class=\"ctn-legend\"><div class=\"lineSpacer\"></div><div class=\"legend\">{% if currentElement.caption %}${ currentElement.caption }{% endif %}{% if currentElement.link %}{% if currentElement.link.title %}{% if currentElement.link.url %}<a href=\"${ currentElement.link.url }\">${ currentElement.link.title }</a>{% endif %}{% endif %}{% endif %}</div><div class=\"pagination\"><span class=\"current\">${ currentElement.index +1 }</span><span>/</span><span class=\"total\">${ items.length }</span></div><div class=\"provider-container\">{% if currentElement.source.image %}<img src=\"https://p2.trrsf.com/image/fget/cf/${ currentElement.source.image|replace(\'http://\', \'\') }\" title=\"${ currentElement.source.name }\" alt=\"${ currentElement.source.name }\">{% endif %}</div><div class=\"image-copyright\">${ term.photo }: ${ currentElement.author } / ${ currentElement.source.name }</div></div></div></div></div><div class=\"gallery-pub-container\"><div class=\"ad-root\"><div class=\"advertisingLabel\">${ term.advertisement }</div><div id=\"gallery-${ id }-adRight\" class=\"ad-top\"></div><div id=\"containerMoreAbout\" class=\"table-more-about \"><div class=\"footer\"><div class=\"default-hover\"><h2><a href=\"https://musica.terra.com.br/\" ts.idz=\"subject_tablesubject_allabout\" class=\"channel\">${ term.skip } <span class=\"icon icon-uni12 icone\"></span></a></h2></div></div></div></div></div></div></div>"
            },
            setup: function (__static, __proto, __shared) {
                var PRIVATE = {},
                PUBLIC_STATIC = __static,
                PRIVATE_STATIC = __shared;

                PRIVATE_STATIC.instances = {};

                var galleryBuilderEvents = (function(){
                    document.addEventListener('keyup', pkg.utils.make.debounce(function(e){
                        if(e.keyCode === 39){
                            PRIVATE_STATIC.instances[PRIVATE_STATIC.currentGalleryId].next();
                        } else if(e.keyCode === 37){
                            PRIVATE_STATIC.instances[PRIVATE_STATIC.currentGalleryId].prev();
                        }
                    }, {distance: 100}));
                })();
            },

            init: function (data, __shared) {
                var PUBLIC= this,
                    PRIVATE= {},
                    PRIVATE_STATIC = __shared,
                    Promise = PRIVATE_STATIC.dependencies.Promise,
                    Carousel = PRIVATE_STATIC.dependencies['mod.carousel'],
                    Request = PRIVATE_STATIC.dependencies['mod.xRequest'],
                    ADMGR = new AdManager(),
                    imagesShown = 0,
                    limitAudience,
                    limitAdv;

                if(pkg.context.page.getRange() === "small" || pkg.context.page.getRange() === "xsmall"){
                    limitAudience = pkg.context.page.galleryAudienceRegisterMobile || 5;
                    limitAdv = pkg.context.page.galleryAdReloadMobile || 5;
                } else {
                    limitAudience = pkg.context.page.galleryAudienceRegister || 1;
                    limitAdv = pkg.context.page.galleryAdReload || 2;
                }

                PUBLIC.galleryID = data.galleryID;

                PRIVATE.tgmKey =  pkg.context.page.get("tgmkey").gallery;
                PRIVATE.adLoaded = false;
                PRIVATE.itensIndexedById = [];
                PRIVATE.galleryModel = {
                    id : null,
                    title : null,
                    items : []
                };

                PRIVATE.totalElements = 0;
                PRIVATE.parseJsonToTemplate = function(originalJson){
                    return new Promise(function(fulfill, reject){

                        pkg.require(['dict.galleryBuilder'], function(DictConstructor){
                            var json = {},
                                dict = new DictConstructor();

                            json.id = originalJson.id;
                            json.title = originalJson.title;

                            if(data.config){
                                json.config = data.config;
                            }

                            json.currentElement = PRIVATE.galleryModel.currentElement;
                            json.relatedGalleries = PRIVATE.galleryModel.relatedGalleries;
                            json.replayButton = dict.get('replay');
                            json.term = {
                                photo: dict.get('photo'),
                                advertisement: dict.get('advertisement'),
                                replay: dict.get('replay'),
                                skip: dict.get('skip_ad')
                            };

                            json.items = originalJson.images;

                            fulfill(json);
                        });

                    });
                };

                PRIVATE.render = function(json, template){
                    return new Promise(function(fulfill, reject){
                        var el = PUBLIC.templates.render(template||'base', json);
                        if(data.container) {
                            data.container.appendChild(el);
                        } else {
                            document.body.appendChild(el);
                        }
                        fulfill();
                    });
                };

                PRIVATE.getGalleryFeed = function(galleryID){
                    return new Promise(function(fulfill, reject){
                        var req = new Request(),
                            feedOrigin = (window.location.hostname.search(/hlg|ap09/ig) < 0)?"https://syndication.terra.com":"http://hlg-cms-delivery01-mia.dev.terra.com",
                            feedToken = (window.location.hostname.search(/hlg|ap09/ig) < 0)?"36f0505a-d826-4b00-bde7-930447b37579":"f6f251ac-17b4-49d0-9946-dde72b57833b";
                            // feedToken = (window.location.hostname.search(/hlg|ap09/ig) < 0)?"f3cbd9c3-e398-430d-b0ec-72fb875a375c":"f6f251ac-17b4-49d0-9946-dde72b57833b";

                        // feedOrigin = "http://cms-delivery-mia.terra.com"; // dominio de teste do novo delivery

                        var requestUrl = feedOrigin + "/feeder/galleries/gallery/" + data.galleryID + ".json?site=Brasil&access_token=" + feedToken;

                        req.get({
                            url: requestUrl,
                            responseType : 'json',
                            success: function(data, xhr) {
                                PRIVATE.jsonFeed = data;
                                fulfill(PRIVATE.jsonFeed);
                            },
                            error: function(data, e) {
                                reject(e);
                            }
                        });
                    });

                };

                PRIVATE.open = function(e){
                    PRIVATE.Layer.open();
                    PRIVATE.galleryDOM.style.display = "block";
                };

                PRIVATE.close = function(e){
                    PRIVATE.Layer.close();
                    PRIVATE.galleryDOM.style.display = "none";
                };

                PRIVATE.Layer = {
                    open : function(){
                        if(document.body.className.search(/layerOpen/i) < 0) {
                            document.body.className += " layerOpen";
                        }
                    },

                    close : function(){
                        document.body.className = document.body.className.replace("layerOpen", "");
                    }
                };

                PRIVATE.EndLayer = {
                    open : function(){
                        if(PRIVATE.galleryDOM.className.search(/endLayerOpen/i) < 0) {
                            PRIVATE.galleryDOM.className +=  " endLayerOpen";
                        }
                    },
                    close : function(){
                        if(PRIVATE.galleryDOM.className) {
                            PRIVATE.galleryDOM.className = PRIVATE.galleryDOM.className.replace("endLayerOpen", "");
                        }
                    }
                };

                PRIVATE.applyEvents = function(){
                    document.querySelector("#gallery-" + data.galleryID + ".gallery-layer .btn-close").addEventListener("click", function(e, element){
                        e.preventDefault();
                        PUBLIC.trigger("closeGalleryLayer", PUBLIC);
                        PRIVATE.close(e);
                    });

                    PRIVATE.galleryDOM.querySelector(".big-photo .arrow-next").addEventListener("click", function(e, element){
                        e.preventDefault();
                        e.stopPropagation();
                        PUBLIC.next();
                    });

                    PRIVATE.galleryDOM.querySelector(".big-photo .arrow-prev").addEventListener("click", function(e, element){
                        e.preventDefault();
                        e.stopPropagation();
                        PUBLIC.prev();
                    });

                    PRIVATE.galleryDOM.querySelector(".end-layer .gallery-restart").addEventListener("click", function(e, element){
                        e.preventDefault();
                        PRIVATE.EndLayer.close();
                        PRIVATE.goTo(0);
                    });

                    PRIVATE.galleryDOM.querySelector(".thumblist").addEventListener("click", function(e){
                        e.preventDefault();
                        if(e.target.tagName.toLowerCase() === "img"){
                            PUBLIC.goToPhotoId(e.target.id);
                        }
                    });

                    PUBLIC.on("endOfGallery", PRIVATE.EndLayer.open);

                    PUBLIC.on("changePhoto", PRIVATE.publicidades);

                    PUBLIC.on("closeGalleryLayer", function(){
                        document.removeEventListener("keyup");
                    });

                    // swipeLeft, swipeRight, swipeTop, swipeBottom, swipeH, swipeV, moving
                    if (pkg.context.platform.get('type') !== 'web') {
                        pkg.require(['mod.hammer'], function(Hammer) {
                            var h = new Hammer(PRIVATE.galleryDOM.querySelector(".big-photo"), {recognizers: [[Hammer.Swipe, {direction: Hammer.DIRECTION_HORIZONTAL}]]});

                            h.on('swipe', function(e) {
                                if (e.direction === Hammer.DIRECTION_LEFT) {
                                    PUBLIC.next();
                                } else if (e.direction === Hammer.DIRECTION_RIGHT) {
                                    PUBLIC.prev();
                                }
                            });
                        });
                    }
                };

                PRIVATE.createAdPlace = function(){
                    PRIVATE.adContainer.innerHTML = "";
                    PRIVATE.adPlace = document.createElement("div");
                    PRIVATE.adPlace.id = Math.random() * 10;
                    PRIVATE.adContainer.appendChild(PRIVATE.adPlace);
                };

                PRIVATE.publicidades = pkg.utils.make.debounce(function(index){
                    imagesShown += 1;

                    if(limitAdv == imagesShown){
                        PRIVATE.createAdPlace();

                        ADMGR.stickAd({
                            placeholder : PRIVATE.adPlace,
                            area : PRIVATE.tgmKey.area,
                            tgmkey : PRIVATE.tgmKey.key
                        }).then(PUBLIC.adLoaded, PUBLIC.adError);

                        if(terra_info_objembd ){//jshint ignore: line
                            terra_info_objembd = "GAL-" + data.galleryID;//jshint ignore: line
                        }


                        imagesShown = 0;
                    }
                    if(limitAudience == imagesShown){
                        terra_stats_regTraffic(); //jshint ignore: line
                    }

                }, {distance: 100});

                PRIVATE.refreshInterface = function(element){
                    return new Promise(function(fulfill, reject){
                        pkg.require(['dict.galleryBuilder'], function(DictConstructor){
                            var imageSource = '',
                                dict = new DictConstructor();

                            if(element.source && element.source.image){
                                var urlSourceImage = 'https://p2.trrsf.com/image/fget/cf/' + element.source.image.replace('http://','');
                                imageSource = (element.source.image)?"<img src='" + urlSourceImage + "' alt='" + element.source.name + "' />":"";
                            }

                            PRIVATE.galleryDOM.querySelector(".provider-container").innerHTML = imageSource;
                            PRIVATE.galleryDOM.querySelector(".ctn-legend .legend").innerHTML = (element.caption)?element.caption:"";

                            if(element.link){
                                var relatedLink = element.link;
                                if(relatedLink.title && relatedLink.url){
                                    PRIVATE.galleryDOM.querySelector(".ctn-legend .legend").innerHTML += " <a href='" + relatedLink.url + "'>" + relatedLink.title + "</a>";
                                }
                            }

                            PRIVATE.galleryDOM.querySelector(".pagination .current").innerHTML = element.index + 1;
                            if(element.author || element.source.name){
                                PRIVATE.galleryDOM.querySelector(".image-copyright").innerHTML = dict.get('photo') + ": " + (element.author||'') + (element.author?" / ":"") + element.source.name;
                            } else {
                                PRIVATE.galleryDOM.querySelector(".image-copyright").innerHTML = "";
                            }

                            PRIVATE.galleryDOM.querySelector(".thumblist .selected").className = "";
                            PRIVATE.galleryDOM.querySelectorAll(".thumblist li")[element.index].className = "selected";
                        });

                    },function() {
                        console.log("Erro refreshInterface");
                    });
                };


                PRIVATE.auxElement = null;
                PRIVATE.goTo = pkg.utils.make.debounce(function(index){
                    return new Promise(function(fulfill, reject){
                        PRIVATE.EndLayer.close(); // Fecha a layer final da galeria
                        PRIVATE.open(); // Abre a layer da galeria
                        if(index < PRIVATE.totalElements){
                            if(index != PRIVATE.galleryModel.currentElement.index && index >= 0) {
                                PRIVATE.changing(index).then(function(){
                                    if(!PRIVATE.auxElement) {
                                        PRIVATE.auxElement = document.createElement("img");

                                        PRIVATE.auxElement.addEventListener("load", function(){
                                            PRIVATE.galleryDOM.querySelector(".big-photo img").setAttribute("src", this.getAttribute("src"));
                                            PRIVATE.galleryDOM.querySelector(".big-photo img").setAttribute("data-orientation", this.getAttribute("data-orientation"));
                                            if(this.getAttribute("data-orientation") === "V"){
                                                PRIVATE.galleryDOM.querySelector(".big-photo img").className = "photo vertical";
                                            } else {
                                                PRIVATE.galleryDOM.querySelector(".big-photo img").className = "photo horizontal";
                                            }


                                            PUBLIC.trigger("changePhoto", index);
                                        });
                                    }


                                    var imageSize = "/940/627/";
                                    if(pkg.context.page.getRange() === "xlarge"){
                                        imageSize = "/940/627/";
                                    } else if(pkg.context.page.getRange() === "large"){
                                        imageSize = "/620/416/";
                                    } else if(pkg.context.page.getRange() === "medium"){
                                        imageSize = "/620/416/";
                                    } else if(pkg.context.page.getRange() === "small"){
                                        imageSize = "/300/200/";
                                    } else {
                                        imageSize = "/300/200/";
                                    }

                                    if(PRIVATE.jsonFeed.images[index].imageOrientation === "W" && typeof(PRIVATE.jsonFeed.images[index].horizontalCrop) != 'undefined' && PRIVATE.jsonFeed.images[index].horizontalCrop !== null) {
                                        PRIVATE.auxElement.setAttribute("src", "https://p2.trrsf.com.br/image/fget/cf/fit-in" + imageSize + "/p2.trrsf.com/image/fget/cf" + PRIVATE.jsonFeed.images[index].horizontalCrop + PRIVATE.jsonFeed.images[index].url.replace("http://", ""));
                                    } else if(PRIVATE.jsonFeed.images[index].imageOrientation === "V" && typeof(PRIVATE.jsonFeed.images[index].verticalCrop) != 'undefined' && PRIVATE.jsonFeed.images[index].verticalCrop !== null) {
                                        PRIVATE.auxElement.setAttribute("src", "https://p2.trrsf.com.br/image/fget/cf/fit-in" + imageSize + "/p2.trrsf.com/image/fget/cf" + PRIVATE.jsonFeed.images[index].verticalCrop + PRIVATE.jsonFeed.images[index].url.replace("http://", ""));
                                    } else {
                                        PRIVATE.auxElement.setAttribute("src", "https://p2.trrsf.com.br/image/fget/cf/fit-in" + imageSize + PRIVATE.jsonFeed.images[index].url.replace("http://", ""));
                                    }

                                    if(PRIVATE.jsonFeed.images[index].height > PRIVATE.jsonFeed.images[index].width){
                                        PRIVATE.auxElement.setAttribute("data-orientation", "V");
                                    } else {
                                        PRIVATE.auxElement.setAttribute("data-orientation", "H");
                                    }

                                }).then(function(){
                                    PRIVATE.galleryModel.currentElement = PRIVATE.jsonFeed.images[index];
                                    PRIVATE.refreshInterface(PRIVATE.jsonFeed.images[index]);
                                });
                            }
                        } else {
                            PUBLIC.set("endOfGallery", index);
                        }

                        fulfill();
                    });
                }, {distance: 100});

                PUBLIC.goToPhotoId = pkg.utils.make.debounce(function(photoId){
                    if(photoId){
                        var index = PRIVATE.itensIndexedById[photoId].index;
                        PRIVATE.goTo(index);
                    }
                }, {distance: 100});

                PRIVATE.changing = function(index){
                    return new Promise(function(fulfill, reject){
                        PRIVATE.carousel.goTo(index);
                        PRIVATE.galleryDOM.querySelector(".big-photo img").className += " transient";
                        fulfill(index);
                    },function() {
                        console.log("Erro refreshInterface");
                    });
                };

                PUBLIC.next = function(){
                    var index = PRIVATE.galleryModel.currentElement.index+1;
                    PRIVATE.goTo(index);
                };

                PUBLIC.prev = function(){
                    var index = PRIVATE.galleryModel.currentElement.index-1;
                    PRIVATE.goTo(index);
                };

                PUBLIC.adLoaded = function() {
                    console.log('[GALLERY] Advertisement loaded');
                    PRIVATE.adLoaded = true;
                    PRIVATE.adPlace.style.display = "block";

                };

                PUBLIC.adError = function(e){
                    console.error('[GALLERY] Error loading advertisement: ', e);
                };

                PRIVATE.getRelatedGalleries = function(){
                    var jsonRelatedGalleries = [];

                    var size = 0;
                    if(pkg.context.page.range === "xsmall" || pkg.context.page.range === "small"){
                        size = document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li").length - 1;
                    } else {
                        size = document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li").length;
                    }

                    for(var i=0; i < size; i++){
                        var obj = {
                            id: document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li")[i].getAttribute("data-id"),
                            image: document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li")[i].getAttribute("data-image-url"),
                            url: document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li")[i].querySelector("a").getAttribute("href"),
                            caption: document.querySelectorAll("#gallery-starter-" + data.galleryID + " .related li")[i].querySelector("a").innerHTML
                        };

                        jsonRelatedGalleries.push(obj);
                    }

                    return jsonRelatedGalleries;
                };

                (function() {

                    // var dict= new DictConstructor();

                    PRIVATE.galleryModel.id = data.galleryID;
                    PRIVATE.getGalleryFeed(data.galleryID).then(function(galleryJson){
                        PRIVATE.galleryModel.items = galleryJson.images;
                        PRIVATE.totalElements = galleryJson.images.length;

                        for (var i = 0; i < PRIVATE.totalElements; i++) {
                            var id = PRIVATE.galleryModel.items[i].id;
                            PRIVATE.galleryModel.items[i].index = i;
                            PRIVATE.itensIndexedById[id] = PRIVATE.galleryModel.items[i];
                        }

                        PRIVATE.galleryModel.relatedGalleries = PRIVATE.getRelatedGalleries();
                        if(data.config && data.config.thumbs && data.config.thumbs.initial){
                            if(PRIVATE.itensIndexedById[data.config.thumbs.initial] === undefined){
                                PRIVATE.galleryModel.currentElement = PRIVATE.galleryModel.items[0];
                                PRIVATE.initialElement = 0;
                            } else {
                                PRIVATE.galleryModel.currentElement = PRIVATE.itensIndexedById[data.config.thumbs.initial];
                                PRIVATE.initialElement = PRIVATE.galleryModel.currentElement.index;
                            }
                        } else {
                            PRIVATE.galleryModel.currentElement = PRIVATE.galleryModel.items[0];
                            PRIVATE.initialElement = 0;
                        }


                        PRIVATE.parseJsonToTemplate(galleryJson).then(function(jsonToTemplate) {
                            PRIVATE.render(jsonToTemplate).then(function() {
                                PRIVATE.galleryDOM = document.querySelector("#gallery-" + data.galleryID);
                                document.querySelector("#gallery-" + data.galleryID +" .embbed-gallery .big-photo").style.height = window.innerHeight-220+"px";
                                document.querySelector("#gallery-" + data.galleryID +" .embbed-gallery .big-photo").style.maxHeight = window.innerHeight-220+"px";
                                document.querySelector("#gallery-" + data.galleryID +" .gallery-pub-container").style.height = window.innerHeight+"px";

                                PRIVATE.open();
                                PRIVATE.carousel = new Carousel({
                                    containerSelector: "#gallery-" + data.galleryID + " .thumbs",
                                    step: {
                                        type: 'item',
                                        size: (pkg.context.page.range === "xlarge")? 10:7
                                    }
                                });

                                PRIVATE.carousel.goTo(PRIVATE.initialElement);



                                PRIVATE.adContainer = document.getElementById("gallery-" + data.galleryID + "-adRight") ;

                                PRIVATE.createAdPlace();

                                if(pkg.context.page.range === "xlarge" || pkg.context.page.range === "large" || pkg.context.page.range === "medium"){
                                    ADMGR.stickAd({
                                        placeholder : PRIVATE.adPlace,
                                        area : PRIVATE.tgmKey.area,
                                        tgmkey : PRIVATE.tgmKey.key
                                    }).then(PUBLIC.adLoaded, PUBLIC.adError);
                                }

                                var scrollAmount;
                                pkg.context.page.on("range", function(range){
                                    scrollAmount = {
                                        type: 'item',
                                        size: (pkg.context.page.range === "xlarge")? 10:7
                                    };

                                    PRIVATE.carousel.setScrollAmount(scrollAmount);

                                });

                                PRIVATE.applyEvents();
                            });
                        },function(e) {
                            console.log("Erro", e);
                        });
                    });
                    PRIVATE_STATIC.currentGalleryId = PRIVATE.galleryModel.id;
                    PRIVATE_STATIC.instances[PRIVATE_STATIC.currentGalleryId] = PUBLIC;
                })();

            },

            teardown: function (why, __static, __proto, __shared) {
            }

        }); // end appFactory.create

    }); // end requiring appFactory
}); // end zaz.use

zaz.use(function appGalleryBuilderFinalLayer(pkg){

    "use strict";

    var console = pkg.console,
        require = pkg.require,
        define = pkg.define;

    pkg.watch("app.galleryBase", function(Gb){
        var PRIVATE = {}, contador = 0, lastId = 0;

        PRIVATE.countChanges = pkg.utils.make.debounce(function(data){
            console.log('@@@####### na ext', data);

            if(lastId !== data){
                console.log("ids diferentes",lastId, data);
                contador = contador + 1;
                console.log("atulizei contador",contador);
            } else {
                console.log("ids iguais",lastId, data);
            }

            lastId = data;
            console.log("quantidade de imagens vistas", contador);
            if(contador%4===0){
                alert("hora de refresh de publicidade");
            }

        });


        PRIVATE.refreshAds = pkg.utils.make.debounce(function(data){
            console.log('@@@####### refresh Ads');
        });

        Gb.extend({
            name: "appGalleryBuilderFinalLayer",
            version: "1.0.0",
            target: "main",
            main: {
                "alt":"teste"
            },
            setup: function(dependencies, instances){
                console.log("Estou no setup da extensão", dependencies, instances);

                Gb.at('instanced', function(inst){
                    console.log("Estou na extensão");
                    inst.on("changePhoto", PRIVATE.countChanges);
                    console.log("Estou na extensão 2");
                    inst.on("endOfGallery",  PRIVATE.refreshAds);
                    console.log("Estou na extensão 3");

                    // this.on("refresh", function(){})
                });
            }
        });

        // pkg.watchFor("app.galleryBase", function(data){

        //     console.log("watchFor", arguments);

        // });
    });
});

// zaz.use(function appGalleryBuilderWithThumbs(pkg){

//     "use strict";

//     var console = pkg.console,
//         require = pkg.require,
//         define = pkg.define;

//     pkg.watch("app.galleryBase", function(Gb){

//         Gb.extend({
//             name: "thumbs",
//             version: "1.0.0",
//             status: "disabled",
//             target: "top",
//             setup: function(a, b, c){
//                 console.log("Isso?", Gb);
//                 Gb.at('instanced', function(inst){
//                     // debugger; // jshint ignore:line

//                     inst.next("from extension");
//                     // alert('extensão pegou a instancia');
//                 });
//             }
//         });

//         pkg.watchFor("app.galleryBase", function(data){

//             console.log("watchFor", arguments);

//         });
//     });
// });
