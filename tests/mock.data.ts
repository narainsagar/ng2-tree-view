export const MockData = {
  nodes: [{
    selected: false,
    name: "Parent",
    class: "fa fa-folder",
    activeClass: "fa fa-folder-open",
    nodes: [{
      selected: false,
      name: "Child one",
      class: "fa fa-file",
      activeClass: "fa fa-file",
    },{
      selected: false,
      name: "Child two",
      class: "fa fa-file",
      activeClass: "fa fa-file",
    }]
  },{
    selected: false,
    name: "Parent 2",
    class: "fa fa-folder",
    activeClass: "fa fa-folder-open",
    nodes: [{
      selected: false,
      name: "Child one",
      class: "fa fa-folder",
      activeClass: "fa fa-folder-open",
      nodes: [{
        selected: false,
        name: "Inner child 1",
        class: "fa fa-file",
        activeClass: "fa fa-file",
      }]
    },{
      selected: false,
      name: "Child two",
      class: "fa fa-file",
      activeClass: "fa fa-file",
    }]
  }]
};