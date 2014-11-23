// ACCESS COMMAND LINE ARGUMENTS WITH PROCESS.ARGV
var sum = 0;
var length = process.argv.length
for(var i = 2; i < length; i++){
  sum += +process.argv[i];
}

console.log(sum);
