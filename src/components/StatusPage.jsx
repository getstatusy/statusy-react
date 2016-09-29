'use strict';

let React = require('react');
let $ = require('jquery');

import { origin, serviceStyle, loadingSpinner } from '../constants.js';

let StatusPage = React.createClass({
   getInitialState() {
      return {
         statusPageData: null,
         requestError: null,
      }
   },
   componentDidMount() {
      $.get(`${origin}/${this.props.location.query.statuspage}`).done(function(data) {
         this.setState({statusPageData: data.statuspage});
      }.bind(this));
   },
   getFormattedStatus() {
      if(this.state.statusPageData.services.length > 0) {
         return this.state.statusPageData.services.map((s, index) => (
            <li className="list-group-item" key={index}>
               <span style={serviceStyle}>
                  {s.status}
               </span>
               {s.description}
            </li>
         ));
      }
   },
   getStatusPageDisplayComponent() {
         return (
            <div>
               <h3>{this.state.statusPageData.name} Status: {this.state.statusPageData.overall_status}</h3>
               <ul className="list-group">
                  {this.getFormattedStatus()}
               </ul>
            </div>
         )
   },
   render() {
      if (this.state.statusPageData) {
         return (
            <div className="col-md-12">
               {this.getStatusPageDisplayComponent()}
            </div>
         );
      }
      if (this.state.requestError) {
         console.log(`Unable to fetch data from Statusy, got error: ${requestError}`);
      }
      return (
         <div style={loadingSpinner}>
            <i className="fa fa-spinner fa-spin fa-2x"></i>
         </div>
      );
   }
});

module.exports = StatusPage;
