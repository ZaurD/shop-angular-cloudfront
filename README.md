
CloudFront URL : https://d81gdxuznewtz.cloudfront.net/ At the moment I have problem with CloudFront. My account must be verified. I got this message: Your account must be verified before you can add new CloudFront resources. To verify your account, please contact AWS Support (https://console.aws.amazon.com/support/home#/) and include this error message.

S3-website URL:  http://aws-course-second-app.s3-website-us-east-1.amazonaws.com/


I created new S3-website without CloudFront URL: http://shopbucketapp.s3-website-eu-west-1.amazonaws.com/. You can check it.











# Shop Angular Cloudfront

Angular version: ~12.

Repo maintainers:

- [Sergey Gultyayev](https://github.com/gultyaev)

## The purpose

The repository was created to have an Angular version of e-shop for EPAM NodeJS AWS course. At the same time we strive to make this repository follows best practices so it may be used as a starter for new projects with all the necessary toolings already set up.

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Contribution

Create an issue with the detailed description of the improvement/issue.

If you would like to help implementing some feature, you should ask the maintainers for approval so to ensure that the feature is desired in the repository and no efforts go wasted.

## Get up and running

Prerequisites: NodeJS v14

Follow the steps:

- git clone
- npm i
- ng serve
