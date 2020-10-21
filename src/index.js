module.exports = function check(str, bracketsConfig) {
        var br = false;
        let arr = bracketsConfig.map( (e) => e.join("") );
        for (let i=0;i<arr.length;i++){
            if(str.includes(arr[i])){
                str=str.replace(arr[i],"");
                i =-1;
            }
        }
        if(str.length === 0) {
            br = true
        }

        return br;
}
