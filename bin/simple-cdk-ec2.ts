#!/usr/bin/env node
import 'source-map-support/register';
// import * as cdk from 'aws-cdk-lib';
import * as cdk from '@aws-cdk/core';
import { SimpleCdkEc2Stack } from '../lib/simple-cdk-ec2-stack';

const app = new cdk.App();
new SimpleCdkEc2Stack(app, 'SimpleCdkEc2Stack', {
 stackName:'cdk-stack',
 env:{
  region: process.env.AWS_REGION,
  account:process.env.AWS_ACCOUNT_NUMBER,
 }
});