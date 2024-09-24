
let Calculator=
{
    inputText : document.getElementById("result") ,
    FirstValue: null,
    operator:0,
    CurrentValues :[],
    WriteText:function(button)
    {
        Calculator.inputText.value+=button.value;

    }
,
    oprtatorClick:function(CurrentOperator)
    {
        if(Calculator.inputText.value===""){
            alert("Please Enter First Value");
            return;
        }
      this.FirstValue=parseFloat(Calculator.inputText.value);
        Calculator.inputText.value="";
        this.operator=CurrentOperator;
    },
    Calculation:function()
    {
        if(Calculator.inputText.value===null){
            alert("Please Enter First  Value");
            return;
        }
        if(Calculator.inputText.value===""){
            alert("Please Enter Second Value");
            return;
        }
        let newValue=parseFloat(Calculator.inputText.value);
        let result=0;
        switch (this.operator)
         {
           case '1':
            Calculator.inputText.value=this.FirstValue/newValue;
             break;  
             result=this.FirstValue / newValue;
             case '2':
                result=this.FirstValue * newValue;
             break;  
             case '3':
                result=this.FirstValue+newValue;
             break; 
             case '4':
                result=this.FirstValue-newValue;
             break;    
        }
        Calculator.inputText.value=result;
        this.CurrentValues.push(result);
      console.log(this.CurrentValues)
    },
    ClearData:function()
    {
        this.inputText.value="";
        this.FirstValue=null;
        this.operator=0;

    }
}

