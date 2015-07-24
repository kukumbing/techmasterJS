

now('> Start to wait');
process.nextTick(function(){
    now('> Do this task at the end of event queue');
});
now('> Do other task');
//wait(1000);
now('> Do other task2');