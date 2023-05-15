
export default function processBoxShahow(shadows:string[],seperator:string,scale:number):string[]{
    // alert (scale)
    return (shadows.map((shadow) =>{
        let temp = shadow.split(seperator)
        temp = sanitize(temp)
        temp = temp.map((elmnt) => {
            let value:any = elmnt
            if(elmnt.includes('rem')){

                value = elmnt.split('rem')[0]
                value = parseFloat(value) * scale
                value = value.toString()+'rem'

            }
            return value
        })
        temp = deSanitize(temp)
        // alert (temp)
        return temp.join(seperator)

    }
    ))
}

function sanitize(shadow:string[]): string[]{
    let result:string[] = []
    shadow.forEach((entry) => {
        if(entry.includes(',')){
            result.push(entry.split(',')[0]+'*')
            result.push(entry.split(',')[1])
        }
        else{
            result.push(entry)
        }
    })
    return result
}
function deSanitize(entrys:string[]):string[]{
    let result:string[] = []
    let counter = 0;
    for(let i=0;i<entrys.length;i++){
        if(entrys[i].includes('*')){
            let first = entrys[i].substring(0,entrys[i].length-1)
            let last = entrys[++i]
            result[counter] = first+','+last
        }else{
            result[counter] = entrys[i]
        }
        counter++;
    }

    return result
}
