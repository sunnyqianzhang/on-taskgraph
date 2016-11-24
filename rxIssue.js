'use strict'
var Rx = require('Rx')
Rx.Observable.range(1,2)
.map(function(val){
    console.log('map',val);
    if(val === 2){
        throw(new Error("error"));
    }
    return val;
})
.catch(function(err){
    console.log("err1", err);
})
.subscribe(
    function(value){console.log(value);}
    function(error){console.log("err",err);}
    function(){console.log("complete");}
);


