<template>
  <div id="preview" class="shadow w-full bg-card">
    <div class="h-full flex items-center justify-center">
      <iframe id="previewIframe" :srcDoc="srcDoc" title="output" sandbox="allow-scripts"
      frameBorder="0" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodePreviewComponent',
  props: {
    html: String,
    css: String,
    js: String,
  },
  data() {
    return {
      selectedTab: 'html',
      cursor: {
        line: 1,
        column: 1,
      },
      modes: [
        { name: 'HTML', mime: 'text/html' },
        { name: 'CSS', mime: 'text/css' },
        { name: 'JavaScript', mime: 'text/javascript' },
      ],
      srcDoc: this.html,
    };
  },
  methods: {
    updateSrcDoc: function u() {
      let srcDocContent = `<html><head><link rel="stylesheet" type="text/css" href="${this.css}" /><script src="${this.js}"><//script></head>`;
      srcDocContent += `<body>${this.html}</body>`;
      srcDocContent += `<script>${this.js}<//script></html>`;
      console.log(typeof this.srcDoc);
      this.srcDoc = srcDocContent;
      console.log(typeof this.srcDoc);
      this.setSrcDoc();
    },
    setSrcDoc: function s() {
      const iframe = document.getElementById('previewIframe');
      iframe.srcdoc = this.srcDoc;
    },
  },
  mounted() {
    this.setSrcDoc();
  },
  watch: {
    html: function htmlWatch() {
      console.log('HTML changed');
      console.log(this.html);
      this.updateSrcDoc();
    },
    css: function cssWatch() {
      console.log('CSS changed');
      console.log(this.css);
      this.updateSrcDoc();
    },
    js: function jsWatch() {
      console.log('JS changed');
      console.log(this.js);
      this.updateSrcDoc();
    },
  },
};
</script>

<style scoped>

</style>
