var message ="hey buddy";
console.log("Message:"+message);
var firstMessage="hi";
var lastMessage=" dude";
var reply=firstMessage+lastMessage;

function getContactName() {
    console.log("Reply:" +reply);
    }
 getContactName();


 
// ///Global execution context(GEC)

// // Creation Phase 
 
globalExecutionContext: {
    LexicalEnvironment: {
      EnvironmentRecord:  {
         type: "declarative",
          firstName: undefined,
          lastName: undefined,
        
        }
      
      outer:"null"
      ThisBinding: "global object or window object"
       }
       VariableEnvironment: {
         EnvironmentRecord:  {
            type: "declarative",
             fullName: undefined,
             
           }
         
         outer:"null"
         ThisBinding: "global object or window object"
          }

      }
 

     //   // Execution phase

           globalExecutionContext: {
             LexicalEnvironment: {
               EnvironmentRecord:  {
                  type: "declarative",
                   firstName: 'hey buddy',
                   lastName: 'hi dude',
                 
                 }
               
               outer:"null"
               ThisBinding: "global object or window object"
                }
                VariableEnvironment: {
                  EnvironmentRecord:  {
                     type: "declarative",
                      fullName: 'firstname+lastName' ,
                      
                    }
                  
                  outer:"null"
                  ThisBinding: "global object or window object"
                   }
      
               }



// ///     Function execution context(FEC)

 // // Creation Phase 

   FunctionExecutionContext: {
     LexicalEnvironment: {
       EnvironmentRecord:  {
          type: "declarative",
           firstNumber: undefined,
           lastNumber: undefined,
         
         }
       
       outer:"Global Execution context"
       ThisBinding: getContactName()
        }
        VariableEnvironment: {
          EnvironmentRecord:  {
             type: "object",
         
              
          }
          
          outer:"Global Execution context"
          ThisBinding: getContactName()
           }

       }
  

  // // Execution phase 

        
      FunctionExecutionContext: {
              LexicalEnvironment: {
                EnvironmentRecord:  {
    
                   type: "declarative",
                   firstNumber: '10',
                   lastNumber: '20',
                  
                  }
                
                outer:"Global Execution context"
                ThisBinding: getContactName()
                 }
                 VariableEnvironment: {
                   EnvironmentRecord:  {
                      type: "object",
                       
                     }
                   
                   outer:"Global Execution context"
                   ThisBinding: getContactName()
                    }
       
                }