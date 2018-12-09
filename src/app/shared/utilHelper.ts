import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilHelper {

  // BASE URL
  // BASED_URL = 'http://qltrieu.com:8880/api';
   BASED_URL = 'http://localhost:8880/api';

  // BASED URI PDF
  BASED_URI_PDF = '../../assets/Reports/';


  // Manga Type
  SINGLE_CHAP = 'SINGLE_CHAP';
  MULTI_CHAP = 'MULTI_CHAP';

  // TYPE API
  GET_PAGES_FROM_CHAPTER = 0;
  GET_PAGES = 1;

  // Source
  SOURCE_HTBOX = '0';
  SOURCE_HTMS = '1';
  SOURCE_HT2READ = '2';
  SOURCE_HTBOX_STRING = 'HTBOX';
  SOURCE_HTMS_STRING = 'HTMS';
  SOURCE_HT2READ_STRING = 'HT2READ';

  // Image Placeholder
  IMG_PLACEHOLDER = '../../assets/imageloading.png';

  // Number of mangas per page
  MANGAS_PER_PAGE = 20;

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  convertSourceToString(source) {
    if (source === this.SOURCE_HT2READ) {
      return this.SOURCE_HT2READ_STRING;
    } else if (source === this.SOURCE_HTBOX) {
      return this.SOURCE_HTBOX_STRING;
    } else {
      return this.SOURCE_HTMS_STRING;
    }
  }

  convertStringToSource(sourceString) {
    if (sourceString === this.SOURCE_HT2READ_STRING) {
      return this.SOURCE_HT2READ;
    } else if (sourceString === this.SOURCE_HTBOX_STRING) {
      return this.SOURCE_HTBOX;
    } else {
      return this.SOURCE_HTMS;
    }
  }
}
