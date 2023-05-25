function catAndMouse(x, y, z) {
    var catACath = Math.abs(z - x);
    var catBCath = Math.abs(z - y);
    if(catACath < catBCath){
        return "Cat A";
    }else if(catBCath < catACath){
        return "Cat B";
    }else{
        return "Mouse C";
    }
}
