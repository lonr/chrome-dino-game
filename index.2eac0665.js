var errorPageController;const HIDDEN_CLASS="hidden",isSubFrame=!1;function updateIconClass(n){const e=document.querySelector("#main-frame-error .icon");e.classList.contains(n)||(e.className="icon "+n)}function onDocumentLoadOrUpdate(){const n=loadTimeData.valueExists("iconClass")&&loadTimeData.getValue("iconClass");updateIconClass(n),"icon-offline"===n&&(document.documentElement.classList.add("offline"),new Runner(".interstitial-wrapper"))}function onDocumentLoad(){onDocumentLoadOrUpdate()}document.addEventListener("DOMContentLoaded",onDocumentLoad);
//# sourceMappingURL=index.2eac0665.js.map