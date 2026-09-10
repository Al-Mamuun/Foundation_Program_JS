// Export Import

function add (a,b){
    return a+b;
}

export function subtract (a,b){
    if (a>b){
        return a-b;
    }else{
        return b-a;
    }
}

export const pi = 3.1416;

export default add;
