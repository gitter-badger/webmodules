var path = require('path');
var $ = window.jQuery = require('jquery');
var angular = require('angular');
var d3 = require('d3');
var react = require('react');
var reactdom = require('react-dom');
var uia = require('ui-aliens');
var moment = require('moment');
var ngSanitize = require('ngSanitize');
var fullcalendar = require('fullcalendar');
var font_awesome = require('font-awesome');
//var less = require('less');
var magnificpopup = require('magnific-popup');
var select2 = require('select2');
var babel = require('babel');

// some problem (depends on global.jQuery)
var jqueryui = require('jquery-ui');

// fails
//var socketio = require('socket.io');    // socket.io-browserify : module.parent 문제
//var isotope = require('isotope-layout');
//var jqueryui_monthpicker = require('jquery.ui.montjquery.ui.monthpicker');
//var jqueryui_datepicker = require('jquery-ui-datepicker-languages');


var sub = require('./sub/sub.js');

$(document).ready(function($) {
  process.nextTick(function() {
    console.log('env', process.env);
  });
  
  console.log('module', require.module);
  console.log('path', path.join(__dirname, 'test'));
  console.log('jquery', $);
  console.log('angular', angular);
  console.log('d3', d3);
  console.log('react', react);
  console.log('reactdom', reactdom);
  console.log('sub', sub);
  console.log('babel', babel);
  
  var es2015 = 'import {sum, pi} from "lib/math";\n\
    const getMessage = () => "Hello World";\n\
    export * from "lib/math";\n\
    export var e = 2.71828182846;\n\
    export default function(x) {\n\
        return Math.exp(x);\n\
    }';
  var jsx = 'var Avatar = React.createClass({\n\
      render: function() {\n\
        return (\n\
          <div>\n\
            <PagePic pagename={this.props.pagename} />\n\
            <PageLink pagename={this.props.pagename} />\n\
          </div>\n\
        );\n\
      }\n\
    });\n\
    var PagePic = React.createClass({\n\
      render: function() {\n\
        return (\n\
          <img src={"https://graph.facebook.com/" + this.props.pagename + "/picture"} />\n\
        );\n\
      }\n\
    });\n\
    var PageLink = React.createClass({\n\
      render: function() {\n\
        return (\n\
          <a href={"https://www.facebook.com/" + this.props.pagename}>\n\
            {this.props.pagename}\n\
          </a>\n\
        );\n\
      }\n\
    });\n\
    ReactDOM.render(\n\
      <Avatar pagename="Engineering" />,\n\
      document.getElementById("example")\n\
    );';
  console.log('babel.transform');
  console.log('- es2015\n', babel.transform(es2015, { presets: ['es2015'], sourceMaps: true }));
  console.log('- jsx\n', babel.transform(jsx, { presets: ['react'], sourceMaps: true }));
  
  var CommentBox = react.createClass({displayName: 'CommentBox',
    render: function() {
      return (
        react.createElement('div', {className: "commentBox"},
          "Hello, world! I am a CommentBox."
        )
      );
    }
  });
  
  reactdom.render(
    react.createElement(CommentBox, null),
    document.getElementById('content')
  );
});