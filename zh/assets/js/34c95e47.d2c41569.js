"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const a={title:"\u5df2\u77e5\u95ee\u9898",weight:70},s=void 0,o={unversionedId:"known-issues/known-issues",id:"known-issues/known-issues",title:"\u5df2\u77e5\u95ee\u9898",description:"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/known-issues/known-issues.md",sourceDirName:"known-issues",slug:"/known-issues/",permalink:"/zh/known-issues/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues/known-issues.md",tags:[],version:"current",lastUpdatedAt:1696930826,formattedLastUpdatedAt:"2023\u5e7410\u670810\u65e5",frontMatter:{title:"\u5df2\u77e5\u95ee\u9898",weight:70},sidebar:"mySidebar",previous:{title:"v1.28.X",permalink:"/zh/release-notes/v1.28.X"},next:{title:"\u5b89\u5168",permalink:"/zh/security/"}},l={},c=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"Rootless \u6a21\u5f0f",id:"rootless-\u6a21\u5f0f",level:3},{value:"\u5c06\u5f3a\u5316\u96c6\u7fa4\u4ece v1.24.x \u5347\u7ea7\u5230 v1.25.x",id:"hardened-125",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"snap-docker"},"Snap Docker"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8ba1\u5212\u540c\u65f6\u4f7f\u7528 K3s \u4e0e Docker\uff0c\u5219\u4e0d\u5efa\u8bae\u901a\u8fc7 snap \u5305\u5b89\u88c5 Docker\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5bfc\u81f4\u8fd0\u884c K3s \u65f6\u51fa\u73b0\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"iptables"},"Iptables"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 nftables \u6a21\u5f0f\u800c\u4e0d\u662f\u4f20\u7edf\u6a21\u5f0f\u6765\u8fd0\u884c iptables\uff0c\u5219\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8f83\u65b0\u7684 iptables\uff08\u4f8b\u5982 1.6.1+\uff09\u6765\u907f\u514d\u51fa\u73b0\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u7248\u672c 1.8.0-1.8.4 \u5b58\u5728\u53ef\u80fd\u5bfc\u81f4 K3s \u5931\u8d25\u7684\u95ee\u9898\u3002\u6709\u5173\u89e3\u51b3\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/advanced/#%E6%97%A7%E7%9A%84-iptables-%E7%89%88%E6%9C%AC"},"\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u51c6\u5907"),"\u3002"),(0,i.kt)("h3",{id:"rootless-\u6a21\u5f0f"},"Rootless \u6a21\u5f0f"),(0,i.kt)("p",null,"\u4f7f\u7528 Rootless \u6a21\u5f0f\u8fd0\u884c K3s \u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u5b58\u5728\u51e0\u4e2a",(0,i.kt)("a",{parentName:"p",href:"/zh/advanced/#rootless-%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"},"\u5df2\u77e5\u95ee\u9898"),"\u3002"),(0,i.kt)("h3",{id:"hardened-125"},"\u5c06\u5f3a\u5316\u96c6\u7fa4\u4ece v1.24.x \u5347\u7ea7\u5230 v1.25.x"),(0,i.kt)("p",null,"Kubernetes v1.25 \u5220\u9664\u4e86 PodSecurityPolicy\uff0c\u652f\u6301 Pod Security Standard\uff08PSS\uff09\u3002\u4f60\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"\u4e0a\u6e38\u6587\u6863"),"\u4e2d\u9605\u8bfb\u6709\u5173 PSS \u7684\u66f4\u591a\u4fe1\u606f\u3002\u5bf9\u4e8e K3s\uff0c\u5982\u679c\u5728\u8282\u70b9\u4e0a\u914d\u7f6e\u4e86\u4efb\u4f55 ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPoliciy"),"\uff0c\u5219\u5fc5\u987b\u6267\u884c\u4e00\u4e9b\u624b\u52a8\u6b65\u9aa4\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u6240\u6709\u8282\u70b9\u4e0a\uff0c\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver-arg")," \u503c\u4ee5\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicy")," admission-plugin\u3002\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'"),"\uff0c\u4f46\u4e0d\u8981\u91cd\u542f\u6216\u5347\u7ea7 K3s\u3002\u4ee5\u4e0b\u662f\u8282\u70b9\u52a0\u56fa\u66f4\u65b0\u540e\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\n  - 'request-timeout=300s'\n  - 'service-account-lookup=true'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\n  - 'use-service-account-credentials=true'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - 'make-iptables-util-chains=true'\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/psa.yaml")," \u6587\u4ef6\u3002\u4f60\u53ef\u80fd\u8fd8\u60f3\u8c41\u514d\u66f4\u591a\u547d\u540d\u7a7a\u95f4\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u8c41\u514d\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system"),"\uff08\u5fc5\u9700\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"cis-operator-system"),"\uff08\u53ef\u9009\uff0c\u4f46\u5728\u901a\u8fc7 Rancher \u8fd0\u884c\u5b89\u5168\u626b\u63cf\u65f6\u5f88\u6709\u7528\uff09\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"system- upgrade"),"\uff08\u5982\u679c\u6267\u884c",(0,i.kt)("a",{parentName:"li",href:"/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\u5219\u9700\u8981\uff09\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, system-upgrade]\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u6267\u884c\u5347\u7ea7\u3002\u5982\u679c\u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\uff0c\u8bf7\u786e\u4fdd\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"system-upgrade-controller")," pod \u7684\u547d\u540d\u7a7a\u95f4\u6309\u7167 ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels"},"Pod \u5b89\u5168\u7ea7\u522b"),"\u7684\u8981\u6c42\u8bbe\u7f6e\u4e3a privileged\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u4ece\u96c6\u7fa4\u4e2d\u79fb\u9664\u5269\u4f59\u7684 PSP \u8d44\u6e90\u3002\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/manifests/")," \u4e2d\u7528\u4e8e\u52a0\u56fa\u7684\u81ea\u5b9a\u4e49\u6587\u4ef6\u4e2d\u53ef\u80fd\u5b58\u5728 PodSecurityPolicies \u548c\u5173\u8054\u7684 RBAC \u8d44\u6e90\u3002\u5220\u9664\u8fd9\u4e9b\u8d44\u6e90\uff0c\u7136\u540e K3s \u5c06\u81ea\u52a8\u66f4\u65b0\u3002\u7531\u4e8e\u65f6\u95f4\u539f\u56e0\uff0c\u4e00\u4e9b\u8d44\u6e90\u53ef\u80fd\u4f1a\u7559\u5728\u96c6\u7fa4\u4e2d\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u624b\u52a8\u5220\u9664\u5b83\u4eec\u3002\u5982\u679c\u4e4b\u524d\u9075\u5faa\u4e86",(0,i.kt)("a",{parentName:"li",href:"/zh/security/hardening-guide"},"\u5f3a\u5316\u6307\u5357"),"\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5220\u9664\u5b83\u4eec\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# \u83b7\u53d6\u4e0e PSP \u5173\u8054\u7684\u8d44\u6e90\n$ kubectl get roles,clusterroles,rolebindings,clusterrolebindings -A | grep -i psp\n\n# \u5220\u9664\u8fd9\u4e9b\u8d44\u6e90\n$ kubectl delete clusterrole.rbac.authorization.k8s.io/psp:restricted-psp clusterrole.rbac.authorization.k8s.io/psp:svclb-psp clusterrole.rbac.authorization.k8s.io/psp:system-unrestricted-psp clusterrolebinding.rbac.authorization.k8s.io/default:restricted-psp clusterrolebinding.rbac.authorization.k8s.io/system-unrestricted-node-psp-rolebinding && kubectl delete -n kube-system rolebinding.rbac.authorization.k8s.io/svclb-psp-rolebinding rolebinding.rbac.authorization.k8s.io/system-unrestricted-svc-acct-psp-rolebinding\n")))}p.isMDXComponent=!0}}]);