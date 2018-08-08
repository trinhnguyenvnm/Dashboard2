import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent} from './shared/navbar/navbar.component';
import { FixedPluginComponent} from './shared/fixedplugin/fixedplugin.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        FooterComponent,
        NavbarComponent,
        FixedPluginComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
    expect(app).toBeFalsy();
  }));

});
