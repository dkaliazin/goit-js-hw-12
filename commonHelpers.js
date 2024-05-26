import{S as u,a as p,i as c}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L=s=>s.map(({likes:t,views:a,comments:o,downloads:e,webformatURL:r,largeImageURL:n,tags:y})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img
        class="gallery-item-image"
        src="${r}"
        alt="${y}"
      />
    </a>
      <div class="image-info">
          <span class="image-likes">Likes: ${t}</span>
          <span class="image-views">Views: ${a}</span >
          <span  class="image-comments">Comments: ${o}</span>
          <span class="image-downloads">Dowloads: ${e}</span>
      </div>
   
      </li>
  `).join("");new u(".gallery a",{captionsData:"alt",captionDelay:250});const b="28216731-30bd748fb13dcf95cdddced76",v="https://pixabay.com/api/";async function w(s,t=1,a=15){return(await p.get(v,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}const h=document.querySelector(".gallery"),P=document.querySelector(".srch-form"),l=document.querySelector(".loader"),i=document.querySelector(".img-load-btn");let d=1,S=15,g="";async function f(s,t){l.classList.remove("is-hidden");try{const a=await w(s,t);a.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("is-hidden-btn"),i.removeEventListener("click",m)):(h.insertAdjacentHTML("beforeend",L(a.hits)),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t*S>=a.totalHits?(i.classList.add("is-hidden-btn"),i.removeEventListener("click",m),c.info({message:"We're sorry, but you've reached the end of search results."})):i.classList.remove("is-hidden-btn"))}catch{c.error({message:"An error occurred while fetching photos. Please try again later."})}finally{l.classList.add("is-hidden")}}async function q(s){s.preventDefault();const t=s.target.elements.searchKeyword.value.trim();if(h.innerHTML="",t==="")return i.classList.add("is-hidden-btn"),i.removeEventListener("click",m),c.error({message:"Please enter a search query before searching!"});g=t,l.classList.remove("is-hidden");try{d=1,await f(t,d)}catch{c.error({message:"An error occurred while performing the search. Please try again later."})}finally{s.target.reset(),l.classList.add("is-hidden")}}P.addEventListener("submit",q);async function m(){d+=1,await f(g,d),D()}i.addEventListener("click",m);function D(){const{height:s}=document.querySelector(".gallery-item").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
