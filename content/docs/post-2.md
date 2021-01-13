---
title: "Setting Up a Static Site - AWS, S3, Cloudfront"
date: "12/01/2021"
---

- You store the site files on S3
- Site itself is exposed to the web via Cloudfront
*  Cloudfront is a CDN that grabs your files from the S3 bucket and then serves them to the end user
- www. DNS points to Cloudfront domain
- root domain redirects to www (so you can’t access via the root domain)
- Cloudfront has to point to the S3 public domain and NOT directly to the bucket. Cloudfront let’s you choose your origin from a list, in which you can select your bucket, but what you need to do is type in the domain name that the S3 static site setting gives you
* The listed item is the S3 API endpoint and NOT the static website endpoint i.e. an HTTP endpoint. The web endpoint is optimised for web browsers
* Some key points here are that the website as opposed to the API end point returns
    * Index document rather than a list of objects
    * HTML document rather than XML response
For SSL you need to generate a certificate in AWS
Point it at your domain e.g. *.mydomain.com / tell it which domain to issue for
Then in your DNS you add the name and value provided by AWS as a CNAME record
* Do not add the website.com part of the name to the name when using GoDaddy - GoDaddy appends the name so you end up with xxx.example.com.example.com
* Do not include the dot at the end of the name or value
Then you have to go to the Cloudfront distribution and choose the correct certificate to use for that distribution
If all works Cloudfront should be using the cert that was issued for the domain you asked for and set the DNS on    
