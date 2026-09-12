import{a as u,S as f,i as d}from"./assets/vendor-CesYmgD5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="57471701-99d02be1d10482722832ebff7";function m(n){return u.get("https://pixabay.com/api/",{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const i=document.querySelector(".gallery"),a=document.querySelector(".loader");console.log(i);console.log(a);const y=new f(".gallery a");function h(n){const o=n.map(t=>`<li>
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}"/>
      </a>
      <p>${t.likes}</p>
      <p>${t.views}</p>
      <p>${t.comments}</p>
      <p>${t.downloads}</p>
    </li>`).join("");i.innerHTML=o,y.refresh()}function g(){i.innerHTML=""}function L(){a.classList.add("is-active")}function b(){a.classList.remove("is-active")}const l=document.querySelector(".form");console.log(l);l.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value;console.log(n),o!==""&&(L(),g(),m(o).then(t=>{if(t.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}).finally(b))}
//# sourceMappingURL=index.js.map
