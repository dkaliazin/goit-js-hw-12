import{S as f,a as v,i as c}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w=s=>s.map(({likes:t,views:a,comments:o,downloads:e,webformatURL:r,largeImageURL:n,tags:L})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img
        class="gallery-item-image"
        src="${r}"
        alt="${L}"
      />
    </a>
      <div class="image-info">
          <span class="image-likes">Likes: ${t}</span>
          <span class="image-views">Views: ${a}</span >
          <span  class="image-comments">Comments: ${o}</span>
          <span class="image-downloads">Dowloads: ${e}</span>
      </div>
   
      </li>
  `).join("");new f(".gallery a",{captionsData:"alt",captionDelay:250});const b="28216731-30bd748fb13dcf95cdddced76",P="https://pixabay.com/api/";async function S(s,t=1,a=15){return(await v.get(P,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}const g=document.querySelector(".gallery"),q=document.querySelector(".srch-form"),l=document.querySelector(".loader"),i=document.querySelector(".img-btn");let d=1,h=15,y="";function u(){i.classList.add("is-hidden-btn")}function D(){i.classList.remove("is-hidden-btn")}async function p(s,t){l.classList.remove("is-hidden");try{const a=await S(s,t,h);a.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),u(),i.removeEventListener("click",m)):(g.insertAdjacentHTML("beforeend",w(a.hits)),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t*h>=a.totalHits?(u(),i.removeEventListener("click",m),c.info({message:"We're sorry, but you've reached the end of search results."})):D())}catch{c.error({message:"An error occurred while fetching photos. Please try again later."})}finally{l.classList.add("is-hidden")}}async function E(s){s.preventDefault();const t=s.target.elements.searchKeyword.value.trim();if(g.innerHTML="",t==="")return u(),i.removeEventListener("click",m),c.error({message:"Please enter a search query before searching!"});y=t,l.classList.remove("is-hidden");try{d=1,await p(t,d)}catch{c.error({message:"An error occurred while performing the search. Please try again later."})}finally{s.target.reset(),l.classList.add("is-hidden")}}q.addEventListener("submit",E);async function m(){d+=1,await p(y,d),M()}i.addEventListener("click",m);function M(){const{height:s}=document.querySelector(".gallery-item").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
