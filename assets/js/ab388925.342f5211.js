"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4548],{6324:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=s(5893),r=s(1151);const o={title:"Cluster Datastore"},n=void 0,i={id:"datastore/datastore",title:"Cluster Datastore",description:"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:",source:"@site/docs/datastore/datastore.md",sourceDirName:"datastore",slug:"/datastore/",permalink:"/docs/datastore/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/datastore.md",tags:[],version:"current",lastUpdatedAt:171597926e4,frontMatter:{title:"Cluster Datastore"},sidebar:"mySidebar",previous:{title:"Uninstalling K3s",permalink:"/docs/installation/uninstall"},next:{title:"Backup and Restore",permalink:"/docs/datastore/backup-restore"}},d={},c=[{value:"External Datastore Configuration Parameters",id:"external-datastore-configuration-parameters",level:3},{value:"Datastore Endpoint Format and Functionality",id:"datastore-endpoint-format-and-functionality",level:3}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TabItem:s,Tabs:o}=t;return s||u("TabItem",!0),o||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If your team doesn't have expertise in operating etcd, you can choose an enterprise-grade SQL database like MySQL or PostgreSQL"}),"\n",(0,a.jsx)(t.li,{children:"If you need to run a simple, short-lived cluster in your CI/CD environment, you can use the embedded SQLite database"}),"\n",(0,a.jsx)(t.li,{children:"If you wish to deploy Kubernetes on the edge and require a highly available solution but can't afford the operational overhead of managing a database at the edge, you can use K3s's embedded HA datastore built on top of embedded etcd."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"K3s supports the following datastore options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.strong,{children:["Embedded ",(0,a.jsx)(t.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})]}),(0,a.jsx)(t.br,{}),"\n","SQLite cannot be used on clusters with multiple servers.",(0,a.jsx)(t.br,{}),"\n","SQLite is the default datastore, and will be used if no other datastore configuration is present, and no embedded etcd database files are present on disk."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Embedded etcd"}),(0,a.jsx)(t.br,{}),"\n","See the ",(0,a.jsx)(t.a,{href:"/docs/datastore/ha-embedded",children:"High Availability Embedded etcd"})," documentation for more information on using embedded etcd with multiple servers.\nEmbedded etcd will be automatically selected if K3s is configured to initialize a new etcd cluster, join an existing etcd cluster, or if etcd database files are present on disk during startup."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"External Database"}),(0,a.jsx)(t.br,{}),"\n","See the ",(0,a.jsx)(t.a,{href:"/docs/datastore/ha",children:"High Availability External DB"})," documentation for more information on using external datastores with multiple servers.",(0,a.jsx)(t.br,{}),"\n","The following external datastores are supported:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://etcd.io/",children:"etcd"})," (certified against version 3.5.4)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.mysql.com/",children:"MySQL"})," (certified against versions 5.7 and 8.0)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://mariadb.org/",children:"MariaDB"})," (certified against version 10.6.8)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," (certified against versions 12.16, 13.12, 14.9 and 15.4)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"Prepared Statement Support",type:"warning",children:(0,a.jsxs)(t.p,{children:["K3s requires prepared statements support from the DB. This means that connection poolers such as ",(0,a.jsx)(t.a,{href:"https://www.pgbouncer.org/faq.html#how-to-use-prepared-statements-with-transaction-pooling",children:"PgBouncer"})," may require additional configuration to work with K3s."]})}),"\n",(0,a.jsx)(t.h3,{id:"external-datastore-configuration-parameters",children:"External Datastore Configuration Parameters"}),"\n",(0,a.jsxs)(t.p,{children:["If you wish to use an external datastore such as PostgreSQL, MySQL, or etcd you must set the ",(0,a.jsx)(t.code,{children:"datastore-endpoint"})," parameter so that K3s knows how to connect to it. You may also specify parameters to configure the authentication and encryption of the connection. The below table summarizes these parameters, which can be passed as either CLI flags or environment variables."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"CLI Flag"}),(0,a.jsx)(t.th,{children:"Environment Variable"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"--datastore-endpoint"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"K3S_DATASTORE_ENDPOINT"})}),(0,a.jsx)(t.td,{children:"Specify a PostgreSQL, MySQL, or etcd connection string. This is a string used to describe the connection to the datastore. The structure of this string is specific to each backend and is detailed below."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"--datastore-cafile"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"K3S_DATASTORE_CAFILE"})}),(0,a.jsx)(t.td,{children:"TLS Certificate Authority (CA) file used to help secure communication with the datastore. If your datastore serves requests over TLS using a certificate signed by a custom certificate authority, you can specify that CA using this parameter so that the K3s client can properly verify the certificate."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"--datastore-certfile"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"K3S_DATASTORE_CERTFILE"})}),(0,a.jsxs)(t.td,{children:["TLS certificate file used for client certificate based authentication to your datastore. To use this feature, your datastore must be configured to support client certificate based authentication. If you specify this parameter, you must also specify the ",(0,a.jsx)(t.code,{children:"datastore-keyfile"})," parameter."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"--datastore-keyfile"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"K3S_DATASTORE_KEYFILE"})}),(0,a.jsxs)(t.td,{children:["TLS key file used for client certificate based authentication to your datastore. See the previous ",(0,a.jsx)(t.code,{children:"datastore-certfile"})," parameter for more details."]})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"As a best practice we recommend setting these parameters as environment variables rather than command line arguments so that your database credentials or other sensitive information aren't exposed as part of the process info."}),"\n",(0,a.jsx)(t.h3,{id:"datastore-endpoint-format-and-functionality",children:"Datastore Endpoint Format and Functionality"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned, the format of the value passed to the ",(0,a.jsx)(t.code,{children:"datastore-endpoint"})," parameter is dependent upon the datastore backend. The following details this format and functionality for each supported external datastore."]}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsxs)(s,{value:"PostgreSQL",children:[(0,a.jsx)(t.p,{children:"In its most common form, the datastore-endpoint parameter for PostgreSQL has the following format:"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"postgres://username:password@hostname:port/database-name"})}),(0,a.jsxs)(t.p,{children:["More advanced configuration parameters are available. For more information on these, please see ",(0,a.jsx)(t.a,{href:"https://godoc.org/github.com/lib/pq",children:"https://godoc.org/github.com/lib/pq"}),"."]}),(0,a.jsx)(t.p,{children:"If you specify a database name and it does not exist, the server will attempt to create it."}),(0,a.jsxs)(t.p,{children:["If you only supply ",(0,a.jsx)(t.code,{children:"postgres://"}),"  as the endpoint, K3s will attempt to do the following:"]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Connect to localhost using ",(0,a.jsx)(t.code,{children:"postgres"})," as the username and password"]}),"\n",(0,a.jsxs)(t.li,{children:["Create a database named ",(0,a.jsx)(t.code,{children:"kubernetes"})]}),"\n"]})]}),(0,a.jsxs)(s,{value:"MySQL / MariaDB",children:[(0,a.jsxs)(t.p,{children:["In its most common form, the ",(0,a.jsx)(t.code,{children:"datastore-endpoint"})," parameter for MySQL and MariaDB has the following format:"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"mysql://username:password@tcp(hostname:3306)/database-name"})}),(0,a.jsxs)(t.p,{children:["More advanced configuration parameters are available. For more information on these, please see ",(0,a.jsx)(t.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"})]}),(0,a.jsxs)(t.p,{children:["Note that due to a ",(0,a.jsx)(t.a,{href:"https://github.com/k3s-io/k3s/issues/1093",children:"known issue"})," in K3s, you cannot set the ",(0,a.jsx)(t.code,{children:"tls"}),' parameter. TLS communication is supported, but you cannot, for example, set this parameter to "skip-verify" to cause K3s to skip certificate verification.']}),(0,a.jsx)(t.p,{children:"If you specify a database name and it does not exist, the server will attempt to create it."}),(0,a.jsxs)(t.p,{children:["If you only supply ",(0,a.jsx)(t.code,{children:"mysql://"})," as the endpoint, K3s will attempt to do the following:"]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Connect to the MySQL socket at ",(0,a.jsx)(t.code,{children:"/var/run/mysqld/mysqld.sock"})," using the ",(0,a.jsx)(t.code,{children:"root"})," user and no password"]}),"\n",(0,a.jsxs)(t.li,{children:["Create a database with the name ",(0,a.jsx)(t.code,{children:"kubernetes"})]}),"\n"]})]}),(0,a.jsxs)(s,{value:"etcd",children:[(0,a.jsxs)(t.p,{children:["In its most common form, the ",(0,a.jsx)(t.code,{children:"datastore-endpoint"})," parameter for etcd has the following format:"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379"})}),(0,a.jsx)(t.p,{children:"The above assumes a typical three node etcd cluster. The parameter can accept one more comma separated etcd URLs."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>n});var a=s(7294);const r={},o=a.createContext(r);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);