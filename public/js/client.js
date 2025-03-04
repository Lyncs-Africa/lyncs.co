window.LyncsWidget = function () {
  return {
    key: null,
    path: null,
    iframe: null,
    // baseurl: "https://lyncs-web-widget.netlify.app",
    baseurl: "http://localhost:5174",
    defaultOverflow: '',
    listener: null,
    data: null,
    callbacks: {
      ready: null,
      completed: null,
      cancel: null,
      close: null,
    },
    open: function ({key, path, onReady, data}) {
      this.disableBodyScroll(true);
      this.setupListener();
      this.launchIframe({key, path});
      const openEvent = new CustomEvent('lyncsWidgetOpened');
      window.dispatchEvent(openEvent);
      this.callbacks.ready = onReady;
      this.data = data;
      return this;
    },
    close: function () {
      if (this.iframe) this.iframe.remove();
      this.clearListener();
      this.enableBodyScroll();
      const closeEvent = new CustomEvent('lyncsWidgetClosed');
      window.dispatchEvent(closeEvent);
    },
    jsonToBase64: function (obj) {
      return btoa(encodeURIComponent(JSON.stringify(obj)));
    },
    launchIframe: function ({key, path}) {
      let link = this.baseurl.concat(`/${key}`);
      if (path) {
        link = link.concat(path)
      }
      const url = new URL(link);
      const iframe = document.createElement("IFRAME");
      iframe.setAttribute("src", url.href);
      iframe.setAttribute("allow", "geolocation");
      iframe.setAttribute('allow', 'clipboard-write');
      const style = {
        zIndex: '999999',
        display: 'block',
        background: 'rgba(0, 0, 0, 0.004)',
        border: '0px none transparent',
        overflow: 'hidden',
        visibility: 'visible',
        margin: '0px',
        padding: '0px',
        position: 'fixed',
        right: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        transition: "right 0.5s ease-in-out"
      };
      Object.assign(iframe.style, style);
      iframe.marginwidth = "0";
      iframe.marginheight = "0";
      iframe.frameBorder = "0";
      iframe.vspace = "0";
      iframe.id = 'lyncs-widget';
      iframe.allowtransparency = "true";
      this.iframe = iframe;
      document.body.appendChild(iframe);
    },
    setupListener: function () {
      this.listener = this.handleMessage.bind(this);
      window.addEventListener("message", this.listener);
    },
    clearListener: function () {
      window.removeEventListener('message', this.listener);
    },
    handleMessage: function (e) {
      const {id, data} = e.data;
      if (id === 'cclan-cancel') {
        if (this.callbacks.cancel) this.callbacks.cancel();
        this.close();
      } else if (id === 'lyncs-frame-loaded') {
        this.postMessage({id: 'lyncs-data', payload: this.data});
        if (this.callbacks.ready) this.callbacks.ready();
      } else if (id === 'cclan-completed') {
        if (this.callbacks.completed) this.callbacks.completed(data);
      } else if (id === 'cclan-offer') {
        if (this.callbacks.offer) this.callbacks.offer(data);
      } else if (id === 'cclan-offer-selected') {
        if (this.callbacks.offerSelected) this.callbacks.offerSelected(data);
      } else if (id === 'cclan-close') {
        if (this.callbacks.close) this.callbacks.close(data);
        this.close();
      }
    },
    postMessage(e) {
      this.iframe.contentWindow.postMessage(e, "*");
    },
    enableBodyScroll() {
      document.documentElement.style.overflow = this.defaultOverflow;
    },
    disableBodyScroll() {
      this.defaultOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';

    }
  };
}();
