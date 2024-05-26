import{S as m,a as y,i as n}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=s=>s.map(({likes:t,views:a,comments:o,downloads:e,webformatURL:r,largeImageURL:i,tags:f})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-item-image"
        src="${r}"
        alt="${f}"
      />
    </a>
      <div class="image-info">
          <span class="image-likes">Likes: ${t}</span>
          <span class="image-views">Views: ${a}</span >
          <span  class="image-comments">Comments: ${o}</span>
          <span class="image-downloads">Dowloads: ${e}</span>
      </div>
   
      </li>
  `).join("");new m(".gallery a",{captionsData:"alt",captionDelay:250});const L="28216731-30bd748fb13dcf95cdddced76",b="https://pixabay.com/api/";async function w(s,t=1,a=15){return(await y.get(b,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}const u=document.querySelector(".gallery"),v=document.querySelector(".srch-form"),l=document.querySelector(".loader"),c=document.querySelector(".img-load-btn");let d=1,P=15,h="";async function g(s,t){l.classList.remove("is-hidden");try{const a=await w(s,t);a.hits.length===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.add("is-hidden-btn")):(u.insertAdjacentHTML("beforeend",p(a.hits)),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t*P>=a.totalHits?(c.classList.add("is-hidden-btn"),n.info({message:"We're sorry, but you've reached the end of search results."})):c.classList.remove("is-hidden-btn"))}catch{n.error({message:"An error occurred while fetching photos. Please try again later."})}finally{l.classList.add("is-hidden")}}async function S(s){s.preventDefault();const t=s.target.elements.searchKeyword.value.trim();if(u.innerHTML="",t==="")return c.classList.add("is-hidden-btn"),n.error({message:"Please enter a search query before searching!"});h=t,l.classList.remove("is-hidden");try{d=1,await g(t,d)}catch{n.error({message:"An error occurred while performing the search. Please try again later."})}finally{s.target.reset(),l.classList.add("is-hidden")}}v.addEventListener("submit",S);async function q(){d+=1,await g(h,d),D()}c.addEventListener("click",q);function D(){const{height:s}=document.querySelector(".gallery-item").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
