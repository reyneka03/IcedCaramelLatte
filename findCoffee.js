//API

const videoSection=document.querySelector('section')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLcsVnMv1w7ERr2f263WMN6sT_sIeGHCxA&key=AIzaSyBgedVDhnCdBonLGNGZ_obWNtFJjsa_ic8')


.then(response=>response.json())

.then(data=>{
    data.items.forEach(el =>{
      videoSection.innerHTML +=`
      <a href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
      <img src="${el.snippet.thumbnails.medium.url}" />
        <h3>${el.snippet.title}</h3>
      `
      
    });
    
    
  
})
