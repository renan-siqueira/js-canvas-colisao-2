(function(){

    // canvas
    var cnv = document.querySelector('canvas')
    var ctx = cnv.getContext('2d')

    // teclas
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40

    // movimento
    var mvLeft = mvUp = mvRight = mvDown = false

    // arrays
    var sprites = []
    var blocks = []

    // objeto
    var char = new Sprite(50, 175, 50, 50, "#00f")
    char.speed = 2
    sprites.push(char)

    var block1 = new Sprite(400, 100, 50, 80, "#f00")
    sprites.push(block1)
    blocks.push(block1)

    var block2 = new Sprite(250, 300, 100, 50, "#0f0")
    sprites.push(block2)
    blocks.push(block2)

    window.addEventListener("keydown", function(e){
        var key = e.keyCode
        switch(key) {
            case LEFT : 
                mvLeft = true
                break
            case RIGHT : 
                mvRight = true
                break
            case UP : 
                mvUp = true
                break
            case DOWN : 
                mvDown = true
                break
        }
    }, false)

    window.addEventListener("keyup", function(e){
        var key = e.keyCode
        switch(key) {
            case LEFT : 
                mvLeft = false
                break
            case RIGHT : 
                mvRight = false
                break
            case UP : 
                mvUp = false
                break
            case DOWN : 
                mvDown = false
                break
        }
    }, false)


    // Funcoes
    function loop() {

        requestAnimationFrame(loop, cnv)
        update()
        render()
    }

    function update() {

        if(mvLeft && !mvRight) {
            char.posX -= char.speed
        }
        if(mvRight && !mvLeft) {
            char.posX += char.speed
        }
        if(mvUp && !mvDown) {
            char.posY -= char.speed
        }
        if(mvDown && !mvUp) {
            char.posY += char.speed
        }

        // Limites da tela
        char.posX = Math.max(0, Math.min(cnv.width - char.width, char.posX))
        char.posY = Math.max(0, Math.min(cnv.height - char.height, char.posY))

        // colisoes
        for(var i in blocks) {
            var blk = blocks[i]
            if(blk.visible) {
                // blockRect(char, blk) // se passar char e blk, char é bloqueado pelo blk
                blockRect(blk, char) // se passar blk e char, char empurrará blk

                
            }
        }
    }

    function render() {

        ctx.clearRect(0,0, cnv.width, cnv.height)
        for(var i in sprites) {
            var spr = sprites[i]
            if(spr.visible) {

                ctx.fillStyle = spr.color
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height)

            }
        }
    }

    loop()

}())