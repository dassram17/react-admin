export const validate = (value, rules) => {
    let isValid = true;
    let message = '';
    
    rules.map((r, i) => {
        if(r.required){
            
            isValid = value.trim() !== '' && isValid;
            if(!isValid){
                message = r.message
            }else{
                message = '';
            }
        }

        if(r.minLength){
            if(value.length > 0){
                isValid = value.length >= r.minLength && isValid;
                if(!isValid){
                    message = r.message
                }else{
                    message = '';
                }
            }
            
        }
        if(r.maxLength){
            if(value.length > 0){
                isValid = value.length <= r.maxLength && isValid;
                if(!isValid){
                    message = r.message
                }else{
                    message = '';
                }
            }
        }
        if(r.email){
            if(value.length > 0){
                isValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) && isValid;
                if(!isValid){
                    message = r.message
                }else{
                    message = '';
                }
            }
        }
    })
    return message;
    //return isValid;
    
}