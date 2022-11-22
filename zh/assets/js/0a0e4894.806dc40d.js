"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[572],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=c,k=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(3117),c=n(102),a=(n(7294),n(3905)),l=["components"],o={title:"\u96c6\u7fa4\u8bbf\u95ee",weight:21},s=void 0,u={unversionedId:"cluster-access/cluster-access",id:"cluster-access/cluster-access",title:"\u96c6\u7fa4\u8bbf\u95ee",description:"/etc/rancher/k3s/k3s.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa KUBECONFIG \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 --kubeconfig \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cluster-access/cluster-access.md",sourceDirName:"cluster-access",slug:"/cluster-access/",permalink:"/zh/cluster-access/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cluster-access/cluster-access.md",tags:[],version:"current",lastUpdatedAt:1669137767,formattedLastUpdatedAt:"2022\u5e7411\u670822\u65e5",frontMatter:{title:"\u96c6\u7fa4\u8bbf\u95ee",weight:21},sidebar:"mySidebar",previous:{title:"\u5378\u8f7d K3s",permalink:"/zh/installation/uninstall"},next:{title:"\u5347\u7ea7",permalink:"/zh/upgrades/"}},i={},p=[{value:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,c.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 KUBECONFIG \u73af\u5883\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/k3s/k3s.yaml ls --all-namespaces\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"},"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \u590d\u5236\u5230\u4f4d\u4e8e\u96c6\u7fa4\u5916\u90e8\u7684\u4e3b\u673a\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\u3002\u7136\u540e\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5b57\u6bb5\u7684\u503c\u66ff\u6362\u4e3a\u4f60 K3s Server \u7684 IP \u6216\u540d\u79f0\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u7ba1\u7406 K3s \u96c6\u7fa4\u3002"))}m.isMDXComponent=!0}}]);