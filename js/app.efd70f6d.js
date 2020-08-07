(function(t){function l(l){for(var o,c,e=l[0],u=l[1],h=l[2],s=0,a=[];s<e.length;s++)c=e[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&a.push(n[c][0]),n[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);g&&g(l);while(a.length)a.shift()();return i.push.apply(i,h||[]),r()}function r(){for(var t,l=0;l<i.length;l++){for(var r=i[l],o=!0,e=1;e<r.length;e++){var u=r[e];0!==n[u]&&(o=!1)}o&&(i.splice(l--,1),t=c(c.s=r[0]))}return t}var o={},n={app:0},i=[];function c(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,l,r){c.o(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,l){if(1&l&&(t=c(t)),8&l)return t;if(4&l&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&l&&"string"!=typeof t)for(var o in t)c.d(r,o,function(l){return t[l]}.bind(null,o));return r},c.n=function(t){var l=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(l,"a",l),l},c.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)},c.p="/repo-card-vue/";var e=window["webpackJsonp"]=window["webpackJsonp"]||[],u=e.push.bind(e);e.push=l,e=e.slice();for(var h=0;h<e.length;h++)l(e[h]);var g=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,l,r){t.exports=r("56d7")},"034f":function(t,l,r){"use strict";var o=r("85ec"),n=r.n(o);n.a},"2cb4":function(t,l,r){},"56d7":function(t,l,r){"use strict";r.r(l);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,l=t.$createElement,o=t._self._c||l;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),o("p",{staticStyle:{"text-align":"left"}},[t._v("Repo box generate with offline data")]),o("RepoCard",{attrs:{OfflineData:t.myRepoData}}),o("p",{staticStyle:{"text-align":"left"}},[t._v("Repo box generate with github online data")]),o("RepoCard",{attrs:{repo:t.repo}})],1)},i=[],c=function(){var t=this,l=t.$createElement,r=t._self._c||l;return t.loading?t._e():r("div",{staticClass:"cardBox"},[r("div",{staticClass:"boxHeader"},[r("svg",{staticClass:"repoIcon",attrs:{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}})]),r("span",{staticClass:"name"},[r("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:t.url}},[t._v(t._s(t.repoName))])])]),t.isFork?r("div",{staticClass:"forkFrom"},[t._v(" Forked from "),r("a",{staticClass:"forkFromUrl",attrs:{href:t.forkPath}},[t._v(t._s(t.forkName))])]):t._e(),r("div",{staticClass:"description"},[t._v(" "+t._s(t.description)+" ")]),r("div",{staticClass:"infoBox"},[t.lang?r("div",{staticClass:"langBox"},[r("span",{staticClass:"language",style:{backgroundColor:this.langColor[t.lang].color}}),r("span",[t._v(" "+t._s(t.lang))])]):t._e(),t.stars>0?r("div",{staticClass:"starsBox"},[r("svg",{attrs:{"aria-label":"stars",viewBox:"0 0 16 16",width:"16",height:"16",role:"img"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"}})]),t._v(" "),r("span",[t._v(t._s(t.stars))])]):t._e(),t.forks>0?r("div",{staticClass:"forksBox"},[r("svg",{attrs:{"aria-label":"fork",viewBox:"0 0 16 16",width:"16",height:"16",role:"img"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"}})]),t._v(" "),r("span",[t._v(t._s(t.forks))])]):t._e()])])},e=[],u=(r("a4d3"),r("e01a"),r("b0c0"),r("bc3a")),h=r.n(u),g={name:"RepoCard.vue",data:function(){return{url:"",repoName:"",isFork:!1,forkPath:"",forkName:"",description:"",lang:"",stars:0,forks:0,loading:!0,langColor:{"1C Enterprise":{color:"#814CCC",url:"https://github.com/trending?l=1C-Enterprise"},"4D":{color:null,url:"https://github.com/trending?l=4D"},ABAP:{color:"#E8274B",url:"https://github.com/trending?l=ABAP"},ActionScript:{color:"#882B0F",url:"https://github.com/trending?l=ActionScript"},Ada:{color:"#02f88c",url:"https://github.com/trending?l=Ada"},Agda:{color:"#315665",url:"https://github.com/trending?l=Agda"},"AGS Script":{color:"#B9D9FF",url:"https://github.com/trending?l=AGS-Script"},Alloy:{color:"#64C800",url:"https://github.com/trending?l=Alloy"},"Alpine Abuild":{color:null,url:"https://github.com/trending?l=Alpine-Abuild"},AMPL:{color:"#E6EFBB",url:"https://github.com/trending?l=AMPL"},AngelScript:{color:"#C7D7DC",url:"https://github.com/trending?l=AngelScript"},ANTLR:{color:"#9DC3FF",url:"https://github.com/trending?l=ANTLR"},Apex:{color:null,url:"https://github.com/trending?l=Apex"},"API Blueprint":{color:"#2ACCA8",url:"https://github.com/trending?l=API-Blueprint"},APL:{color:"#5A8164",url:"https://github.com/trending?l=APL"},"Apollo Guidance Computer":{color:null,url:"https://github.com/trending?l=Apollo-Guidance-Computer"},AppleScript:{color:"#101F1F",url:"https://github.com/trending?l=AppleScript"},Arc:{color:"#aa2afe",url:"https://github.com/trending?l=Arc"},ASP:{color:"#6a40fd",url:"https://github.com/trending?l=ASP"},AspectJ:{color:"#a957b0",url:"https://github.com/trending?l=AspectJ"},Assembly:{color:"#6E4C13",url:"https://github.com/trending?l=Assembly"},Asymptote:{color:"#4a0c0c",url:"https://github.com/trending?l=Asymptote"},ATS:{color:"#1ac620",url:"https://github.com/trending?l=ATS"},Augeas:{color:null,url:"https://github.com/trending?l=Augeas"},AutoHotkey:{color:"#6594b9",url:"https://github.com/trending?l=AutoHotkey"},AutoIt:{color:"#1C3552",url:"https://github.com/trending?l=AutoIt"},Awk:{color:null,url:"https://github.com/trending?l=Awk"},Ballerina:{color:"#FF5000",url:"https://github.com/trending?l=Ballerina"},Batchfile:{color:"#C1F12E",url:"https://github.com/trending?l=Batchfile"},Befunge:{color:null,url:"https://github.com/trending?l=Befunge"},Bison:{color:null,url:"https://github.com/trending?l=Bison"},BitBake:{color:null,url:"https://github.com/trending?l=BitBake"},BlitzBasic:{color:null,url:"https://github.com/trending?l=BlitzBasic"},BlitzMax:{color:"#cd6400",url:"https://github.com/trending?l=BlitzMax"},Bluespec:{color:null,url:"https://github.com/trending?l=Bluespec"},Boo:{color:"#d4bec1",url:"https://github.com/trending?l=Boo"},Brainfuck:{color:"#2F2530",url:"https://github.com/trending?l=Brainfuck"},Brightscript:{color:null,url:"https://github.com/trending?l=Brightscript"},C:{color:"#555555",url:"https://github.com/trending?l=C"},"C#":{color:"#178600",url:"https://github.com/trending?l=Csharp"},"C++":{color:"#f34b7d",url:"https://github.com/trending?l=C++"},"C2hs Haskell":{color:null,url:"https://github.com/trending?l=C2hs-Haskell"},"Cap'n Proto":{color:null,url:"https://github.com/trending?l=Cap'n-Proto"},CartoCSS:{color:null,url:"https://github.com/trending?l=CartoCSS"},Ceylon:{color:"#dfa535",url:"https://github.com/trending?l=Ceylon"},Chapel:{color:"#8dc63f",url:"https://github.com/trending?l=Chapel"},Charity:{color:null,url:"https://github.com/trending?l=Charity"},ChucK:{color:null,url:"https://github.com/trending?l=ChucK"},Cirru:{color:"#ccccff",url:"https://github.com/trending?l=Cirru"},Clarion:{color:"#db901e",url:"https://github.com/trending?l=Clarion"},Clean:{color:"#3F85AF",url:"https://github.com/trending?l=Clean"},Click:{color:"#E4E6F3",url:"https://github.com/trending?l=Click"},CLIPS:{color:null,url:"https://github.com/trending?l=CLIPS"},Clojure:{color:"#db5855",url:"https://github.com/trending?l=Clojure"},CMake:{color:null,url:"https://github.com/trending?l=CMake"},COBOL:{color:null,url:"https://github.com/trending?l=COBOL"},CodeQL:{color:null,url:"https://github.com/trending?l=CodeQL"},CoffeeScript:{color:"#244776",url:"https://github.com/trending?l=CoffeeScript"},ColdFusion:{color:"#ed2cd6",url:"https://github.com/trending?l=ColdFusion"},"ColdFusion CFC":{color:null,url:"https://github.com/trending?l=ColdFusion-CFC"},"Common Lisp":{color:"#3fb68b",url:"https://github.com/trending?l=Common-Lisp"},"Common Workflow Language":{color:"#B5314C",url:"https://github.com/trending?l=Common-Workflow-Language"},"Component Pascal":{color:"#B0CE4E",url:"https://github.com/trending?l=Component-Pascal"},Cool:{color:null,url:"https://github.com/trending?l=Cool"},Coq:{color:null,url:"https://github.com/trending?l=Coq"},Crystal:{color:"#000100",url:"https://github.com/trending?l=Crystal"},Csound:{color:null,url:"https://github.com/trending?l=Csound"},"Csound Document":{color:null,url:"https://github.com/trending?l=Csound-Document"},"Csound Score":{color:null,url:"https://github.com/trending?l=Csound-Score"},CSS:{color:"#563d7c",url:"https://github.com/trending?l=CSS"},Cuda:{color:"#3A4E3A",url:"https://github.com/trending?l=Cuda"},CWeb:{color:null,url:"https://github.com/trending?l=CWeb"},Cycript:{color:null,url:"https://github.com/trending?l=Cycript"},Cython:{color:null,url:"https://github.com/trending?l=Cython"},D:{color:"#ba595e",url:"https://github.com/trending?l=D"},Dafny:{color:"#FFEC25",url:"https://github.com/trending?l=Dafny"},Dart:{color:"#00B4AB",url:"https://github.com/trending?l=Dart"},DataWeave:{color:"#003a52",url:"https://github.com/trending?l=DataWeave"},Dhall:{color:"#dfafff",url:"https://github.com/trending?l=Dhall"},"DIGITAL Command Language":{color:null,url:"https://github.com/trending?l=DIGITAL-Command-Language"},DM:{color:"#447265",url:"https://github.com/trending?l=DM"},Dockerfile:{color:"#384d54",url:"https://github.com/trending?l=Dockerfile"},Dogescript:{color:"#cca760",url:"https://github.com/trending?l=Dogescript"},DTrace:{color:null,url:"https://github.com/trending?l=DTrace"},Dylan:{color:"#6c616e",url:"https://github.com/trending?l=Dylan"},E:{color:"#ccce35",url:"https://github.com/trending?l=E"},eC:{color:"#913960",url:"https://github.com/trending?l=eC"},ECL:{color:"#8a1267",url:"https://github.com/trending?l=ECL"},ECLiPSe:{color:null,url:"https://github.com/trending?l=ECLiPSe"},Eiffel:{color:"#946d57",url:"https://github.com/trending?l=Eiffel"},Elixir:{color:"#6e4a7e",url:"https://github.com/trending?l=Elixir"},Elm:{color:"#60B5CC",url:"https://github.com/trending?l=Elm"},"Emacs Lisp":{color:"#c065db",url:"https://github.com/trending?l=Emacs-Lisp"},EmberScript:{color:"#FFF4F3",url:"https://github.com/trending?l=EmberScript"},EQ:{color:"#a78649",url:"https://github.com/trending?l=EQ"},Erlang:{color:"#B83998",url:"https://github.com/trending?l=Erlang"},"F#":{color:"#b845fc",url:"https://github.com/trending?l=Fsharp"},"F*":{color:"#572e30",url:"https://github.com/trending?l=F*"},Factor:{color:"#636746",url:"https://github.com/trending?l=Factor"},Fancy:{color:"#7b9db4",url:"https://github.com/trending?l=Fancy"},Fantom:{color:"#14253c",url:"https://github.com/trending?l=Fantom"},Faust:{color:"#c37240",url:"https://github.com/trending?l=Faust"},"Filebench WML":{color:null,url:"https://github.com/trending?l=Filebench-WML"},Filterscript:{color:null,url:"https://github.com/trending?l=Filterscript"},fish:{color:null,url:"https://github.com/trending?l=fish"},FLUX:{color:"#88ccff",url:"https://github.com/trending?l=FLUX"},Forth:{color:"#341708",url:"https://github.com/trending?l=Forth"},Fortran:{color:"#4d41b1",url:"https://github.com/trending?l=Fortran"},"Fortran Free Form":{color:null,url:"https://github.com/trending?l=Fortran-Free-Form"},FreeMarker:{color:"#0050b2",url:"https://github.com/trending?l=FreeMarker"},Frege:{color:"#00cafe",url:"https://github.com/trending?l=Frege"},Futhark:{color:"#5f021f",url:"https://github.com/trending?l=Futhark"},"G-code":{color:"#D08CF2",url:"https://github.com/trending?l=G-code"},"Game Maker Language":{color:"#71b417",url:"https://github.com/trending?l=Game-Maker-Language"},GAML:{color:"#FFC766",url:"https://github.com/trending?l=GAML"},GAMS:{color:null,url:"https://github.com/trending?l=GAMS"},GAP:{color:null,url:"https://github.com/trending?l=GAP"},"GCC Machine Description":{color:null,url:"https://github.com/trending?l=GCC-Machine-Description"},GDB:{color:null,url:"https://github.com/trending?l=GDB"},GDScript:{color:"#355570",url:"https://github.com/trending?l=GDScript"},Genie:{color:"#fb855d",url:"https://github.com/trending?l=Genie"},Genshi:{color:null,url:"https://github.com/trending?l=Genshi"},"Gentoo Ebuild":{color:null,url:"https://github.com/trending?l=Gentoo-Ebuild"},"Gentoo Eclass":{color:null,url:"https://github.com/trending?l=Gentoo-Eclass"},Gherkin:{color:"#5B2063",url:"https://github.com/trending?l=Gherkin"},GLSL:{color:null,url:"https://github.com/trending?l=GLSL"},Glyph:{color:"#c1ac7f",url:"https://github.com/trending?l=Glyph"},Gnuplot:{color:"#f0a9f0",url:"https://github.com/trending?l=Gnuplot"},Go:{color:"#00ADD8",url:"https://github.com/trending?l=Go"},Golo:{color:"#88562A",url:"https://github.com/trending?l=Golo"},Gosu:{color:"#82937f",url:"https://github.com/trending?l=Gosu"},Grace:{color:null,url:"https://github.com/trending?l=Grace"},"Grammatical Framework":{color:"#79aa7a",url:"https://github.com/trending?l=Grammatical-Framework"},Groovy:{color:"#e69f56",url:"https://github.com/trending?l=Groovy"},"Groovy Server Pages":{color:null,url:"https://github.com/trending?l=Groovy-Server-Pages"},Hack:{color:"#878787",url:"https://github.com/trending?l=Hack"},Harbour:{color:"#0e60e3",url:"https://github.com/trending?l=Harbour"},Haskell:{color:"#5e5086",url:"https://github.com/trending?l=Haskell"},Haxe:{color:"#df7900",url:"https://github.com/trending?l=Haxe"},HCL:{color:null,url:"https://github.com/trending?l=HCL"},HiveQL:{color:"#dce200",url:"https://github.com/trending?l=HiveQL"},HLSL:{color:null,url:"https://github.com/trending?l=HLSL"},HolyC:{color:"#ffefaf",url:"https://github.com/trending?l=HolyC"},HTML:{color:"#e34c26",url:"https://github.com/trending?l=HTML"},Hy:{color:"#7790B2",url:"https://github.com/trending?l=Hy"},HyPhy:{color:null,url:"https://github.com/trending?l=HyPhy"},IDL:{color:"#a3522f",url:"https://github.com/trending?l=IDL"},Idris:{color:"#b30000",url:"https://github.com/trending?l=Idris"},"IGOR Pro":{color:"#0000cc",url:"https://github.com/trending?l=IGOR-Pro"},"Inform 7":{color:null,url:"https://github.com/trending?l=Inform-7"},"Inno Setup":{color:null,url:"https://github.com/trending?l=Inno-Setup"},Io:{color:"#a9188d",url:"https://github.com/trending?l=Io"},Ioke:{color:"#078193",url:"https://github.com/trending?l=Ioke"},Isabelle:{color:"#FEFE00",url:"https://github.com/trending?l=Isabelle"},"Isabelle ROOT":{color:null,url:"https://github.com/trending?l=Isabelle-ROOT"},J:{color:"#9EEDFF",url:"https://github.com/trending?l=J"},Jasmin:{color:null,url:"https://github.com/trending?l=Jasmin"},Java:{color:"#b07219",url:"https://github.com/trending?l=Java"},"Java Server Pages":{color:null,url:"https://github.com/trending?l=Java-Server-Pages"},JavaScript:{color:"#f1e05a",url:"https://github.com/trending?l=JavaScript"},"JavaScript+ERB":{color:null,url:"https://github.com/trending?l=JavaScript+ERB"},JFlex:{color:null,url:"https://github.com/trending?l=JFlex"},Jison:{color:null,url:"https://github.com/trending?l=Jison"},"Jison Lex":{color:null,url:"https://github.com/trending?l=Jison-Lex"},Jolie:{color:"#843179",url:"https://github.com/trending?l=Jolie"},JSONiq:{color:"#40d47e",url:"https://github.com/trending?l=JSONiq"},Jsonnet:{color:"#0064bd",url:"https://github.com/trending?l=Jsonnet"},JSX:{color:null,url:"https://github.com/trending?l=JSX"},Julia:{color:"#a270ba",url:"https://github.com/trending?l=Julia"},"Jupyter Notebook":{color:"#DA5B0B",url:"https://github.com/trending?l=Jupyter-Notebook"},"Kaitai Struct":{color:"#773b37",url:"https://github.com/trending?l=Kaitai-Struct"},Kotlin:{color:"#F18E33",url:"https://github.com/trending?l=Kotlin"},KRL:{color:"#28430A",url:"https://github.com/trending?l=KRL"},LabVIEW:{color:null,url:"https://github.com/trending?l=LabVIEW"},Lasso:{color:"#999999",url:"https://github.com/trending?l=Lasso"},Lean:{color:null,url:"https://github.com/trending?l=Lean"},Lex:{color:"#DBCA00",url:"https://github.com/trending?l=Lex"},LFE:{color:"#4C3023",url:"https://github.com/trending?l=LFE"},LilyPond:{color:null,url:"https://github.com/trending?l=LilyPond"},Limbo:{color:null,url:"https://github.com/trending?l=Limbo"},"Literate Agda":{color:null,url:"https://github.com/trending?l=Literate-Agda"},"Literate CoffeeScript":{color:null,url:"https://github.com/trending?l=Literate-CoffeeScript"},"Literate Haskell":{color:null,url:"https://github.com/trending?l=Literate-Haskell"},LiveScript:{color:"#499886",url:"https://github.com/trending?l=LiveScript"},LLVM:{color:"#185619",url:"https://github.com/trending?l=LLVM"},Logos:{color:null,url:"https://github.com/trending?l=Logos"},Logtalk:{color:null,url:"https://github.com/trending?l=Logtalk"},LOLCODE:{color:"#cc9900",url:"https://github.com/trending?l=LOLCODE"},LookML:{color:"#652B81",url:"https://github.com/trending?l=LookML"},LoomScript:{color:null,url:"https://github.com/trending?l=LoomScript"},LSL:{color:"#3d9970",url:"https://github.com/trending?l=LSL"},Lua:{color:"#000080",url:"https://github.com/trending?l=Lua"},M:{color:null,url:"https://github.com/trending?l=M"},M4:{color:null,url:"https://github.com/trending?l=M4"},M4Sugar:{color:null,url:"https://github.com/trending?l=M4Sugar"},Macaulay2:{color:"#d8ffff",url:"https://github.com/trending?l=Macaulay2"},Makefile:{color:"#427819",url:"https://github.com/trending?l=Makefile"},Mako:{color:null,url:"https://github.com/trending?l=Mako"},Mask:{color:"#f97732",url:"https://github.com/trending?l=Mask"},Mathematica:{color:null,url:"https://github.com/trending?l=Mathematica"},MATLAB:{color:"#e16737",url:"https://github.com/trending?l=MATLAB"},Max:{color:"#c4a79c",url:"https://github.com/trending?l=Max"},MAXScript:{color:"#00a6a6",url:"https://github.com/trending?l=MAXScript"},mcfunction:{color:"#E22837",url:"https://github.com/trending?l=mcfunction"},Mercury:{color:"#ff2b2b",url:"https://github.com/trending?l=Mercury"},Meson:{color:"#007800",url:"https://github.com/trending?l=Meson"},Metal:{color:"#8f14e9",url:"https://github.com/trending?l=Metal"},MiniD:{color:null,url:"https://github.com/trending?l=MiniD"},Mirah:{color:"#c7a938",url:"https://github.com/trending?l=Mirah"},"mIRC Script":{color:"#926059",url:"https://github.com/trending?l=mIRC-Script"},MLIR:{color:"#5EC8DB",url:"https://github.com/trending?l=MLIR"},Modelica:{color:null,url:"https://github.com/trending?l=Modelica"},"Modula-2":{color:null,url:"https://github.com/trending?l=Modula-2"},"Modula-3":{color:"#223388",url:"https://github.com/trending?l=Modula-3"},"Module Management System":{color:null,url:"https://github.com/trending?l=Module-Management-System"},Monkey:{color:null,url:"https://github.com/trending?l=Monkey"},Moocode:{color:null,url:"https://github.com/trending?l=Moocode"},MoonScript:{color:null,url:"https://github.com/trending?l=MoonScript"},"Motorola 68K Assembly":{color:null,url:"https://github.com/trending?l=Motorola-68K-Assembly"},MQL4:{color:"#62A8D6",url:"https://github.com/trending?l=MQL4"},MQL5:{color:"#4A76B8",url:"https://github.com/trending?l=MQL5"},MTML:{color:"#b7e1f4",url:"https://github.com/trending?l=MTML"},MUF:{color:null,url:"https://github.com/trending?l=MUF"},mupad:{color:null,url:"https://github.com/trending?l=mupad"},Myghty:{color:null,url:"https://github.com/trending?l=Myghty"},NASL:{color:null,url:"https://github.com/trending?l=NASL"},NCL:{color:"#28431f",url:"https://github.com/trending?l=NCL"},Nearley:{color:"#990000",url:"https://github.com/trending?l=Nearley"},Nemerle:{color:"#3d3c6e",url:"https://github.com/trending?l=Nemerle"},nesC:{color:"#94B0C7",url:"https://github.com/trending?l=nesC"},NetLinx:{color:"#0aa0ff",url:"https://github.com/trending?l=NetLinx"},"NetLinx+ERB":{color:"#747faa",url:"https://github.com/trending?l=NetLinx+ERB"},NetLogo:{color:"#ff6375",url:"https://github.com/trending?l=NetLogo"},NewLisp:{color:"#87AED7",url:"https://github.com/trending?l=NewLisp"},Nextflow:{color:"#3ac486",url:"https://github.com/trending?l=Nextflow"},Nim:{color:"#ffc200",url:"https://github.com/trending?l=Nim"},Nit:{color:"#009917",url:"https://github.com/trending?l=Nit"},Nix:{color:"#7e7eff",url:"https://github.com/trending?l=Nix"},NSIS:{color:null,url:"https://github.com/trending?l=NSIS"},Nu:{color:"#c9df40",url:"https://github.com/trending?l=Nu"},NumPy:{color:null,url:"https://github.com/trending?l=NumPy"},"Objective-C":{color:"#438eff",url:"https://github.com/trending?l=Objective-C"},"Objective-C++":{color:"#6866fb",url:"https://github.com/trending?l=Objective-C++"},"Objective-J":{color:"#ff0c5a",url:"https://github.com/trending?l=Objective-J"},ObjectScript:{color:"#424893",url:"https://github.com/trending?l=ObjectScript"},OCaml:{color:"#3be133",url:"https://github.com/trending?l=OCaml"},Odin:{color:"#60AFFE",url:"https://github.com/trending?l=Odin"},Omgrofl:{color:"#cabbff",url:"https://github.com/trending?l=Omgrofl"},ooc:{color:"#b0b77e",url:"https://github.com/trending?l=ooc"},Opa:{color:null,url:"https://github.com/trending?l=Opa"},Opal:{color:"#f7ede0",url:"https://github.com/trending?l=Opal"},"Open Policy Agent":{color:null,url:"https://github.com/trending?l=Open-Policy-Agent"},OpenCL:{color:null,url:"https://github.com/trending?l=OpenCL"},"OpenEdge ABL":{color:null,url:"https://github.com/trending?l=OpenEdge-ABL"},OpenQASM:{color:"#AA70FF",url:"https://github.com/trending?l=OpenQASM"},"OpenRC runscript":{color:null,url:"https://github.com/trending?l=OpenRC-runscript"},OpenSCAD:{color:null,url:"https://github.com/trending?l=OpenSCAD"},Ox:{color:null,url:"https://github.com/trending?l=Ox"},Oxygene:{color:"#cdd0e3",url:"https://github.com/trending?l=Oxygene"},Oz:{color:"#fab738",url:"https://github.com/trending?l=Oz"},P4:{color:"#7055b5",url:"https://github.com/trending?l=P4"},Pan:{color:"#cc0000",url:"https://github.com/trending?l=Pan"},Papyrus:{color:"#6600cc",url:"https://github.com/trending?l=Papyrus"},Parrot:{color:"#f3ca0a",url:"https://github.com/trending?l=Parrot"},"Parrot Assembly":{color:null,url:"https://github.com/trending?l=Parrot-Assembly"},"Parrot Internal Representation":{color:null,url:"https://github.com/trending?l=Parrot-Internal-Representation"},Pascal:{color:"#E3F171",url:"https://github.com/trending?l=Pascal"},Pawn:{color:"#dbb284",url:"https://github.com/trending?l=Pawn"},Pep8:{color:"#C76F5B",url:"https://github.com/trending?l=Pep8"},Perl:{color:"#0298c3",url:"https://github.com/trending?l=Perl"},PHP:{color:"#4F5D95",url:"https://github.com/trending?l=PHP"},PicoLisp:{color:null,url:"https://github.com/trending?l=PicoLisp"},PigLatin:{color:"#fcd7de",url:"https://github.com/trending?l=PigLatin"},Pike:{color:"#005390",url:"https://github.com/trending?l=Pike"},PLpgSQL:{color:null,url:"https://github.com/trending?l=PLpgSQL"},PLSQL:{color:"#dad8d8",url:"https://github.com/trending?l=PLSQL"},PogoScript:{color:"#d80074",url:"https://github.com/trending?l=PogoScript"},Pony:{color:null,url:"https://github.com/trending?l=Pony"},PostScript:{color:"#da291c",url:"https://github.com/trending?l=PostScript"},"POV-Ray SDL":{color:null,url:"https://github.com/trending?l=POV-Ray-SDL"},PowerBuilder:{color:"#8f0f8d",url:"https://github.com/trending?l=PowerBuilder"},PowerShell:{color:"#012456",url:"https://github.com/trending?l=PowerShell"},Processing:{color:"#0096D8",url:"https://github.com/trending?l=Processing"},Prolog:{color:"#74283c",url:"https://github.com/trending?l=Prolog"},"Propeller Spin":{color:"#7fa2a7",url:"https://github.com/trending?l=Propeller-Spin"},Puppet:{color:"#302B6D",url:"https://github.com/trending?l=Puppet"},PureBasic:{color:"#5a6986",url:"https://github.com/trending?l=PureBasic"},PureScript:{color:"#1D222D",url:"https://github.com/trending?l=PureScript"},Python:{color:"#3572A5",url:"https://github.com/trending?l=Python"},"Python console":{color:null,url:"https://github.com/trending?l=Python-console"},q:{color:"#0040cd",url:"https://github.com/trending?l=q"},"Q#":{color:"#fed659",url:"https://github.com/trending?l=Qsharp"},QMake:{color:null,url:"https://github.com/trending?l=QMake"},QML:{color:"#44a51c",url:"https://github.com/trending?l=QML"},"Qt Script":{color:"#00b841",url:"https://github.com/trending?l=Qt-Script"},Quake:{color:"#882233",url:"https://github.com/trending?l=Quake"},R:{color:"#198CE7",url:"https://github.com/trending?l=R"},Racket:{color:"#3c5caa",url:"https://github.com/trending?l=Racket"},Ragel:{color:"#9d5200",url:"https://github.com/trending?l=Ragel"},Raku:{color:"#0000fb",url:"https://github.com/trending?l=Raku"},RAML:{color:"#77d9fb",url:"https://github.com/trending?l=RAML"},Rascal:{color:"#fffaa0",url:"https://github.com/trending?l=Rascal"},REALbasic:{color:null,url:"https://github.com/trending?l=REALbasic"},Reason:{color:"#ff5847",url:"https://github.com/trending?l=Reason"},Rebol:{color:"#358a5b",url:"https://github.com/trending?l=Rebol"},Red:{color:"#f50000",url:"https://github.com/trending?l=Red"},Redcode:{color:null,url:"https://github.com/trending?l=Redcode"},"Ren'Py":{color:"#ff7f7f",url:"https://github.com/trending?l=Ren'Py"},RenderScript:{color:null,url:"https://github.com/trending?l=RenderScript"},REXX:{color:null,url:"https://github.com/trending?l=REXX"},Ring:{color:"#2D54CB",url:"https://github.com/trending?l=Ring"},Riot:{color:"#A71E49",url:"https://github.com/trending?l=Riot"},RobotFramework:{color:null,url:"https://github.com/trending?l=RobotFramework"},Roff:{color:"#ecdebe",url:"https://github.com/trending?l=Roff"},Rouge:{color:"#cc0088",url:"https://github.com/trending?l=Rouge"},RPC:{color:null,url:"https://github.com/trending?l=RPC"},Ruby:{color:"#701516",url:"https://github.com/trending?l=Ruby"},RUNOFF:{color:"#665a4e",url:"https://github.com/trending?l=RUNOFF"},Rust:{color:"#dea584",url:"https://github.com/trending?l=Rust"},Sage:{color:null,url:"https://github.com/trending?l=Sage"},SaltStack:{color:"#646464",url:"https://github.com/trending?l=SaltStack"},SAS:{color:"#B34936",url:"https://github.com/trending?l=SAS"},Scala:{color:"#c22d40",url:"https://github.com/trending?l=Scala"},Scheme:{color:"#1e4aec",url:"https://github.com/trending?l=Scheme"},Scilab:{color:null,url:"https://github.com/trending?l=Scilab"},sed:{color:"#64b970",url:"https://github.com/trending?l=sed"},Self:{color:"#0579aa",url:"https://github.com/trending?l=Self"},ShaderLab:{color:null,url:"https://github.com/trending?l=ShaderLab"},Shell:{color:"#89e051",url:"https://github.com/trending?l=Shell"},ShellSession:{color:null,url:"https://github.com/trending?l=ShellSession"},Shen:{color:"#120F14",url:"https://github.com/trending?l=Shen"},Sieve:{color:null,url:"https://github.com/trending?l=Sieve"},Slash:{color:"#007eff",url:"https://github.com/trending?l=Slash"},Slice:{color:"#003fa2",url:"https://github.com/trending?l=Slice"},Smali:{color:null,url:"https://github.com/trending?l=Smali"},Smalltalk:{color:"#596706",url:"https://github.com/trending?l=Smalltalk"},Smarty:{color:null,url:"https://github.com/trending?l=Smarty"},SmPL:{color:"#c94949",url:"https://github.com/trending?l=SmPL"},SMT:{color:null,url:"https://github.com/trending?l=SMT"},Solidity:{color:"#AA6746",url:"https://github.com/trending?l=Solidity"},SourcePawn:{color:"#5c7611",url:"https://github.com/trending?l=SourcePawn"},SQF:{color:"#3F3F3F",url:"https://github.com/trending?l=SQF"},SQLPL:{color:null,url:"https://github.com/trending?l=SQLPL"},Squirrel:{color:"#800000",url:"https://github.com/trending?l=Squirrel"},"SRecode Template":{color:"#348a34",url:"https://github.com/trending?l=SRecode-Template"},Stan:{color:"#b2011d",url:"https://github.com/trending?l=Stan"},"Standard ML":{color:"#dc566d",url:"https://github.com/trending?l=Standard-ML"},Starlark:{color:"#76d275",url:"https://github.com/trending?l=Starlark"},Stata:{color:null,url:"https://github.com/trending?l=Stata"},SuperCollider:{color:"#46390b",url:"https://github.com/trending?l=SuperCollider"},Swift:{color:"#ffac45",url:"https://github.com/trending?l=Swift"},SWIG:{color:null,url:"https://github.com/trending?l=SWIG"},SystemVerilog:{color:"#DAE1C2",url:"https://github.com/trending?l=SystemVerilog"},Tcl:{color:"#e4cc98",url:"https://github.com/trending?l=Tcl"},Tcsh:{color:null,url:"https://github.com/trending?l=Tcsh"},Terra:{color:"#00004c",url:"https://github.com/trending?l=Terra"},TeX:{color:"#3D6117",url:"https://github.com/trending?l=TeX"},Thrift:{color:null,url:"https://github.com/trending?l=Thrift"},"TI Program":{color:"#A0AA87",url:"https://github.com/trending?l=TI-Program"},TLA:{color:null,url:"https://github.com/trending?l=TLA"},TSQL:{color:null,url:"https://github.com/trending?l=TSQL"},TSX:{color:null,url:"https://github.com/trending?l=TSX"},Turing:{color:"#cf142b",url:"https://github.com/trending?l=Turing"},TXL:{color:null,url:"https://github.com/trending?l=TXL"},TypeScript:{color:"#2b7489",url:"https://github.com/trending?l=TypeScript"},"Unified Parallel C":{color:null,url:"https://github.com/trending?l=Unified-Parallel-C"},"Unix Assembly":{color:null,url:"https://github.com/trending?l=Unix-Assembly"},Uno:{color:null,url:"https://github.com/trending?l=Uno"},UnrealScript:{color:"#a54c4d",url:"https://github.com/trending?l=UnrealScript"},UrWeb:{color:null,url:"https://github.com/trending?l=UrWeb"},V:{color:"#5d87bd",url:"https://github.com/trending?l=V"},Vala:{color:"#fbe5cd",url:"https://github.com/trending?l=Vala"},VBA:{color:"#867db1",url:"https://github.com/trending?l=VBA"},VBScript:{color:"#15dcdc",url:"https://github.com/trending?l=VBScript"},VCL:{color:"#148AA8",url:"https://github.com/trending?l=VCL"},Verilog:{color:"#b2b7f8",url:"https://github.com/trending?l=Verilog"},VHDL:{color:"#adb2cb",url:"https://github.com/trending?l=VHDL"},"Vim script":{color:"#199f4b",url:"https://github.com/trending?l=Vim-script"},"Visual Basic .NET":{color:"#945db7",url:"https://github.com/trending?l=Visual-Basic-.NET"},Volt:{color:"#1F1F1F",url:"https://github.com/trending?l=Volt"},Vue:{color:"#2c3e50",url:"https://github.com/trending?l=Vue"},wdl:{color:"#42f1f4",url:"https://github.com/trending?l=wdl"},WebAssembly:{color:"#04133b",url:"https://github.com/trending?l=WebAssembly"},WebIDL:{color:null,url:"https://github.com/trending?l=WebIDL"},wisp:{color:"#7582D1",url:"https://github.com/trending?l=wisp"},Wollok:{color:"#a23738",url:"https://github.com/trending?l=Wollok"},X10:{color:"#4B6BEF",url:"https://github.com/trending?l=X10"},xBase:{color:"#403a40",url:"https://github.com/trending?l=xBase"},XC:{color:"#99DA07",url:"https://github.com/trending?l=XC"},Xojo:{color:null,url:"https://github.com/trending?l=Xojo"},XProc:{color:null,url:"https://github.com/trending?l=XProc"},XQuery:{color:"#5232e7",url:"https://github.com/trending?l=XQuery"},XS:{color:null,url:"https://github.com/trending?l=XS"},XSLT:{color:"#EB8CEB",url:"https://github.com/trending?l=XSLT"},Xtend:{color:null,url:"https://github.com/trending?l=Xtend"},Yacc:{color:"#4B6C4B",url:"https://github.com/trending?l=Yacc"},YARA:{color:"#220000",url:"https://github.com/trending?l=YARA"},YASnippet:{color:"#32AB90",url:"https://github.com/trending?l=YASnippet"},ZAP:{color:"#0d665e",url:"https://github.com/trending?l=ZAP"},Zeek:{color:null,url:"https://github.com/trending?l=Zeek"},ZenScript:{color:"#00BCD1",url:"https://github.com/trending?l=ZenScript"},Zephir:{color:"#118f9e",url:"https://github.com/trending?l=Zephir"},Zig:{color:"#ec915c",url:"https://github.com/trending?l=Zig"},ZIL:{color:"#dc75e5",url:"https://github.com/trending?l=ZIL"},Zimpl:{color:null,url:"https://github.com/trending?l=Zimpl"}}}},created:function(){if(void 0!==this.repo){var t=this;h.a.get("https://api.github.com/repos/"+this.repo).then((function(l){console.log(l.data),t.url=l.data.html_url,t.repoName=l.data.name,t.isFork=l.data.fork,l.data.fork&&(t.forkPath=l.data.source.url,t.forkName=l.data.source.full_name),t.description=l.data.description,t.lang=l.data.language,t.stars=l.data.stargazers_count,t.forks=l.data.forks_count,t.loading=!1}))}else this.loading=!1,this.url=this.OfflineData.url,this.repoName=this.OfflineData.repoName,this.isFork=this.OfflineData.isFork,this.isFork&&(this.forkPath=this.OfflineData.forkPath,this.forkName=this.OfflineData.forkName),this.description=this.OfflineData.description,this.lang=this.OfflineData.lang,this.stars=this.OfflineData.stars,this.forks=this.OfflineData.forks},props:{repo:String,OfflineData:Object}},s=g,a=(r("7fee"),r("2877")),p=Object(a["a"])(s,c,e,!1,null,"1c3511fe",null),d=p.exports,b={name:"App",data:function(){return{repo:"vzxxbacq/speaker-recognition-papers",myRepoData:{url:"https://github.com/vzxxbacq/speaker-recognition-papers",repoName:"speaker-recognition-papers",isFork:!0,forkPath:"https://github.com/vzxxbacq/speaker-recognition-papers",forkName:"ssssForkExp",description:"Share some recent speaker recognition papers and their implementations",lang:"Python",stars:88,forks:24}}},components:{RepoCard:d}},m=b,f=(r("034f"),Object(a["a"])(m,n,i,!1,null,null,null)),S=f.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"7fee":function(t,l,r){"use strict";var o=r("2cb4"),n=r.n(o);n.a},"85ec":function(t,l,r){},cf05:function(t,l,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.efd70f6d.js.map