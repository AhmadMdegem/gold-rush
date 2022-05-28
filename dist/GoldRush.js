
class GoldRush extends Matrix {
    constructor() {
        super()
        this.p1 = { score: 0 }
        this.p2 = { score: 0 }
    }
    movePlayer(numPlayer, move) {
        let obj = super.findCoordinate(numPlayer)
        let player = `p${numPlayer}`
        switch (move) {
            case 'left':
                if (super.get(obj.x, obj.y - 1) === '.' || super.get(obj.x, obj.y - 1) === 'C') {
                    if (super.get(obj.x, obj.y - 1) === 'C')
                        this[player].score += 10
                    super.alter(super.findCoordinate(numPlayer).x, super.findCoordinate(numPlayer).y - 1, numPlayer)
                    super.alter(obj.x, obj.y, '.')
                }
                break;
            case 'up':
                if (super.get(obj.x - 1, obj.y) === '.' || super.get(obj.x - 1, obj.y) === 'C') {
                    if (super.get(obj.x - 1, obj.y) === 'C')
                        this[player].score += 10
                    super.alter(super.findCoordinate(numPlayer).x - 1, super.findCoordinate(numPlayer).y, numPlayer)
                    super.alter(obj.x, obj.y, '.')
                }
                break;
            case 'down':
                if (super.get(obj.x + 1, obj.y) === '.' || super.get(obj.x + 1, obj.y) === 'C') {
                    if (super.get(obj.x + 1, obj.y) === 'C')
                        this[player].score += 10
                    super.alter(super.findCoordinate(numPlayer).x + 1, super.findCoordinate(numPlayer).y, numPlayer)
                    super.alter(obj.x, obj.y, '.')
                }
                break;
            case 'right':
                if (super.get(obj.x, obj.y + 1) === '.' || super.get(obj.x, obj.y + 1) === 'C') {
                    if (super.get(obj.x, obj.y + 1) === 'C')
                        this[player].score += 10
                    super.alter(super.findCoordinate(numPlayer).x, super.findCoordinate(numPlayer).y + 1, numPlayer)
                    super.alter(obj.x, obj.y, '.')
                }
                break;
            default:
                break;
        }
    }
    getScore(){
        return [this.p1 , this.p2]
    }
    board() {
        return super.getBoard()
    }

}

