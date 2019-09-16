const events=require("events");
const EventEmitter=events.EventEmitter;

function Radio(radioName,radioHz){
    EventEmitter.call(this);
    this.radioName=radioName;
    this.radioHz=radioHz;
}
Radio.prototype.__proto__=EventEmitter.prototype;
module.exports={
    Radio:Radio
}