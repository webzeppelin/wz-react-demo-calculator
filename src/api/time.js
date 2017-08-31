export default class TimeApi {

  // ENCAPSULATE CALLS TO INTERNAL AND EXTERNAL APIS
  static fetchLocalTime() {
    return new Promise(resolve => {
      //let url = 'http://worldclockapi.com/api/json/'+TimeApi.getLocalTimezoneString()+'/now';
      let url = 'http://worldclockapi.com/api/json/cst/now';
      console.log(url);
      fetch(url)
        .then(function (data) {
          resolve(data.json());
        }
        )
    });
  }

  static getLocalTimezoneString() {
    return (new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]).toLowerCase();
    //return (new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]).toLowerCase();
  }
}