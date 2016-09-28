'use strict';

let React = require('react');
let $ = require('jquery');

import {get} from '../actions/request.jsx';

let ROOT_URI = "https://app.statusy.co/api/v1/public/statuspage";

let StatusPage = React.createClass({
   getInitialState() {
      return {
         statusPageData: null
      }
   },
   componentDidMount() {
      $.get(`${ROOT_URI}/statusy`).done(function(data) {
         this.setState({statusPageData: data.statuspage});
      }.bind(this));
   },
   getFormattedStatus() {
      if(this.state.statusPageData.services.length > 0) {
         return this.state.statusPageData.services.map((s, index) => (
            <div>
               {s.description} - {s.status}
            </div>
         ));
      }
   },
   getStatusPageDisplayComponent() {
         return (
            <div>
               Overall Status: {this.state.statusPageData.overall_status}
               {this.getFormattedStatus()}
            </div>
         )
   },
   render() {
      if (this.state.statusPageData) {
         return (
            <div>
               {this.getStatusPageDisplayComponent('statusy')}
            </div>
         );
      }

      return <div>Loading...</div>;
   }
});

module.exports = StatusPage;
