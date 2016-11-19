export const MockData = {
  nodes: [{
    selected: false,
    name: "Parent",
    nodes: [{
      selected: false,
      name: "Child one"
    },{
      selected: false,
      name: "Child two"
    }]
  },{
    selected: false,
    name: "Parent 2",
    nodes: [{
      selected: false,
      name: "Child one",
      nodes: [{
        selected: false,
        name: "Inner child 1"
      }]
    },{
      selected: false,
      name: "Child two"
    }]
  }]
};