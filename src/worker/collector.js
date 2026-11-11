import{snapshot as s}from"../sources/snapshot.js";let e=null;try{e=typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):null}catch{}self.postMessage(s(self,e));
