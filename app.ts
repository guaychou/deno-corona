import {Root, Attributes} from "./data.ts"
export class Application {
    address: string = "https://api.kawalcorona.com";
    constructor(){}
    async getSembuh(){
        try {
            const response = await fetch(this.address+"/sembuh", {
                method: 'GET',
 
            });
            if (response.body !== null) {
                const body = new Uint8Array(await response.arrayBuffer());
                var asString = new TextDecoder("utf-8").decode(body);
                var asJSON = JSON.parse(asString); 
                console.log(asJSON)
                
            }
        }catch(e){
            throw(e)
        }
  }

  async getPositif(){
    try {
        const response = await fetch(this.address+"/positif", {
            method: 'GET',

        });
        if (response.body !== null) {
            const body = new Uint8Array(await response.arrayBuffer());
            var asString = new TextDecoder("utf-8").decode(body);
            var asJSON = JSON.parse(asString); 
            console.log(asJSON)
            
        }
    }catch(e){
        throw(e)
    }
  }
  async getMeninggal(){
    try {
        const response = await fetch(this.address+"/meninggal", {
            method: 'GET',

        });
        if (response.body !== null) {
            const body = new Uint8Array(await response.arrayBuffer());
            var asString = new TextDecoder("utf-8").decode(body);
            var asJSON = JSON.parse(asString); 
            console.log(asJSON)
            
        }
    }catch(e){
        throw(e)
    }
  }
  async getProvinsi(provinsi: string):Promise <Attributes>{
    let result : Attributes = {}
    try {
        const response = await fetch(this.address+"/indonesia/provinsi", {
            method: 'GET',

        });
        if (response.body !== null) {
            const body = new Uint8Array(await response.arrayBuffer());
            var asString = new TextDecoder("utf-8").decode(body);
            let bodyjson:Root[]  = JSON.parse(asString);
            bodyjson.forEach(element => {
                if (element.attributes.Provinsi==provinsi){
                    result=element.attributes
                }
            });
        }
    }catch(e){
        throw(e)
    }
    return result
  }
}