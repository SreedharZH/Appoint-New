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
          "line": 42,
          "column": 0
        }
      },
      "moduleName": "web-app/templates/setup-wizard/setupwizard.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n       ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container pos-abs");
      var el2 = dom.createTextNode("\n         ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-left dis-inbl fl boxsize");
      var el3 = dom.createTextNode("\n         ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","logo");
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","javascript:void(0);");
      dom.setAttribute(el4,"class","dis-inbl");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","logoimg dis-inbl");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","logoname dis-inbl");
      var el6 = dom.createTextNode(" Appointment");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n         ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","setup-title over");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","welcomenotes");
      var el5 = dom.createTextNode("\n              ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","welcome-name");
      var el6 = dom.createTextNode("Welcome ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","user-name");
      var el7 = dom.createTextNode("Wilson!");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                   ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","welcome-name");
      var el6 = dom.createTextNode("\n                      To start getting appointments,\n                   ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n           ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h2");
      dom.setAttribute(el5,"class","setup-name");
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","grd1");
      var el7 = dom.createTextNode("Setup your");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","grd2");
      var el7 = dom.createTextNode("business");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","bottomNavigate");
      var el5 = dom.createTextNode("\n                   ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","steplinks");
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"data-tab","businessinfo");
      dom.setAttribute(el6,"class","active");
      var el7 = dom.createTextNode("Business Info");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"data-tab","businesshours");
      var el7 = dom.createTextNode("Business Hours");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"data-tab","addservice");
      var el7 = dom.createTextNode("Add Services");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                      ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"data-tab","addstaff");
      var el7 = dom.createTextNode("Add Staffs");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                   ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                 ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                   ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","zlogo");
      var el5 = dom.createElement("img");
      dom.setAttribute(el5,"src","/images/zlogo.png");
      dom.setAttribute(el5,"alt","zohologo");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n         ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n       ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n           ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-middle dis-inbl fl boxsize");
      var el3 = dom.createTextNode("\n                 ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                 ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","steps");
      var el4 = dom.createTextNode("\n                      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Step 1 of 4");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                  ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n                    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","btn-nxt boxsize");
      var el4 = dom.createTextNode("\n                      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"class","btnstyle dis-inbl");
      var el5 = dom.createTextNode(" Next ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n           ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n       ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [1]);
      var element1 = dom.childAt(element0, [1, 3, 3, 1]);
      var element2 = dom.childAt(element0, [3]);
      var element3 = dom.childAt(element2, [11]);
      var morphs = new Array(7);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createMorphAt(element2,3,3);
      morphs[3] = dom.createMorphAt(element2,5,5);
      morphs[4] = dom.createMorphAt(element2,7,7);
      morphs[5] = dom.createElementMorph(element3);
      morphs[6] = dom.createMorphAt(fragment,3,3,contextualElement);
      return morphs;
    },
    statements: [
      ["element","action",["pressed"],[],["loc",[null,[14,41],[14,61]]],0,0],
      ["inline","partial",["setup-wizard/binfo"],[],["loc",[null,[25,17],[25,49]]],0,0],
      ["inline","partial",["setup-wizard/bhours"],[],["loc",[null,[26,17],[26,50]]],0,0],
      ["inline","partial",["setup-wizard/service"],[],["loc",[null,[27,18],[27,52]]],0,0],
      ["inline","partial",["setup-wizard/staff"],[],["loc",[null,[28,18],[28,50]]],0,0],
      ["element","action",["nextStep"],[],["loc",[null,[33,25],[33,46]]],0,0],
      ["content","outlet",["loc",[null,[41,0],[41,10]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));