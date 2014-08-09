var jsonString = '["vikram",1,"aditya","siva"]'

var beautify = new BeautifyJSON(jsonString);

var string = beautify.getBeautify();

console.log(string);