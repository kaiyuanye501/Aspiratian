function m(e,o=[]){const a={};let i;for(const t of e){const r=t.materialId&&t.materialId!==i?o.find(d=>d.id===t.materialId):void 0;r&&(a[t.id]=r),i=t.materialId}return a}export{m};
