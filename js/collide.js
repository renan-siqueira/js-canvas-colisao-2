function blockRect(r1, r2) {
    // r1 -> bloqueado
    // r2 -> parede

    // catetos dos centros em x e y
    var catX = r1.centerX() - r2.centerX()
    var catY = r1.centerY() - r2.centerY()

    // soma das metades das alturas e larguras
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth()
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight()

    // Verificar colisao
    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
        
        // Sistema de Simulação de Coleta de Itens
        // r2.visible = false
        // setTimeout(function(){
        //     r2.visible = true
        // }, 1000)

        var overlapX = sumHalfWidth - Math.abs(catX)
        var overlapY = sumHalfHeight - Math.abs(catY)

        if(overlapX >= overlapY) { // Colisão por cima ou por baixo

            if(catY > 0) { // Colisão por cima
                r1.posY += overlapY
            } else { // Colisão por baixo
                r1.posY -= overlapY
            }

        } else { // Colisão pela esquerda ou direita
            
            if(catX > 0) { // Colisao pela esquerda
                r1.posX += overlapX
            } else { // Colisao pela direita
                r1.posX -= overlapX
            }

        }
    }
}