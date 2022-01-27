const showNFTs = () => {
   let output = "";
   const nfts = JSON.parse(localStorage.getItem('nfts'));


  nfts.forEach(
    ({ name, image_url }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image_url} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${image_url}>Orginal Link</a>
              </div>
              `)
  );
  container.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showNFTs);
