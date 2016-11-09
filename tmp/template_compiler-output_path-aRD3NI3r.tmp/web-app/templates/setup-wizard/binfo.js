export default Ember.HTMLBars.template((function() {
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
          "line": 52,
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
      dom.setAttribute(el1,"id","businessinfo");
      dom.setAttribute(el1,"class","tabcontainer active");
      var el2 = dom.createTextNode("\n\n            ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","stepstitle");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","number boxsize fl");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","name boxsize dis-inbl");
      var el4 = dom.createTextNode("Business Info\n              ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","caption dis-block");
      var el5 = dom.createTextNode("Fill your basic business details.  You can fill the advanced details in setup page later.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n            ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","setup-container boxsize");
      var el3 = dom.createTextNode("\n     ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","forms over");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","labelname dispinl fl");
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
      dom.setAttribute(el4,"class","inputbox dispinl fl");
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","clearfix");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n              ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","forms over");
      var el4 = dom.createTextNode("\n                  ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","labelname dispinl fl");
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
      dom.setAttribute(el4,"class","inputbox url dispinl fl");
      var el5 = dom.createTextNode("\n\n                      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"placeholder","");
      dom.setAttribute(el5,"class","txt-input-url");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                  ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","clearfix");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                 ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                 ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","forms over");
      var el4 = dom.createTextNode("\n                    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","labelname dispinl fl");
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
      dom.setAttribute(el4,"class","inputbox dispinl fl");
      var el5 = dom.createTextNode("\n\n                           ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"placeholder","");
      dom.setAttribute(el5,"class","txt-input");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","clearfix");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","forms over");
      var el4 = dom.createTextNode("\n                       ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","labelname dispinl fl");
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
      dom.setAttribute(el4,"class","inputbox-number dispinl fl");
      var el5 = dom.createTextNode("\n\n                          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"placeholder","");
      dom.setAttribute(el5,"class","txt-input");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n                         ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                         ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","clearfix");
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
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 3]);
      var element1 = dom.childAt(element0, [3, 3, 1]);
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]),1,1);
      morphs[1] = dom.createAttrMorph(element1, 'value');
      return morphs;
    },
    statements: [
      ["inline","input",[],["key-up","urlGenerate","type","text","placeholder","","class","txt-input","value",["subexpr","@mut",[["get","bname",["loc",[null,[14,95],[14,100]]],0,0,0,0]],[],[],0,0]],["loc",[null,[14,15],[14,103]]],0,0],
      ["attribute","value",["get","bname",["loc",[null,[24,87],[24,92]]],0,0,0,0],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));