export function diffSnapshots(t,i){const o=[];for(const n of Object.keys(t))t[n]===null||i[n]===null||i[n]===void 0||String(t[n])!==String(i[n])&&o.push({field:n,main:t[n],other:i[n]});return o}
