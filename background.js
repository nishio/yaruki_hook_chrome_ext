var in_coffee_break = false;
var port_list = [];

function notify_all() {
    alive_ports = [];
    port_list.forEach(function(port) {
        try {
            port.postMessage({type: 'timeout'});
            alive_ports.push(port);
        }catch (e) {
        }
    });
    port_list = alive_ports;
}

chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
      if (msg.type == 'setTimeout') {
          in_coffee_break = true;
          setTimeout(function() {
              in_coffee_break = false;
              notify_all();
          }, msg.delay);
      }else if (msg.type == 'toRunMain') {
          port_list.push(port);
          port.postMessage({type: 'toRunMain', value: !in_coffee_break});
      }
  });
});
