var in_coffee_break = false;
var port_list = [];

function emit_log(message) {
    console.log(new Date().toLocaleTimeString() + ': ' + message);
}

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
    emit_log('timeout');
}

function is_target(href){
    try{
        var target_list = JSON.parse(localStorage['target-list']);
    }catch(e){
        target_list = [/facebook/, /twitter/, /b\.hatena/];
        localStorage['target-list'] = JSON.stringify(target_list);
    }
    return target_list.some(function(pattern){
        if(href.match(pattern)){
            return true;
        }
    });
}

chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
      if (msg.type == 'setTimeout') {
          if (in_coffee_break) return;  // already in break
          emit_log('start timer');
          in_coffee_break = true;
          setTimeout(function() {
              in_coffee_break = false;
              notify_all();
          }, msg.delay);
      }else if (msg.type == 'toRunMain') {
          if(is_target(msg.href)){
              emit_log('opened ' + msg.domain + ', in_break: ' + in_coffee_break);
              port_list.push(port);
              port.postMessage({type: 'toRunMain', value: !in_coffee_break});
          }else{
              emit_log('opened ' + msg.domain + ', not target');
          }
      }else if (msg.type == 'emitLog') {
          emit_log(msg.message);
      }
  });
});
