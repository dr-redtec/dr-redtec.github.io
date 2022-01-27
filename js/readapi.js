function readapi() {

  let jsondata;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  fetch('https://api.opensea.io/api/v1/collections?asset_owner=0xF11578d2aba7451bF3c68Bf14d936137D76Fb8C0&offset=0&limit=300', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => {
      jsondata = response;
      localStorage.setItem('nfts', JSON.stringify(jsondata));
      window.location.replace("https://dr-redtec.guthub.io/gallery.html");
      // var cat = JSON.parse(localStorage.getItem('myCat'));
      // console.log(cat);
      // console.log(jsondata);
    })

    .catch(err => console.error(err));
};
