import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ViewContainerRef,
  NgModuleRef,
  Injector,
  NgModuleFactoryLoader,
  Inject,
  NgModuleFactory,
  OnChanges,
  SimpleChanges,
  Type
} from '@angular/core';

type ModuleWithDeclarations = Type<any> & { declarations: Type<any>[] };
type ComponentTypeWithId = Type<any> & { componentType: string };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy, OnChanges {
  @Input('loadModule') componentInfo: LazyComponentItem;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentInfo = changes.componentInfo.currentValue;
    if (!this.componentInfo) {
      return;
    }

    this.loader
      .load(this.componentInfo.moduleUri)
      .then((moduleFactory: NgModuleFactory<any>) => {

        this.moduleRef = moduleFactory.create(this.injector);

        const components = (moduleFactory.moduleType as ModuleWithDeclarations).declarations;
        const componentToSearch = this.componentInfo.componentName.toLowerCase();
        const componentTypeToInject = components.find(component => {
          
          let currentComponent = (component as ComponentTypeWithId);
          let isMatched = (currentComponent.componentType || "").toLowerCase() === componentToSearch;
          return isMatched;
        });

        if (componentTypeToInject) {
          const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(componentTypeToInject);
          this.vcr.clear();
          this.vcr.createComponent(factory);
        }
      });
  }

  ngOnDestroy(): void {
    this.moduleRef && this.moduleRef.destroy();
  }
}
