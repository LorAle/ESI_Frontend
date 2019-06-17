'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">esi-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a4580ef79478e53fb298196f33eefaa4"' : 'data-target="#xs-components-links-module-AppModule-a4580ef79478e53fb298196f33eefaa4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a4580ef79478e53fb298196f33eefaa4"' :
                                            'id="xs-components-links-module-AppModule-a4580ef79478e53fb298196f33eefaa4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthentificationModule.html" data-type="entity-link">AuthentificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthentificationModule-66d3673d5dd2159dec13d1b2732e3790"' : 'data-target="#xs-components-links-module-AuthentificationModule-66d3673d5dd2159dec13d1b2732e3790"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthentificationModule-66d3673d5dd2159dec13d1b2732e3790"' :
                                            'id="xs-components-links-module-AuthentificationModule-66d3673d5dd2159dec13d1b2732e3790"' }>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthentificationRoutingModule.html" data-type="entity-link">AuthentificationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-781f713ba767734a0a5d3ea7f4ddf297"' : 'data-target="#xs-injectables-links-module-CoreModule-781f713ba767734a0a5d3ea7f4ddf297"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-781f713ba767734a0a5d3ea7f4ddf297"' :
                                        'id="xs-injectables-links-module-CoreModule-781f713ba767734a0a5d3ea7f4ddf297"' }>
                                        <li class="link">
                                            <a href="injectables/MawiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MawiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VeveService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VeveService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DispositionModule.html" data-type="entity-link">DispositionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DispositionModule-0635ea17e63412a638cd8e7fcc475656"' : 'data-target="#xs-components-links-module-DispositionModule-0635ea17e63412a638cd8e7fcc475656"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DispositionModule-0635ea17e63412a638cd8e7fcc475656"' :
                                            'id="xs-components-links-module-DispositionModule-0635ea17e63412a638cd8e7fcc475656"' }>
                                            <li class="link">
                                                <a href="components/DispositionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DispositionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StorageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StorageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DispositionRoutingModule.html" data-type="entity-link">DispositionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportingModule.html" data-type="entity-link">ReportingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportingModule-4bf0cf98c36399e573e2af02bc6d9dd5"' : 'data-target="#xs-components-links-module-ReportingModule-4bf0cf98c36399e573e2af02bc6d9dd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportingModule-4bf0cf98c36399e573e2af02bc6d9dd5"' :
                                            'id="xs-components-links-module-ReportingModule-4bf0cf98c36399e573e2af02bc6d9dd5"' }>
                                            <li class="link">
                                                <a href="components/KeyFiguresComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeyFiguresComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportingRoutingModule.html" data-type="entity-link">ReportingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VisualisationModule.html" data-type="entity-link">VisualisationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisualisationModule-e44b042b53ab45293e95934e63112111"' : 'data-target="#xs-components-links-module-VisualisationModule-e44b042b53ab45293e95934e63112111"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisualisationModule-e44b042b53ab45293e95934e63112111"' :
                                            'id="xs-components-links-module-VisualisationModule-e44b042b53ab45293e95934e63112111"' }>
                                            <li class="link">
                                                <a href="components/OrderPlanningComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderPlanningComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductionMonitoringComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductionMonitoringComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductionOrderDetailDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductionOrderDetailDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductionOrderOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductionOrderOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductionOrderTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductionOrderTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisualisationRoutingModule.html" data-type="entity-link">VisualisationRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DispositionComponent.html" data-type="entity-link">DispositionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/KeyFiguresComponent.html" data-type="entity-link">KeyFiguresComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderComponent.html" data-type="entity-link">OrderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderPlanningComponent.html" data-type="entity-link">OrderPlanningComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductionMonitoringComponent.html" data-type="entity-link">ProductionMonitoringComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductionOrderOverviewComponent.html" data-type="entity-link">ProductionOrderOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductionOrderTableComponent.html" data-type="entity-link">ProductionOrderTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StorageComponent.html" data-type="entity-link">StorageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserProfileComponent.html" data-type="entity-link">UserProfileComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ProductionOrderFormModel.html" data-type="entity-link">ProductionOrderFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductionOrderModel.html" data-type="entity-link">ProductionOrderModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductionStatusModel.html" data-type="entity-link">ProductionStatusModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MawiService.html" data-type="entity-link">MawiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductionService.html" data-type="entity-link">ProductionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VeveService.html" data-type="entity-link">VeveService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/CustomInterceptor.html" data-type="entity-link">CustomInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});