import{r as $i,u as vd,j as bn,F as xd,a as Md,s as Ed,c as Sd,T as bd}from"./index-EzTrLEm7.js";const il=40;function tx({label:n,src:e,onClose:t,paging:i}){const[s,r]=$i.useState(!0),a=$i.useRef(null),o=$i.useRef(null),c=$i.useCallback(()=>r(!1),[]);vd(a),$i.useEffect(()=>{const p=v=>{v.key==="Escape"?c():i&&v.key==="ArrowLeft"&&i.canPrev?i.onPrev():i&&v.key==="ArrowRight"&&i.canNext&&i.onNext()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[c,i]);const l=p=>{o.current=p.touches[0]?.clientX??null},u=p=>{const v=o.current;if(o.current=null,v==null||!i)return;const S=(p.changedTouches[0]?.clientX??v)-v;S<=-il&&i.canNext?i.onNext():S>=il&&i.canPrev&&i.onPrev()},d=i?`${i.index+1} / ${i.total}`:"",h=i?`${n}, photo ${i.index+1} of ${i.total}`:n;return bn.jsx(xd,{open:s,onClose:t,toolbarOverlaid:!0,className:"photo-tour-fs-sheet",a11yLabel:h,toolbarContent:bn.jsx(Sd,{navigation:"back",onNavigationClick:c,background:!1,actionsSlotVisible:!!i,actionsSlot:i?bn.jsx(bd,{className:"photo-tour-fs__counter",size:"300",text:d}):void 0}),children:bn.jsx("div",{className:"photo-tour-fs",ref:a,onTouchStart:l,onTouchEnd:u,children:bn.jsxs("figure",{className:"photo-tour-fs__figure",children:[bn.jsx("div",{className:"photo-tour-fs__image-wrap",children:bn.jsx("img",{className:"photo-tour-fs__image",src:Md(e),alt:n,decoding:"async"})}),n&&bn.jsx("figcaption",{className:"photo-tour-fs__caption",children:bn.jsx(Ed,{size:"m",text:n})})]})})})}const go="184",yd=0,sl=1,Td=2,nr=1,wd=2,ss=3,ei=0,Nt=1,Pn=2,In=0,Bi=1,rl=2,al=3,ol=4,Ad=5,ci=100,Cd=101,Rd=102,Pd=103,Ld=104,Id=200,Dd=201,Ud=202,Nd=203,pa=204,ma=205,Fd=206,Od=207,Bd=208,zd=209,Hd=210,Vd=211,kd=212,Gd=213,Wd=214,ga=0,_a=1,va=2,Vi=3,xa=4,Ma=5,Ea=6,Sa=7,mc=0,Xd=1,Yd=2,vn=0,_o=1,gc=2,_c=3,vc=4,xc=5,Mc=6,Ec=7,Sc=300,di=301,ki=302,Fr=303,Or=304,Er=306,ba=1e3,Ln=1001,ya=1002,wt=1003,qd=1004,Is=1005,At=1006,Br=1007,Zn=1008,$t=1009,bc=1010,yc=1011,xs=1012,vo=1013,Mn=1014,mn=1015,Fn=1016,xo=1017,Mo=1018,Ms=1020,Tc=35902,wc=35899,Ac=1021,Cc=1022,sn=1023,On=1026,ui=1027,Rc=1028,Eo=1029,fi=1030,So=1031,bo=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ta=35840,wa=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Ia=37488,Da=37489,hr=37490,Ua=37491,Na=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ha=37813,Va=37814,ka=37815,Ga=37816,Wa=37817,Xa=37818,Ya=37819,qa=37820,Za=37821,ja=36492,$a=36494,Ka=36495,Ja=36283,Qa=36284,ur=36285,eo=36286,Zd=3200,ll=0,jd=1,qn="",Zt="srgb",Es="srgb-linear",dr="linear",je="srgb",xi=7680,cl=519,$d=512,Kd=513,Jd=514,yo=515,Qd=516,ef=517,To=518,tf=519,hl=35044,ul="300 es",gn=2e3,fr=2001;function nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sf(){const n=Ss("canvas");return n.style.display="block",n}const dl={};function fl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Pc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=Pc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function to(...n){const e=n.join(" ");e in dl||(dl[e]=!0,Te(...n))}function rf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const af={[ga]:_a,[va]:Ea,[xa]:Sa,[Vi]:Ma,[_a]:ga,[Ea]:va,[Sa]:xa,[Ma]:Vi};class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const os=Math.PI/180,bs=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function wo(n,e){return(n%e+e)%e}function of(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function lf(n,e,t){return n!==e?(t-n)/(e-n):0}function ls(n,e,t){return(1-t)*n+t*e}function cf(n,e,t,i){return ls(n,e,1-Math.exp(-t*i))}function hf(n,e=1){return e-Math.abs(wo(n,e*2)-e)}function uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function df(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ff(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pf(n,e){return n+Math.random()*(e-n)}function mf(n){return n*(.5-Math.random())}function gf(n){n!==void 0&&(pl=n);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(n){return n*os}function vf(n){return n*bs}function xf(n){return(n&n-1)===0&&n!==0}function Mf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),v=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*v,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*v,o*l);break;case"ZYZ":n.set(c*v,c*p,o*u,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:os,RAD2DEG:bs,generateUUID:qi,clamp:He,euclideanModulo:wo,mapLinear:of,inverseLerp:lf,lerp:ls,damp:cf,pingpong:hf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:_f,radToDeg:vf,isPowerOfTwo:xf,ceilPowerOfTwo:Mf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Sf,normalize:It,denormalize:Ui},Wo=class Wo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wo.prototype.isVector2=!0;let Xe=Wo;class mi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],v=r[a+2],S=r[a+3];if(d!==S||c!==h||l!==p||u!==v){let m=c*h+l*p+u*v+d*S;m<0&&(h=-h,p=-p,v=-v,S=-S,m=-m);let f=1-o;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);f=Math.sin(f*E)/T,o=Math.sin(o*E)/T,c=c*f+h*o,l=l*f+p*o,u=u*f+v*o,d=d*f+S*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+v*o,d=d*f+S*o;const E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+c*p-l*h,e[t+1]=c*v+u*h+l*d-o*p,e[t+2]=l*v+u*p+o*h-c*d,e[t+3]=u*v-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*p*v,this._y=l*p*d-h*u*v,this._z=l*u*v+h*p*d,this._w=l*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+l*p*v,this._y=l*p*d-h*u*v,this._z=l*u*v-h*p*d,this._w=l*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-l*p*v,this._y=l*p*d+h*u*v,this._z=l*u*v+h*p*d,this._w=l*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-l*p*v,this._y=l*p*d+h*u*v,this._z=l*u*v-h*p*d,this._w=l*u*d+h*p*v;break;case"YZX":this._x=h*u*d+l*p*v,this._y=l*p*d+h*u*v,this._z=l*u*v-h*p*d,this._w=l*u*d-h*p*v;break;case"XZY":this._x=h*u*d-l*p*v,this._y=l*p*d-h*u*v,this._z=l*u*v+h*p*d,this._w=l*u*d+h*p*v;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xo=class Xo{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xo.prototype.isVector3=!0;let F=Xo;const zr=new F,ml=new mi,Yo=class Yo{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],S=s[0],m=s[3],f=s[6],E=s[1],T=s[4],y=s[7],P=s[2],b=s[5],L=s[8];return r[0]=a*S+o*E+c*P,r[3]=a*m+o*T+c*b,r[6]=a*f+o*y+c*L,r[1]=l*S+u*E+d*P,r[4]=l*m+u*T+d*b,r[7]=l*f+u*y+d*L,r[2]=h*S+p*E+v*P,r[5]=h*m+p*T+v*b,r[8]=h*f+p*y+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,p=l*r-a*c,v=t*d+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(s*l-u*i)*S,e[2]=(o*i-s*a)*S,e[3]=h*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yo.prototype.isMatrix3=!0;let Re=Yo;const Hr=new Re,gl=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:e,whitePoint:i,transfer:dr,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const ze=bf();function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mi;class yf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mi===void 0&&(Mi=Ss("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Mi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class Ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vr(s[a].image)):r.push(Vr(s[a]))}else r=Vr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Vr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let wf=0;const kr=new F;class Lt extends pi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ln,s=Ln,r=At,a=Zn,o=sn,c=$t,l=Lt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=qi(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kr).x}get height(){return this.source.getSize(kr).y}get depth(){return this.source.getSize(kr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Sc;Lt.DEFAULT_ANISOTROPY=1;const qo=class qo{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],v=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(p+1)/2,P=(f+1)/2,b=(u+h)/4,L=(d+S)/4,x=(v+m)/4;return T>y&&T>P?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=L/i):y>P?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=x/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=x/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-v)*(m-v)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(d-S)/E,this.z=(h-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qo.prototype.isVector4=!0;let ft=qo;class Af extends pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Lt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ao(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Af{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lc extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mr=class Mr{constructor(e,t,i,s,r,a,o,c,l,u,d,h,p,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,d,h,p,v,S,m)}set(e,t,i,s,r,a,o,c,l,u,d,h,p,v,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,S=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+v*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=v+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,v=l*u,S=l*d;t[0]=h+S*o,t[4]=v*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,v=l*u,S=l*d;t[0]=h-S*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,S=o*d;t[0]=c*u,t[4]=v*l-p,t[8]=h*l+S,t[1]=c*d,t[5]=S*l+h,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,v=o*c,S=o*l;t[0]=c*u,t[4]=S-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+v,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*c,p=a*l,v=o*c,S=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+S,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Pf)}lookAt(e,t,i){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Vn.crossVectors(i,zt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Vn.crossVectors(i,zt)),Vn.normalize(),Ds.crossVectors(zt,Vn),s[0]=Vn.x,s[4]=Ds.x,s[8]=zt.x,s[1]=Vn.y,s[5]=Ds.y,s[9]=zt.y,s[2]=Vn.z,s[6]=Ds.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],f=i[14],E=i[3],T=i[7],y=i[11],P=i[15],b=s[0],L=s[4],x=s[8],w=s[12],U=s[1],C=s[5],z=s[9],W=s[13],Y=s[2],D=s[6],V=s[10],k=s[14],J=s[3],Q=s[7],ce=s[11],ve=s[15];return r[0]=a*b+o*U+c*Y+l*J,r[4]=a*L+o*C+c*D+l*Q,r[8]=a*x+o*z+c*V+l*ce,r[12]=a*w+o*W+c*k+l*ve,r[1]=u*b+d*U+h*Y+p*J,r[5]=u*L+d*C+h*D+p*Q,r[9]=u*x+d*z+h*V+p*ce,r[13]=u*w+d*W+h*k+p*ve,r[2]=v*b+S*U+m*Y+f*J,r[6]=v*L+S*C+m*D+f*Q,r[10]=v*x+S*z+m*V+f*ce,r[14]=v*w+S*W+m*k+f*ve,r[3]=E*b+T*U+y*Y+P*J,r[7]=E*L+T*C+y*D+P*Q,r[11]=E*x+T*z+y*V+P*ce,r[15]=E*w+T*W+y*k+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],f=e[15],E=c*p-l*h,T=o*p-l*d,y=o*h-c*d,P=a*p-l*u,b=a*h-c*u,L=a*d-o*u;return t*(S*E-m*T+f*y)-i*(v*E-m*P+f*b)+s*(v*T-S*P+f*L)-r*(v*y-S*b+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],f=e[15],E=t*o-i*a,T=t*c-s*a,y=t*l-r*a,P=i*c-s*o,b=i*l-r*o,L=s*l-r*c,x=u*S-d*v,w=u*m-h*v,U=u*f-p*v,C=d*m-h*S,z=d*f-p*S,W=h*f-p*m,Y=E*W-T*z+y*C+P*U-b*w+L*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/Y;return e[0]=(o*W-c*z+l*C)*D,e[1]=(s*z-i*W-r*C)*D,e[2]=(S*L-m*b+f*P)*D,e[3]=(h*b-d*L-p*P)*D,e[4]=(c*U-a*W-l*w)*D,e[5]=(t*W-s*U+r*w)*D,e[6]=(m*y-v*L-f*T)*D,e[7]=(u*L-h*y+p*T)*D,e[8]=(a*z-o*U+l*x)*D,e[9]=(i*U-t*z-r*x)*D,e[10]=(v*b-S*y+f*E)*D,e[11]=(d*y-u*b-p*E)*D,e[12]=(o*w-a*C-c*x)*D,e[13]=(t*C-i*w+s*x)*D,e[14]=(S*T-v*P-m*E)*D,e[15]=(u*P-d*T+h*E)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,p=r*u,v=r*d,S=a*u,m=a*d,f=o*d,E=c*l,T=c*u,y=c*d,P=i.x,b=i.y,L=i.z;return s[0]=(1-(S+f))*P,s[1]=(p+y)*P,s[2]=(v-T)*P,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+f))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(v+T)*L,s[9]=(m-E)*L,s[10]=(1-(h+S))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length();const o=Ei.set(s[4],s[5],s[6]).length(),c=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jt.copy(this);const l=1/a,u=1/o,d=1/c;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=gn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let v,S;if(c)v=r/(a-r),S=a*r/(a-r);else if(o===gn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===fr)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=gn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,S;if(c)v=1/(a-r),S=a/(a-r);else if(o===gn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===fr)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Mr.prototype.isMatrix4=!0;let pt=Mr;const Ei=new F,Jt=new pt,Rf=new F(0,0,0),Pf=new F(1,1,1),Vn=new F,Ds=new F,zt=new F,vl=new pt,xl=new mi;class ti{constructor(e=0,t=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Ml=new F,Si=new mi,yn=new pt,Us=new F,Ki=new F,If=new F,Df=new mi,El=new F(1,0,0),Sl=new F(0,1,0),bl=new F(0,0,1),yl={type:"added"},Uf={type:"removed"},bi={type:"childadded",child:null},Gr={type:"childremoved",child:null};class Gt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new ti,i=new mi,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Re}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Us.copy(e):Us.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ki,Us,this.up):yn.lookAt(Us,Ki,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),bi.child=e,this.dispatchEvent(bi),bi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;l.inputState.pinching&&h>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ze.workingColorSpace){if(e=wo(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xr(a,r,e+1/3),this.g=Xr(a,r,e),this.b=Xr(a,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Ic[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ze.workingToColorSpace(Pt.copy(this),e),Math.round(He(Pt.r*255,0,255))*65536+Math.round(He(Pt.g*255,0,255))*256+Math.round(He(Pt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Zt){ze.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Ns);const i=ls(kn.h,Ns.h,t),s=ls(kn.s,Ns.s,t),r=ls(kn.l,Ns.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new et;et.NAMES=Ic;class Tl extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new F,Tn=new F,Yr=new F,wn=new F,yi=new F,Ti=new F,wl=new F,qr=new F,Zr=new F,jr=new F,$r=new ft,Kr=new ft,Jr=new ft;class nn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qt.subVectors(s,t),Tn.subVectors(i,t),Yr.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(Tn),c=Qt.dot(Yr),l=Tn.dot(Tn),u=Tn.dot(Yr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,v=(a*u-o*c)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return $r.setScalar(0),Kr.setScalar(0),Jr.setScalar(0),$r.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,i),Jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($r,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(e,t,i,s){return Qt.subVectors(i,t),Tn.subVectors(e,t),Qt.cross(Tn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),Qt.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,i),Ti.subVectors(r,i),qr.subVectors(e,i);const c=yi.dot(qr),l=Ti.dot(qr);if(c<=0&&l<=0)return t.copy(i);Zr.subVectors(e,s);const u=yi.dot(Zr),d=Ti.dot(Zr);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(yi,a);jr.subVectors(e,r);const p=yi.dot(jr),v=Ti.dot(jr);if(v>=0&&p<=v)return t.copy(r);const S=p*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(Ti,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return wl.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(wl,o);const f=1/(m+S+h);return a=S*f,o=h*f,t.copy(i).addScaledVector(yi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Os.subVectors(this.max,Ji),wi.subVectors(e.a,Ji),Ai.subVectors(e.b,Ji),Ci.subVectors(e.c,Ji),Gn.subVectors(Ai,wi),Wn.subVectors(Ci,Ai),si.subVectors(wi,Ci);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!Qr(t,wi,Ai,Ci,Os)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,wi,Ai,Ci,Os))?!1:(Bs.crossVectors(Gn,Wn),t=[Bs.x,Bs.y,Bs.z],Qr(t,wi,Ai,Ci,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],en=new F,Fs=new Zi,wi=new F,Ai=new F,Ci=new F,Gn=new F,Wn=new F,si=new F,Ji=new F,Os=new F,Bs=new F,ri=new F;function Qr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ri.fromArray(n,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const mt=new F,zs=new Xe;let Ff=0;class xn extends pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Of=new Zi,Qi=new F,ea=new F;class Ro{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Of.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(ea)),this.expandByPoint(Qi.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bf=0;const Yt=new pt,ta=new Gt,Ri=new F,Ht=new Zi,es=new Zi,Et=new F;class En extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?Uc:Dc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Re().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,es.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,es.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(es.min),Ht.expandByPoint(es.max))}Ht.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(e,l),Et.add(Ri)),s=Math.max(s,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new F,c[x]=new F;const l=new F,u=new F,d=new F,h=new Xe,p=new Xe,v=new Xe,S=new F,m=new F;function f(x,w,U){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,U),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,U),u.sub(l),d.sub(l),p.sub(h),v.sub(h);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),o[x].add(S),o[w].add(S),o[U].add(S),c[x].add(m),c[w].add(m),c[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,w=E.length;x<w;++x){const U=E[x],C=U.start,z=U.count;for(let W=C,Y=C+z;W<Y;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new F,y=new F,P=new F,b=new F;function L(x){P.fromBufferAttribute(s,x),b.copy(P);const w=o[x];T.copy(w),T.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(b,w);const C=y.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,w=E.length;x<w;++x){const U=E[x],C=U.start,z=U.count;for(let W=C,Y=C+z;W<Y;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,v=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let f=0;f<u;f++)h[v++]=l[p++]}return new xn(h,u,d)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zf=0;class Sr extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Bi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pa&&(i.blendSrc=this.blendSrc),this.blendDst!==ma&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cn=new F,na=new F,Hs=new F,Xn=new F,ia=new F,Vs=new F,sa=new F;class Nc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){na.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=Xn.dot(this.direction),c=-Xn.dot(Hs),l=Xn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*c-o,h=a*o-c,v=r*u,d>=0)if(h>=-v)if(h<=v){const S=1/u;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=v?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(na).addScaledVector(Hs,h),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,s,r){ia.subVectors(t,e),Vs.subVectors(i,e),sa.crossVectors(ia,Vs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const c=o*this.direction.dot(Vs.crossVectors(Xn,Vs));if(c<0)return null;const l=o*this.direction.dot(ia.cross(Xn));if(l<0||c+l>a)return null;const u=-o*Xn.dot(sa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ts extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Al=new pt,ai=new Nc,ks=new Ro,Cl=new F,Gs=new F,Ws=new F,Xs=new F,ra=new F,Ys=new F,Rl=new F,qs=new F;class Wt extends Gt{constructor(e=new En,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(ra.fromBufferAttribute(d,e),a?Ys.addScaledVector(ra,u):Ys.addScaledVector(ra.sub(t),u))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(ks.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ks,Cl)===null||ai.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Al),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const m=h[v],f=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,P=T;y<P;y+=3){const b=o.getX(y),L=o.getX(y+1),x=o.getX(y+2);s=Zs(this,f,e,i,l,u,d,b,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=v,f=S;m<f;m+=3){const E=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=Zs(this,a,e,i,l,u,d,E,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const m=h[v],f=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,P=T;y<P;y+=3){const b=y,L=y+1,x=y+2;s=Zs(this,f,e,i,l,u,d,b,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=v,f=S;m<f;m+=3){const E=m,T=m+1,y=m+2;s=Zs(this,a,e,i,l,u,d,E,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Hf(n,e,t,i,s,r,a,o){let c;if(e.side===Nt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ei,o),c===null)return null;qs.copy(o),qs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:n}}function Zs(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Gs),n.getVertexPosition(c,Ws),n.getVertexPosition(l,Xs);const u=Hf(n,e,t,i,Gs,Ws,Xs,Rl);if(u){const d=new F;nn.getBarycoord(Rl,Gs,Ws,Xs,d),s&&(u.uv=nn.getInterpolatedAttribute(s,o,c,l,d,new Xe)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,c,l,d,new Xe)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};nn.getNormal(Gs,Ws,Xs,h.normal),u.face=h,u.barycoord=d}return u}class Vf extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=wt,u=wt,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const aa=new F,kf=new F,Gf=new Re;class li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=aa.subVectors(i,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ro,Wf=new Xe(.5,.5),js=new F;class Po{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,a=new li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],v=r[8],S=r[9],m=r[10],f=r[11],E=r[12],T=r[13],y=r[14],P=r[15];if(s[0].setComponents(l-a,p-u,f-v,P-E).normalize(),s[1].setComponents(l+a,p+u,f+v,P+E).normalize(),s[2].setComponents(l+o,p+d,f+S,P+T).normalize(),s[3].setComponents(l-o,p-d,f-S,P-T).normalize(),i)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,p-h,f-m,P-y).normalize();else if(s[4].setComponents(l-c,p-h,f-m,P-y).normalize(),t===gn)s[5].setComponents(l+c,p+h,f+m,P+y).normalize();else if(t===fr)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Wf.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fc extends Lt{constructor(e=[],t=di,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gi extends Lt{constructor(e,t,i=Mn,s,r,a,o=wt,c=wt,l,u=On,d=1){if(u!==On&&u!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xf extends Gi{constructor(e,t=Mn,i=di,s,r,a=wt,o=wt,c,l=On){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Oc extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ws extends En{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function v(S,m,f,E,T,y,P,b,L,x,w){const U=y/L,C=P/x,z=y/2,W=P/2,Y=b/2,D=L+1,V=x+1;let k=0,J=0;const Q=new F;for(let ce=0;ce<V;ce++){const ve=ce*C-W;for(let Se=0;Se<D;Se++){const ke=Se*U-z;Q[S]=ke*E,Q[m]=ve*T,Q[f]=Y,l.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[f]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Se/L),d.push(1-ce/x),k+=1}}for(let ce=0;ce<x;ce++)for(let ve=0;ve<L;ve++){const Se=h+ve+D*ce,ke=h+ve+D*(ce+1),$e=h+(ve+1)+D*(ce+1),Ie=h+(ve+1)+D*ce;c.push(Se,ke,Ie),c.push(ke,$e,Ie),J+=6}o.addGroup(p,J,w),p+=J,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class br extends En{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,p=[],v=[],S=[],m=[];for(let f=0;f<u;f++){const E=f*h-a;for(let T=0;T<l;T++){const y=T*d-r;v.push(y,-E,0),S.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const T=E+l*f,y=E+l*(f+1),P=E+1+l*(f+1),b=E+1+l*f;p.push(T,y,b),p.push(y,P,b)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(S,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wi extends En{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new F,h=new F,p=[],v=[],S=[],m=[];for(let f=0;f<=i;f++){const E=[],T=f/i;let y=0;f===0&&a===0?y=.5/t:f===i&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const b=P/t;d.x=-e*Math.cos(s+b*r)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(s+b*r)*Math.sin(a+T*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(b+y,1-T),E.push(l++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){const T=u[f][E+1],y=u[f][E],P=u[f+1][E],b=u[f+1][E+1];(f!==0||a>0)&&p.push(T,y,b),(f!==i-1||c<Math.PI)&&p.push(y,P,b)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(S,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Pl(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Pl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const s in i)e[s]=i[s]}return e}function Pl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const qf={clone:Xi,merge:Dt};var Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $f extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kf extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jf extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $n={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ll(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ll(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ll(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Qf{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],v=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ep=new Qf;let Lo=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class tp extends Error{constructor(e,t){super(e),this.response=t}}class np extends Lo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$n.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Rn[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,v=p!==0;let S=0;const m=new ReadableStream({start(f){E();function E(){d.read().then(({done:T,value:y})=>{if(T)f.close();else{S+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:p});for(let b=0,L=u.length;b<L;b++){const x=u[b];x.onProgress&&x.onProgress(P)}f.enqueue(y),E()}},T=>{f.error(T)})}}});return new Response(m)}else throw new tp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(v=>p.decode(v))}}}).then(l=>{$n.add(`file:${e}`,l);const u=Rn[e];delete Rn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Rn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Pi=new WeakMap;class ip extends Lo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$n.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Pi.get(a);d===void 0&&(d=[],Pi.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ss("img");function c(){u(),t&&t(this);const d=Pi.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}Pi.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),$n.remove(`image:${e}`);const h=Pi.get(this)||[];for(let p=0;p<h.length;p++){const v=h[p];v.onError&&v.onError(d)}Pi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}const $s=new F,Ks=new mi,hn=new F;class zc extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Ks,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose($s,Ks,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new F,Il=new Xe,Dl=new Xe;class jt extends zc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Dl),t.subVectors(Dl,Il)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hc extends zc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=-90,Ii=1;class sp extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Li,Ii,e,t);s.layers=this.layers,this.add(s);const r=new jt(Li,Ii,e,t);r.layers=this.layers,this.add(r);const a=new jt(Li,Ii,e,t);a.layers=this.layers,this.add(a);const o=new jt(Li,Ii,e,t);o.layers=this.layers,this.add(o);const c=new jt(Li,Ii,e,t);c.layers=this.layers,this.add(c);const l=new jt(Li,Ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class rp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ul=new pt;class ap{constructor(e,t,i=0,s=1/0){this.ray=new Nc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,i=[]){return no(e,this,i,t),i.sort(Nl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)no(e[s],this,i,t);return i.sort(Nl),i}}function Nl(n,e){return n.distance-e.distance}function no(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)no(r[a],e,t,!0)}}const Zo=class Zo{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Zo.prototype.isMatrix2=!0;let Fl=Zo;function Ol(n,e,t,i){const s=op(i);switch(t){case Ac:return n*e;case Rc:return n*e/s.components*s.byteLength;case Eo:return n*e/s.components*s.byteLength;case fi:return n*e*2/s.components*s.byteLength;case So:return n*e*2/s.components*s.byteLength;case Cc:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case bo:return n*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ca:return Math.max(n,16)*Math.max(e,8)/4;case Ta:case Aa:return Math.max(n,8)*Math.max(e,8)/2;case Ra:case Pa:case Ia:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case hr:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ja:case $a:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ja:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ur:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function op(n){switch(n){case $t:case bc:return{byteLength:1,components:1};case xs:case yc:case Fn:return{byteLength:2,components:1};case xo:case Mo:return{byteLength:2,components:4};case Mn:case vo:case mn:return{byteLength:4,components:1};case Tc:case wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function Vc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],S=d[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const S=d[p];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:Mp,bsdfs:Ep,iridescence_fragment:Sp,bumpmap_pars_fragment:bp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Cp,color_pars_fragment:Rp,color_pars_vertex:Pp,color_vertex:Lp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:Hp,envmap_fragment:Vp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:tm,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:qp,fog_fragment:Zp,fog_pars_fragment:jp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Kp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,lightprobes_pars_fragment:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:xm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Sm,morphcolor_vertex:bm,morphnormal_vertex:ym,morphtarget_pars_vertex:Tm,morphtarget_vertex:wm,normal_fragment_begin:Am,normal_fragment_maps:Cm,normal_pars_fragment:Rm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:Hm,dithering_fragment:Vm,dithering_pars_fragment:km,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:Ym,shadowmap_vertex:qm,shadowmask_pars_fragment:Zm,skinbase_vertex:jm,skinning_pars_vertex:$m,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:ag,uv_vertex:og,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distance_vert:_g,distance_frag:vg,equirect_vert:xg,equirect_frag:Mg,linedashed_vert:Eg,linedashed_frag:Sg,meshbasic_vert:bg,meshbasic_frag:yg,meshlambert_vert:Tg,meshlambert_frag:wg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Ig,meshphysical_vert:Dg,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:Fg,points_vert:Og,points_frag:Bg,shadow_vert:zg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:kg},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},pn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};pn.physical={uniforms:Dt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Js={r:0,b:0,g:0},Gg=new pt,kc=new Re;kc.set(-1,0,0,0,1,0,0,0,1);function Wg(n,e,t,i,s,r){const a=new et(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function p(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){const y=E.backgroundBlurriness>0;T=e.get(T,y)}return T}function v(E){let T=!1;const y=p(E);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,T){const y=p(T);y&&(y.isCubeTexture||y.mapping===Er)?(l===void 0&&(l=new Wt(new ws(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Xi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kc),l.material.toneMapped=ze.getTransfer(y.colorSpace)!==je,(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Wt(new br(2,2),new an({name:"BackgroundMaterial",uniforms:Xi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ze.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,T){E.getRGB(Js,Bc(n)),t.buffers.color.setClear(Js.r,Js.g,Js.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:v,addToRenderList:S,dispose:f}}function Xg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(C,z,W,Y,D){let V=!1;const k=d(C,Y,W,z);r!==k&&(r=k,l(r.object)),V=p(C,Y,W,D),V&&v(C,Y,W,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(C,z,W,Y),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,z,W,Y){const D=Y.wireframe===!0;let V=i[z.id];V===void 0&&(V={},i[z.id]=V);const k=C.isInstancedMesh===!0?C.id:0;let J=V[k];J===void 0&&(J={},V[k]=J);let Q=J[W.id];Q===void 0&&(Q={},J[W.id]=Q);let ce=Q[D];return ce===void 0&&(ce=h(c()),Q[D]=ce),ce}function h(C){const z=[],W=[],Y=[];for(let D=0;D<t;D++)z[D]=0,W[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:Y,object:C,attributes:{},index:null}}function p(C,z,W,Y){const D=r.attributes,V=z.attributes;let k=0;const J=W.getAttributes();for(const Q in J)if(J[Q].location>=0){const ve=D[Q];let Se=V[Q];if(Se===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;k++}return r.attributesNum!==k||r.index!==Y}function v(C,z,W,Y){const D={},V=z.attributes;let k=0;const J=W.getAttributes();for(const Q in J)if(J[Q].location>=0){let ve=V[Q];ve===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),D[Q]=Se,k++}r.attributes=D,r.attributesNum=k,r.index=Y}function S(){const C=r.newAttributes;for(let z=0,W=C.length;z<W;z++)C[z]=0}function m(C){f(C,0)}function f(C,z){const W=r.newAttributes,Y=r.enabledAttributes,D=r.attributeDivisors;W[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),D[C]!==z&&(n.vertexAttribDivisor(C,z),D[C]=z)}function E(){const C=r.newAttributes,z=r.enabledAttributes;for(let W=0,Y=z.length;W<Y;W++)z[W]!==C[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function T(C,z,W,Y,D,V,k){k===!0?n.vertexAttribIPointer(C,z,W,D,V):n.vertexAttribPointer(C,z,W,Y,D,V)}function y(C,z,W,Y){S();const D=Y.attributes,V=W.getAttributes(),k=z.defaultAttributeValues;for(const J in V){const Q=V[J];if(Q.location>=0){let ce=D[J];if(ce===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const ve=ce.normalized,Se=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const $e=ke.buffer,Ie=ke.type,j=ke.bytesPerElement,de=Ie===n.INT||Ie===n.UNSIGNED_INT||ce.gpuType===vo;if(ce.isInterleavedBufferAttribute){const ie=ce.data,ye=ie.stride,Ce=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)f(Q.location+we,ie.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<Q.locationSize;we++)m(Q.location+we);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let we=0;we<Q.locationSize;we++)T(Q.location+we,Se/Q.locationSize,Ie,ve,ye*j,(Ce+Se/Q.locationSize*we)*j,de)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)f(Q.location+ie,ce.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ie=0;ie<Q.locationSize;ie++)T(Q.location+ie,Se/Q.locationSize,Ie,ve,Se*j,Se/Q.locationSize*ie*j,de)}}else if(k!==void 0){const ve=k[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Q.location,ve);break;case 3:n.vertexAttrib3fv(Q.location,ve);break;case 4:n.vertexAttrib4fv(Q.location,ve);break;default:n.vertexAttrib1fv(Q.location,ve)}}}}E()}function P(){w();for(const C in i){const z=i[C];for(const W in z){const Y=z[W];for(const D in Y){const V=Y[D];for(const k in V)u(V[k].object),delete V[k];delete Y[D]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const z=i[C.id];for(const W in z){const Y=z[W];for(const D in Y){const V=Y[D];for(const k in V)u(V[k].object),delete V[k];delete Y[D]}}delete i[C.id]}function L(C){for(const z in i){const W=i[z];for(const Y in W){const D=W[Y];if(D[C.id]===void 0)continue;const V=D[C.id];for(const k in V)u(V[k].object),delete V[k];delete D[C.id]}}}function x(C){for(const z in i){const W=i[z],Y=C.isInstancedMesh===!0?C.id:0,D=W[Y];if(D!==void 0){for(const V in D){const k=D[V];for(const J in k)u(k[J].object),delete k[J];delete D[V]}delete W[Y],Object.keys(W).length===0&&delete i[z]}}}function w(){U(),a=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Yg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==sn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const x=L===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$t&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==mn&&!x)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Te("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,maxSamples:P,samples:b}}function Zg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new li,o=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,T=E*4;let y=f.clippingState||null;c.value=y,y=u(v,h,T,p);for(let P=0;P!==T;++P)y[P]=t[P];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,v!==!0||m===null){const f=p+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,y=p;T!==S;++T,y+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const jn=4,Bl=[.125,.215,.35,.446,.526,.582],hi=20,jg=256,ts=new Hc,zl=new et;let oa=null,la=0,ca=0,ha=!1;const $g=new F;class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=$g}=r;oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ha,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Fn,format:sn,colorSpace:Es,depthBuffer:!1},s=Vl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Qg(r,e,t),this._ggxMaterial=Jg(r,e,t)}return s}_compileMaterial(e){const t=new Wt(new En,e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,i,s,r){const c=new jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(zl),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new ws,new Ts({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,f=!0):(m.color.copy(zl),f=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const P=this._cubeSize;Di(s,y*P,T>2?P:0,P,P),d.setRenderTarget(s),f&&d.render(S,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===di||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Di(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ts)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-jn?i-v+jn:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,Di(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(o,ts),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-i,Di(e,m,f,3*S,2*S),s.setRenderTarget(e),s.render(o,ts)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),S=r/v,m=isFinite(r)?1+Math.floor(u*S):hi;m>hi&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let E=0;for(let L=0;L<hi;++L){const x=L/S,w=Math.exp(-x*x/2);f.push(w),L===0?E+=w:L<m&&(E+=2*w)}for(let L=0;L<f.length;L++)f[L]=f[L]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=v,h.mipInt.value=T-i;const y=this._sizeLods[s],P=3*y*(s>T-jn?s-T+jn:0),b=4*(this._cubeSize-y);Di(t,P,b,3*y,2*y),c.setRenderTarget(t),c.render(d,ts)}}function Kg(n){const e=[],t=[],i=[];let s=n;const r=n-jn+1+Bl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-jn?c=Bl[a-n+jn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,S=3,m=2,f=1,E=new Float32Array(S*v*p),T=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let b=0;b<p;b++){const L=b%3*2/3-1,x=b>2?0:-1,w=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];E.set(w,S*v*b),T.set(h,m*v*b);const U=[b,b,b,b,b,b];y.set(U,f*v*b)}const P=new En;P.setAttribute("position",new xn(E,S)),P.setAttribute("uv",new xn(T,m)),P.setAttribute("faceIndex",new xn(y,f)),i.push(new Wt(P,null)),s>jn&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Vl(n,e,t){const i=new rn(n,e,t);return i.texture.mapping=Er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Di(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jg(n,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qg(n,e,t){const i=new Float32Array(hi),s=new F(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function kl(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Gl(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function yr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gc extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ws(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:In});r.uniforms.tEquirect.value=t;const a=new Wt(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=At),new sp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function e_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Fr||p===Or)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const S=new Gc(v.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,v=p===Fr||p===Or,S=p===di||p===ki;if(v||S){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Hl(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return v&&E&&E.height>0||S&&E&&c(E)?(i===null&&(i=new Hl(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Fr?h.mapping=di:p===Or&&(h.mapping=ki),h}function c(h){let p=0;const v=6;for(let S=0;S<v;S++)h[S]!==void 0&&p++;return p===v}function l(h){const p=h.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function t_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&to("WebGLRenderer: "+i+" extension not supported."),s}}}function n_(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,v=d.attributes.position;let S=0;if(v===void 0)return;if(p!==null){const E=p.array;S=p.version;for(let T=0,y=E.length;T<y;T+=3){const P=E[T+0],b=E[T+1],L=E[T+2];h.push(P,b,b,L,L,P)}}else{const E=v.array;S=v.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const P=T+0,b=T+1,L=T+2;h.push(P,b,b,L,L,P)}}const m=new(v.count>=65535?Uc:Dc)(h,1);m.version=S;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function i_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function l(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function s_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r_(n,e,t){const i=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),S===!0&&(T=3);let y=o.attributes.position.count*T,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*P*4*d),L=new Lc(b,y,P,d);L.type=mn,L.needsUpdate=!0;const x=T*4;for(let U=0;U<d;U++){const C=m[U],z=f[U],W=E[U],Y=y*P*4*U;for(let D=0;D<C.count;D++){const V=D*x;p===!0&&(s.fromBufferAttribute(C,D),b[Y+V+0]=s.x,b[Y+V+1]=s.y,b[Y+V+2]=s.z,b[Y+V+3]=0),v===!0&&(s.fromBufferAttribute(z,D),b[Y+V+4]=s.x,b[Y+V+5]=s.y,b[Y+V+6]=s.z,b[Y+V+7]=0),S===!0&&(s.fromBufferAttribute(W,D),b[Y+V+8]=s.x,b[Y+V+9]=s.y,b[Y+V+10]=s.z,b[Y+V+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Xe(y,P)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<l.length;S++)p+=l[S];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function a_(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const o_={[_o]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[vc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function l_(n,e,t,i,s){const r=new rn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Gi(e,t):void 0}),a=new rn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new En;o.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new $f({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Wt(o,c),u=new Hc(-1,1,1,-1,0,1);let d=null,h=null,p=!1,v,S=null,m=[],f=!1;this.setSize=function(E,T){r.setSize(E,T),a.setSize(E,T);for(let y=0;y<m.length;y++){const P=m[y];P.setSize&&P.setSize(E,T)}},this.setEffects=function(E){m=E,f=m.length>0&&m[0].isRenderPass===!0;const T=r.width,y=r.height;for(let P=0;P<m.length;P++){const b=m[P];b.setSize&&b.setSize(T,y)}},this.begin=function(E,T){if(p||E.toneMapping===vn&&m.length===0)return!1;if(S=T,T!==null){const y=T.width,P=T.height;(r.width!==y||r.height!==P)&&this.setSize(y,P)}return f===!1&&E.setRenderTarget(r),v=E.toneMapping,E.toneMapping=vn,!0},this.hasRenderPass=function(){return f},this.end=function(E,T){E.toneMapping=v,p=!0;let y=r,P=a;for(let b=0;b<m.length;b++){const L=m[b];if(L.enabled!==!1&&(L.render(E,P,y,T),L.needsSwap!==!1)){const x=y;y=P,P=x}}if(d!==E.outputColorSpace||h!==E.toneMapping){d=E.outputColorSpace,h=E.toneMapping,c.defines={},ze.getTransfer(d)===je&&(c.defines.SRGB_TRANSFER="");const b=o_[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(S),E.render(l,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Wc=new Lt,io=new Gi(1,1),Xc=new Lc,Yc=new Cf,qc=new Fc,Wl=[],Xl=[],Yl=new Float32Array(16),ql=new Float32Array(9),Zl=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wl[s];if(r===void 0&&(r=new Float32Array(s),Wl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tr(n,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Zl.set(i),n.uniformMatrix2fv(this.addr,!1,Zl),Mt(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),Mt(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Yl.set(i),n.uniformMatrix4fv(this.addr,!1,Yl),Mt(t,i)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function M_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(io.compareFunction=t.isReversedDepthBuffer()?To:yo,r=io):r=Wc,t.setTexture2D(e||r,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yc,s)}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qc,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xc,s)}function C_(n){switch(n){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return M_;case 36294:return E_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function L_(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function I_(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U_(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F_(n,e){n.uniform1iv(this.addr,e)}function O_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function z_(n,e){n.uniform4iv(this.addr,e)}function H_(n,e){n.uniform1uiv(this.addr,e)}function V_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function G_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=io:a=Wc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function X_(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yc,r[a])}function Y_(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qc,r[a])}function q_(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xc,r[a])}function Z_(n){switch(n){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return V_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return q_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class $_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z_(t.type)}}class K_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function jl(n,e){n.seq.push(e),n.map[e.id]=e}function J_(n,e,t){const i=n.name,s=i.length;for(ua.lastIndex=0;;){const r=ua.exec(i),a=ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jl(t,l===void 0?new j_(o,n,e):new $_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new K_(o),jl(t,d)),t=d}}}class or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);J_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function $l(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let ev=0;function tv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Kl=new Re;function nv(n){ze._getMatrix(Kl,ze.workingColorSpace,n);const e=`mat3( ${Kl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(n)){case dr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(e),o)}else return r}function iv(n,e){const t=nv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sv={[_o]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[vc]:"ACESFilmic",[Mc]:"AgX",[Ec]:"Neutral",[xc]:"Custom"};function rv(n,e){const t=sv[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new F;function av(){ze.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rs(n){return n!==""}function Ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(n){return n.replace(hv,dv)}const uv=new Map;function dv(n,e){let t=Ue[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=Ue[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return so(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(fv,pv)}function pv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mv={[nr]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function gv(n){return mv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _v={[di]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE_UV"};function vv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_v[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xv={[ki]:"ENVMAP_MODE_REFRACTION"};function Mv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ev={[mc]:"ENVMAP_BLENDING_MULTIPLY",[Xd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function Sv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[n.combine]||"ENVMAP_BLENDING_NONE"}function bv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=gv(t),l=vv(t),u=Mv(t),d=Sv(t),h=bv(t),p=ov(t),v=lv(r),S=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rs).join(`
`),f.length>0&&(f+=`
`)):(m=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),f=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=so(a),a=Ql(a,t),a=ec(a,t),o=so(o),o=Ql(o,t),o=ec(o,t),a=tc(a),o=tc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=E+m+a,y=E+f+o,P=$l(s,s.VERTEX_SHADER,T),b=$l(s,s.FRAGMENT_SHADER,y);s.attachShader(S,P),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function L(C){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(P)||"",Y=s.getShaderInfoLog(b)||"",D=z.trim(),V=W.trim(),k=Y.trim();let J=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,P,b);else{const ce=Jl(s,P,"vertex"),ve=Jl(s,b,"fragment");Ve("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+ce+`
`+ve)}else D!==""?Te("WebGLProgram: Program Info Log:",D):(V===""||k==="")&&(Q=!1);Q&&(C.diagnostics={runnable:J,programLog:D,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(P),s.deleteShader(b),x=new or(s,S),w=cv(s,S)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,Q_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=b,this}let Tv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Av(e),t.set(e,i)),i}}class Av{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}}function Cv(n){return n===fi||n===hr||n===ur}function Rv(n,e,t,i,s,r){const a=new Co,o=new wv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,w,U,C,z,W){const Y=C.fog,D=z.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||V,k),Q=J&&J.mapping===Er?J.image.height:null,ce=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ve=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Se=ve!==void 0?ve.length:0;let ke=0;D.morphAttributes.position!==void 0&&(ke=1),D.morphAttributes.normal!==void 0&&(ke=2),D.morphAttributes.color!==void 0&&(ke=3);let $e,Ie,j,de;if(ce){const Pe=pn[ce];$e=Pe.vertexShader,Ie=Pe.fragmentShader}else $e=x.vertexShader,Ie=x.fragmentShader,o.update(x),j=o.getVertexShaderID(x),de=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,at=!!x.map,Oe=!!x.matcap,Ke=!!J,rt=!!x.aoMap,Fe=!!x.lightMap,_t=!!x.bumpMap,ot=!!x.normalMap,Ot=!!x.displacementMap,R=!!x.emissiveMap,vt=!!x.metalnessMap,Be=!!x.roughnessMap,it=x.anisotropy>0,oe=x.clearcoat>0,lt=x.dispersion>0,M=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,q=it&&!!x.anisotropyMap,K=oe&&!!x.clearcoatMap,ee=oe&&!!x.clearcoatNormalMap,ae=oe&&!!x.clearcoatRoughnessMap,G=M&&!!x.iridescenceMap,Z=M&&!!x.iridescenceThicknessMap,fe=g&&!!x.sheenColorMap,ge=g&&!!x.sheenRoughnessMap,se=!!x.specularMap,te=!!x.specularColorMap,Ae=!!x.specularIntensityMap,De=N&&!!x.transmissionMap,We=N&&!!x.thicknessMap,A=!!x.gradientMap,ne=!!x.alphaMap,X=x.alphaTest>0,pe=!!x.alphaHash,re=!!x.extensions;let $=vn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($=n.toneMapping);const Me={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:Ie,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:at,matcap:Oe,envMap:Ke,envMapMode:Ke&&J.mapping,envMapCubeUVHeight:Q,aoMap:rt,lightMap:Fe,bumpMap:_t,normalMap:ot,displacementMap:Ot,emissiveMap:R,normalMapObjectSpace:ot&&x.normalMapType===jd,normalMapTangentSpace:ot&&x.normalMapType===ll,packedNormalMap:ot&&x.normalMapType===ll&&Cv(x.normalMap.format),metalnessMap:vt,roughnessMap:Be,anisotropy:it,anisotropyMap:q,clearcoat:oe,clearcoatMap:K,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,dispersion:lt,iridescence:M,iridescenceMap:G,iridescenceThicknessMap:Z,sheen:g,sheenColorMap:fe,sheenRoughnessMap:ge,specularMap:se,specularColorMap:te,specularIntensityMap:Ae,transmission:N,transmissionMap:De,thicknessMap:We,gradientMap:A,opaque:x.transparent===!1&&x.blending===Bi&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:pe,combine:x.combine,mapUv:at&&v(x.map.channel),aoMapUv:rt&&v(x.aoMap.channel),lightMapUv:Fe&&v(x.lightMap.channel),bumpMapUv:_t&&v(x.bumpMap.channel),normalMapUv:ot&&v(x.normalMap.channel),displacementMapUv:Ot&&v(x.displacementMap.channel),emissiveMapUv:R&&v(x.emissiveMap.channel),metalnessMapUv:vt&&v(x.metalnessMap.channel),roughnessMapUv:Be&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:K&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(x.sheenRoughnessMap.channel),specularMapUv:se&&v(x.specularMap.channel),specularColorMapUv:te&&v(x.specularColorMap.channel),specularIntensityMapUv:Ae&&v(x.specularIntensityMap.channel),transmissionMapUv:De&&v(x.transmissionMap.channel),thicknessMapUv:We&&v(x.thicknessMap.channel),alphaMapUv:ne&&v(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ot||it),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(at||ne),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:$,decodeVideoTexture:at&&x.map.isVideoTexture===!0&&ze.getTransfer(x.map.colorSpace)===je,decodeVideoTextureEmissive:R&&x.emissiveMap.isVideoTexture===!0&&ze.getTransfer(x.emissiveMap.colorSpace)===je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)w.push(U),w.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(w,x),E(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function T(x){const w=p[x.type];let U;if(w){const C=pn[w];U=qf.clone(C.uniforms)}else U=x.uniforms;return U}function y(x,w){let U=u.get(w);return U!==void 0?++U.usedTimes:(U=new yv(n,w,x,s),l.push(U),u.set(w,U)),U}function P(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:P,releaseShaderCache:b,programs:l,dispose:L}}function Pv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,S,m,f){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:f},n[e]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=v,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=m,E.group=f),e++,E}function c(h,p,v,S,m,f){const E=o(h,p,v,S,m,f);v.transmission>0?i.push(E):v.transparent===!0?s.push(E):t.push(E)}function l(h,p,v,S,m,f){const E=o(h,p,v,S,m,f);v.transmission>0?i.unshift(E):v.transparent===!0?s.unshift(E):t.unshift(E)}function u(h,p){t.length>1&&t.sort(h||Lv),i.length>1&&i.sort(p||ic),s.length>1&&s.sort(p||ic)}function d(){for(let h=e,p=n.length;h<p;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Iv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new sc,n.set(i,[a])):s>=r.length?(a=new sc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new et};break;case"SpotLight":t={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Uv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Nv=0;function Fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ov(n){const e=new Dv,t=Uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new pt,a=new pt;function o(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,S=0,m=0,f=0,E=0,T=0,y=0,P=0,b=0,L=0;l.sort(Fv);for(let w=0,U=l.length;w<U;w++){const C=l[w],z=C.color,W=C.intensity,Y=C.distance;let D=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===fi?D=C.shadow.map.texture:D=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=z.r*W,d+=z.g*W,h+=z.b*W;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],W);L++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=C.shadow.matrix,E++}i.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(z).multiplyScalar(W),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[S]=V;const k=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,k.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[S]=k.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=D,y++}S++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=D,i.pointShadowMatrix[v]=C.shadow.matrix,T++}i.point[v]=V,v++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(W),V.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==E||x.numPointShadows!==T||x.numSpotShadows!==y||x.numSpotMaps!==P||x.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=L,x.directionalLength=p,x.pointLength=v,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=E,x.numPointShadows=T,x.numSpotShadows=y,x.numSpotMaps=P,x.numLightProbes=L,i.version=Nv++)}function c(l,u){let d=0,h=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const T=l[f];if(T.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(T.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:i}}function rc(n){const e=new Ov(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Bv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rc(n),e.set(s,[o])):r>=a.length?(o=new rc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],kv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ac=new pt,ns=new F,da=new F;function Gv(n,e,t){let i=new Po;const s=new Xe,r=new Xe,a=new ft,o=new Kf,c=new Jf,l={},u=t.maxTextureSize,d={[ei]:Nt,[Nt]:ei,[Pn]:Pn},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:zv,fragmentShader:Hv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Wt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let f=this.type;this.render=function(b,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===wd&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nr);const w=n.getRenderTarget(),U=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(In),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=f!==this.type;W&&L.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(D=>D.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,D=b.length;Y<D;Y++){const V=b[Y],k=V.shadow;if(k===void 0){Te("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();s.multiply(J),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,k.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Q,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ss){if(V.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new rn(s.x,s.y,{format:fi,type:Fn,minFilter:At,magFilter:At,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Gi(s.x,s.y,mn),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=On,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt}else V.isPointLight?(k.map=new Gc(s.x),k.map.depthTexture=new Xf(s.x,Mn)):(k.map=new rn(s.x,s.y),k.map.depthTexture=new Gi(s.x,s.y,Mn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=On,this.type===nr?(k.map.depthTexture.compareFunction=Q?To:yo,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt);k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ce;ve++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(k.map),n.clear());const Se=k.getViewport(ve);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),z.viewport(a)}if(V.isPointLight){const Se=k.camera,ke=k.matrix,$e=V.distance||Se.far;$e!==Se.far&&(Se.far=$e,Se.updateProjectionMatrix()),ns.setFromMatrixPosition(V.matrixWorld),Se.position.copy(ns),da.copy(Se.position),da.add(Vv[ve]),Se.up.copy(kv[ve]),Se.lookAt(da),Se.updateMatrixWorld(),ke.makeTranslation(-ns.x,-ns.y,-ns.z),ac.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ac,Se.coordinateSystem,Se.reversedDepth)}else k.updateMatrices(V);i=k.getFrustum(),y(L,x,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===ss&&E(k,x),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,U,C)};function E(b,L){const x=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new rn(s.x,s.y,{format:fi,type:Fn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(L,null,x,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(L,null,x,p,S,null)}function T(b,L,x,w){let U=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)U=C;else if(U=x.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const z=U.uuid,W=L.uuid;let Y=l[z];Y===void 0&&(Y={},l[z]=Y);let D=Y[W];D===void 0&&(D=U.clone(),Y[W]=D,L.addEventListener("dispose",P)),U=D}if(U.visible=L.visible,U.wireframe=L.wireframe,w===ss?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const z=n.properties.get(U);z.light=x}return U}function y(b,L,x,w,U){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===ss)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const W=e.update(b),Y=b.material;if(Array.isArray(Y)){const D=W.groups;for(let V=0,k=D.length;V<k;V++){const J=D[V],Q=Y[J.materialIndex];if(Q&&Q.visible){const ce=T(b,Q,w,U);b.onBeforeShadow(n,b,L,x,W,ce,J),n.renderBufferDirect(x,null,W,ce,b,J),b.onAfterShadow(n,b,L,x,W,ce,J)}}}else if(Y.visible){const D=T(b,Y,w,U);b.onBeforeShadow(n,b,L,x,W,D,null),n.renderBufferDirect(x,null,W,D,b,null),b.onAfterShadow(n,b,L,x,W,D,null)}}const z=b.children;for(let W=0,Y=z.length;W<Y;W++)y(z[W],L,x,w,U)}function P(b){b.target.removeEventListener("dispose",P);for(const x in l){const w=l[x],U=b.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}function Wv(n,e){function t(){let A=!1;const ne=new ft;let X=null;const pe=new ft(0,0,0,0);return{setMask:function(re){X!==re&&!A&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){A=re},setClear:function(re,$,Me,Pe,ht){ht===!0&&(re*=Pe,$*=Pe,Me*=Pe),ne.set(re,$,Me,Pe),pe.equals(ne)===!1&&(n.clearColor(re,$,Me,Pe),pe.copy(ne))},reset:function(){A=!1,X=null,pe.set(-1,0,0,0)}}}function i(){let A=!1,ne=!1,X=null,pe=null,re=null;return{setReversed:function($){if(ne!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const Pe=re;re=null,this.setClear(Pe)}},getReversed:function(){return ne},setTest:function($){$?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function($){X!==$&&!A&&(n.depthMask($),X=$)},setFunc:function($){if(ne&&($=af[$]),pe!==$){switch($){case ga:n.depthFunc(n.NEVER);break;case _a:n.depthFunc(n.ALWAYS);break;case va:n.depthFunc(n.LESS);break;case Vi:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case Ma:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case Sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=$}},setLocked:function($){A=$},setClear:function($){re!==$&&(re=$,ne&&($=1-$),n.clearDepth($))},reset:function(){A=!1,X=null,pe=null,re=null,ne=!1}}}function s(){let A=!1,ne=null,X=null,pe=null,re=null,$=null,Me=null,Pe=null,ht=null;return{setTest:function(Je){A||(Je?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!A&&(n.stencilMask(Je),ne=Je)},setFunc:function(Je,Sn,ln){(X!==Je||pe!==Sn||re!==ln)&&(n.stencilFunc(Je,Sn,ln),X=Je,pe=Sn,re=ln)},setOp:function(Je,Sn,ln){($!==Je||Me!==Sn||Pe!==ln)&&(n.stencilOp(Je,Sn,ln),$=Je,Me=Sn,Pe=ln)},setLocked:function(Je){A=Je},setClear:function(Je){ht!==Je&&(n.clearStencil(Je),ht=Je)},reset:function(){A=!1,ne=null,X=null,pe=null,re=null,$=null,Me=null,Pe=null,ht=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,v=[],S=null,m=!1,f=null,E=null,T=null,y=null,P=null,b=null,L=null,x=new et(0,0,0),w=0,U=!1,C=null,z=null,W=null,Y=null,D=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=J>=2);let ce=null,ve={};const Se=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),$e=new ft().fromArray(Se),Ie=new ft().fromArray(ke);function j(A,ne,X,pe){const re=new Uint8Array(4),$=n.createTexture();n.bindTexture(A,$),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<X;Me++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ne+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return $}const de={};de[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Vi),_t(!1),ot(sl),ie(n.CULL_FACE),rt(In);function ie(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function ye(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function Ce(A,ne){return h[A]!==ne?(n.bindFramebuffer(A,ne),h[A]=ne,A===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ne),A===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function we(A,ne){let X=v,pe=!1;if(A){X=p.get(ne),X===void 0&&(X=[],p.set(ne,X));const re=A.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Me=re.length;$<Me;$++)X[$]=n.COLOR_ATTACHMENT0+$;X.length=re.length,pe=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,pe=!0);pe&&n.drawBuffers(X)}function at(A){return S!==A?(n.useProgram(A),S=A,!0):!1}const Oe={[ci]:n.FUNC_ADD,[Cd]:n.FUNC_SUBTRACT,[Rd]:n.FUNC_REVERSE_SUBTRACT};Oe[Pd]=n.MIN,Oe[Ld]=n.MAX;const Ke={[Id]:n.ZERO,[Dd]:n.ONE,[Ud]:n.SRC_COLOR,[pa]:n.SRC_ALPHA,[Hd]:n.SRC_ALPHA_SATURATE,[Bd]:n.DST_COLOR,[Fd]:n.DST_ALPHA,[Nd]:n.ONE_MINUS_SRC_COLOR,[ma]:n.ONE_MINUS_SRC_ALPHA,[zd]:n.ONE_MINUS_DST_COLOR,[Od]:n.ONE_MINUS_DST_ALPHA,[Vd]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[Gd]:n.CONSTANT_ALPHA,[Wd]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(A,ne,X,pe,re,$,Me,Pe,ht,Je){if(A===In){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),A!==Ad){if(A!==f||Je!==U){if((E!==ci||P!==ci)&&(n.blendEquation(n.FUNC_ADD),E=ci,P=ci),Je)switch(A){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",A);break}else switch(A){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case al:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",A);break}T=null,y=null,b=null,L=null,x.set(0,0,0),w=0,f=A,U=Je}return}re=re||ne,$=$||X,Me=Me||pe,(ne!==E||re!==P)&&(n.blendEquationSeparate(Oe[ne],Oe[re]),E=ne,P=re),(X!==T||pe!==y||$!==b||Me!==L)&&(n.blendFuncSeparate(Ke[X],Ke[pe],Ke[$],Ke[Me]),T=X,y=pe,b=$,L=Me),(Pe.equals(x)===!1||ht!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,ht),x.copy(Pe),w=ht),f=A,U=!1}function Fe(A,ne){A.side===Pn?ye(n.CULL_FACE):ie(n.CULL_FACE);let X=A.side===Nt;ne&&(X=!X),_t(X),A.blending===Bi&&A.transparent===!1?rt(In):rt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const pe=A.stencilWrite;o.setTest(pe),pe&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),R(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(A){C!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),C=A)}function ot(A){A!==yd?(ie(n.CULL_FACE),A!==z&&(A===sl?n.cullFace(n.BACK):A===Td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),z=A}function Ot(A){A!==W&&(k&&n.lineWidth(A),W=A)}function R(A,ne,X){A?(ie(n.POLYGON_OFFSET_FILL),(Y!==ne||D!==X)&&(Y=ne,D=X,a.getReversed()&&(ne=-ne),n.polygonOffset(ne,X))):ye(n.POLYGON_OFFSET_FILL)}function vt(A){A?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Be(A){A===void 0&&(A=n.TEXTURE0+V-1),ce!==A&&(n.activeTexture(A),ce=A)}function it(A,ne,X){X===void 0&&(ce===null?X=n.TEXTURE0+V-1:X=ce);let pe=ve[X];pe===void 0&&(pe={type:void 0,texture:void 0},ve[X]=pe),(pe.type!==A||pe.texture!==ne)&&(ce!==X&&(n.activeTexture(X),ce=X),n.bindTexture(A,ne||de[A]),pe.type=A,pe.texture=ne)}function oe(){const A=ve[ce];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(A){Ve("WebGLState:",A)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(A){Ve("WebGLState:",A)}}function g(){try{n.texSubImage2D(...arguments)}catch(A){Ve("WebGLState:",A)}}function N(){try{n.texSubImage3D(...arguments)}catch(A){Ve("WebGLState:",A)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(A){Ve("WebGLState:",A)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(A){Ve("WebGLState:",A)}}function ee(){try{n.texStorage2D(...arguments)}catch(A){Ve("WebGLState:",A)}}function ae(){try{n.texStorage3D(...arguments)}catch(A){Ve("WebGLState:",A)}}function G(){try{n.texImage2D(...arguments)}catch(A){Ve("WebGLState:",A)}}function Z(){try{n.texImage3D(...arguments)}catch(A){Ve("WebGLState:",A)}}function fe(A){return d[A]!==void 0?d[A]:n.getParameter(A)}function ge(A,ne){d[A]!==ne&&(n.pixelStorei(A,ne),d[A]=ne)}function se(A){$e.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),$e.copy(A))}function te(A){Ie.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Ie.copy(A))}function Ae(A,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let pe=X.get(A);pe===void 0&&(pe=n.getUniformBlockIndex(ne,A.name),X.set(A,pe))}function De(A,ne){const pe=l.get(ne).get(A);c.get(ne)!==pe&&(n.uniformBlockBinding(ne,pe,A.__bindingPointIndex),c.set(ne,pe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ce=null,ve={},h={},p=new WeakMap,v=[],S=null,m=!1,f=null,E=null,T=null,y=null,P=null,b=null,L=null,x=new et(0,0,0),w=0,U=!1,C=null,z=null,W=null,Y=null,D=null,$e.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:Ce,drawBuffers:we,useProgram:at,setBlending:rt,setMaterial:Fe,setFlipSided:_t,setCullFace:ot,setLineWidth:Ot,setPolygonOffset:R,setScissorTest:vt,activeTexture:Be,bindTexture:it,unbindTexture:oe,compressedTexImage2D:lt,compressedTexImage3D:M,texImage2D:G,texImage3D:Z,pixelStorei:ge,getParameter:fe,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:ee,texStorage3D:ae,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:se,viewport:te,reset:We}}function Xv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,g){return v?new OffscreenCanvas(M,g):Ss("canvas")}function m(M,g,N){let q=1;const K=lt(M);if((K.width>N||K.height>N)&&(q=N/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ee=Math.floor(q*K.width),ae=Math.floor(q*K.height);h===void 0&&(h=S(ee,ae));const G=g?S(ee,ae):h;return G.width=ee,G.height=ae,G.getContext("2d").drawImage(M,0,0,ee,ae),Te("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ee+"x"+ae+")."),G}else return"data"in M&&Te("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function f(M){return M.generateMipmaps}function E(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,g,N,q,K,ee=!1){if(M!==null){if(n[M]!==void 0)return n[M];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=g;if(g===n.RED&&(N===n.FLOAT&&(G=n.R32F),N===n.HALF_FLOAT&&(G=n.R16F),N===n.UNSIGNED_BYTE&&(G=n.R8),N===n.UNSIGNED_SHORT&&ae&&(G=ae.R16_EXT),N===n.SHORT&&ae&&(G=ae.R16_SNORM_EXT)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.R8UI),N===n.UNSIGNED_SHORT&&(G=n.R16UI),N===n.UNSIGNED_INT&&(G=n.R32UI),N===n.BYTE&&(G=n.R8I),N===n.SHORT&&(G=n.R16I),N===n.INT&&(G=n.R32I)),g===n.RG&&(N===n.FLOAT&&(G=n.RG32F),N===n.HALF_FLOAT&&(G=n.RG16F),N===n.UNSIGNED_BYTE&&(G=n.RG8),N===n.UNSIGNED_SHORT&&ae&&(G=ae.RG16_EXT),N===n.SHORT&&ae&&(G=ae.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RG8UI),N===n.UNSIGNED_SHORT&&(G=n.RG16UI),N===n.UNSIGNED_INT&&(G=n.RG32UI),N===n.BYTE&&(G=n.RG8I),N===n.SHORT&&(G=n.RG16I),N===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RGB8UI),N===n.UNSIGNED_SHORT&&(G=n.RGB16UI),N===n.UNSIGNED_INT&&(G=n.RGB32UI),N===n.BYTE&&(G=n.RGB8I),N===n.SHORT&&(G=n.RGB16I),N===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),N===n.UNSIGNED_INT&&(G=n.RGBA32UI),N===n.BYTE&&(G=n.RGBA8I),N===n.SHORT&&(G=n.RGBA16I),N===n.INT&&(G=n.RGBA32I)),g===n.RGB&&(N===n.UNSIGNED_SHORT&&ae&&(G=ae.RGB16_EXT),N===n.SHORT&&ae&&(G=ae.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),g===n.RGBA){const Z=ee?dr:ze.getTransfer(K);N===n.FLOAT&&(G=n.RGBA32F),N===n.HALF_FLOAT&&(G=n.RGBA16F),N===n.UNSIGNED_BYTE&&(G=Z===je?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&ae&&(G=ae.RGBA16_EXT),N===n.SHORT&&ae&&(G=ae.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function P(M,g){let N;return M?g===null||g===Mn||g===Ms?N=n.DEPTH24_STENCIL8:g===mn?N=n.DEPTH32F_STENCIL8:g===xs&&(N=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mn||g===Ms?N=n.DEPTH_COMPONENT24:g===mn?N=n.DEPTH_COMPONENT32F:g===xs&&(N=n.DEPTH_COMPONENT16),N}function b(M,g){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function L(M){const g=M.target;g.removeEventListener("dispose",L),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(M){const g=M.target;g.removeEventListener("dispose",x),C(g)}function w(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,q=p.get(N);if(q){const K=q[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(M),Object.keys(q).length===0&&p.delete(N)}i.remove(M)}function U(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const N=M.source,q=p.get(N);delete q[g.__cacheKey],a.memory.textures--}function C(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let K=0;K<g.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[q][K]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=M.textures;for(let q=0,K=N.length;q<K;q++){const ee=i.get(N[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(M)}let z=0;function W(){z=0}function Y(){return z}function D(M){z=M}function V(){const M=z;return M>=s.maxTextures&&Te("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),z+=1,M}function k(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function J(M,g){const N=i.get(M);if(M.isVideoTexture&&it(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const q=M.image;if(q===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,M,g);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function Q(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ye(N,M,g);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function ce(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ye(N,M,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function ve(M,g){const N=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Ce(N,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const Se={[ba]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ke={[wt]:n.NEAREST,[qd]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[Br]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},$e={[$d]:n.NEVER,[tf]:n.ALWAYS,[Kd]:n.LESS,[yo]:n.LEQUAL,[Jd]:n.EQUAL,[To]:n.GEQUAL,[Qd]:n.GREATER,[ef]:n.NOTEQUAL};function Ie(M,g){if(g.type===mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===Br||g.magFilter===Is||g.magFilter===Zn||g.minFilter===At||g.minFilter===Br||g.minFilter===Is||g.minFilter===Zn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Se[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Se[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Se[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ke[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ke[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,$e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wt||g.minFilter!==Is&&g.minFilter!==Zn||g.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function j(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",L));const q=g.source;let K=p.get(q);K===void 0&&(K={},p.set(q,K));const ee=k(g);if(ee!==M.__cacheKey){K[ee]===void 0&&(K[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[ee].usedTimes++;const ae=K[M.__cacheKey];ae!==void 0&&(K[M.__cacheKey].usedTimes--,ae.usedTimes===0&&U(g)),M.__cacheKey=ee,M.__webglTexture=K[ee].texture}return N}function de(M,g,N){return Math.floor(Math.floor(M/N)/g)}function ie(M,g,N,q){const ee=M.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,N,q,g.data);else{ee.sort((ge,se)=>ge.start-se.start);let ae=0;for(let ge=1;ge<ee.length;ge++){const se=ee[ae],te=ee[ge],Ae=se.start+se.count,De=de(te.start,g.width,4),We=de(se.start,g.width,4);te.start<=Ae+1&&De===We&&de(te.start+te.count-1,g.width,4)===De?se.count=Math.max(se.count,te.start+te.count-se.start):(++ae,ee[ae]=te)}ee.length=ae+1;const G=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ge=0,se=ee.length;ge<se;ge++){const te=ee[ge],Ae=Math.floor(te.start/4),De=Math.ceil(te.count/4),We=Ae%g.width,A=Math.floor(Ae/g.width),ne=De,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,A),t.texSubImage2D(n.TEXTURE_2D,0,We,A,ne,X,N,q,g.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,G),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function ye(M,g,N){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const K=j(M,g),ee=g.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+N);const ae=i.get(ee);if(ee.version!==ae.__version||K===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const X=ze.getPrimaries(ze.workingColorSpace),pe=g.colorSpace===qn?null:ze.getPrimaries(g.colorSpace),re=g.colorSpace===qn||X===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=m(g.image,!1,s.maxTextureSize);Z=oe(g,Z);const fe=r.convert(g.format,g.colorSpace),ge=r.convert(g.type);let se=y(g.internalFormat,fe,ge,g.normalized,g.colorSpace,g.isVideoTexture);Ie(q,g);let te;const Ae=g.mipmaps,De=g.isVideoTexture!==!0,We=ae.__version===void 0||K===!0,A=ee.dataReady,ne=b(g,Z);if(g.isDepthTexture)se=P(g.format===ui,g.type),We&&(De?t.texStorage2D(n.TEXTURE_2D,1,se,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,se,Z.width,Z.height,0,fe,ge,null));else if(g.isDataTexture)if(Ae.length>0){De&&We&&t.texStorage2D(n.TEXTURE_2D,ne,se,Ae[0].width,Ae[0].height);for(let X=0,pe=Ae.length;X<pe;X++)te=Ae[X],De?A&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,fe,ge,te.data);g.generateMipmaps=!1}else De?(We&&t.texStorage2D(n.TEXTURE_2D,ne,se,Z.width,Z.height),A&&ie(g,Z,fe,ge)):t.texImage2D(n.TEXTURE_2D,0,se,Z.width,Z.height,0,fe,ge,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Ae[0].width,Ae[0].height,Z.depth);for(let X=0,pe=Ae.length;X<pe;X++)if(te=Ae[X],g.format!==sn)if(fe!==null)if(De){if(A)if(g.layerUpdates.size>0){const re=Ol(te.width,te.height,g.format,g.type);for(const $ of g.layerUpdates){const Me=te.data.subarray($*re/te.data.BYTES_PER_ELEMENT,($+1)*re/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,$,te.width,te.height,1,fe,Me)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Z.depth,fe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Z.depth,0,te.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Z.depth,fe,ge,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Z.depth,0,fe,ge,te.data)}else{De&&We&&t.texStorage2D(n.TEXTURE_2D,ne,se,Ae[0].width,Ae[0].height);for(let X=0,pe=Ae.length;X<pe;X++)te=Ae[X],g.format!==sn?fe!==null?De?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,te.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?A&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,fe,ge,te.data)}else if(g.isDataArrayTexture)if(De){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Z.width,Z.height,Z.depth),A)if(g.layerUpdates.size>0){const X=Ol(Z.width,Z.height,g.format,g.type);for(const pe of g.layerUpdates){const re=Z.data.subarray(pe*X/Z.data.BYTES_PER_ELEMENT,(pe+1)*X/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Z.width,Z.height,1,fe,ge,re)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,fe,ge,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,Z.width,Z.height,Z.depth,0,fe,ge,Z.data);else if(g.isData3DTexture)De?(We&&t.texStorage3D(n.TEXTURE_3D,ne,se,Z.width,Z.height,Z.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,fe,ge,Z.data)):t.texImage3D(n.TEXTURE_3D,0,se,Z.width,Z.height,Z.depth,0,fe,ge,Z.data);else if(g.isFramebufferTexture){if(We)if(De)t.texStorage2D(n.TEXTURE_2D,ne,se,Z.width,Z.height);else{let X=Z.width,pe=Z.height;for(let re=0;re<ne;re++)t.texImage2D(n.TEXTURE_2D,re,se,X,pe,0,fe,ge,null),X>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Z.parentNode!==X){X.appendChild(Z),d.add(g),X.onpaint=Pe=>{const ht=Pe.changedElements;for(const Je of d)ht.includes(Je.image)&&(Je.needsUpdate=!0)},X.requestPaint();return}const pe=0,re=n.RGBA,$=n.RGBA,Me=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,re,$,Me,Z),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(De&&We){const X=lt(Ae[0]);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}for(let X=0,pe=Ae.length;X<pe;X++)te=Ae[X],De?A&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe,ge,te):t.texImage2D(n.TEXTURE_2D,X,se,fe,ge,te);g.generateMipmaps=!1}else if(De){if(We){const X=lt(Z);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,ge,Z)}else t.texImage2D(n.TEXTURE_2D,0,se,fe,ge,Z);f(g)&&E(q),ae.__version=ee.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ce(M,g,N){if(g.image.length!==6)return;const q=j(M,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const ee=i.get(K);if(K.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const ae=ze.getPrimaries(ze.workingColorSpace),G=g.colorSpace===qn?null:ze.getPrimaries(g.colorSpace),Z=g.colorSpace===qn||ae===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ge=g.image[0]&&g.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!fe&&!ge?se[$]=m(g.image[$],!0,s.maxCubemapSize):se[$]=ge?g.image[$].image:g.image[$],se[$]=oe(g,se[$]);const te=se[0],Ae=r.convert(g.format,g.colorSpace),De=r.convert(g.type),We=y(g.internalFormat,Ae,De,g.normalized,g.colorSpace),A=g.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,X=K.dataReady;let pe=b(g,te);Ie(n.TEXTURE_CUBE_MAP,g);let re;if(fe){A&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,We,te.width,te.height);for(let $=0;$<6;$++){re=se[$].mipmaps;for(let Me=0;Me<re.length;Me++){const Pe=re[Me];g.format!==sn?Ae!==null?A?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,We,Pe.width,Pe.height,0,Pe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Pe.width,Pe.height,Ae,De,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,We,Pe.width,Pe.height,0,Ae,De,Pe.data)}}}else{if(re=g.mipmaps,A&&ne){re.length>0&&pe++;const $=lt(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,We,$.width,$.height)}for(let $=0;$<6;$++)if(ge){A?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Ae,De,se[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,se[$].width,se[$].height,0,Ae,De,se[$].data);for(let Me=0;Me<re.length;Me++){const ht=re[Me].image[$].image;A?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,ht.width,ht.height,Ae,De,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,We,ht.width,ht.height,0,Ae,De,ht.data)}}else{A?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,De,se[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,Ae,De,se[$]);for(let Me=0;Me<re.length;Me++){const Pe=re[Me];A?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Ae,De,Pe.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,We,Ae,De,Pe.image[$])}}}f(g)&&E(n.TEXTURE_CUBE_MAP),ee.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function we(M,g,N,q,K,ee){const ae=r.convert(N.format,N.colorSpace),G=r.convert(N.type),Z=y(N.internalFormat,ae,G,N.normalized,N.colorSpace),fe=i.get(g),ge=i.get(N);if(ge.__renderTarget=g,!fe.__hasExternalTextures){const se=Math.max(1,g.width>>ee),te=Math.max(1,g.height>>ee);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ee,Z,se,te,g.depth,0,ae,G,null):t.texImage2D(K,ee,Z,se,te,0,ae,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Be(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,ge.__webglTexture,0,vt(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(M,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const q=g.depthTexture,K=q&&q.isDepthTexture?q.type:null,ee=P(g.stencilBuffer,K),ae=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Be(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(g),ee,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(g),ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ee,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,M)}else{const q=g.textures;for(let K=0;K<q.length;K++){const ee=q[K],ae=r.convert(ee.format,ee.colorSpace),G=r.convert(ee.type),Z=y(ee.internalFormat,ae,G,ee.normalized,ee.colorSpace);Be(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(g),Z,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(g),Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,g,N){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,g.depthTexture);const fe=r.convert(g.depthTexture.format),ge=r.convert(g.depthTexture.type);let se;g.depthTexture.format===On?se=n.DEPTH_COMPONENT24:g.depthTexture.format===ui&&(se=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,g.width,g.height,0,fe,ge,null)}}else J(g.depthTexture,0);const ee=K.__webglTexture,ae=vt(g),G=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Z=g.depthTexture.format===ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===On)Be(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,G,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Z,G,ee,0);else if(g.depthTexture.format===ui)Be(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,G,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Z,G,ee,0);else throw new Error("Unknown depthTexture format")}function Ke(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=q}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Oe(g.__webglFramebuffer[q],M,q);else{const q=M.texture.mipmaps;q&&q.length>0?Oe(g.__webglFramebuffer[0],M,0):Oe(g.__webglFramebuffer,M,0)}else if(N){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),at(g.__webglDepthbuffer[q],M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}else{const q=M.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),at(g.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(M,g,N){const q=i.get(M);g!==void 0&&we(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ke(M)}function Fe(M){const g=M.texture,N=i.get(M),q=i.get(g);M.addEventListener("dispose",x);const K=M.textures,ee=M.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),ee){N.__webglFramebuffer=[];for(let G=0;G<6;G++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[G]=[];for(let Z=0;Z<g.mipmaps.length;Z++)N.__webglFramebuffer[G][Z]=n.createFramebuffer()}else N.__webglFramebuffer[G]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let G=0;G<g.mipmaps.length;G++)N.__webglFramebuffer[G]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ae)for(let G=0,Z=K.length;G<Z;G++){const fe=i.get(K[G]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Be(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let G=0;G<K.length;G++){const Z=K[G];N.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[G]);const fe=r.convert(Z.format,Z.colorSpace),ge=r.convert(Z.type),se=y(Z.internalFormat,fe,ge,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),te=vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,N.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),at(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,g);for(let G=0;G<6;G++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)we(N.__webglFramebuffer[G][Z],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z);else we(N.__webglFramebuffer[G],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);f(g)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let G=0,Z=K.length;G<Z;G++){const fe=K[G],ge=i.get(fe);let se=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Ie(se,fe),we(N.__webglFramebuffer,M,fe,n.COLOR_ATTACHMENT0+G,se,0),f(fe)&&E(se)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(G=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(G,q.__webglTexture),Ie(G,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)we(N.__webglFramebuffer[Z],M,g,n.COLOR_ATTACHMENT0,G,Z);else we(N.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,G,0);f(g)&&E(G),t.unbindTexture()}M.depthBuffer&&Ke(M)}function _t(M){const g=M.textures;for(let N=0,q=g.length;N<q;N++){const K=g[N];if(f(K)){const ee=T(M),ae=i.get(K).__webglTexture;t.bindTexture(ee,ae),E(ee),t.unbindTexture()}}}const ot=[],Ot=[];function R(M){if(M.samples>0){if(Be(M)===!1){const g=M.textures,N=M.width,q=M.height;let K=n.COLOR_BUFFER_BIT;const ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(M),G=g.length>1;if(G)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Z=M.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),G){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const ge=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,K,n.NEAREST),c===!0&&(ot.length=0,Ot.length=0,ot.push(n.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ot.push(ee),Ot.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const ge=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function vt(M){return Math.min(s.maxSamples,M.samples)}function Be(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function it(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function oe(M,g){const N=M.colorSpace,q=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Es&&N!==qn&&(ze.getTransfer(N)===je?(q!==sn||K!==$t)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",N)),g}function lt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=ve,this.rebindTextures=rt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yv(n,e){function t(i,s=qn){let r;const a=ze.getTransfer(s);if(i===$t)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bc)return n.BYTE;if(i===yc)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Ac)return n.ALPHA;if(i===Cc)return n.RGB;if(i===sn)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===ui)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===Eo)return n.RED_INTEGER;if(i===fi)return n.RG;if(i===So)return n.RG_INTEGER;if(i===bo)return n.RGBA_INTEGER;if(i===ir||i===sr||i===rr||i===ar)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ta||i===wa||i===Aa||i===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ra||i===Pa||i===La||i===Ia||i===Da||i===hr||i===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ra||i===Pa)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===La)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ia)return r.COMPRESSED_R11_EAC;if(i===Da)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hr)return r.COMPRESSED_RG11_EAC;if(i===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Na||i===Fa||i===Oa||i===Ba||i===za||i===Ha||i===Va||i===ka||i===Ga||i===Wa||i===Xa||i===Ya||i===qa||i===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Na)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ba)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===$a||i===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ja||i===Qa||i===ur||i===eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Oc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:qv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends pi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",m=new jv,f={},E=t.getContextAttributes();let T=null,y=null;const P=[],b=[],L=new Xe;let x=null;const w=new jt;w.viewport=new ft;const U=new jt;U.viewport=new ft;const C=[w,U],z=new rp;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=P[j];return de===void 0&&(de=new Wr,P[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=P[j];return de===void 0&&(de=new Wr,P[j]=de),de.getGripSpace()},this.getHand=function(j){let de=P[j];return de===void 0&&(de=new Wr,P[j]=de),de.getHandSpace()};function D(j){const de=b.indexOf(j.inputSource);if(de===-1)return;const ie=P[de];ie!==void 0&&(ie.update(j.inputSource,j.frame,l||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",k);for(let j=0;j<P.length;j++){const de=b[j];de!==null&&(b[j]=null,P[j].disconnect(de))}W=null,Y=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(T),p=null,h=null,d=null,s=null,y=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",V),s.addEventListener("inputsourceschange",k),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ye=null,Ce=null;E.depth&&(Ce=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?ui:On,ye=E.stencil?Ms:Mn);const we={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(we),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new rn(h.textureWidth,h.textureHeight,{format:sn,type:$t,depthTexture:new Gi(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new rn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let de=0;de<j.removed.length;de++){const ie=j.removed[de],ye=b.indexOf(ie);ye>=0&&(b[ye]=null,P[ye].disconnect(ie))}for(let de=0;de<j.added.length;de++){const ie=j.added[de];let ye=b.indexOf(ie);if(ye===-1){for(let we=0;we<P.length;we++)if(we>=b.length){b.push(ie),ye=we;break}else if(b[we]===null){b[we]=ie,ye=we;break}if(ye===-1)break}const Ce=P[ye];Ce&&Ce.connect(ie)}}const J=new F,Q=new F;function ce(j,de,ie){J.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const ye=J.distanceTo(Q),Ce=de.projectionMatrix.elements,we=ie.projectionMatrix.elements,at=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),Ke=(Ce[9]+1)/Ce[5],rt=(Ce[9]-1)/Ce[5],Fe=(Ce[8]-1)/Ce[0],_t=(we[8]+1)/we[0],ot=at*Fe,Ot=at*_t,R=ye/(-Fe+_t),vt=R*-Fe;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(R),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Be=at+R,it=Oe+R,oe=ot-vt,lt=Ot+(ye-vt),M=Ke*Oe/it*Be,g=rt*Oe/it*Be;j.projectionMatrix.makePerspective(oe,lt,M,g,Be,it),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let de=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),z.near=U.near=w.near=de,z.far=U.far=w.far=ie,(W!==z.near||Y!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,Y=z.far),z.layers.mask=j.layers.mask|6,w.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;const ye=j.parent,Ce=z.cameras;ve(z,ye);for(let we=0;we<Ce.length;we++)ve(Ce[we],ye);Ce.length===2?ce(z,w,U):z.projectionMatrix.copy(w.projectionMatrix),Se(j,z,ye)};function Se(j,de,ie){ie===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return f[j]};let ke=null;function $e(j,de){if(u=de.getViewerPose(l||a),v=de,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ye=!1;ie.length!==z.cameras.length&&(z.cameras.length=0,ye=!0);for(let Oe=0;Oe<ie.length;Oe++){const Ke=ie[Oe];let rt=null;if(p!==null)rt=p.getViewport(Ke);else{const _t=d.getViewSubImage(h,Ke);rt=_t.viewport,Oe===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let Fe=C[Oe];Fe===void 0&&(Fe=new jt,Fe.layers.enable(Oe),Fe.viewport=new ft,C[Oe]=Fe),Fe.matrix.fromArray(Ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(rt.x,rt.y,rt.width,rt.height),Oe===0&&(z.matrix.copy(Fe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ye===!0&&z.cameras.push(Fe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Oe=d.getDepthInformation(ie[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(Ce&&Ce.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Oe=0;Oe<ie.length;Oe++){const Ke=ie[Oe].camera;if(Ke){let rt=f[Ke];rt||(rt=new Oc,f[Ke]=rt);const Fe=d.getCameraImage(Ke);rt.sourceTexture=Fe}}}}for(let ie=0;ie<P.length;ie++){const ye=b[ie],Ce=P[ie];ye!==null&&Ce!==void 0&&Ce.update(ye,de,l||a)}ke&&ke(j,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const Ie=new Vc;Ie.setAnimationLoop($e),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const Kv=new pt,Zc=new Re;Zc.set(-1,0,0,0,1,0,0,0,1);function Jv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Bc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,T,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),T=E.envMap,y=E.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const y=T.program;i.uniformBlockBinding(E,y)}function l(E,T){let y=s[E.id];y===void 0&&(v(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",m));const P=T.program;i.updateUBOMapping(E,P);const b=e.render.frame;r[E.id]!==b&&(h(E),r[E.id]=b)}function u(E){const T=d();E.__bindingPointIndex=T;const y=n.createBuffer(),P=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const T=s[E.id],y=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let b=0,L=y.length;b<L;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,U=x.length;w<U;w++){const C=x[w];if(p(C,b,w,P)===!0){const z=C.__offset,W=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let D=0;D<W.length;D++){const V=W[D],k=S(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+Y,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):ArrayBuffer.isView(V)?C.__data.set(new V.constructor(V.buffer,V.byteOffset,C.__data.length)):(V.toArray(C.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,T,y,P){const b=E.value,L=T+"_"+y;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const x=P[L];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(E){const T=E.uniforms;let y=0;const P=16;for(let L=0,x=T.length;L<x;L++){const w=Array.isArray(T[L])?T[L]:[T[L]];for(let U=0,C=w.length;U<C;U++){const z=w[U],W=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,D=W.length;Y<D;Y++){const V=W[Y],k=S(V),J=y%P,Q=J%k.boundary,ce=J+Q;y+=Q,ce!==0&&P-ce<k.storage&&(y+=P-ce),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=k.storage}}}const b=y%P;return b>0&&(y+=P-b),E.__size=y,E.__cache={},this}function S(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}const e0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function t0(){return un===null&&(un=new Vf(e0,16,16,fi,Fn),un.name="DFG_LUT",un.minFilter=At,un.magFilter=At,un.wrapS=Ln,un.wrapT=Ln,un.generateMipmaps=!1,un.needsUpdate=!0),un}class n0{constructor(e={}){const{canvas:t=sf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$t}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=p,m=new Set([bo,So,Eo]),f=new Set([$t,Mn,xs,Ms,xo,Mo]),E=new Uint32Array(4),T=new Int32Array(4),y=new F;let P=null,b=null;const L=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let C=!1,z=null;this._outputColorSpace=Zt;let W=0,Y=0,D=null,V=-1,k=null;const J=new ft,Q=new ft;let ce=null;const ve=new et(0);let Se=0,ke=t.width,$e=t.height,Ie=1,j=null,de=null;const ie=new ft(0,0,ke,$e),ye=new ft(0,0,ke,$e);let Ce=!1;const we=new Po;let at=!1,Oe=!1;const Ke=new pt,rt=new F,Fe=new ft,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ot(){return D===null?Ie:1}let R=i;function vt(_,I){return t.getContext(_,I)}try{const _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),R===null){const I="webgl2";if(R=vt(I,_),R===null)throw vt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Ve("WebGLRenderer: "+_.message),_}let Be,it,oe,lt,M,g,N,q,K,ee,ae,G,Z,fe,ge,se,te,Ae,De,We,A,ne,X;function pe(){Be=new t_(R),Be.init(),A=new Yv(R,Be),it=new qg(R,Be,e,A),oe=new Wv(R,Be),it.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),lt=new s_(R),M=new Pv,g=new Xv(R,Be,oe,M,it,A,lt),N=new e_(U),q=new lp(R),ne=new Xg(R,q),K=new n_(R,q,lt,ne),ee=new a_(R,K,q,ne,lt),Ae=new r_(R,it,g),ge=new Zg(M),ae=new Rv(U,N,Be,it,ne,ge),G=new Jv(U,M),Z=new Iv,fe=new Bv(Be),te=new Wg(U,N,oe,ee,v,c),se=new Gv(U,ee,it),X=new Qv(R,lt,it,oe),De=new Yg(R,Be,lt),We=new i_(R,Be,lt),lt.programs=ae.programs,U.capabilities=it,U.extensions=Be,U.properties=M,U.renderLists=Z,U.shadowMap=se,U.state=oe,U.info=lt}pe(),S!==$t&&(w=new l_(S,t.width,t.height,s,r));const re=new $v(U,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const _=Be.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Be.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(_){_!==void 0&&(Ie=_,this.setSize(ke,$e,!1))},this.getSize=function(_){return _.set(ke,$e)},this.setSize=function(_,I,H=!0){if(re.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=_,$e=I,t.width=Math.floor(_*Ie),t.height=Math.floor(I*Ie),H===!0&&(t.style.width=_+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(ke*Ie,$e*Ie).floor()},this.setDrawingBufferSize=function(_,I,H){ke=_,$e=I,Ie=H,t.width=Math.floor(_*H),t.height=Math.floor(I*H),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(S===$t){Ve("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Te("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(J)},this.getViewport=function(_){return _.copy(ie)},this.setViewport=function(_,I,H,O){_.isVector4?ie.set(_.x,_.y,_.z,_.w):ie.set(_,I,H,O),oe.viewport(J.copy(ie).multiplyScalar(Ie).round())},this.getScissor=function(_){return _.copy(ye)},this.setScissor=function(_,I,H,O){_.isVector4?ye.set(_.x,_.y,_.z,_.w):ye.set(_,I,H,O),oe.scissor(Q.copy(ye).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(_){oe.setScissorTest(Ce=_)},this.setOpaqueSort=function(_){j=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,H=!0){let O=0;if(_){let B=!1;if(D!==null){const ue=D.texture.format;B=m.has(ue)}if(B){const ue=D.texture.type,_e=f.has(ue),he=te.getClearColor(),xe=te.getClearAlpha(),Ee=he.r,Le=he.g,Ne=he.b;_e?(E[0]=Ee,E[1]=Le,E[2]=Ne,E[3]=xe,R.clearBufferuiv(R.COLOR,0,E)):(T[0]=Ee,T[1]=Le,T[2]=Ne,T[3]=xe,R.clearBufferiv(R.COLOR,0,T))}else O|=R.COLOR_BUFFER_BIT}I&&(O|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),te.dispose(),Z.dispose(),fe.dispose(),M.dispose(),N.dispose(),ee.dispose(),ne.dispose(),X.dispose(),ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",jo),re.removeEventListener("sessionend",$o),ii.stop()};function $(_){_.preventDefault(),fl("WebGLRenderer: Context Lost."),C=!0}function Me(){fl("WebGLRenderer: Context Restored."),C=!1;const _=lt.autoReset,I=se.enabled,H=se.autoUpdate,O=se.needsUpdate,B=se.type;pe(),lt.autoReset=_,se.enabled=I,se.autoUpdate=H,se.needsUpdate=O,se.type=B}function Pe(_){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ht(_){const I=_.target;I.removeEventListener("dispose",ht),Je(I)}function Je(_){Sn(_),M.remove(_)}function Sn(_){const I=M.get(_).programs;I!==void 0&&(I.forEach(function(H){ae.releaseProgram(H)}),_.isShaderMaterial&&ae.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,H,O,B,ue){I===null&&(I=_t);const _e=B.isMesh&&B.matrixWorld.determinant()<0,he=dd(_,I,H,O,B);oe.setMaterial(O,_e);let xe=H.index,Ee=1;if(O.wireframe===!0){if(xe=K.getWireframeAttribute(H),xe===void 0)return;Ee=2}const Le=H.drawRange,Ne=H.attributes.position;let be=Le.start*Ee,Qe=(Le.start+Le.count)*Ee;ue!==null&&(be=Math.max(be,ue.start*Ee),Qe=Math.min(Qe,(ue.start+ue.count)*Ee)),xe!==null?(be=Math.max(be,0),Qe=Math.min(Qe,xe.count)):Ne!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,Ne.count));const ut=Qe-be;if(ut<0||ut===1/0)return;ne.setup(B,O,he,H,xe);let ct,tt=De;if(xe!==null&&(ct=q.get(xe),tt=We,tt.setIndex(ct)),B.isMesh)O.wireframe===!0?(oe.setLineWidth(O.wireframeLinewidth*Ot()),tt.setMode(R.LINES)):tt.setMode(R.TRIANGLES);else if(B.isLine){let Ct=O.linewidth;Ct===void 0&&(Ct=1),oe.setLineWidth(Ct*Ot()),B.isLineSegments?tt.setMode(R.LINES):B.isLineLoop?tt.setMode(R.LINE_LOOP):tt.setMode(R.LINE_STRIP)}else B.isPoints?tt.setMode(R.POINTS):B.isSprite&&tt.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,me=B._multiDrawCounts,Bt=B._multiDrawCount,Ge=xe?q.get(xe).bytesPerElement:1,Xt=M.get(O).currentProgram.getUniforms();for(let cn=0;cn<Bt;cn++)Xt.setValue(R,"_gl_DrawID",cn),tt.render(Ct[cn]/Ge,me[cn])}else if(B.isInstancedMesh)tt.renderInstances(be,ut,B.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,Ct);tt.renderInstances(be,ut,me)}else tt.render(be,ut)};function ln(_,I,H){_.transparent===!0&&_.side===Pn&&_.forceSinglePass===!1?(_.side=Nt,_.needsUpdate=!0,Ls(_,I,H),_.side=ei,_.needsUpdate=!0,Ls(_,I,H),_.side=Pn):Ls(_,I,H)}this.compile=function(_,I,H=null){H===null&&(H=_),b=fe.get(H),b.init(I),x.push(b),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),_!==H&&_.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();const O=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const he=ue[_e];ln(he,H,B),O.add(he)}else ln(ue,H,B),O.add(ue)}),b=x.pop(),O},this.compileAsync=function(_,I,H=null){const O=this.compile(_,I,H);return new Promise(B=>{function ue(){if(O.forEach(function(_e){M.get(_e).currentProgram.isReady()&&O.delete(_e)}),O.size===0){B(_);return}setTimeout(ue,10)}Be.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ur=null;function hd(_){Ur&&Ur(_)}function jo(){ii.stop()}function $o(){ii.start()}const ii=new Vc;ii.setAnimationLoop(hd),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(_){Ur=_,re.setAnimationLoop(_),_===null?ii.stop():ii.start()},re.addEventListener("sessionstart",jo),re.addEventListener("sessionend",$o),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;z!==null&&z.renderStart(_,I);const H=re.enabled===!0&&re.isPresenting===!0,O=w!==null&&(D===null||H)&&w.begin(U,D);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),_.isScene===!0&&_.onBeforeRender(U,_,I,D),b=fe.get(_,x.length),b.init(I),b.state.textureUnits=g.getTextureUnits(),x.push(b),Ke.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),we.setFromProjectionMatrix(Ke,gn,I.reversedDepth),Oe=this.localClippingEnabled,at=ge.init(this.clippingPlanes,Oe),P=Z.get(_,L.length),P.init(),L.push(P),re.enabled===!0&&re.isPresenting===!0){const _e=U.xr.getDepthSensingMesh();_e!==null&&Nr(_e,I,-1/0,U.sortObjects)}Nr(_,I,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(j,de),ot=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ot&&te.addToRenderList(P,_),this.info.render.frame++,at===!0&&ge.beginShadows();const B=b.state.shadowsArray;if(se.render(B,_,I),at===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&w.hasRenderPass())===!1){const _e=P.opaque,he=P.transmissive;if(b.setupLights(),I.isArrayCamera){const xe=I.cameras;if(he.length>0)for(let Ee=0,Le=xe.length;Ee<Le;Ee++){const Ne=xe[Ee];Jo(_e,he,_,Ne)}ot&&te.render(_);for(let Ee=0,Le=xe.length;Ee<Le;Ee++){const Ne=xe[Ee];Ko(P,_,Ne,Ne.viewport)}}else he.length>0&&Jo(_e,he,_,I),ot&&te.render(_),Ko(P,_,I)}D!==null&&Y===0&&(g.updateMultisampleRenderTarget(D),g.updateRenderTargetMipmap(D)),O&&w.end(U),_.isScene===!0&&_.onAfterRender(U,_,I),ne.resetDefaultState(),V=-1,k=null,x.pop(),x.length>0?(b=x[x.length-1],g.setTextureUnits(b.state.textureUnits),at===!0&&ge.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?P=L[L.length-1]:P=null,z!==null&&z.renderEnd()};function Nr(_,I,H,O){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLightProbeGrid)b.pushLightProbeGrid(_);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||we.intersectsSprite(_)){O&&Fe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ke);const _e=ee.update(_),he=_.material;he.visible&&P.push(_,_e,he,H,Fe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||we.intersectsObject(_))){const _e=ee.update(_),he=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Fe.copy(_.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(_.matrixWorld).applyMatrix4(Ke)),Array.isArray(he)){const xe=_e.groups;for(let Ee=0,Le=xe.length;Ee<Le;Ee++){const Ne=xe[Ee],be=he[Ne.materialIndex];be&&be.visible&&P.push(_,_e,be,H,Fe.z,Ne)}}else he.visible&&P.push(_,_e,he,H,Fe.z,null)}}const ue=_.children;for(let _e=0,he=ue.length;_e<he;_e++)Nr(ue[_e],I,H,O)}function Ko(_,I,H,O){const{opaque:B,transmissive:ue,transparent:_e}=_;b.setupLightsView(H),at===!0&&ge.setGlobalState(U.clippingPlanes,H),O&&oe.viewport(J.copy(O)),B.length>0&&Ps(B,I,H),ue.length>0&&Ps(ue,I,H),_e.length>0&&Ps(_e,I,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Jo(_,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const be=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new rn(1,1,{generateMipmaps:!0,type:be?Fn:$t,minFilter:Zn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const ue=b.state.transmissionRenderTarget[O.id],_e=O.viewport||J;ue.setSize(_e.z*U.transmissionResolutionScale,_e.w*U.transmissionResolutionScale);const he=U.getRenderTarget(),xe=U.getActiveCubeFace(),Ee=U.getActiveMipmapLevel();U.setRenderTarget(ue),U.getClearColor(ve),Se=U.getClearAlpha(),Se<1&&U.setClearColor(16777215,.5),U.clear(),ot&&te.render(H);const Le=U.toneMapping;U.toneMapping=vn;const Ne=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),at===!0&&ge.setGlobalState(U.clippingPlanes,O),Ps(_,H,O),g.updateMultisampleRenderTarget(ue),g.updateRenderTargetMipmap(ue),Be.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,ut=I.length;Qe<ut;Qe++){const ct=I[Qe],{object:tt,geometry:Ct,material:me,group:Bt}=ct;if(me.side===Pn&&tt.layers.test(O.layers)){const Ge=me.side;me.side=Nt,me.needsUpdate=!0,Qo(tt,H,O,Ct,me,Bt),me.side=Ge,me.needsUpdate=!0,be=!0}}be===!0&&(g.updateMultisampleRenderTarget(ue),g.updateRenderTargetMipmap(ue))}U.setRenderTarget(he,xe,Ee),U.setClearColor(ve,Se),Ne!==void 0&&(O.viewport=Ne),U.toneMapping=Le}function Ps(_,I,H){const O=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ue=_.length;B<ue;B++){const _e=_[B],{object:he,geometry:xe,group:Ee}=_e;let Le=_e.material;Le.allowOverride===!0&&O!==null&&(Le=O),he.layers.test(H.layers)&&Qo(he,I,H,xe,Le,Ee)}}function Qo(_,I,H,O,B,ue){_.onBeforeRender(U,I,H,O,B,ue),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(U,I,H,O,_,ue),B.transparent===!0&&B.side===Pn&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,U.renderBufferDirect(H,I,O,B,_,ue),B.side=ei,B.needsUpdate=!0,U.renderBufferDirect(H,I,O,B,_,ue),B.side=Pn):U.renderBufferDirect(H,I,O,B,_,ue),_.onAfterRender(U,I,H,O,B,ue)}function Ls(_,I,H){I.isScene!==!0&&(I=_t);const O=M.get(_),B=b.state.lights,ue=b.state.shadowsArray,_e=B.state.version,he=ae.getParameters(_,B.state,ue,I,H,b.state.lightProbeGridArray),xe=ae.getProgramCacheKey(he);let Ee=O.programs;O.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Le=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;O.envMap=N.get(_.envMap||O.environment,Le),O.envMapRotation=O.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Ee===void 0&&(_.addEventListener("dispose",ht),Ee=new Map,O.programs=Ee);let Ne=Ee.get(xe);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===_e)return tl(_,he),Ne}else he.uniforms=ae.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,H,he),_.onBeforeCompile(he,U),Ne=ae.acquireProgram(he,xe),Ee.set(xe,Ne),O.uniforms=he.uniforms;const be=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=ge.uniform),tl(_,he),O.needsLights=pd(_),O.lightsStateVersion=_e,O.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Ne,O.uniformsList=null,Ne}function el(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=or.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function tl(_,I){const H=M.get(_);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function ud(_,I){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let H=0,O=_.length;H<O;H++){const B=_[H];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function dd(_,I,H,O,B){I.isScene!==!0&&(I=_t),g.resetTextureUnits();const ue=I.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,he=D===null?U.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ze.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=N.get(O.envMap||_e,xe),Le=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let ct=vn;O.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ct=U.toneMapping);const tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=tt!==void 0?tt.length:0,me=M.get(O),Bt=b.state.lights;if(at===!0&&(Oe===!0||_!==k)){const st=_===k&&O.id===V;ge.setState(O,_,st)}let Ge=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Bt.state.version||me.outputColorSpace!==he||B.isBatchedMesh&&me.batching===!1||!B.isBatchedMesh&&me.batching===!0||B.isBatchedMesh&&me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&me.instancing===!1||!B.isInstancedMesh&&me.instancing===!0||B.isSkinnedMesh&&me.skinning===!1||!B.isSkinnedMesh&&me.skinning===!0||B.isInstancedMesh&&me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&me.instancingMorph===!1&&B.morphTexture!==null||me.envMap!==Ee||O.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ge.numPlanes||me.numIntersection!==ge.numIntersection)||me.vertexAlphas!==Le||me.vertexTangents!==Ne||me.morphTargets!==be||me.morphNormals!==Qe||me.morphColors!==ut||me.toneMapping!==ct||me.morphTargetsCount!==Ct||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ge=!0):(Ge=!0,me.__version=O.version);let Xt=me.currentProgram;Ge===!0&&(Xt=Ls(O,I,B),z&&O.isNodeMaterial&&z.onUpdateProgram(O,Xt,me));let cn=!1,Bn=!1,_i=!1;const nt=Xt.getUniforms(),dt=me.uniforms;if(oe.useProgram(Xt.program)&&(cn=!0,Bn=!0,_i=!0),O.id!==V&&(V=O.id,Bn=!0),me.needsLights){const st=ud(b.state.lightProbeGridArray,B);me.lightProbeGrid!==st&&(me.lightProbeGrid=st,Bn=!0)}if(cn||k!==_){oe.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),nt.setValue(R,"projectionMatrix",_.projectionMatrix),nt.setValue(R,"viewMatrix",_.matrixWorldInverse);const Hn=nt.map.cameraPosition;Hn!==void 0&&Hn.setValue(R,rt.setFromMatrixPosition(_.matrixWorld)),it.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),k!==_&&(k=_,Bn=!0,_i=!0)}if(me.needsLights&&(Bt.state.directionalShadowMap.length>0&&nt.setValue(R,"directionalShadowMap",Bt.state.directionalShadowMap,g),Bt.state.spotShadowMap.length>0&&nt.setValue(R,"spotShadowMap",Bt.state.spotShadowMap,g),Bt.state.pointShadowMap.length>0&&nt.setValue(R,"pointShadowMap",Bt.state.pointShadowMap,g)),B.isSkinnedMesh){nt.setOptional(R,B,"bindMatrix"),nt.setOptional(R,B,"bindMatrixInverse");const st=B.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),nt.setValue(R,"boneTexture",st.boneTexture,g))}B.isBatchedMesh&&(nt.setOptional(R,B,"batchingTexture"),nt.setValue(R,"batchingTexture",B._matricesTexture,g),nt.setOptional(R,B,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",B._indirectTexture,g),nt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",B._colorsTexture,g));const zn=H.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ae.update(B,H,Xt),(Bn||me.receiveShadow!==B.receiveShadow)&&(me.receiveShadow=B.receiveShadow,nt.setValue(R,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(dt.envMapIntensity.value=I.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=t0()),Bn){if(nt.setValue(R,"toneMappingExposure",U.toneMappingExposure),me.needsLights&&fd(dt,_i),ue&&O.fog===!0&&G.refreshFogUniforms(dt,ue),G.refreshMaterialUniforms(dt,O,Ie,$e,b.state.transmissionRenderTarget[_.id]),me.needsLights&&me.lightProbeGrid){const st=me.lightProbeGrid;dt.probesSH.value=st.texture,dt.probesMin.value.copy(st.boundingBox.min),dt.probesMax.value.copy(st.boundingBox.max),dt.probesResolution.value.copy(st.resolution)}or.upload(R,el(me),dt,g)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(or.upload(R,el(me),dt,g),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(R,"center",B.center),nt.setValue(R,"modelViewMatrix",B.modelViewMatrix),nt.setValue(R,"normalMatrix",B.normalMatrix),nt.setValue(R,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const st=O.uniformsGroups;for(let Hn=0,vi=st.length;Hn<vi;Hn++){const nl=st[Hn];X.update(nl,Xt),X.bind(nl,Xt)}}return Xt}function fd(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function pd(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,I,H){const O=M.get(_);O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),M.get(_.texture).__webglTexture=I,M.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){const H=M.get(_);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const md=R.createFramebuffer();this.setRenderTarget=function(_,I=0,H=0){D=_,W=I,Y=H;let O=null,B=!1,ue=!1;if(_){const he=M.get(_);if(he.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(R.FRAMEBUFFER,he.__webglFramebuffer),J.copy(_.viewport),Q.copy(_.scissor),ce=_.scissorTest,oe.viewport(J),oe.scissor(Q),oe.setScissorTest(ce),V=-1;return}else if(he.__webglFramebuffer===void 0)g.setupRenderTarget(_);else if(he.__hasExternalTextures)g.rebindTextures(_,M.get(_.texture).__webglTexture,M.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Le=_.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&M.has(Le)&&(_.width!==Le.image.width||_.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(_)}}const xe=_.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const Ee=M.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?O=Ee[I][H]:O=Ee[I],B=!0):_.samples>0&&g.useMultisampledRTT(_)===!1?O=M.get(_).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[H]:O=Ee,J.copy(_.viewport),Q.copy(_.scissor),ce=_.scissorTest}else J.copy(ie).multiplyScalar(Ie).floor(),Q.copy(ye).multiplyScalar(Ie).floor(),ce=Ce;if(H!==0&&(O=md),oe.bindFramebuffer(R.FRAMEBUFFER,O)&&oe.drawBuffers(_,O),oe.viewport(J),oe.scissor(Q),oe.setScissorTest(ce),B){const he=M.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,H)}else if(ue){const he=I;for(let xe=0;xe<_.textures.length;xe++){const Ee=M.get(_.textures[xe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,H,he)}}else if(_!==null&&H!==0){const he=M.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,he.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(_,I,H,O,B,ue,_e,he=0){if(!(_&&_.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=M.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){oe.bindFramebuffer(R.FRAMEBUFFER,xe);try{const Ee=_.textures[he],Le=Ee.format,Ne=Ee.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Le)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ne)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-O&&H>=0&&H<=_.height-B&&R.readPixels(I,H,O,B,A.convert(Le),A.convert(Ne),ue)}finally{const Ee=D!==null?M.get(D).__webglFramebuffer:null;oe.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(_,I,H,O,B,ue,_e,he=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=M.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(I>=0&&I<=_.width-O&&H>=0&&H<=_.height-B){oe.bindFramebuffer(R.FRAMEBUFFER,xe);const Ee=_.textures[he],Le=Ee.format,Ne=Ee.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),R.readPixels(I,H,O,B,A.convert(Le),A.convert(Ne),0);const Qe=D!==null?M.get(D).__webglFramebuffer:null;oe.bindFramebuffer(R.FRAMEBUFFER,Qe);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await rf(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(be),R.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,H=0){const O=Math.pow(2,-H),B=Math.floor(_.image.width*O),ue=Math.floor(_.image.height*O),_e=I!==null?I.x:0,he=I!==null?I.y:0;g.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,_e,he,B,ue),oe.unbindTexture()};const gd=R.createFramebuffer(),_d=R.createFramebuffer();this.copyTextureToTexture=function(_,I,H=null,O=null,B=0,ue=0){let _e,he,xe,Ee,Le,Ne,be,Qe,ut;const ct=_.isCompressedTexture?_.mipmaps[ue]:_.image;if(H!==null)_e=H.max.x-H.min.x,he=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Le=H.min.y,Ne=H.isBox3?H.min.z:0;else{const dt=Math.pow(2,-B);_e=Math.floor(ct.width*dt),he=Math.floor(ct.height*dt),_.isDataArrayTexture?xe=ct.depth:_.isData3DTexture?xe=Math.floor(ct.depth*dt):xe=1,Ee=0,Le=0,Ne=0}O!==null?(be=O.x,Qe=O.y,ut=O.z):(be=0,Qe=0,ut=0);const tt=A.convert(I.format),Ct=A.convert(I.type);let me;I.isData3DTexture?(g.setTexture3D(I,0),me=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(g.setTexture2DArray(I,0),me=R.TEXTURE_2D_ARRAY):(g.setTexture2D(I,0),me=R.TEXTURE_2D),oe.activeTexture(R.TEXTURE0),oe.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),oe.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),oe.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Bt=oe.getParameter(R.UNPACK_ROW_LENGTH),Ge=oe.getParameter(R.UNPACK_IMAGE_HEIGHT),Xt=oe.getParameter(R.UNPACK_SKIP_PIXELS),cn=oe.getParameter(R.UNPACK_SKIP_ROWS),Bn=oe.getParameter(R.UNPACK_SKIP_IMAGES);oe.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),oe.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),oe.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),oe.pixelStorei(R.UNPACK_SKIP_ROWS,Le),oe.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne);const _i=_.isDataArrayTexture||_.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const dt=M.get(_),zn=M.get(I),st=M.get(dt.__renderTarget),Hn=M.get(zn.__renderTarget);oe.bindFramebuffer(R.READ_FRAMEBUFFER,st.__webglFramebuffer),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let vi=0;vi<xe;vi++)_i&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,M.get(_).__webglTexture,B,Ne+vi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,M.get(I).__webglTexture,ue,ut+vi)),R.blitFramebuffer(Ee,Le,_e,he,be,Qe,_e,he,R.DEPTH_BUFFER_BIT,R.NEAREST);oe.bindFramebuffer(R.READ_FRAMEBUFFER,null),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||_.isRenderTargetTexture||M.has(_)){const dt=M.get(_),zn=M.get(I);oe.bindFramebuffer(R.READ_FRAMEBUFFER,gd),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,_d);for(let st=0;st<xe;st++)_i?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dt.__webglTexture,B,Ne+st):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dt.__webglTexture,B),nt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zn.__webglTexture,ue,ut+st):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zn.__webglTexture,ue),B!==0?R.blitFramebuffer(Ee,Le,_e,he,be,Qe,_e,he,R.COLOR_BUFFER_BIT,R.NEAREST):nt?R.copyTexSubImage3D(me,ue,be,Qe,ut+st,Ee,Le,_e,he):R.copyTexSubImage2D(me,ue,be,Qe,Ee,Le,_e,he);oe.bindFramebuffer(R.READ_FRAMEBUFFER,null),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else nt?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(me,ue,be,Qe,ut,_e,he,xe,tt,Ct,ct.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(me,ue,be,Qe,ut,_e,he,xe,tt,ct.data):R.texSubImage3D(me,ue,be,Qe,ut,_e,he,xe,tt,Ct,ct):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ue,be,Qe,_e,he,tt,Ct,ct.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ue,be,Qe,ct.width,ct.height,tt,ct.data):R.texSubImage2D(R.TEXTURE_2D,ue,be,Qe,_e,he,tt,Ct,ct);oe.pixelStorei(R.UNPACK_ROW_LENGTH,Bt),oe.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ge),oe.pixelStorei(R.UNPACK_SKIP_PIXELS,Xt),oe.pixelStorei(R.UNPACK_SKIP_ROWS,cn),oe.pixelStorei(R.UNPACK_SKIP_IMAGES,Bn),ue===0&&I.generateMipmaps&&R.generateMipmap(me),oe.unbindTexture()},this.initRenderTarget=function(_){M.get(_).__webglFramebuffer===void 0&&g.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?g.setTextureCube(_,0):_.isData3DTexture?g.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?g.setTexture2DArray(_,0):g.setTexture2D(_,0),oe.unbindTexture()},this.resetState=function(){W=0,Y=0,D=null,oe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}var i0=Object.defineProperty,Io=(n,e)=>{for(var t in e)i0(n,t,{get:e[t],enumerable:!0})},s0={};Io(s0,{ACTIONS:()=>eh,ANIMATION_MIN_DURATION:()=>ro,CAPTURE_EVENTS_CLASS:()=>As,CTRLZOOM_TIMEOUT:()=>Qc,DBLCLICK_DELAY:()=>$c,EASINGS:()=>lr,ICONS:()=>on,IDS:()=>yt,KEY_CODES:()=>St,LONGTOUCH_DELAY:()=>Kc,MOVE_THRESHOLD:()=>jc,SPHERE_RADIUS:()=>Un,TWOFINGERSOVERLAY_DELAY:()=>Jc,VIEWER_DATA:()=>ni});var r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,a0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',o0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,l0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,c0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,h0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,u0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,d0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,f0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,ro=500,jc=4,$c=300,Kc=500,Jc=100,Qc=2e3,Un=10,ni="photoSphereViewer",As="psv--capture-event",eh=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))(eh||{}),yt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},St={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},on={arrow:r0,close:a0,download:o0,fullscreenIn:l0,fullscreenOut:c0,info:h0,menu:u0,zoomIn:d0,zoomOut:f0},lr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},p0={};Io(p0,{Animation:()=>vr,Dynamic:()=>as,MultiDynamic:()=>bh,PressHandler:()=>Pr,Slider:()=>Th,SliderDirection:()=>yh,addClasses:()=>Do,angle:()=>nh,applyEulerInverse:()=>ho,checkClosedShadowDom:()=>Eh,checkStylesheet:()=>Mh,checkVersion:()=>zo,cleanCssPosition:()=>vh,clone:()=>Ar,createTexture:()=>co,cssPositionIsOrdered:()=>Bo,dasherize:()=>x0,deepEqual:()=>mh,deepmerge:()=>fh,distance:()=>th,exitFullscreen:()=>uh,firstNonNull:()=>dn,getAbortError:()=>oo,getAngle:()=>sh,getClosest:()=>ah,getConfigParser:()=>Rr,getElement:()=>rh,getEventTarget:()=>pr,getMatchingTarget:()=>oh,getPosition:()=>lh,getShortestArc:()=>ih,getStyleProperty:()=>_n,getTouchData:()=>ao,getXMPValue:()=>Vt,greatArcDistance:()=>g0,hasParent:()=>v0,invertResolvableBoolean:()=>Cr,isAbortError:()=>_h,isEmpty:()=>ph,isExtendedPosition:()=>Oo,isFullscreenEnabled:()=>ch,isNil:()=>bt,isPlainObject:()=>No,keyPressMatch:()=>Uo,logWarn:()=>Tt,mergePanoData:()=>Sh,parseAngle:()=>fn,parsePoint:()=>M0,parseSpeed:()=>xh,removeClasses:()=>_0,requestFullscreen:()=>hh,resolveBoolean:()=>Fo,speedToDuration:()=>lo,sum:()=>m0,throttle:()=>dh,toggleClass:()=>wr,wrap:()=>cs});function cs(n,e){let t=n%e;return t<0&&(t+=e),t}function m0(n){return n.reduce((e,t)=>e+t,0)}function th(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function nh(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function ih(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-n+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function sh(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function g0([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const s=(t-n)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function rh(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function wr(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function Do(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function _0(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function v0(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function ah(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function pr(n){return n?.composedPath()[0]||null}function oh(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function lh(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function _n(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function ao(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:th(e,t),angle:nh(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var mr;function ch(n,e=!1){return e?n===mr:document.fullscreenElement===n}function hh(n,e=!1){e?(mr=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function uh(n=!1){n?(mr.classList.remove("psv-fullscreen-emulation"),mr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Uo(n,e){let t,i=!1,s=!1,r=!1,a=!1;return e==="+"?t=e:e.split("+").forEach(o=>{switch(o){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":a=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=o;break}}),i===n.shiftKey&&s===n.ctrlKey&&r===n.altKey&&a===n.metaKey&&t===n.key}function x0(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function dh(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function No(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function fh(n,e){const t=e;return(function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=i(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!No(r[a])?s[a]=r[a]:r[a]!==t&&(s[a]?i(s[a],r[a]):s[a]=i(null,r[a])))})):s=r,s})(n,e)}function Ar(n){return fh(null,n)}function ph(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function bt(n){return n==null}function dn(...n){for(const e of n)if(!bt(e))return e;return null}function mh(n,e){if(n===e)return!0;if(oc(n)&&oc(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!mh(n[t],e[t]))return!1;return!0}else return!1}function oc(n){return typeof n=="object"&&n!==null}var qe=class gh extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,gh)}};function Fo(n,e){No(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function Cr(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function oo(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function _h(n){return n?.name==="AbortError"}function Tt(n){console.warn(`PhotoSphereViewer: ${n}`)}function Oo(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function Vt(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var lc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gr=["left","center","right"],_r=["top","center","bottom"],cc=[...gr,..._r],qt="center";function M0(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(lc[e[0]]?e=[e[0],qt]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>lc[s]||s),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function vh(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===qt?n=[qt,qt]:gr.indexOf(n[0])!==-1?n=[qt,n[0]]:_r.indexOf(n[0])!==-1&&(n=[n[0],qt])),n.length!==2||cc.indexOf(n[0])===-1||cc.indexOf(n[1])===-1?(Tt(`Unparsable position ${n}`),null):!e&&n[0]===qt&&n[1]===qt?(Tt("Invalid position center center"),null):(t&&!Bo(n)&&(n=[n[1],n[0]]),n[1]===qt&&gr.indexOf(n[0])!==-1&&(n=[qt,n[0]]),n[0]===qt&&_r.indexOf(n[1])!==-1&&(n=[n[1],qt]),n)):null}function Bo(n){return _r.indexOf(n[0])!==-1&&gr.indexOf(n[1])!==-1}function xh(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ye.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new qe(`Unknown speed unit "${s}"`)}}else e=n;return e}function lo(n,e){if(typeof n!="number"){const t=xh(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function fn(n,e=!1,t=e){let i;if(typeof n=="string"){const s=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new qe(`Unknown angle "${n}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":i=Ye.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new qe(`Unknown angle unit "${a}"`)}else i=r}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new qe(`Unknown angle "${n}"`);return i=cs(e?i+Math.PI:i,Math.PI*2),e?Ye.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function co(n,e=!1){const t=new Lt(n);return t.needsUpdate=!0,t.minFilter=e?Zn:At,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var hc=new mi;function ho(n,e){hc.setFromEuler(e).invert(),n.applyQuaternion(hc)}function Rr(n,e){const t=function(i){const s=Ar({...n,...i}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:n[a]});else if(!(a in n)){Tt(`Unknown option ${a}`);continue}r[a]=o}return r};return t.defaults=n,t.parsers=e||{},t}function Mh(n,e){_n(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function zo(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function Eh(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function Sh(n,e,t,i){const s={isEquirectangular:!0,fullWidth:dn(t?.fullWidth,i?.fullWidth),fullHeight:dn(t?.fullHeight,i?.fullHeight),croppedWidth:dn(t?.croppedWidth,i?.croppedWidth,n),croppedHeight:dn(t?.croppedHeight,i?.croppedHeight,e),croppedX:dn(t?.croppedX,i?.croppedX),croppedY:dn(t?.croppedY,i?.croppedY),poseHeading:dn(t?.poseHeading,i?.poseHeading,0),posePitch:dn(t?.posePitch,i?.posePitch,0),poseRoll:dn(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};if(s.croppedWidth!==n){const r=n/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(a=>{s[a]&&(s[a]=Math.round(s[a]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-n)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Tt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Tt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Tt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Tt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Tt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var vr=class{constructor(n){this.easing=lr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=n,n?(n.easing&&(this.easing=typeof n.easing=="function"?n.easing:lr[n.easing]||lr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},n.delay||0)):this.resolved=!0}__run(n){if(this.cancelled)return;this.start||(this.start=n);const e=(n-this.start)/this.options.duration,t={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);t[i]=r}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(t[i]=s.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(n){n?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(n)),this.callbacks.length=0}then(n){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(n):new Promise(e=>{this.callbacks.push(e)}).then(n)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},as=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new qe("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?cs(n,this.max):Ye.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?cs(n,this.max):Ye.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?cs(t,this.max):Ye.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},bh=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},Pr=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},yh=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(yh||{}),Th=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=Ye.clamp((i.bottom-e)/i.height,0,1):s=Ye.clamp((n-i.left)/i.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},E0={};Io(E0,{BeforeAnimateEvent:()=>Ho,BeforeRenderEvent:()=>hs,BeforeRotateEvent:()=>Dh,ClickEvent:()=>Fh,ConfigChangedEvent:()=>Ft,DoubleClickEvent:()=>Vh,FullscreenEvent:()=>us,HideNotificationEvent:()=>ds,HideOverlayEvent:()=>Zh,HidePanelEvent:()=>Kn,HideTooltipEvent:()=>Qh,KeypressEvent:()=>Jn,LoadProgressEvent:()=>su,ObjectEnterEvent:()=>Gu,ObjectEvent:()=>Lr,ObjectHoverEvent:()=>Zu,ObjectLeaveEvent:()=>uo,PanoramaErrorEvent:()=>du,PanoramaLoadEvent:()=>ou,PanoramaLoadedEvent:()=>Hi,PositionUpdatedEvent:()=>fs,ReadyEvent:()=>ms,RenderEvent:()=>yu,RollUpdatedEvent:()=>ps,ShowNotificationEvent:()=>gs,ShowOverlayEvent:()=>Ru,ShowPanelEvent:()=>Qn,ShowTooltipEvent:()=>Uu,SizeUpdatedEvent:()=>_s,StopAllEvent:()=>vs,TransitionDoneEvent:()=>mu,ViewerEvent:()=>Ze,ZoomUpdatedEvent:()=>Nn});var S0=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},wh=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},Ze=class extends S0{},Ah=class Ch extends Ze{constructor(e,t){super(Ch.type,!0),this.position=e,this.zoomLevel=t}};Ah.type="before-animate";var Ho=Ah,Rh=class Ph extends Ze{constructor(e,t){super(Ph.type),this.timestamp=e,this.elapsed=t}};Rh.type="before-render";var hs=Rh,Lh=class Ih extends Ze{constructor(e){super(Ih.type,!0),this.position=e}};Lh.type="before-rotate";var Dh=Lh,Uh=class Nh extends Ze{constructor(e){super(Nh.type),this.data=e}};Uh.type="click";var Fh=Uh,Oh=class Bh extends Ze{constructor(e){super(Bh.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Oh.type="config-changed";var Ft=Oh,zh=class Hh extends Ze{constructor(e){super(Hh.type),this.data=e}};zh.type="dblclick";var Vh=zh,kh=class Gh extends Ze{constructor(e){super(Gh.type),this.fullscreenEnabled=e}};kh.type="fullscreen";var us=kh,Wh=class Xh extends Ze{constructor(e){super(Xh.type),this.notificationId=e}};Wh.type="hide-notification";var ds=Wh,Yh=class qh extends Ze{constructor(e){super(qh.type),this.overlayId=e}};Yh.type="hide-overlay";var Zh=Yh,jh=class $h extends Ze{constructor(e){super($h.type),this.panelId=e}};jh.type="hide-panel";var Kn=jh,Kh=class Jh extends Ze{constructor(e){super(Jh.type),this.tooltipData=e}};Kh.type="hide-tooltip";var Qh=Kh,eu=class tu extends Ze{constructor(e,t){super(tu.type,!0),this.key=e,this.originalEvent=t}matches(e){return Uo(this.originalEvent,e)}};eu.type="key-press";var Jn=eu,nu=class iu extends Ze{constructor(e){super(iu.type),this.progress=e}};nu.type="load-progress";var su=nu,ru=class au extends Ze{constructor(e){super(au.type),this.panorama=e}};ru.type="panorama-load";var ou=ru,lu=class cu extends Ze{constructor(e){super(cu.type),this.data=e}};lu.type="panorama-loaded";var Hi=lu,hu=class uu extends Ze{constructor(e,t){super(uu.type),this.panorama=e,this.error=t}};hu.type="panorama-error";var du=hu,fu=class pu extends Ze{constructor(e){super(pu.type),this.completed=e}};fu.type="transition-done";var mu=fu,gu=class _u extends Ze{constructor(e){super(_u.type),this.position=e}};gu.type="position-updated";var fs=gu,vu=class xu extends Ze{constructor(e){super(xu.type),this.roll=e}};vu.type="roll-updated";var ps=vu,Mu=class Eu extends Ze{constructor(){super(Eu.type)}};Mu.type="ready";var ms=Mu,Su=class bu extends Ze{constructor(){super(bu.type)}};Su.type="render";var yu=Su,Tu=class wu extends Ze{constructor(e){super(wu.type),this.notificationId=e}};Tu.type="show-notification";var gs=Tu,Au=class Cu extends Ze{constructor(e){super(Cu.type),this.overlayId=e}};Au.type="show-overlay";var Ru=Au,Pu=class Lu extends Ze{constructor(e){super(Lu.type),this.panelId=e}};Pu.type="show-panel";var Qn=Pu,Iu=class Du extends Ze{constructor(e,t){super(Du.type),this.tooltip=e,this.tooltipData=t}};Iu.type="show-tooltip";var Uu=Iu,Nu=class Fu extends Ze{constructor(e){super(Fu.type),this.size=e}};Nu.type="size-updated";var _s=Nu,Ou=class Bu extends Ze{constructor(){super(Bu.type)}};Ou.type="stop-all";var vs=Ou,zu=class Hu extends Ze{constructor(e){super(Hu.type),this.zoomLevel=e}};zu.type="zoom-updated";var Nn=zu,Lr=class extends Ze{constructor(n,e,t,i,s){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=s}},Vu=class ku extends Lr{constructor(e,t,i,s){super(ku.type,e,t,i,s)}};Vu.type="enter-object";var Gu=Vu,Wu=class Xu extends Lr{constructor(e,t,i,s){super(Xu.type,e,t,i,s)}};Wu.type="leave-object";var uo=Wu,Yu=class qu extends Lr{constructor(e,t,i,s){super(qu.type,e,t,i,s)}};Yu.type="hover-object";var Zu=Yu,Vo=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new qe("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new qe("Current adapter does not support texture coordinates.")}};Vo.supportsDownload=!1;function uc(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof Vo)return zo(e.id,e.VERSION,"5.14.3"),e}return null}var is=`${ni}_touchSupport`,Ut={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=T0(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=b0();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=y0(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Ut.isWebGLSupported)throw new qe("WebGL 2 is not supported.");if(Ut.maxTextureWidth===0)throw new qe("Unable to detect system capabilities")}};function b0(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function y0(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;is in localStorage&&(n=localStorage[is]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{i(),localStorage[is]=!1,t(!1)},r=()=>{i(),localStorage[is]=!0,t(!0)},a=()=>{i(),localStorage[is]=n,t(n)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:n,promise:e}}function T0(n){let e=n,t=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new qe("Unable to detect system capabilities")}var w0=`varying vec3 vWorldPos;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets from rasterizing arc-restricted geometry).
float edgeAlpha(float coord) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / fwidth(coord) + 0.5, 0.0, 1.0);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) world position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    vec3 rayDir = vWorldPos - cameraPosition;
    float a = dot(rayDir, rayDir);
    float b = dot(cameraPosition, rayDir);
    float c = dot(cameraPosition, cameraPosition) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (cameraPosition + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,A0=`varying vec3 vWorldPos;

void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,C0=Rr({shader:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!Ye.isPowerOfTwo(n))throw new qe("EquirectangularAdapter resolution must be power of two.");return n}}),Ir=class ju extends Vo{static withConfig(e){return[ju,e]}constructor(e,t){super(e),this.config=C0(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(bt(e.textureX)||bt(e.textureY))throw new qe("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||a<0||a>t.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(e,t=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new qe("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const a=await this.viewer.textureLoader.loadFile(r.path,t?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),o=s?await this.loadXMP(a):null,c=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(c,o));const l=Sh(c.width,c.height,r.data,o),u=this.createEquirectangularTexture(c);return{panorama:e,texture:u,panoData:l,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const s=t.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=t.substring(i,s);return r.includes("GPano:")?{fullWidth:Vt(r,"FullPanoWidthPixels"),fullHeight:Vt(r,"FullPanoHeightPixels"),croppedWidth:Vt(r,"CroppedAreaImageWidthPixels"),croppedHeight:Vt(r,"CroppedAreaImageHeightPixels"),croppedX:Vt(r,"CroppedAreaLeftPixels"),croppedY:Vt(r,"CroppedAreaTopPixels"),poseHeading:Vt(r,"PoseHeadingDegrees",!1),posePitch:Vt(r,"PosePitchDegrees",!1),poseRoll:Vt(r,"PoseRollDegrees",!1),initialHeading:Vt(r,"InitialViewHeadingDegrees",!1),initialPitch:Vt(r,"InitialViewPitchDegrees",!1),initialFov:Vt(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Ut.maxTextureWidth){const t=Math.min(1,Ut.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),co(i)}return co(e)}createMesh(e){if(this.config.shader){const t=new Wi(Un,32,16).scale(-1,1,1),i={map:{value:null},opacity:{value:1},radius:{value:Un},uvOffset:{value:new Xe(e.croppedX/e.fullWidth,(e.fullHeight-e.croppedY-e.croppedHeight)/e.fullHeight)},uvScale:{value:new Xe(e.croppedWidth/e.fullWidth,e.croppedHeight/e.fullHeight)}},s=new an({uniforms:i,vertexShader:A0,fragmentShader:w0,depthTest:!1,depthWrite:!1,transparent:!0});return new Wt(t,s)}else{const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,a=new Wi(Un,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,i,s,r).scale(-1,1,1),o=new Ts({depthTest:!1,depthWrite:!1});return new Wt(a,o)}}setTexture(e,t){this.config.shader?e.material.uniforms.map.value=t.texture:e.material.map=t.texture}setTextureOpacity(e,t){this.config.shader?e.material.uniforms.opacity.value=t:(e.material.opacity=t,e.material.transparent=t<1)}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Ir.id="equirectangular";Ir.VERSION="5.14.3";Ir.supportsDownload=!0;var $u=Ir,Ku=class Ju extends $u{static withConfig(e){return[Ju,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new Wi(Un,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let a=0;a<3;a++){const o=r*3+a,c=i.getX(o),l=i.getY(o),u=i.getZ(o),d=.947;if(r<t.count/6){const h=c===0&&u===0?1:Math.acos(l)/Math.sqrt(c*c+u*u)*(2/Math.PI);t.setXY(o,c*(d/4)*h+1/4,u*(d/2)*h+1/2)}else{const h=c===0&&u===0?1:Math.acos(-l)/Math.sqrt(c*c+u*u)*(2/Math.PI);t.setXY(o,-c*(d/4)*h+3/4,u*(d/2)*h+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new Ts({depthTest:!1,depthWrite:!1});return new Wt(e,s)}};Ku.id="dual-fisheye";Ku.VERSION="5.14.3";var gi=class Qu{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Qu?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},R0=Rr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),kt=class extends gi{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=R0(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===St.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){Fo(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,wr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,Do(this.container.querySelector("svg"),"psv-button-svg")}},P0=class extends kt{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},ys=class extends kt{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:on.info}),this.mode=0,this.viewer.addEventListener(ds.type,this),this.viewer.addEventListener(gs.type,this),this.viewer.addEventListener(Kn.type,this),this.viewer.addEventListener(Qn.type,this),this.viewer.addEventListener(Ft.type,this)}destroy(){this.viewer.removeEventListener(ds.type,this),this.viewer.removeEventListener(gs.type,this),this.viewer.removeEventListener(Kn.type,this),this.viewer.removeEventListener(Qn.type,this),this.viewer.removeEventListener(Ft.type,this),super.destroy()}handleEvent(n){if(n instanceof Ft){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof ds?e=this.mode===1:n instanceof gs?e=this.mode===1&&n.notificationId!==yt.DESCRIPTION:n instanceof Kn?e=this.mode===2:n instanceof Qn&&(e=this.mode===2&&n.panelId!==yt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(yt.DESCRIPTION);break;case 2:this.viewer.panel.hide(yt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:yt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:yt.DESCRIPTION,content:this.viewer.config.caption}))}};ys.id="description";var ed=class extends kt{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:on.download}),this.viewer.addEventListener(Ft.type,this),this.viewer.addEventListener(Hi.type,this)}destroy(){this.viewer.removeEventListener(Ft.type,this),this.viewer.removeEventListener(Hi.type,this),super.destroy()}handleEvent(n){n instanceof Ft?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof Hi&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};ed.id="download";var td=class extends kt{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:on.fullscreenIn,iconActive:on.fullscreenOut}),this.viewer.addEventListener(us.type,this)}destroy(){this.viewer.removeEventListener(us.type,this),super.destroy()}handleEvent(n){n instanceof us&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};td.id="fullscreen";var L0="psvButton",I0=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${on.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,cr=class extends kt{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:on.menu}),this.viewer.addEventListener(Qn.type,this),this.viewer.addEventListener(Kn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Qn.type,this),this.viewer.removeEventListener(Kn.type,this),super.destroy()}handleEvent(n){n instanceof Qn?this.toggleActive(n.panelId===yt.MENU):n instanceof Kn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:yt.MENU,content:I0(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?ah(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[L0]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(yt.MENU)}};cr.id="menu";function D0(n){let e;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return on.arrow.replace("rotate(0",`rotate(${e}`)}var Cs=class extends kt{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:D0(e)}),this.direction=e,this.handler=new Pr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===St.Enter&&this.__onMouseDown();break;case"keyup":n.key===St.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Cr(Ut.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Cs.groupId="move";var nd=class extends Cs{constructor(n){super(n,1)}};nd.id="moveDown";var id=class extends Cs{constructor(n){super(n,2)}};id.id="moveLeft";var sd=class extends Cs{constructor(n){super(n,3)}};sd.id="moveRight";var rd=class extends Cs{constructor(n){super(n,0)}};rd.id="moveUp";var ko=class extends kt{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new Pr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===St.Enter&&this.__onMouseDown();break;case"keyup":n.key===St.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Cr(Ut.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};ko.groupId="zoom";var ad=class extends ko{constructor(n){super(n,on.zoomIn,0)}};ad.id="zoomIn";var od=class extends ko{constructor(n){super(n,on.zoomOut,1)}};od.id="zoomOut";var Go=class extends kt{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Th(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(_n(this.container,"max-width"),10),this.viewer.addEventListener(Nn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ms.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(ms.type,this),super.destroy()}handleEvent(n){n instanceof Nn?this.__moveZoomValue(n.zoomLevel):n instanceof ms&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Cr(Ut.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};Go.id="zoomRange";Go.groupId="zoom";var ld=class extends wh{constructor(n){super(),this.viewer=n}init(){}destroy(){}},U0=class extends ld{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,s=t.readonlyOptions,r=t.id;for(let[a,o]of Object.entries(n)){if(!(a in i.defaults)){Tt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){Tt(`${r}: Option "${a}" cannot be updated`);continue}a in i.parsers&&(o=i.parsers[a](o,{rawConfig:e,defValue:i.defaults[a]})),this.config[a]=o}}};U0.readonlyOptions=[];function fo(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof ld)return zo(e.id,e.VERSION,"5.14.3"),e}return null}var Yi={panorama:null,container:null,adapter:[$u,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[St.ArrowUp]:"ROTATE_UP",[St.ArrowDown]:"ROTATE_DOWN",[St.ArrowRight]:"ROTATE_RIGHT",[St.ArrowLeft]:"ROTATE_LEFT",[St.PageUp]:"ZOOM_IN",[St.PageDown]:"ZOOM_OUT",[St.Plus]:"ZOOM_IN",[St.Minus]:"ZOOM_OUT"}},dc={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},po={container:n=>{if(!n)throw new qe("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[uc(n[0]),n[1]]:n=[uc(n),null]:n=e,!n[0])throw new qe("An undefined value was given for adapter.");if(!n[0].id)throw new qe("Adapter has no id.");return n},defaultYaw:n=>fn(n),defaultPitch:n=>fn(n,!0),defaultZoomLvl:n=>Ye.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(Tt("maxFov cannot be lower than minFov"),n=e.maxFov),Ye.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),Ye.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...Yi.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:Ye.clamp(n,0,2),requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[fo(e[0]),e[1]]:e=[fo(e),null],!e[0])throw new qe(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new qe(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Ar(Yi.navbar):typeof n=="string"?n.split(/[ ,]/):n},N0=Rr(Yi,po),Oi=class extends kt{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(ys.id,!1)?.autoSize(!0)}};Oi.id="caption";var mo={},xr={};function F0(n,e){if(!n.id)throw new qe("Button id is required");mo[n.id]=n,n.groupId&&(xr[n.groupId]=xr[n.groupId]||[]).push(n)}[od,Go,ad,ys,Oi,ed,td,id,sd,rd,nd].forEach(n=>F0(n));var O0=class extends gi{constructor(n){super(n,{className:`psv-navbar ${As}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(Oi.id)!==-1&&n.indexOf(ys.id)===-1&&n.splice(n.indexOf(Oi.id),0,ys.id),n.forEach(e=>{typeof e=="object"?new P0(this,e):mo[e]?new mo[e](this):xr[e]?xr[e].forEach(t=>{new t(this)}):Tt(`Unknown button ${e}`)}),new cr(this),this.children.forEach(e=>{e instanceof kt&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof Oi?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof kt&&i.id===n);return!t&&e&&Tt(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof kt&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof kt&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(cr.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(cr.id).hide(!1)),this.getButton(Oi.id,!1)?.autoSize())}};$n.enabled=!1;var Ni={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){$n.enabled&&(Tt("ThreeJS cache should be disabled"),$n.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},B0=class extends gi{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=_n(this.loader,"color"),this.color=_n(this.canvas,"color"),this.border=parseInt(_n(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(_n(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Ft.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Ft.type,this),super.destroy()}handleEvent(n){n instanceof Ft&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=Ye.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+t,o=-Math.cos(e)*r+t,c=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${c} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},z0=class extends gi{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new qe("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new gs(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new ds(e))}}},H0=class extends gi{constructor(n){super(n,{className:`psv-overlay ${As}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Jn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Jn.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof Jn&&this.isVisible()&&this.state.dismissible&&n.matches(St.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new qe("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new Ru(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Zh(e))}}},V0=200,fa="psv-panel-content--no-interaction",k0=class extends gi{constructor(n){super(n,{className:`psv-panel ${As}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=on.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Jn.type,this)}destroy(){this.viewer.removeEventListener(Jn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case Jn.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new qe("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),wr(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(pr(t))},this.state.keyHandler=t=>{t.key===St.Enter&&n.clickHandler(pr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Qn(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Kn(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(fa))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(fa)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(St.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(fa)}__resize(n,e){const t=n,i=e,s=Math.max(V0,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=i}},G0=class extends gi{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new qe("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new qe("Initialized tooltip cannot be re-initialized");n.className&&Do(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new Uu(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(_n(this.arrow,"border-top-width"),10),this.state.border=parseInt(_n(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new qe("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:vh(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const o=Bo(i.posClass);s&&(i.posClass[o?0:1]=s),r&&(i.posClass[o?1:0]=r),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const a=i.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Qh(this.state.data));const n=parseFloat(_n(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,s=n.height,r=e.left,a=n.width,o=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-l-s,n.left=r+o-a,n.arrowTop=s,n.arrowLeft=a-o-t;break;case"top-center":n.top=i-l-s,n.left=r-a/2,n.arrowTop=s,n.arrowLeft=a/2-t;break;case"top-right":n.top=i-l-s,n.left=r-o,n.arrowTop=s,n.arrowLeft=t;break;case"bottom-left":n.top=i+l,n.left=r+o-a,n.arrowTop=-t*2,n.arrowLeft=a-o-t;break;case"bottom-center":n.top=i+l,n.left=r-a/2,n.arrowTop=-t*2,n.arrowLeft=a/2-t;break;case"bottom-right":n.top=i+l,n.left=r-o,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+o-s,n.left=r-c-a,n.arrowTop=s-o-t,n.arrowLeft=a;break;case"center-left":n.top=i-s/2,n.left=r-c-a,n.arrowTop=s/2-t,n.arrowLeft=a;break;case"left-bottom":n.top=i-o,n.left=r-c-a,n.arrowTop=t,n.arrowLeft=a;break;case"right-top":n.top=i+o-s,n.left=r+c,n.arrowTop=s-o-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-s/2,n.left=r+c,n.arrowTop=s/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-o,n.left=r+c,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},W0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Rs=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},tn=new F,er=new ti(0,0,0,"ZXY"),X0=class extends Rs{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ye.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!bt(e),s=!bt(t),r={};let a=null;if(i){const o=this.viewer.getPosition(),c=ih(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+c},r.pitch={start:o.pitch,end:e.pitch},a=lo(n,sh(o,e))}if(s){const o=this.viewer.getZoomLevel(),c=Math.abs(t-o);r.zoom={start:o,end:t},a===null&&(a=lo(n,Math.PI/4*c/100))}return a===null?typeof n=="number"?a=n:a=ro:a=Math.max(ro,a),{duration:a,properties:r}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??Yi.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new qe("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!er.equals(this.viewer.renderer.panoramaPose)||!er.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,tn),tn.applyEuler(this.viewer.renderer.panoramaPose),tn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(tn)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new qe("Current adapter does not support texture coordinates or no texture has been loaded");return(!er.equals(this.viewer.renderer.panoramaPose)||!er.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,tn),ho(tn,this.viewer.renderer.sphereCorrection),ho(tn,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords(tn)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=Un){return e||(e=new F),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[ni]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,tn),this.vector3ToViewerCoords(tn)}isPointVisible(n){let e,t;if(n instanceof F)e=n,t=this.vector3ToViewerCoords(n);else if(Oo(n))e=this.sphericalCoordsToVector3(n,tn),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new qe("Position is missing 'yaw' or 'pitch'");return{yaw:fn(n.yaw),pitch:fn(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:fn(n?.pan||0),tilt:fn(n?.tilt||0,!0),roll:fn(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:Ye.degToRad(n?.poseHeading||0),tilt:Ye.degToRad(n?.posePitch||0),roll:Ye.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(bt(n.zoom)&&!bt(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),bt(n.position)&&!bt(e.initialHeading)&&!bt(e.initialPitch)&&(n={...n,position:{yaw:fn(e.initialHeading),pitch:fn(e.initialPitch,!0)}})),n}},Y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Dr=class cd{constructor(){this.$=cd.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Dr.IDLE=0;Dr.CLICK=1;Dr.MOVING=2;var gt=Dr,Z0=class extends Rs{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new gt,this.keyHandler=new Pr,this.resizeObserver=new ResizeObserver(dh(()=>this.viewer.autoSize(),50)),this.moveThreshold=jc*Ut.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(vs.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(vs.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case hs.type:this.__applyMoveDelta();break;case vs.type:this.__clearMoveDelta();break}if(!oh(n,"."+As))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===St.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(yt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Jn(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(Uo(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(gt.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(gt.CLICK,gt.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(gt.CLICK,gt.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(gt.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},Kc))):n.touches.length===2&&(this.step.set(gt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(gt.CLICK,gt.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(gt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:yt.TWO_FINGERS,image:Y0,title:this.config.lang.twoFingers})},Jc));else if(this.step.is(gt.CLICK,gt.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(yt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:yt.CTRL_ZOOM,image:q0,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(yt.CTRL_ZOOM),Qc);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new us(n))}__resetMove(){this.step.set(gt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=ao(n);this.step.set(gt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(gt.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=n-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),c=o.find(l=>l.object.userData[ni]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),u={rightclick:i,originalEvent:t,target:pr(t),clientX:n,clientY:e,viewerX:r,viewerY:a,yaw:l.yaw,pitch:l.pitch,objects:o.map(d=>d.object).filter(d=>!d.userData[ni])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);Object.assign(u,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Vh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Fh(u)),this.data.dblclickData=Ar(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},$c))}}__handleObjectsEvents(n){if(!ph(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=lh(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(n,r,t,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=i.find(c=>c.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,uo),this.state.objectsObservers[r]=null),a?s(o.object,r,Zu):(this.state.objectsObservers[r]=o.object,s(o.object,r,Gu))):a&&(s(a,r,uo),this.state.objectsObservers[r]=null)}}}__doMove(n,e){if(this.step.is(gt.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(gt.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(gt.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*Ye.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Ye.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(gt.MOVING)){n.preventDefault();const e=ao(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Ut.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};ze.enabled=!1;var tr=new Xe,fc=new pt,pc=new Zi,j0=class extends Rs{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new n0(this.config.rendererParameters),this.renderer.setPixelRatio(Ut.pixelRatio),this.renderer.outputColorSpace=Es,this.renderer.toneMapping=_o,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Tl,this.camera=new jt(50,16/9,.1,2*Un),this.camera.matrixAutoUpdate=!1;const e=new Wt(new Wi(Un).scale(-1,1,1),new Ts({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[ni]:!0},this.scene.add(e),this.raycaster=new ap,this.frustum=new Po,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(_s.type,this),this.viewer.addEventListener(Nn.type,this),this.viewer.addEventListener(fs.type,this),this.viewer.addEventListener(ps.type,this),this.viewer.addEventListener(Ft.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(_s.type,this),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(fs.type,this),this.viewer.removeEventListener(ps.type,this),this.viewer.removeEventListener(Ft.type,this),super.destroy()}handleEvent(n){switch(n.type){case _s.type:this.__onSizeUpdated();break;case Nn.type:this.__onZoomUpdated();break;case fs.type:this.__onPositionUpdated();break;case ps.type:this.__onPositionUpdated();break;case Ft.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new hs(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new yu))}setTexture(n){this.meshContainer||(this.meshContainer=new Fi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(-t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,s=!bt(e.position),r=!bt(e.zoom),a=new Ho(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new Fi,c=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(c,n,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(n.panoData,c),this.setSphereCorrection(e.sphereCorrection,o),s&&!t.rotation){const h=this.viewer.getPosition(),p=new F(0,1,0);o.rotateOnWorldAxis(p,a.position.yaw-h.yaw);const v=new F(0,1,0).cross(this.camera.getWorldDirection(new F)).normalize();o.rotateOnWorldAxis(v,a.position.pitch-h.pitch)}o.add(c),this.scene.add(o),this.renderer.setRenderTarget(new rn),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:l,properties:u}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,i?a.zoomLevel:null),d=new vr({properties:{...u,opacity:{start:0,end:1}},duration:l,easing:"inOutCubic",onTick:h=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,h.opacity);break;case"black":case"white":h.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?Ye.mapLinear(h.opacity,0,.5,1,0):Ye.mapLinear(h.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?Ye.mapLinear(h.opacity,.5,1,0,1):Ye.mapLinear(h.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),r&&!i&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return d.then(h=>{o.remove(c),this.scene.remove(o),h?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(c))}),d}getIntersections(n){tr.x=2*n.x/this.state.size.width-1,tr.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera(tr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,tr)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(fc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(fc),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),pc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(pc)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof Tl||t.dispose?.(),t!==n&&this.cleanScene(t)})}},$0=class extends ip{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const s=this._abortController.signal,r=super.load(n,c=>{o(),e(c)},t,c=>{if(o(),s.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",i(l)}else i(c)});function a(){r.src=""}function o(){s.removeEventListener("abort",a,!1)}return s.addEventListener("abort",a,!1),r}},K0=class extends Rs{constructor(n){super(n),this.fileLoader=new np,this.fileLoader.setResponseType("blob"),this.imageLoader=new $0}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=Ni.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);Ni.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let s=0;return e?.(s),this.fileLoader.loadAsync(n,r=>{if(r.lengthComputable){const a=r.loaded/r.total*100;a>s&&(s=a,e?.(s))}}).then(r=>(s=100,e?.(s),Ni.add(n,t,r),r))}loadImage(n,e,t){const i=Ni.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(s=>(Ni.add(n,t,s),s))):this.loadFile(n,e,t).then(s=>this.blobToImage(s))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new qe("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new su(Math.round(n)))}},J0=class extends Rs{constructor(n){super(n),this.zoom=new as(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Nn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new bh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new fs(e))},{yaw:new as(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new as(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new as(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new ps(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ye.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ye.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},Q0=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new F(0,0,Un),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},ix=class extends wh{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=rh(n.container),!this.parent)throw new qe('"container" element not found.');this.parent[ni]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Eh(this.parent),Mh(this.container,"core"),this.state=new Q0,this.config=N0(n),this.__setSize(this.config.size),this.overlay=new H0(this);try{Ut.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Ni.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new j0(this),this.textureLoader=new K0(this),this.eventsHandler=new Z0(this),this.dataHelper=new X0(this),this.dynamics=new J0(this),this.adapter.init?.(),this.loader=new B0(this),this.navbar=new O0(this),this.panel=new k0(this),this.notification=new z0(this),this.autoSize(),this.setCursor(null),Fo(Ut.isTouchEnabled,e=>{wr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[ni]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ms)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=fo(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return ch(this.parent,Ut.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new _s(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=r=>{if(_h(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new du(n,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new ou(n));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),oo();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!bt(a.zoom)||!bt(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Hi(r)),bt(a.zoom)||this.zoom(a.zoom),bt(a.position)||this.rotate(a.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Hi(r)),this.state.transitionAnimation=this.renderer.transition(r,a,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new mu(r)),!r)throw oo()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in Yi)){Tt(`Unknown option ${t}`);continue}if(t in dc){Tt(dc[t]);continue}switch(t in po&&(i=po[t](i,{rawConfig:e,defValue:Yi[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Nn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Ft(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:yt.ERROR,image:W0,title:n,dismissible:!1})}hideError(){this.overlay.hide(yt.ERROR)}rotate(n){const e=new Dh(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=Oo(n),t=!bt(n.zoom),i=new Ho(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return s?(this.state.animation=new vr({properties:r,duration:s,easing:n.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new vr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||hh(this.parent,Ut.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&uh(Ut.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new G0(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new vs),this.disableIdleTimer(),this.stopAnimation()}};export{tx as P,ix as V};
