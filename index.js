/* empty css                      */import{a as g,S as m,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="57992697-c89f89a0e9b65e9090b37caa0",h="https://pixabay.com/api/";function y(s){return g.get(h,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),v=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="image-info">
            <div class="info-item">
              <strong>Likes</strong>
              <span>${t}</span>
            </div>
            <div class="info-item">
              <strong>Views</strong>
              <span>${i}</span>
            </div>
            <div class="info-item">
              <strong>Comments</strong>
              <span>${d}</span>
            </div>
            <div class="info-item">
              <strong>Downloads</strong>
              <span>${u}</span>
            </div>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const f=document.querySelector(".form");f.addEventListener("submit",w);function w(s){s.preventDefault();const r=f.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}b(),S(),y(r).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",titleColor:"#ffffff"});return}L(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",titleColor:"#ffffff"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
