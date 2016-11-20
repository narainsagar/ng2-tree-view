import {
  Component,
  Input,
  ViewChild,
  Output,
  ElementRef,
  OnInit,
  EventEmitter,
  Renderer
} from "@angular/core";
import { TreeViewService } from "./tree-view.service";

let styles: string = `
.tree {
  color: #000;
}
.tree a i {
  color: #000;
}
.tree ol {
  font-size: 14px;
  font-family: arial;
  border-left: 0px;
}

.tree ol li {
  -webkit-padding-start: 10px;
  -moz-padding-start: 10px;
  -o-padding-start: 10px;
}

.tree ol li.showLine {
  border-left: 1px dotted #ccc;
}

.tree ol li.hideLine {
  border-left: 0px;
}

.tree ol {
  list-style-type: none;
  -webkit-padding-start: 0px;
  -moz-padding-start: 0px;
  -o-padding-start: 0px;
}

.tree a {
  cursor: pointer;
}
.tree .selected {
  color: #f00;
}
.tree ol li span {
  cursor: pointer;
}
span, a, div, ol, li {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select:none;
  user-select:none;
  -o-user-select:none;
}
`;

@Component({
  selector: "tree-view",
  styles: [styles],
  template: `
      <div class="{{customClass}}">
        <ol *ngIf="nodes.length > 0">
          <li *ngFor="let node of nodes; let i = index" [class.hideLine]="!amIChild" [class.showLine]="amIChild">
            <a (click)="node.toggled=!node.toggled" class="{{node.toggled ? node.activeClass + ' toggle' : node.class}}">
              <i aria-hidden="true"></i>
            </a>
            <span (click)="node.toggled=!node.toggled" [class.selected]="node.id === selectedNode.id" (click)="selectNode(node)">{{node.name}}</span>
            <tree-view (onNodeSelected)="selNode($event)" [amIChild]="true"  *ngIf="node.nodes && node.toggled" [nodes]="node.nodes"></tree-view>
          </li>
        </ol>
      </div>
  `
})

export class TreeViewComponent implements OnInit {
  @Input() nodes;
  @Input() amIChild: boolean;
  @Input() customClass: any;
  @Output() onNodeSelected = new EventEmitter<Object>();
  selectedNode: any = {};
  nodeCounter: number = 1;
  subscription: any;
  constructor(private service: TreeViewService) { }

  ngOnInit(): void {
    this.customClass = this.customClass ? this.customClass : "tree";
    this.subscription = this.service.getNodeEmitter().subscribe(node => {
      this.nodeSelected(node);
    });
    if ((this.amIChild === null) || (this.amIChild === undefined)) {
      this.amIChild = false;
    }
    if (!this.amIChild) {
      this.addToggleToArray(this.nodes);
    }
  }

  nodeSelected(node?: any): void {
    this.selectedNode = node;
  }

  selectNode(node): void {
    this.selectedNode = node;
    this.service.emitNodeChanged(node);
    this.onNodeSelected.emit(node);
  }

  selNode(node): void {
    this.onNodeSelected.emit(node);
  }

  addToggleToArray(param): any {
    let vm = this;
    param.forEach(function(o){
      o.toggled = o.toggled ? o.toggled : false;
      o.id = vm.nodeCounter++;
      if (o.nodes) {
        vm.addToggleToArray(o.nodes);
      }
    });
  }
}