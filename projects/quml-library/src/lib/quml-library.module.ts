import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QumlLibraryComponent } from './quml-library.component';
import { McqComponent } from './mcq/mcq.component';
import { SaComponent } from './sa/sa.component';
import { PlayerComponent } from './player/player.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EndpageComponent } from './endpage/endpage.component';
import { HeaderComponent } from './header/header.component';
import { McqQuestionComponent } from './mcq-question/mcq-question.component';
import { PortraitHeaderComponent } from './portrait-header/portrait-header.component';
import { McqOptionComponent } from './mcq-option/mcq-option.component';
import { QumlPopupComponent } from './quml-popup/quml-popup.component';
import { McqImageOptionComponent } from './mcq-image-option/mcq-image-option.component';


@NgModule({
  declarations: [QumlLibraryComponent, McqComponent, HeaderComponent,
      SaComponent, PlayerComponent, EndpageComponent, McqQuestionComponent,
      PortraitHeaderComponent, McqOptionComponent, QumlPopupComponent, McqImageOptionComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [QumlLibraryComponent, McqComponent, SaComponent, PlayerComponent, HeaderComponent,PortraitHeaderComponent,
    McqOptionComponent,McqImageOptionComponent]
})
export class QumlLibraryModule { }
