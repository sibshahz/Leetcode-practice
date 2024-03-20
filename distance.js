let array=['karachi','hydra','sukkar','multan','lahore','haripur']

function calculate_distance(array,city1,city2) {
    if(array.includes(city1) && array.includes(city2)){
        let temp_city=array[0]
        let first_index=array.indexOf(city1)+1
        let second_index=array.indexOf(city2)+1
        
        let temp=array.indexOf(temp_city)+1
        // console.log(first_index,first_index,temp);

        console.log(temp_city,'to',city1 ,'distance is: ',Math.abs(first_index-temp)*100);
        console.log(city1,'to',city2 ,'distance is: ',Math.abs(first_index-second_index)*100);

    }else{
        console.log(-1)
    }
   
}
calculate_distance(array,'hydra','haripur')
