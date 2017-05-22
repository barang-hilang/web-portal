const React = require('react');

var About = React.createClass({
  render:function(){
    return(
    <div className="AboutPage">
      <h1>Barang Hilang</h1>
      <hr/>
      <p>The very begining, this is our idea to make web service on subject "Pengembangan Layanan Berbasis Teknologi Web" at Atma Jaya Yogyakarta Univesity.
      The idea is make a asset to poeple that lost their items. So they can find or report the annoucne more esier</p>
      <p>Developers are very welcome here, please use our asset to make your own apps to help this people.</p>
      <p>The very begining we make this API free, but it can be changed anytime soon we found that this API are in very high traffic of use..</p>
      <br/>
      <h3>Notes for developer</h3>
      <p>This WebService are free, but for free developers, there are limiation :</p>
      <ul>
        <li>Api Call rate (For User-Barang-Pelaporan Usage) : max 10 call/min.</li>
      </ul>
      <p>Soon we will add membership / donation for premium member that will provides no limitation for api request</p>
      <br/>
      <h2>Who We Are ?</h2>
      <hr/>
      <p>
        <h3>Github Project : <span><a href="https://github.com/barang-hilang">Barang Hilang</a></span></h3>
        <ul>
          <li>Chrysant Meike : <span><a href="https://github.com/chrystcarthn">https://github.com/chrystcarthn</a></span></li>
          <li>Ignatius Aldi Pradana : <span><a href="https://github.com/chrystcarthn">https://github.com/igprad</a></span></li>
          <li>Reo Ramalika : <span><a href="https://github.com/reoramalika">https://github.com/reoramalika</a></span></li>
          <li>William Yuto : <span><a href="https://github.com/Nyutnyut">https://github.com/Nyutnyut</a></span></li>
        </ul>
      </p>
    </div>
    );
  }
})

module.exports = About;
