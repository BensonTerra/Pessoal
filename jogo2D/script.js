const canvas = document.getElementById("canvas")
/*objetos*/
const mapa = canvas.getContext("2d")
const player = canvas.getContext("2d")
const obstaculo = canvas.getContext("2d")
const wall = canvas.getContext("2d")
/*medida da tela-dinamico*/
const boardW = canvas.width
const boardH = canvas.height

console.log(boardW)
console.log(boardH)

pixelSizeX = boardW/20
console.log(pixelSizeX)
pixelSizeY = boardH/10
console.log(pixelSizeY)

//console.log(player)
var zeroXY = 0.01 * boardW
var playerX = zeroXY
var playerY = zeroXY
var vxr = 0
var vxl = 0
var vy = 0

//função build      //mapa-2
function build(ctx)
{
    var floor = new Image()
    floor.src = "imagens\\Tiles\\tile_0049.png"
    //
    var cornerTopLeft = new Image()
    cornerTopLeft.src = "imagens\\Tiles\\tile_0001.png"
    //
    var cornerTop = new Image()
    cornerTop.src = "imagens\\Tiles\\tile_0002.png"
    //
    var cornerTopRight = new Image()
    cornerTopRight.src = "imagens\\Tiles\\tile_0003.png"
    //
    var cornerLeft = new Image()
    cornerLeft.src = "imagens\\Tiles\\tile_0013.png"
    //
    var cornerRight = new Image()
    cornerRight.src = "imagens\\Tiles\\tile_0015.png"
    //
    var cornerBotLeft = new Image()
    cornerBotLeft.src = "imagens\\Tiles\\tile_0025.png"
    //
    var cornerBot = new Image()
    cornerBot.src = "imagens\\Tiles\\tile_0026.png"
    //
    var cornerBotRight = new Image()
    cornerBotRight.src = "imagens\\Tiles\\tile_0027.png"
    //
    var wall = new Image()
    wall.src = "imagens\\Tiles\\tile_0014.png"
    //
    var wallRedFlag = new Image()
    wallRedFlag.src = "imagens\\Tiles\\tile_0029.png"







    const tileMap = 
    {
        0: floor,
        1: cornerTopLeft,
        2: cornerTop,
        3: cornerTopRight,
        4: cornerLeft,
        5: cornerRight,
        6: cornerBotLeft,
        7: cornerBot,
        8: cornerBotRight,
        10: wall,
        11: wallRedFlag,
    }
    const map = [
        [01,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,03],
        [04,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,05],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
        [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],

    ]
    
    for (let y = 0; y < map.length; y++) 
    {
        for (let x = 0; x < map[y].length; x++)
        {
            var num = tileMap[map[y][x]]
            //var color = 2
            //console.log(color)

            ctx.drawImage(num,x*pixelSizeX, y*pixelSizeY, pixelSizeX, pixelSizeY)
            /*
            ctx.strokeStyle = color
            ctx.strokeRect(x*pixelSizeX, y*pixelSizeY, pixelSizeX, pixelSizeY)
            */
        }
    }
}
function jogo () 
{
    mapa.clearRect(0, 0, canvas.width, canvas.height)
    //mapa-1
    /*
    mapa.fillStyle = "#000000"
    mapa.fillRect(0, 0, canvas.width, canvas.height)

    wall.strokeStyle = "#0000ff";
    wall.lineWidth   = 0.02 * boardW;
    wall.strokeRect(0,0, boardW,boardH)
    */
    /*player*/
    build(mapa)
    playerX += vxr
    playerX += vxl
    playerY += vy
    /*
        player.fillStyle = "#FF0000"
        player.fillRect(playerX, playerY, 10, 10)
    */
    
    /*obstaculo de teste*/
    obstaculo.fillStyle = "#ffff00"
    player.fillRect((boardW/2) - 10,(boardH/2) - 10, 10, 10)
    
    requestAnimationFrame(jogo)
}
jogo()