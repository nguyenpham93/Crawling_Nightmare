const shortid = require('shortid');
const Nightmare = require('nightmare');		
const async = require('async');
let nightmare = Nightmare({ show: true });
const downloader = require('image-downloader');
const shell = require('shelljs');
const fs = require('fs');



nightmare
    .goto ('https://www.dienmayxanh.com/dien-thoai-apple-iphone')
    .evaluate ( function() {
        let arr = [];
        let ul = document.querySelectorAll('#product-list ul .cate ');
        ul.forEach(function(element) {
            let link = ul.querySelector('a').href;
            arr.push(link);
        });
    })