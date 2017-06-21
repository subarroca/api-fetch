import { HttpRequest } from './http-request';
import { highlightBlock, configure } from 'highlight.js';


export class RequestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.format = 'json';

    this.formatSelector = document.getElementsByName('format')[0];
    this.responseDetail = document.getElementById('response-detail');
    this.responseContent = document.getElementById('response-content');
    this.requestUrl = document.getElementById('request-url');

    configure({ languages: ['json', 'xml', 'html'] });

    this.formatSelector.addEventListener('change', event => this.onFormatChange(event.target.value));

    this.onFormatChange('json');
  }

  getUrl(format) {
    return `${this.baseUrl}.${format}`
  }

  onFormatChange(format) {
    this.format = format;
    this.loadUrl(this.getUrl(this.format));
  }

  loadUrl(url) {
    this.requestUrl.innerHTML = url;
    this.responseContent.innerHTML = '';
    this.responseDetail.innerHTML = 'loading';

    HttpRequest
      .get(url)
      .then(
      response => this.showResponse(response),
      error => this.showResponse(error)
      );
  }

  showResponse(response) {
    console.log(response);

    this.responseDetail.innerHTML = `
      HTTP: ${response.status} ${response.statusText}
      Timeout: ${response.timeout}`;

    // it's text instead of html because of xml
    this.responseContent.innerText = response.response;
    this.responseContent.className = this.format === 'error' ? 'html' : this.format;

    highlightBlock(this.responseContent);
  }
}