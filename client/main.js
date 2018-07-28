import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http'

import './main.html';

const list = HTTP.get('http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=10', {}, (error, response) => {
    if(error) {
      console.log(error)
    } else {
      //console.log(response.data.data.takingorders.listdata)
      //return (response.data.data.takingorders.listdata)
    }
});
//console.log(list)

Template.body.helpers({ 
  notes: [
    HTTP.get('http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=10', {}, (error, response) => {
      if(error) {
        console.log(error)
      } else {
        console.log(response.data.data.takingorders.listdata)
        return response.data.data.takingorders.listdata
      }
    })
  ]

  // notes(){
  //   return Notes.find({});
  // }

  
});

// const list = HTTP.get('http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=10', {}, (error, response) => {
//     if(error) {
//       console.log(error)
//     } else {
//       return response.data.data.takingorders.listdata
//     }
//   })