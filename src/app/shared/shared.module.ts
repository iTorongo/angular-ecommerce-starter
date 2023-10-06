import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroSectionComponent } from './components/';
import { ButtonComponent } from '../standalone/components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    ButtonComponent,
  ],
  exports: [HeroSectionComponent],
})
export class SharedModule {}
