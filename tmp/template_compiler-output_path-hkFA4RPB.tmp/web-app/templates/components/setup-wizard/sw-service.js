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
          "line": 78,
          "column": 9
        }
      },
      "moduleName": "web-app/templates/components/setup-wizard/sw-service.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","addservice");
      dom.setAttribute(el1,"class","tabcontainer");
      var el2 = dom.createTextNode("\n\n         ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","stepstitle slide-up-slow");
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","number boxsize bservice");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","name boxsize dis-inbl");
      var el4 = dom.createTextNode("Add Service\n  ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","caption dis-block");
      var el5 = dom.createTextNode("Fill your basic business details.  You can fill the advanced details in setup page later.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n  ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n         ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","setup-container boxsize slide-up");
      dom.setAttribute(el2,"id","setup-container");
      var el3 = dom.createTextNode("\n           ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","tables hide-imp service-list");
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","tablecell");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","tabheading");
      var el6 = dom.createTextNode("Service Name ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","tablecell");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","tabheading");
      var el6 = dom.createTextNode("Duration");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","mins");
      var el7 = dom.createTextNode("(mins)");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","tablecell");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","tabheading");
      var el6 = dom.createTextNode("Cost");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","mins text-upper");
      var el7 = dom.createTextNode("(INR)");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n           ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n           ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","list-pages");
      var el4 = dom.createTextNode("\n           ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n           ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","table-row");
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","javascript:void(0);");
      dom.setAttribute(el4,"class","addplus hide-imp");
      var el5 = dom.createTextNode("+ Add Service");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n           ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n           ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","addnew-container mt20 pad-30");
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class"," mb20 dis-inbl");
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","");
      var el6 = dom.createTextNode("\n                 ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","title-name");
      var el7 = dom.createTextNode("\n                      + New Service\n                 ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n               ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","staffscol no-border-bottom boxsize");
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","labelname dis-inbl fl");
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Service Name");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","inputbox dis-inbl fl");
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("		<input type=\"text\" placeholder=\"\" id=\"serviceName\" class=\"txt-input\"/>		");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"placeholder","");
      dom.setAttribute(el6,"id","serviceName");
      dom.setAttribute(el6,"class","txt-input");
      dom.setAttribute(el6,"value","Haircut");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","clearfix");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","staffscol no-border-bottom boxsize");
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","labelname dis-inbl fl");
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Duration");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","inputbox dis-inbl fl");
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("		<input type=\"text\" placeholder=\"\" id=\"serTime\" class=\"txt-input width-30\"/>		");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"placeholder","");
      dom.setAttribute(el6,"id","serTime");
      dom.setAttribute(el6,"class","txt-input width-30");
      dom.setAttribute(el6,"value","30");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","pad-15 font12 dis-inbl");
      var el7 = dom.createTextNode("mins");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","clearfix");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","staffscol no-border-bottom boxsize");
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","labelname dis-inbl fl");
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Cost");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                  ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","inputbox dis-inbl fl");
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("		<input type=\"text\" placeholder=\"\" id=\"serCost\" class=\"txt-input width-30\"/>		");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"placeholder","");
      dom.setAttribute(el6,"id","serCost");
      dom.setAttribute(el6,"class","txt-input width-30");
      dom.setAttribute(el6,"value","100");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","pad-15 font12 dis-inbl");
      var el7 = dom.createTextNode("INR");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","clearfix");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","staffscol no-border-bottom boxsize");
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","labelname dis-inbl fl");
      var el6 = dom.createTextNode("\n                   ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n               ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n               ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","inputbox dis-inbl fl");
      var el6 = dom.createTextNode("\n                 ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","tab-row");
      var el7 = dom.createTextNode("\n                     ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("a");
      dom.setAttribute(el7,"href","javascript:void(0);");
      dom.setAttribute(el7,"class","addService dis-inbl boxsize");
      var el8 = dom.createTextNode(" Add Service");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                     ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("a");
      dom.setAttribute(el7,"href","javascript:void(0);");
      dom.setAttribute(el7,"class","cancelService boxsize hide-imp");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                 ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","clearfix");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n           ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n         ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n       ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 3]);
      var element1 = dom.childAt(element0, [5, 1]);
      var element2 = dom.childAt(element0, [7, 9, 3, 1]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var morphs = new Array(4);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createElementMorph(element3);
      morphs[2] = dom.createElementMorph(element4);
      morphs[3] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["element","action",["addAction"],[],["loc",[null,[19,68],[19,90]]],0,0],
      ["element","action",["addService"],[],["loc",[null,[68,87],[68,110]]],0,0],
      ["element","action",["cancelService"],[],["loc",[null,[69,91],[69,117]]],0,0],
      ["content","yield",["loc",[null,[78,0],[78,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));