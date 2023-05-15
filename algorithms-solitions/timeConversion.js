function timeConversion(s) {
    let hour = s.substring(0,2)*1;
    let timeFormat = s.substring(2,8);
    //if midnight
    if(hour === 12 && s.indexOf("AM") !== -1){
        return ("00" + timeFormat);
    }
    //if afternoon
    if(hour === 12 && s.indexOf("PM") !== -1){
        return(hour + timeFormat)
    }
    // if hour is from 1 to 11pm , add 12 to the times
    if(hour < 12 && s.indexOf("PM") !== -1){
        return(12+hour+timeFormat);
    }else {// if hour is from 1 to 11 AM
        if (hour<10){// if number is less than 10, add a zero in front
            return ("0"+hour+timeFormat);
        }else{// if number is greater than 9, just add rest of string
            return (hour + timeFormat);
        }
    }
}