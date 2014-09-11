Constants = { "depthlevel": 4 ,"output":true };
function BeautifyJSON(jsonString, depthlevel,output)
{
	
	     

	     var context = this;

         assignTheJsonString(jsonString);
		 assignTheDepthValue(depthlevel);
		 assignTheOutput(output);
	     function assignTheJsonString(jsonString)
	     {
	         if(typeof jsonString == "undefined")
	          {
	     	  //throw error please define the JSON String
	          }
	          
	          else if( typeof jsonString === 'boolean')
	          {
	                  //please give the valid json string or the object not boolean
	          }
	          else if(typeof jsonString === "number")
	          {
	                 //please give the valid string or the objectnot a number
	          }
	          else if(typeof jsonString === "function")
	          {
	                 //please give valid JSON String or the object not the function
	          }
	          if(typeof jsonString === "object")
	          {
	            context.isObject = true;
	            context.jsonString = jsonString;
	          } 
	          else if (typeof jsonString === 'string')
	          {
		          try
		          {
		              var jsonObj = JSON.parse(jsonString);
		              context.jsonString = jsonObj;
                       
		          }
		          catch(err)
		          {
		          	//please give valid JSON String
		          }
	         }
	         else
	         {
	         	//please give object or the valid JSON String
	         }
	          
          }
           
          function assignTheDepthValue(depthlevel)
          {
          	if( typeof depthlevel == 'undefined')
          	{
          		context.depthlevel = Constants.depthlevel;
            }
          	else if( typeof depthlevel == 'number' )
          	{
          		context.depthlevel = depthlevel;
          	}
          	else if(typeof depthlevel == 'string')
          	{
          	     var tempvalue = parseInt(depthlevel);
          	     if(isNaN(tempvalue))
          	     {
          	     	//throw error
          	     }
          	     context.depthlevel = tempvalue;
          	}
          	else
          	{
          		//throw error
          	}
          }
      
        function assignTheOutput(output)
        {
            if(typeof output === 'undefined')
            {
                context.output = Constants.output;
            }
            else if( typeof output === 'boolean')
            {
                context.output = output;
            }
            else
            {
            	//throw error
            }
        }

     this.getBeautify = function()
               {

               	 var buffer = [];
               	 var depth = {value : 0};
               	 if( this.jsonString instanceof Array)
               	 {
               	 	printArray("",this.jsonString,buffer,depth,this.output);
               	 }
               	 else if( this.jsonString instanceof Object)
               	 {
               	 	printObject("",this.jsonString,buffer,depth,this.output);
               	 }
               	 var finalString = buffer.join("");
               	 return finalString;

               }
        function printArray(key,arr,buffer,depth,output)
        {
             printDepth(buffer,depth);
             if(!(typeof key == 'undefined' || key === ""))
             {
             	var str = key+" : ";
             	buffer.push(str);
             }

             buffer.push("[\n");
             depth.value = depth.value + 1;
             var i=0;
             var inloop = false;
             for( i=0;i<arr.length;i++)
             {
                 if(typeof arr[i] === 'number' || typeof arr[i] === 'string' || typeof arr[i] === 'boolean')
                 {
                         printNumberString(i,arr[i],buffer,depth);
                         
                      
                 }
                 else if(typeof arr[i] == 'object' && arr[i] instanceof Array)
                 {
                 	printArray(i,arr[i],buffer,depth,output);

                 }
                 else if( typeof arr[i] == 'object')
                 {
                 	printObject(i,arr[i],buffer,depth,output);
                 }
                 buffer.push(" ,\n");
                 inloop = true;
             }
             if(inloop)
             {
                  buffer.pop();
             }
             buffer.push("\n");
             depth.value = depth.value -1;
             printDepth(buffer,depth);
             buffer.push("]");


        }

        function printObject(key,obj,buffer,depth,output)
        {
        	 printDepth(buffer,depth);
             if(!(typeof key == 'undefined' || key === ""))
             {
             	var str = key+" : ";
             	buffer.push(str);
             }

             buffer.push("{\n");
             depth.value = depth.value + 1;
             var i=0;
             var inloop=false;
             for( var i in obj)
             {
                 if(typeof obj[i] === 'number' || typeof obj[i] === 'string' || typeof obj[i] === 'boolean')
                 {
                         printNumberString(i,obj[i],buffer,depth);
                         
                      
                 }
                 else if(typeof obj[i] == 'object' && obj[i] instanceof Array)
                 {
                 	printArray(i,obj[i],buffer,depth,output);

                 }
                 else if( typeof obj[i] == 'object')
                 {
                 	printObject(i,obj[i],buffer,depth,output);
                 }
                 buffer.push(" ,\n");
                 inloop = true;

             }
             if(inloop)
             {
                 buffer.pop();
             }
             buffer.push("\n");
             depth.value = depth.value -1;
             printDepth(buffer,depth);
             buffer.push("}");


        }

     function printNumberString(key,value,buffer,depth)
     {
              printDepth(buffer,depth);
              var str = key + " : "+value;
              buffer.push(str);
             
     }
     function printDepth(buffer,depth)
     {
     	 var str = "";
     	 var len = context.depthlevel * depth.value ; 
     	 var i;
     	 for( i = 0 ; i < len ;i++)
     	 {
             str = str + " ";
     	 }
     	 buffer.push(str);
     }

}

