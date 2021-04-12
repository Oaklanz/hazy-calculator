const calculate = arr  => {

    const calculationSteps = arr => {
        //convert string into a number  
       
        let num1 = Number(arr[0])
        let num2 = Number(arr[2])
        

        switch (operand) {
            case '*':
                return (num1 * num2)
            
            case  '+':
                return (num1 + num2)
                
            case '-' :
                return (num1 - num2)
            
            case '/':
                return (num1 / num2)
                            
            default:
            return  (NaN)
            }
            
        }  
          calculationSteps (['2', '*', 4])
          

          calculationSteps = arr => {
    
    
    let(arr[0]) = num1
    let(arr.indexOf(null)) = 0

    switch (operand) {
        case '+':
            return (num1 + 0)

        case '*':
            return (num1 * 0)

        case '-':
            return (num1 - 0)

        case '/':
            return (num1 / 0)


        default:
            return (NaN)
    }
}
        calculationSteps[10, '+', null]


    
    
         calculationSteps = arr => {
            // eslint-disable-line no-sparse-arrays 

    
    
        const arrFiltered = arr.filter(input => {return input !=''})
       
        
            let num1 = arrFiltered[0]
            let num2 = arrFiltered[2]

    switch (operand) {
        case '-':
            return (num1 - num2)
        
        case  '*':
            return (num1 * num2)
        case '+' :
            return (num1 + num2)
        
        case '/':
            return   (num1 / num2)
                        
        default:
        return  (NaN)
        }
        

    }   
          calculationSteps ([arrFiltered]) 


       calculationSteps = arr => {
       
        const arrFiltered = arr.filter(input =>{return element !='foo' && element !='bar'})

        let num1 = arr[0]
        let num2 = arr[2]


        // switch statement
        switch (operand) {
        case '*':
            return(num1 * num2)
            
        case  '+':
            return (num1 + num2)
        
        case '-' :
            return (num1 - num2)  
            
        case '/':
            return (num1 / num2)  
                   
            default:
            return  (NaN)
        }
    }
        calculationSteps (arrFiltered)



        calculationSteps = arr => {
                    // eslint-disable-line no-sparse-arrays
       
                    //const arr = ['13', , '', 15]

                    let num1 = arr[0]
                    let num2 = arr[3]
                

                switch (operand) {
                case '*':
                    return(num1 * num3)
                break;
                case  '+':
                    return (num1 + num3)
                    break;
                case '-' :
                    return (num1 - num3)  
                    break;
                case '/':
                    return (num1 / num3)  
                    break;             
                default:
                return  (NaN)
                    }
                };  
        calculationSteps ([])
    }


        module.exports = calculate
