
document.getElementById('yolo').onmousedown = function()
{
    document.getElementById("box1").classList.remove('box-active');
    document.getElementById('box2').classList.remove('box-active2');
    document.getElementById('box3').classList.remove('box-active');


};
document.getElementById('yolo').onclick = function()
{
    document.getElementById("box1").classList.add('box-active');
    document.getElementById('box3').classList.add('box-active');
    document.getElementById('box2').classList.add('box-active2');
};