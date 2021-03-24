<template>
  <div id="preview" class="shadow w-full bg-card">
    <div class="h-full flex items-center justify-center">
      <iframe id="previewIframe" :srcDoc="srcDoc" class="w-full h-full bg-white" title="output" sandbox="allow-scripts allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-top-navigation-by-user-activation"
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
      console.log(this.js);
      let srcDocContent = `<html><body>${this.html}</body>`;
      srcDocContent += `<style>${this.css}</style>`;
      // eslint-disable-next-line
      srcDocContent += `<script>${this.js}<\/script>`;
      srcDocContent += '</html>';
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
      this.updateSrcDoc();
    },
    css: function cssWatch() {
      console.log('CSS changed');
      this.updateSrcDoc();
    },
    js: function jsWatch() {
      console.log('JS changed');
      this.updateSrcDoc();
    },
  },
};
</script>

<style scoped>

</style>
