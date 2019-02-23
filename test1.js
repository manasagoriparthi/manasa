function area(input1){
    radius=input1;
    let AreaOfCircle;
        if(radius<0){
    AreaOfCircle=0;

    }
        else if(radius>300){
        AreaOfCircle=0;

     }
        else{
        AreaOfCircle=3.14*(radius)*(radius)
    }
   return AreaOfCircle;

}