import{U2 as e,_q as t,fX as n,mq as r,pq as i,yq as a}from"./main-uHRHOkhm.js";function o(e){return e==null?null:typeof e==`bigint`?Number(e):typeof e==`number`&&!Number.isNaN(e)?e:null}function s(e,t){return t===n.Documentsdb||t===n.Vectorsdb?e.documentSecurity===!0:e.rowSecurity===!0}async function c(e,c,l){let u=await a(e,c,l);if(!u)throw Error(`Database not found`);let d=u.type??n.Tablesdb,f=await t(e,c,l,0,1e3),p=await Promise.all((f.tables||[]).map(async t=>{let n=String(t.$id??``),[a,u]=await Promise.all([i(e,c,l,n),r(e,c,l,n)]),f=(a.columns||[]).map(e=>({key:String(e.key??e.$id??``),type:String(e.type||`string`),required:e.required===!0,array:e.array===!0,size:o(e.size)??null,default:e.default??null,format:e.format||void 0,elements:e.elements||void 0,min:o(e.min)??null,max:o(e.max)??null,relatedTable:e.relatedTable||e.relatedCollection||void 0,relatedColumn:e.relatedColumn||e.relatedAttribute||void 0,relationType:e.relationType||e.relation||void 0})),p=(u.indexes||[]).map(e=>({key:String(e.key??e.$id??``),type:String(e.type||`key`),attributes:e.attributes||[],orders:e.orders||void 0}));return{id:n,name:String(t.name||`Unnamed Table`),enabled:t.enabled!==!1,rowSecurity:s(t,d),columns:f,indexes:p}}));return{database:{id:u.$id,name:u.name||`Unnamed Database`},tables:p}}function l(e,t){return typeof t==`bigint`?t.toString():t}function u(e){return JSON.stringify(e,l,2)}function d(e){let t=`# Database Schema: ${e.database.name}\n\n`;if(t+=`**Database ID:** \`${e.database.id}\`\n\n`,t+=`## Tables

`,e.tables.length===0)return t+=`No tables found.
`,t;for(let n of e.tables){if(t+=`### ${n.name}\n\n`,t+=`**Table ID:** \`${n.id}\`\n\n`,t+=`**Status:** ${n.enabled?`Enabled`:`Disabled`}  \n`,t+=`**Row Security:** ${n.rowSecurity?`Enabled`:`Disabled`}\n\n`,n.columns.length>0){t+=`#### Columns

`,t+=`| Column | Type | Required | Default | Size | Format | Description |
`,t+=`|--------|------|----------|---------|------|--------|------------|
`;for(let e of n.columns){let n=e.array?`${e.type}[]`:e.type,r=e.required?`Yes`:`No`,i=e.default===null?`-`:`\`${e.default}\``,a=e.size?e.size.toString():`-`,o=e.format||`-`,s=``;e.relatedTable&&(s=`Relation to \`${e.relatedTable}\``,e.relatedColumn&&(s+=`.\`${e.relatedColumn}\``),e.relationType&&(s+=` (${e.relationType})`)),t+=`| \`${e.key}\` | ${n} | ${r} | ${i} | ${a} | ${o} | ${s||`-`} |\n`}t+=`
`}if(n.indexes.length>0){t+=`#### Indexes

`,t+=`| Index | Type | Attributes |
`,t+=`|-------|------|------------|
`;for(let e of n.indexes){let n=e.attributes.join(`, `);t+=`| \`${e.key}\` | ${e.type} | ${n} |\n`}t+=`
`}t+=`---

`}return t}function f(e){let t=`// Database Schema: ${e.database.name}\n`;if(t+=`// Database ID: ${e.database.id}\n\n`,t+=`import type { Models } from '@appwrite.io/console'

`,e.tables.length===0)return t+=`// No tables found.
`,t;for(let n of e.tables){let e=`${p(n.name)}Row`;t+=`export type ${e} = Models.Row & {\n`;for(let e of n.columns){let n=m(e),r=e.required?``:`?`;t+=`  ${e.key}${r}: ${n}\n`}t+=`}

`}return t}function p(e){return e.replace(/[^a-zA-Z0-9]/g,` `).split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(``).replace(/^[a-z]/,e=>e.toUpperCase())}function m(e){let t=`string`;switch(e.type){case`string`:case`varchar`:case`text`:case`mediumtext`:case`longtext`:t=`string`;break;case`integer`:case`bigint`:case`double`:t=`number`;break;case`boolean`:t=`boolean`;break;case`datetime`:t=`string`;break;case`email`:case`url`:case`ip`:t=`string`;break;case`relationship`:t=`string`;break;default:t=`any`}return e.array?`${t}[]`:e.required?t:`${t} | null`}function h(t){let n=typeof window<`u`&&(e()||window.matchMedia(`(prefers-color-scheme: dark)`).matches),r=n?`#242424`:`#ffffff`,i=n?`#ffffff`:`#000000`,a=n?`#444444`:`#b3b3b3`,o=n?`#2a2a2a`:`#f0f0f0`,s=Math.ceil(Math.sqrt(t.tables.length)),c=Math.ceil(t.tables.length/s),l=s*250+(s-1)*50+100,u=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${l}" height="${c*200+(c-1)*50+100}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .table-header { font-weight: 500; font-size: 13px; }
      .column-name { font-size: 12px; }
      .column-type { font-size: 10px; opacity: 0.8; }
    </style>
  </defs>
  <rect width="100%" height="100%" fill="${r}" />
  
  <text x="${l/2}" y="30" text-anchor="middle" font-size="18" font-weight="600" fill="${i}">
    ${g(t.database.name)}
  </text>
`;return t.tables.forEach((e,t)=>{let n=t%s,c=Math.floor(t/s),l=50+n*300,d=110+c*250;u+=`  <rect x="${l}" y="${d}" width="250" height="200" rx="8" fill="${r}" stroke="${a}" stroke-width="1" />\n`,u+=`  <rect x="${l}" y="${d}" width="250" height="40" rx="8" fill="${o}" />\n`,u+=`  <line x1="${l}" y1="${d+40}" x2="${l+250}" y2="${d+40}" stroke="${a}" stroke-width="1" />\n`,u+=`  <text x="${l+12}" y="${d+26}" class="table-header" fill="${i}">${g(e.name)}</text>\n`,e.columns.slice(0,5).forEach((e,t)=>{let n=d+50+t*25;u+=`  <text x="${l+12}" y="${n}" class="column-name" fill="${i}">${g(e.key)}</text>\n`,u+=`  <text x="${l+250-12}" y="${n}" class="column-type" text-anchor="end" fill="${i}">${g(e.type)}</text>\n`}),e.columns.length>5&&(u+=`  <text x="${l+250/2}" y="${d+200-10}" text-anchor="middle" font-size="10" fill="${i}" opacity="0.6">+${e.columns.length-5} more</text>\n`)}),u+=`</svg>`,u}function g(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`)}function _(e){let t=`Here is my database schema:\n\n${u(e)}\n\nHelp me understand and work with this database structure.`;return`cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(t)}`}function v(e){let t=`Here is my database schema:\n\n${u(e)}\n\nHelp me understand and work with this database structure.`;return`https://lovable.dev/?autosubmit=true#prompt=${encodeURIComponent(t)}`}function y(e){let t=`Here is my database schema:\n\n${d(e)}\n\nHelp me understand and work with this database structure.`;return`https://chatgpt.com/?prompt=${encodeURIComponent(t)}`}function b(e){let t=`Here is my database schema:\n\n${d(e)}\n\nHelp me understand and work with this database structure.`;return`https://claude.ai/new?q=${encodeURIComponent(t)}`}function x(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}function S(e,t,n=`text/plain`){x(new Blob([e],{type:n}),t)}export{d as a,y as c,v as d,u as i,b as l,x as n,h as o,c as r,f as s,S as t,_ as u};