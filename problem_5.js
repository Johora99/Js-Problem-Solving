// for (i = 1; i<=50; i = i+2){
//     if(i % 13 === 0){
//          break;
//         }
//         console.log(i);
//     }

    let sum = 0;
    for(i = 50; i >= 0; i = i - 5){
       if (i % 10 === 0){
          continue;
        }
        sum += i;
    }
    console.log(sum);