"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5292],{4701:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=e(5893),a=e(1151);const i={title:"Uninstalling K3s",weight:61},l=void 0,o={id:"installation/uninstall",title:"Uninstalling K3s",description:"Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/zh/installation/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:1705966399,formattedLastUpdatedAt:"2024\u5e741\u670822\u65e5",frontMatter:{title:"Uninstalling K3s",weight:61},sidebar:"mySidebar",previous:{title:"Managing Packaged Components",permalink:"/zh/installation/packaged-components"},next:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",permalink:"/zh/datastore/"}},r={},d=[{value:"Uninstalling Servers",id:"uninstalling-servers",level:3},{value:"Uninstalling Agents",id:"uninstalling-agents",level:3}];function c(n){const t={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",(0,s.jsx)(t.br,{}),"\n","It does not remove any data from external datastores, or created by pods using external Kubernetes storage volumes."]})}),"\n",(0,s.jsx)(t.p,{children:"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation."}),"\n",(0,s.jsxs)(t.p,{children:["If you are planning on rejoining a node to an existing cluster after uninstalling and reinstalling, be sure to delete the node from the cluster to ensure that the node password secret is removed. See the ",(0,s.jsx)(t.a,{href:"/zh/architecture#how-agent-node-registration-works",children:"Node Registration"})," documentation for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"uninstalling-servers",children:"Uninstalling Servers"}),"\n",(0,s.jsx)(t.p,{children:"To uninstall K3s from a server node, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/usr/local/bin/k3s-uninstall.sh\n"})}),"\n",(0,s.jsx)(t.h3,{id:"uninstalling-agents",children:"Uninstalling Agents"}),"\n",(0,s.jsx)(t.p,{children:"To uninstall K3s from an agent node, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/usr/local/bin/k3s-agent-uninstall.sh\n"})})]})}function u(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>l});var s=e(7294);const a={},i=s.createContext(a);function l(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);