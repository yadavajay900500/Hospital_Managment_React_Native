import io from 'socket.io-client';


const socket = io('wss://1cc2-2409-40d0-33-c4c3-a9d2-f611-6a48-5242.ngrok.io');


socket.on('employee-list', (data) => {
    console.log("!!!!!!!!!!!!!!!!!!!",data)
    // Handle the received data
  });

  
  socket.emit('employee-list', data);
