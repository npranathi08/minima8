let extImgs=["Saurya.png",
"Piyush.png",
"Sandeep.png"
];

const imgs=document.getElementsByTagName("imgs");
for(var i=0;i<imgs.length;i++){
	const randomImgs=Math.floor(Math.random()*extImgs.length);
	imgs.src[i]=extImgs[randomImgs];
}