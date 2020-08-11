export default class VueRouter {
  push(path) {
    //console.log(this.UC);
    this.UC.setData({path});
    /*
    const name = options.name;
    const params = options.params;
    const query = options.query;
    let url = name;
    if (query) {
      var url_query = "";
      for (const q of Object.keys(query)) {
        url_query += `&$(q)=$(query[q])`;
      }
      if (url_query) {
        url += "?" + url_query.substr(1);
      }
    }
    wx.navigateTo({
      url,
    })*/
  }
}