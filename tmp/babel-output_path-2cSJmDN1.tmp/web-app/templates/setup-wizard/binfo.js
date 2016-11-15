define("web-app/templates/setup-wizard/binfo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "web-app/templates/setup-wizard/binfo.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "businessinfo");
        dom.setAttribute(el1, "class", "tabcontainer active");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "stepstitle");
        var el3 = dom.createTextNode("\n   ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "number boxsize");
        var el4 = dom.createTextNode("1");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n   ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "name boxsize dispinl");
        var el4 = dom.createTextNode("Business Info");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "setup-container boxsize");
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "forms over");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "labelname dispinl fl");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Business Name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n         ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "inputbox dispinl fl");
        var el5 = dom.createTextNode("\n               ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "placeholder", "Zoho appointment");
        dom.setAttribute(el5, "class", "txt-input");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n              ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "forms over");
        var el4 = dom.createTextNode("\n                  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "labelname dispinl fl");
        var el5 = dom.createTextNode("\n                     ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Business URL");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "inputbox dispinl fl");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "urlname dispinl fl");
        var el6 = dom.createTextNode("http://zoho.com/appointment/");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "placeholder", "");
        dom.setAttribute(el5, "class", "txt-input-url");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                 ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "forms over");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "labelname dispinl fl");
        var el5 = dom.createTextNode("\n                        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Email");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "inputbox dispinl fl");
        var el5 = dom.createTextNode("\n\n                           ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "placeholder", "srivigneshuix123@zohocorp.com");
        dom.setAttribute(el5, "class", "txt-input");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "forms over");
        var el4 = dom.createTextNode("\n                       ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "labelname dispinl fl");
        var el5 = dom.createTextNode("\n                           ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Phone");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                       ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "inputbox-number dispinl fl");
        var el5 = dom.createTextNode("\n\n                              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "placeholder", "555 - 233 2425");
        dom.setAttribute(el5, "class", "txt-input");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                         ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                       ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n   ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});