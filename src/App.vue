<template>
  <div id="app"> 	
    <router-view/>
  </div>
</template>

<script>
//import JiaoCheng from './pages/jiaocheng.vue'

export default {
  name: 'app',
	
}
</script>

<style>
#app{
	text-align: center;

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f8f8f8;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

.el-collapse-item__arrow,.el-icon-arrow-right{
	    line-height: 3;
	    vertical-align: baseline;
	    display: inline-block;
}
.el-collapse-item__header{
	  border-radius: 6px;
		box-shadow: 0 0 3px #D0D0D0;
}
 .el-collapse-item__header{
    	height: 48px;
    line-height: 48px;
    color: #2d2f33;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    -webkit-transition: border-bottom-color .3s;
    transition: border-bottom-color .3s;
    outline: 0;
    text-align: left;
    text-indent: 15px;
    }
    .el-collapse-item__content{
    	border-radius: 6px;
		  box-shadow: 0 0 3px #D0D0D0;
    }
   .el-collapse-item__header{
   	height: 48px;
    line-height: 48px;
    color: #2d2f33;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    -webkit-transition: border-bottom-color .3s;
    transition: border-bottom-color .3s;
    outline: 0;
    margin-bottom: 11px;
   }

</style>
