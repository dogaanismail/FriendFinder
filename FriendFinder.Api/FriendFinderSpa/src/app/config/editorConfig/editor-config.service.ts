import { Injectable } from "@angular/core";

@Injectable()
export class EditorConfigService {
  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "50px",
    "width": "500px",
    "minWidth": "100%",
    "translate": "yes",
    "enableToolbar": false,
    "showToolbar": false,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
  };

  editorConfigForComment = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "50px",
    "width": "450px",
    "minWidth": "100%",
    "translate": "yes",
    "enableToolbar": false,
    "showToolbar": false,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
  }
}
