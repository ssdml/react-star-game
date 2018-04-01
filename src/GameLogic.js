
class GameLogic {
    constructor(numColomns) {
        this.numColomns = numColomns;
        this.points = 0;
        this.stars = [];

        for (let i = 0; i < 100; i++) {
            this.stars.push({
                key: i,
                color: Math.round(Math.random() * 5 + 1),
                // color: Math.round(Math.random() * 2 + 1),
                selected: false,
            });
        }
    }
    getStars() {
        return this.stars;
    }
    getPoints() {
        return this.points;
    }

    nextMove(id) {
        if (!this.stars[id].selected) {
            this.selectStars(id);
            return;
        }
        this.removeStars();
    }

    removeStars() {
        let pointsCounter = 0;
        this.stars.forEach(function (current) {
            if (current.selected) {
                current.color = 0;
                pointsCounter++;
            }
            current.selected = false;
        });
        this.addPoints(pointsCounter);

        let stars = this.stars.slice();
        this.shiftDown();
        this.shiftRight();
    }

    shiftDown() {
        for (let i = this.stars.length - 1; i >= 0; i--) {
            if (this.stars[i].color !== 0) {
                continue;
            }
            let rowsUp = 1;
            while (true) {
                let currentIndex = i - rowsUp * this.numColomns;
                if (currentIndex < 0) {
                    break;
                }
                if (this.stars[currentIndex].color !== 0) {
                    this.stars[i].color = this.stars[currentIndex].color;
                    this.stars[currentIndex].color = 0;
                    break;
                }
                rowsUp++;
            }
            if (this.stars[i].color === 0 && i - this.numColomns >= 0) {
                this.stars[i].color = this.stars[i - this.numColomns].color;
                this.stars[i - this.numColomns].color = 0;
            }
        }
    }

    shiftRight() {
        for (let i = 0; i < this.numColomns; i++) {
            if (this.isEmptyColomn(i)) {
                // while () {

                // }
            }
        }
    }

    isEmptyColomn(colNum) {
        let empty = false;
        for (let i = 0; i < this.numColomns; i++) {
            empty = empty || (this.stars[colNum + i * this.numColomns].color > 0);
        }
        return !empty;
    }

    selectStars(id) {
        if (this.stars[id].color === 0) {
            return;
        }

        const starsGroup = this.getSameColorStars(id);
        if (starsGroup.length <= 1) {
            return;
        }

        this.stars.forEach(function (current, index, array) {
            current.selected = false;
            if (starsGroup.indexOf(index) !== -1) {
                current.selected = true;
            }
        });
    }

    getSameColorStars(id) { // need refactor
        let selectedStars = [];
        const numColomns = this.numColomns;
        const stars = this.stars;
        const color = this.stars[id].color;

        function addStar(starNumber) {
            if (!(0 <= starNumber && starNumber < numColomns * numColomns)) {
                return;
            }
            if (selectedStars.indexOf(starNumber) === -1 && stars[starNumber].color === color) {
                selectedStars.push(starNumber)
            }
        }

        addStar(id);
        let currentNumStars = 0;

        while (selectedStars.length > currentNumStars) {
            currentNumStars = selectedStars.length;
            selectedStars.forEach(function (current) {
                let rowNumber = Math.floor(current / numColomns);
                if (Math.floor((1 * current + 1) / numColomns) === rowNumber) {
                    addStar(1 * current + 1);
                }
                if (Math.floor((current - 1) / numColomns) === rowNumber) {
                    addStar(current - 1);
                }
                addStar(1 * current + numColomns);
                addStar(current - numColomns);
            });
        }
        return selectedStars;
    }

    addPoints(pointsNumber) {
        this.points += (pointsNumber * pointsNumber) * 100;
    }
}

export default GameLogic;