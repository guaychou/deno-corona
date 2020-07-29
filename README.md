## Deno Corona client

### Example of usage 


```
import {Application} from "../mod.ts"
import { Attributes } from "../data.ts"

const corona = new Application()
await corona.getSembuh().then
await corona.getMeninggal()

await corona.getProvinsi("Jawa Timur").then((res:Attributes)=>{
    console.log("Kasus meninggal : " + res.Kasus_Meni)
    console.log("Kasus sembuh    : " + res.Kasus_Semb)
    console.log("Kauss positif   : "+ res.Kasus_Posi)
})
```