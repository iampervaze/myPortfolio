import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';

const decls = [EditorComponent];
const impts = [FormsModule, NgxEditorModule, HttpClientModule];
const expts = [EditorComponent];

@NgModule({
  declarations: decls,
  imports: impts,
  exports: expts
})
export class FeaturesModule { }
