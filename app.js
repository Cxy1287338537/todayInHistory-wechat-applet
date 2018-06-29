Array.prototype.remove = function (item) {
  if(this.indexOf(item) === -1) return this;
  this.splice(this.indexOf(item), 1);
  return this;
}
App({
  onLaunch: function () {
    
  },
  list: [],
});
