(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{561:function(t,i,e){},659:function(t,i,e){"use strict";e(561)},734:function(t,i,e){"use strict";e.r(i);e(68),e(69);var n=e(658),o=e.n(n),r={name:"editor",props:["editContent","verifyWord"],data:function(){return{serviceUrl:"",editor:null,editorContent:"",editorTxt:"",judgeWord:[]}},watch:{editContent:{handler:function(t){var i=this;t?this.$nextTick((function(){i.editor.txt.html(t)})):this.$nextTick((function(){i.editor.txt.html("")}))},immediate:!0}},mounted:function(){this.initEditor()},methods:{initEditor:function(){var t=this;this.editor=new o.a(this.$refs.editor),this.editor.config.zIndex=1,this.editor.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","justify","quote","emoticon","image","video","table","code","splitLine","undo","redo"],this.editor.config.uploadImgMaxLength=10,this.editor.config.customUploadImg=function(i,e){i[0].size>5242880?t.$message.warning("图片大小限制为5M"):i.length>10?t.$message.warning("一次上传最多不超过10张图片"):i.forEach((function(t){var i=new FormData;i.append("file",t),i.append("fileType","1")}))},this.editor.config.customUploadVideo=function(t,i){t.forEach((function(t){var i=new FormData;i.append("file",t),i.append("fileType","2")}))},this.editor.config.onchange=function(i,e){t.$emit("input",i)},this.editor.config.onchangeTimeout=1e3,this.editor.create()}},beforeDestroy:function(){this.editor.txt.clear(),this.editor=null}},d=(e(659),e(3)),a=Object(d.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{ref:"editor",staticClass:"editor"})])}),[],!1,null,"750bc759",null);i.default=a.exports}}]);