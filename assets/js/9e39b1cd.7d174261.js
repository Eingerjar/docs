"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7813],{6442:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(5893),c=s(1151);const r={title:"CLI Tools"},d=void 0,o={id:"cli/cli",title:"CLI Tools",description:"The K3s binary contains a number of additional tools the help you manage your cluster.",source:"@site/docs/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md",tags:[],version:"current",lastUpdatedAt:171597926e4,frontMatter:{title:"CLI Tools"},sidebar:"mySidebar",previous:{title:"CIS 1.24 Self Assessment Guide",permalink:"/docs/security/self-assessment-1.24"},next:{title:"server",permalink:"/docs/cli/server"}},i={},l=[];function h(e){const t={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The K3s binary contains a number of additional tools the help you manage your cluster."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s server"})}),(0,n.jsxs)(t.td,{children:["Run a K3s server node, which launches the Kubernetes ",(0,n.jsx)(t.code,{children:"apiserver"}),", ",(0,n.jsx)(t.code,{children:"scheduler"}),", ",(0,n.jsx)(t.code,{children:"controller-manager"}),", and ",(0,n.jsx)(t.code,{children:"cloud-controller-manager"})," components, in addition a datastore and the agent components. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/server",children:[(0,n.jsx)(t.code,{children:"k3s server"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s agent"})}),(0,n.jsxs)(t.td,{children:["Run the K3s agent node, which launches ",(0,n.jsx)(t.code,{children:"containerd"}),", ",(0,n.jsx)(t.code,{children:"flannel"}),", ",(0,n.jsx)(t.code,{children:"kube-router"})," network policy controller, and the Kubernetes ",(0,n.jsx)(t.code,{children:"kubelet"})," and ",(0,n.jsx)(t.code,{children:"kube-proxy"})," components. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/agent",children:[(0,n.jsx)(t.code,{children:"k3s agent"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s kubectl"})}),(0,n.jsxs)(t.td,{children:["Run the embedded ",(0,n.jsxs)(t.a,{href:"https://kubernetes.io/docs/reference/kubectl",children:[(0,n.jsx)(t.code,{children:"kubectl"})," command"]}),". This is a CLI for interacting with the Kubernetes apiserver.  If the ",(0,n.jsx)(t.code,{children:"KUBECONFIG"})," environment variable is not set, this will automatically attempt to use the kubeconfig at ",(0,n.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s crictl"})}),(0,n.jsxs)(t.td,{children:["Run the embedded ",(0,n.jsxs)(t.a,{href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md",children:[(0,n.jsx)(t.code,{children:"crictl"})," command"]}),". This is a CLI for interacting with Kubernetes's container runtime interface (CRI). Useful for debugging."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s ctr"})}),(0,n.jsxs)(t.td,{children:["Run the embedded ",(0,n.jsxs)(t.a,{href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md",children:[(0,n.jsx)(t.code,{children:"ctr"})," command"]}),". This is a CLI for containerd, the container daemon used by K3s. Useful for debugging."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s token"})}),(0,n.jsxs)(t.td,{children:["Manage bootstrap tokens. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/token",children:[(0,n.jsx)(t.code,{children:"k3s token"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s etcd-snapshot"})}),(0,n.jsxs)(t.td,{children:["Perform on demand backups of the K3s cluster data and upload to S3. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/etcd-snapshot",children:[(0,n.jsx)(t.code,{children:"k3s etcd-snapshot"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s secrets-encrypt"})}),(0,n.jsxs)(t.td,{children:["Configure K3s to encrypt secrets when storing them in the cluster. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/secrets-encrypt",children:[(0,n.jsx)(t.code,{children:"k3s secrets-encrypt"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s certificate"})}),(0,n.jsxs)(t.td,{children:["Manage K3s certificates. See the ",(0,n.jsxs)(t.a,{href:"/docs/cli/certificate",children:[(0,n.jsx)(t.code,{children:"k3s certificate"})," command documentation"]})," for more information."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s completion"})}),(0,n.jsx)(t.td,{children:"Generate shell completion scripts for k3s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"k3s help"})}),(0,n.jsx)(t.td,{children:"Shows a list of commands or help for one command"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>d});var n=s(7294);const c={},r=n.createContext(c);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);