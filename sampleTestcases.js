var jsonString = '["vikram",1,"aditya","siva"]'

var beautify = new BeautifyJSON(jsonString);

var string = beautify.getBeautify();

console.log(string);

var data0 = '["vikram",1,"aditya","siva"]'

var beautify0 = new BeautifyJSON(data0);

var string0 = beautify0.getBeautify();

console.log(string0);

var data1 = [["vikramadity" , "battina"] , ["aditya","bhargava"],["kiran","kovi"],["siva" , "ram" , "prasad"],"yaswitha","swetha","subbarao","ramadevi"];

var beautify1 = new BeautifyJSON(data1,4);

var string1 = beautify1.getBeautify();

console.log(string1);

var data3 = '{"vikram":"aditya"}';
var beatify3 = new BeautifyJSON(data3);

var string3 = beatify3.getBeautify();
console.log(string3);

var data4 = '{"formid":"Form043e8d570d54b4d","Form043e8d570d54b4d":{"formcontroller":"ViewController","events":{},"entity":"workorders__k"},"Button0f0c139740d6b45":{"events":{"onClick":{"main":{"locked":false,"code":"dmFyIGRldGFpbFZpZXdDb250cm9sbGVyID0gbmF2aWdhdGlvbkNvbnRyb2xsZXIuZ2V0Vmlld0NvbnRyb2xsZXIoImZybVdvcmtPcmRlclZBIik7CiAgICBkZXRhaWxWaWV3Q29udHJvbGxlci5yZWdpc3RlckRhdGFDYWxsYmFjayh3b3JrT3JkZXJDYWxsYmFjayk7CiAgICBuYXZpZ2F0aW9uQ29udHJvbGxlci5uYXZpZ2F0ZVRvKCJmcm1Xb3JrT3JkZXJWQSIsIG51bGwpOw=="}}}}}';
var beatify4 = new BeautifyJSON(data4,4);
var string4 = beatify4.getBeautify();
console.log(string4);

var data5 = '{"ecvents":{}}';
var beatify5 = new BeautifyJSON(data5);
var string5 = beatify5.getBeautify();
console.log(string5);

var data6  = '{}';
var beatify6 = new BeautifyJSON(data6);
var string6 = beatify6.getBeautify();
console.log(string6);

