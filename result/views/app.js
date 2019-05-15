var app = angular.module('catsvsdogs', []);
var socket = io.connect({transports:['polling']});

var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');
var bg3 = document.getElementById('background-stats-3');
var bg4 = document.getElementById('background-stats-4');
var bg5 = document.getElementById('background-stats-5');
var bg6 = document.getElementById('background-stats-6');
var bg7 = document.getElementById('background-stats-7');
var bg8 = document.getElementById('background-stats-8');
var bg9 = document.getElementById('background-stats-9');
var bg10 = document.getElementById('background-stats-10');
var bg11 = document.getElementById('background-stats-11');
var bg12 = document.getElementById('background-stats-12');
var bg13 = document.getElementById('background-stats-13');
var bg14 = document.getElementById('background-stats-14');
var bg15 = document.getElementById('background-stats-15');
var bg16 = document.getElementById('background-stats-16');
var bg17 = document.getElementById('background-stats-17');
var bg18 = document.getElementById('background-stats-18');
var bg19 = document.getElementById('background-stats-19');
var bg20 = document.getElementById('background-stats-20');
var bg21 = document.getElementById('background-stats-21');
var bg22 = document.getElementById('background-stats-22');
var bg23 = document.getElementById('background-stats-23');
var bg24 = document.getElementById('background-stats-24');
var bg25 = document.getElementById('background-stats-25');
var bg26 = document.getElementById('background-stats-26');

app.controller('statsCtrl', function($scope){
  $scope.aPercent = 0;
  $scope.bPercent = 0;
  $scope.cPercent = 0;
  $scope.dPercent = 0;
  $scope.ePercent = 0;
  $scope.fPercent = 0;
  $scope.gPercent = 0;
  $scope.hPercent = 0;
  $scope.iPercent = 0;
  $scope.jPercent = 0;
  $scope.kPercent = 0;
  $scope.lPercent = 0;
  $scope.mPercent = 0;
  $scope.nPercent = 0;
  $scope.oPercent = 0;
  $scope.pPercent = 0;
  $scope.rPercent = 0;
  $scope.qPercent = 0;
  $scope.sPercent = 0;
  $scope.tPercent = 0;
  $scope.uPercent = 0;
  $scope.vPercent = 0;
  $scope.wPercent = 0;
  $scope.xPercent = 0;
  $scope.yPercent = 0;
  $scope.zPercent = 0;

  var updateScores = function(){
    socket.on('scores', function (json) {
       data = JSON.parse(json);
       var a = parseInt(data.a || 0);
       var b = parseInt(data.b || 0);
       var c = parseInt(data.c || 0);
       var d = parseInt(data.d || 0);
       var e = parseInt(data.e || 0);
       var f = parseInt(data.f || 0);
       var g = parseInt(data.g || 0);
       var h = parseInt(data.h || 0);
       var i = parseInt(data.i || 0);
       var j = parseInt(data.j || 0);
       var k = parseInt(data.k || 0);
       var l = parseInt(data.l || 0);
       var m = parseInt(data.m || 0);
       var n = parseInt(data.n || 0);
       var o = parseInt(data.o || 0);
       var p = parseInt(data.p || 0);
       var r = parseInt(data.r || 0);
       var q = parseInt(data.q || 0);
       var s = parseInt(data.s || 0);
       var t = parseInt(data.t || 0);
       var u = parseInt(data.u || 0);
       var v = parseInt(data.v || 0);
       var w = parseInt(data.w || 0);
       var x = parseInt(data.x || 0);
       var y = parseInt(data.y || 0);
       var z = parseInt(data.z || 0);

       var percentages = getPercentages(a, b,c, d,e,f,g,h,i,j,k,l,m,n,o,p,r,q,s,t,u,v,w,x,y,z);

       bg1.style.width = percentages.a + "%";
       bg2.style.width = percentages.b + "%";
       bg3.style.width = percentages.c + "%";
       bg4.style.width = percentages.d + "%";
       bg5.style.width = percentages.e + "%";
       bg6.style.width = percentages.f + "%";
       bg7.style.width = percentages.g + "%";
       bg8.style.width = percentages.h + "%";
       bg9.style.width = percentages.i + "%";
       bg10.style.width = percentages.j + "%";
       bg11.style.width = percentages.k + "%";
       bg12.style.width = percentages.l + "%";
       bg13.style.width = percentages.m + "%";
       bg14.style.width = percentages.n + "%";
       bg15.style.width = percentages.o + "%";
       bg16.style.width = percentages.p + "%";
       bg17.style.width = percentages.r + "%";
       bg18.style.width = percentages.q + "%";
       bg19.style.width = percentages.s + "%";
       bg20.style.width = percentages.t + "%";
       bg21.style.width = percentages.u + "%";
       bg22.style.width = percentages.v + "%";
       bg23.style.width = percentages.w + "%";
       bg24.style.width = percentages.x + "%";
       bg25.style.width = percentages.y + "%";
       bg26.style.width = percentages.z + "%";
      

       $scope.$apply(function () {
         $scope.aPercent = percentages.a;
         $scope.bPercent = percentages.b;
         $scope.cPercent = percentages.c;
         $scope.dPercent = percentages.d;
         $scope.ePercent = percentages.e;
         $scope.fPercent = percentages.f;
         $scope.gPercent = percentages.g;
         $scope.hPercent = percentages.h;
         $scope.iPercent = percentages.i;
         $scope.jPercent = percentages.j;
         $scope.kPercent = percentages.k;
         $scope.lPercent = percentages.l;
         $scope.mPercent = percentages.m;
         $scope.nPercent = percentages.n;
         $scope.oPercent = percentages.o;
         $scope.pPercent = percentages.p;
         $scope.rPercent = percentages.r;
         $scope.qPercent = percentages.q;
         $scope.sPercent = percentages.s;
         $scope.tPercent = percentages.t;
         $scope.uPercent = percentages.u;
         $scope.vPercent = percentages.v;
         $scope.wPercent = percentages.w;
         $scope.xPercent = percentages.x;
         $scope.yPercent = percentages.y;
         $scope.zPercent = percentages.z;
         $scope.total = a + b + c+d+e+f+g+h+i+j+k+l+m+n+o+p+r+q+s+t+u+v+w+x+y+z;
       });
    });
  };

  var init = function(){
    document.body.style.opacity=1;
    updateScores();
  };
  socket.on('message',function(data){
    init();
  });
});

function getPercentages(a, b, c ,d,e,f,g,h,i,j,k,l,m,n,o,p,r,q,s,t,u,v,w,x,y,z) {
  var result = {};

  result.a = a*10;
  result.b = b*10;
  result.c = c*10;
  result.d = d*10;
  result.e = e*10;
  result.f = f*10;
  result.g = g*10;
  result.h = h*10;
  result.i = i*10;
  result.j = j*10;
  result.k = k*10;
  result.l = l*10;
  result.m = m*10;
  result.n = n*10;
  result.o = o*10;
  result.p = p*10;
  result.r = r*10;
  result.q = q*10;
  result.s = s*10;
  result.t = t*10;
  result.u = u*10;
  result.v = v*10;
  result.w = w*10;
  result.x = x*10;
  result.y = y*10;
  result.z = z*10;

  return result;
}