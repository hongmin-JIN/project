let handleId = 0; //
const h1 = document.getElementById("time")

function getTime(){
  const date = new Date()
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = '${hour}:${minutes}:${seconds}'
  h1.textContent = time;
}

getTime()
