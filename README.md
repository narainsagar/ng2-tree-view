# Navtive Ng2 Tree View

## ng2-tree-view [![npm version](https://badge.fury.io/js/ng2-tree-view.svg)](http://badge.fury.io/js/ng2-tree-view) [![npm downloads](https://img.shields.io/npm/dm/ng2-tree-view.svg)](https://npmjs.org/ng2-tree-view) [![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)

Follow me [![twitter](https://img.shields.io/twitter/follow/babarxm.svg?style=social&label=%20babarxm)](https://twitter.com/babarxm) to be notified about new releases.

## Quick start
`npm install ng2-tree-view --save`

## Usage

### Component inputs
  - `nodes` tree nodes list
  - `customClass` custom css class name to customize UI

### Events
  - `onNodeSelected` it fires after selecting any node; returns `object` of selected node.

## Style Guide

### Properties

#### Every node should have these properties.
  - `activeClass` is applied when node is toggled/selected.
  - `class` by default it is selected
  - `selected` should be false by default.
  
#### CSS Styling
  - Style tree view using custom class. Example is given below.

## Example

Angular2:
```angular2
    import { TreeViewModule } from "ng2-tree-view";
```

HTML:
```html
    <tree-view (onNodeSelected)="selectedNode($event)" [customClass]="'my-custom-class'" [nodes]="sampleNodes"></tree-view>
```

JavaScript:
```javascript
	@Component({
    selector: "demo-tree-view",
    template: `
      <tree-view (onNodeSelected)="selectedNode($event)" [customClass]="'my-custom-class'" [nodes]="sampleNodes"></tree-view>
    `
  })
  export class DemoComponent {
    sampleNodes: any;
    constructor() {
      this.sampleNodes = nodes: [{
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
      }];
    }

    selectedNode(node): void {
      console.log("Demo Node", node);
    }
  }
```

CSS:
```css
    .my-custom-class {
      color: #000;
    }
    .my-custom-class a i {
      color: #000;
    }
    .my-custom-class ol {
      font-size: 14px;
      font-family: arial;
      border-left: 0px;
    }

    .my-custom-class ol li {
      -webkit-padding-start: 10px;
      -moz-padding-start: 10px;
      -o-padding-start: 10px;
    }

    .my-custom-class ol li.showLine {
      border-left: 1px dotted #ccc;
    }

    .my-custom-class ol li.hideLine {
      border-left: 0px;
    }

    .my-custom-class ol {
      list-style-type: none;
      -webkit-padding-start: 0px;
      -moz-padding-start: 0px;
      -o-padding-start: 0px;
    }

    .my-custom-class a {
      cursor: pointer;
    }
    .my-custom-class .selected {
      color: #f00;
    }
    .my-custom-class ol li span {
      cursor: pointer;
    }
    span, a, div, ol, li {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select:none;
      user-select:none;
      -o-user-select:none;
    }
```

# Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/babarxm/ng2-tree-view/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.


### License

The MIT License (see the [LICENSE](https://github.com/babarxm/ng2-tree-view/blob/master/LICENSE) file for the full text)