export function convertEpochToDate(epoch) {


    if (epoch < 10000000000)
    epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
var epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone        

 //console.log(new Date(epoch))

return new Date(epoch);

}
export function convertDateToEpoch(date) {


    return Math.round(new Date(date).getTime() / 1000.0);
}



