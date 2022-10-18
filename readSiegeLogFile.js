const fs =  require('fs');

let fileName = 'techrepubliccom.txt';

try {

if (fs.existsSync('./'+fileName)){

fs.readFile(fileName, 'utf-8', (err, data) => {
 if(err) {
  console.log(err);
  return;
 }

 //console.log(data);
 if(data){
  var explode1 = data.split('\n');
  //console.log(explode1);

  if(explode1.length > 1){
   var explodeTitle = explode1[0].split(',');
   //var explodeValue = explode1[1].split(',');
   explode1.pop();

   //if(explode1.length > 1){
     let jsonData = [];
     let explodeValue = [];
     //console.log(explodeTitle[0]);
     for(i=1; i<explode1.length; i++){
      explodeValue[i] = explode1[i].split(',');
      //console.log(explodeValue[i]);
      jsonData.push({
        team: 'pim',
        date_time: explodeValue[i][0].trim(),
        trans: explodeValue[i][1].trim(),
        elap_time: explodeValue[i][2].trim(),
        data_trans: explodeValue[i][3].trim(),
        resp_time: explodeValue[i][4].trim(),
        trans_rate: explodeValue[i][5].trim(),
        troughput: explodeValue[i][6].trim(),
        concurrent: explodeValue[i][7].trim(),
        okay: explodeValue[i][8].trim(),
        failed: explodeValue[i][9].trim(),
        source: fileName,
        tool: 'siege',
       });
       //console.log(explodeValue[i]);
     }
     console.log(JSON.stringify(jsonData));
   //}
  }
 }
}) 
} else {
 throw err;
}

} catch(err) {
 console.log(fileName+' doesnt exist!');
}
