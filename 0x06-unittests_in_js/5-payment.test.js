const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
 let consoleLogStub;

 beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
 });

 afterEach(() => {
    consoleLogStub.restore();
 });

 it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
 });

 it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogStub.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
 });
});
