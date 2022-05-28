/* Write your code below */
const SIZE_MATRIX = 5

class Matrix {
    constructor() {
        this.matrix = this.generateMatrix(SIZE_MATRIX, SIZE_MATRIX)
        this.alter(0, 0, 1)
        this.alter(SIZE_MATRIX - 1, SIZE_MATRIX - 1, 2)
        this.coin = 0
        this.generateCoin(SIZE_MATRIX, SIZE_MATRIX)
        
    }
    generateMatrix(row, col) {
        let matrix = []
        for (let r = 0; r < row; r++) {
            matrix.push([])
            for (let c = 0; c < col; c++) {
                matrix[r][c] = '.'
            }
        }
        
        return matrix
    }
    generateCoin(row, col) {
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (Math.random() > 0.5 && this.get(r, c) === '.')
                {
                    this.alter(r, c, 'C')
                    this.coin += 1
                }
            }
        }
    }
    print() {
        for (let r = 0; r < this.matrix.length; r++) {
            let line = ''
            for (let c = 0; c < this.matrix[r].length; c++) {
                line += (this.matrix[r][c] + "\t")
            }
            console.log(line);
        }
    }
    getCoin(){
        return this.coin*10
    }
    printRow(rowNum) {
        let line = ''
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            line += (this.matrix[rowNum][i] + '\t')
        }
        console.log(line);
    }
    printColumn(colNum) {
        let col = ''
        for (let i = 0; i < this.matrix.length; i++) {
            col += (this.matrix[i][colNum] + '\t')
        }
        console.log(col);
    }
    get(r, c) {
        return this.matrix[r][c]
    }
    alter(r, c, v) {
        this.matrix[r][c] = v
    }
    findCoordinate(v) {
        for (let r = 0; r < this.matrix.length; r++) {
            for (let c = 0; c < this.matrix[r].length; c++) {
                if (this.matrix[r][c] === v)
                    return { x: r, y: c }
            }
        }
    }
    getBoard(){
        return this.matrix
    }
}


