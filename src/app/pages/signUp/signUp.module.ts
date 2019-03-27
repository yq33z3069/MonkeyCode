import { SignUpComponent } from './signUp.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material'

import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { SignUpService } from './signUp.service'

import { LodingModule } from '../../components/loding/loding.module'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    HeaderModule,
    FooterModule,
    CommonModule,
    FormsModule,
    LodingModule
  ],
  providers: [
    SignUpService
  ]
})
export class SignUpModule {}
