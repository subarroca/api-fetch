export class HttpRequest {
  static get(url) {
    return HttpRequest.loadUrl(url, 'GET');
  }


  static loadUrl(url, method) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.addEventListener('load', () => resolve(req));
      req.addEventListener('error', () => reject(req));
      req.open(method, url);
      req.send();
    })
  }
}