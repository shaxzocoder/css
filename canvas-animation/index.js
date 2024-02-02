/* eslint-disable prettier/prettier */
// canvas setup
const c = document.getElementById('canvas');
const x = c.getContext('2d');
const S = Math.sin, C = Math.cos, T = Math.tan, R = Math.random;
c.width = window.innerWidth;
c.height = window.innerHeight;
x.translate(c.width /2, 50);
c.style.backgroundColor = 'black';
let coords = []
function draw(c, x, C, S, T, R, t) {
  x.fillStyle='#00000001'
  x.fillRect(-c.width,-c.height,c.width*2,c.height*2);
  let q=[],w=[]
  for(i=0,r=8,R=8;i<.8;i=i+.01){
    k=((R+r*S(i**t))*C(i**t))*40;
    y=((R+r*C(t*i))*S(t/i))*40;
    z=(S(i*t)*R)*40;
    ii=~~(i*100)%6
    o=[k,y,z]
    q=[o,...q]||[o];
    w[ii] = w[ii]?[...w[ii],[k,y,z]]:[[k,y,z]];
  }
  x.lineWidth = .3
  x.beginPath(),x.moveTo(w[0][0],w[0][1]);
  for(j=1;j<w.length;j++){
    let kk = w[j][0]
    let k = kk[0]
    let y = kk[1];
    let z = kk[2];

     x.strokeStyle=x.fillStyle=`hsl(${t*j},100%,50%,1)`;
     x.lineTo(y,k+z)
    
    x.fillRect(y,k+z,5,5)
  }
  x.stroke()
  requestAnimationFrame(() => draw(c, x, C, S, T, R, t + .08));
}
draw(c, x, C, S, T, R, 100);

window.addEventListener('resize', () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    x.translate(c.width / 2, c.height / 2);
});

// letme know yout thoughts my nigga