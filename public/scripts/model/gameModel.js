

//vars from Jay Game Cosntructor and Game.all

Game.fetchAll = (callback) => { //eslint-disable-line
  $.ajax('/game/all') // TODO path not yet defined.
  .then(
    function(results){
      if(results.rows.length) {
        Game.loadAll(results.rows); //eslint-disable-line
        callback();
      } else {
        $.ajax({
          url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/1942?fields=*',
          method: 'GET',
          headers: {
            'X-Mashape-Key': 'OPRI3wLZxwmshqlDHGB3P14RtxvHp13F6o1jsnsQDR0SX74UzD',
            'Accept': 'application/json'
          }
        }).then(data => {
          data.forEach(item => {
            let game = new Game(item); //eslint-disable-line
            game.insertRecord();
          })
        })
      }
    }
  )
};

Game.prototype.insertRecord = (callback) => { //eslint-disable-line
  $.post('/game/insert', {name: this.name, genres: this.genres, popularity: this.popularity, summary: this.summary, videos: this.videos[0]})
  .then(data => {
    console.log(data);
    if(callback) callback();
  });
}
