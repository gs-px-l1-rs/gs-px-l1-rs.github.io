function calculateDonut() {
    "use strict";
    if (isNaN(document.bun.count.value)) {
        var msg = "Please enter a valid number"; 
        alert(msg);
        return false;
    }
    else {
        var flour = document.bun.count.value * 50;
        var water = flour * 0.60 ;
        var oil = flour * 0.14;
        var sugar = flour * 0.15;
        var salt = flour * 0.02;
        var yeast = flour * 0.03;
        
        document.bun.base.value = round(flour)+ ' g';
        document.bun.water.value = round(water)+ ' g';
        document.bun.oil.value = round(oil)+ ' g';
        document.bun.sugar.value = round(sugar)+ ' g';
        document.bun.salt.value = round(salt)+ ' g';
        document.bun.yeast.value = round(yeast)+ ' g';
        }
}

function round(x) {
    return Math.round(x*10)/10;
  }