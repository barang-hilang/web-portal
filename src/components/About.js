const React = require('react');

var About = React.createClass({
  render:function(){
    return(
      <div className="slide story" id="slide-2" data-slide="2">
    		<div className="container">
    			<div className="row title-row">
    				<div className="col-12 font-thin">Contrary to popular belief, <span className="font-semibold">Lorem Ipsum</span> is not simply random text.</div>
    			</div>
    			<div className="row line-row">
    				<div className="hr">&nbsp;</div>
    			</div>
    			<div className="row subtitle-row">
    				<div className="col-12 font-thin">This is what <span className="font-semibold">we do best</span></div>
    			</div>
    			<div className="row content-row">
    				<div className="col-12 col-lg-3 col-sm-6">
    					<p><i className="icon icon-eye-open"></i></p>
    					<h2 className="font-thin">Visual <span className="font-semibold">Identity</span></h2>
    					<h4 className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
    				</div>
    				<div className="col-12 col-lg-3 col-sm-6">
    					<p><i className="icon icon-laptop"></i></p>
    					<h2 className="font-thin">Web <span className="font-semibold">Design</span></h2>
    					<h4 className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
    				</div>
    				<div className="col-12 col-lg-3 col-sm-6">
    					<p><i className="icon icon-tablet"></i></p>
    					<h2 className="font-thin">Mobile <span className="font-semibold">Apps</span></h2>
    					<h4 className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
    				</div>
    				<div className="col-12 col-lg-3 col-sm-6">
    					<p><i className="icon icon-pencil"></i></p>
    					<h2 className="font-semibold">Development</h2>
    					<h4 className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
})

module.exports = About;
