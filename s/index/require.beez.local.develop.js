// beez generate.
requirejs.config({
    "baseUrl": "/m/tutorial/s",
    "paths": {
        "underscore": "/m/tutorial/vendor/underscore",
        "zepto": "/m/tutorial/vendor/zepto",
        "backbone": "/m/tutorial/vendor/backbone",
        "handlebars": "/m/tutorial/vendor/handlebars.runtime",
        "beez": "/m/tutorial/vendor/beez"
    },
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "zepto"
            ],
            "exports": "Backbone"
        },
        "zepto": {
            "exports": "$"
        },
        "underscore": {
            "exports": "_"
        },
        "handlebars": {
            "exports": "Handlebars"
        }
    },
    "config": {
        "beez.core": {
            "url": {
                "api": "https://api.github.com",
                "base": "http://0.0.0.0:1109/m/tutorial/s",
                "vendor": "http://0.0.0.0:1109/m/tutorial/vendor"
            },
            "defines": {
                "globals": {
                    "DEBUG": true
                }
            },
            "logging": {
                "level": "DEBUG",
                "separator": " "
            },
            "router": {
                "*default": {
                    "route": "*default",
                    "name": "index",
                    "require": "index/index",
                    "xpath": "/@/index"
                },
                "search": {
                    "route": "search",
                    "name": "searchIndex",
                    "require": "search/index",
                    "xpath": "/@/search"
                }
            }
        }
    }
});

/**
 * Entry-point the process
 */
require(['beez'], function (beez, Controller) {
    beez.manager.setup();
    beez.i18n.setup();

    require(['index/index'], function (Controller) {

        beez.manager.c.async().create('index', Controller).then(function (controller) {
            controller.setup(function () {
                var mr = beez.manager.r.setup();
                beez.history.start();

                controller.index(); // start!!!
            });
        }).end();
    });
});
