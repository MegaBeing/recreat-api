export default function Compiler(requestBody: any){
    let requestStr:string = requestBody.str;
    let requestArray: string[] = requestStr.split('\n');
    // 1. get inline text body
    // 2. manipulate this inline text body to be converted to more local textual based body
    let responseBody = {
        content:[],    
    }
    
}