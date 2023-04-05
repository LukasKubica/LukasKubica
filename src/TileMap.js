import Pacman from "./Pacman.js";
import Enemy from "./Enemy.js";
import MovingDirection from "./MovingDirection.js";

export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.yellowDot = new Image();
    this.yellowDot.src = "Images/yellowDot.png";

    this.wall = new Image();
    this.wall.src = "Images/Wallx.png";

    this.wall1 = new Image();
    this.wall1.src = "Images/Wall1.png";

    this.wall2 = new Image();
    this.wall2.src = "Images/Wall2.png";

    this.wall3 = new Image();
    this.wall3.src = "Images/Wall3.png";

    this.wall4 = new Image();
    this.wall4.src = "Images/Wall4.png";

    this.wall5 = new Image();
    this.wall5.src = "Images/Wall5.png";

    this.wall6 = new Image();
    this.wall6.src = "Images/Wall6.png";

    this.wall7 = new Image();
    this.wall7.src = "Images/Wall7.png";

    this.wall8 = new Image();
    this.wall8.src = "Images/Wall8.png";

    this.wall9 = new Image();
    this.wall9.src = "Images/Wall9.png";

    this.wall10 = new Image();
    this.wall10.src = "Images/wall10.png";

    this.wall11 = new Image();
    this.wall11.src = "Images/Wall11.png";

    this.pinkDot = new Image();
    this.pinkDot.src = "Images/pinkDot.png";

    this.yellowDot = new Image();
    this.yellowDot.src = "Images/yellowDot.png";

    this.powerDot = this.pinkDot;
    this.powerDotAnimationTimerDefault = 60;
    this.powerDotAnimationTimer = this.powerDotAnimationTimerDefault;
  }

  //pacman = 13
  //empty space = 14
  //enemy = 15
  //powerdot = 16

  map = [
    [
      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
      12,
    ],
    [12, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 15, 12],
    [12, 0, 1, 2, 0, 7, 0, 0, 0, 13, 0, 0, 0, 6, 0, 0, 0, 0, 12],
    [12, 0, 3, 4, 0, 6, 0, 8, 9, 0, 8, 9, 0, 3, 0, 10, 6, 0, 12],
    [12, 0, 5, 0, 0, 3, 0, 9, 8, 0, 9, 8, 0, 3, 0, 11, 3, 0, 12],
    [12, 15, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 15, 12],
    [
      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
      12,
    ],
  ];

  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 12) {
          this.#drawWall(ctx, column, row, this.tileSize);
        } else if (tile === 0) {
          this.#drawDot(ctx, column, row, this.tileSize);
        } else if (tile === 1) {
          this.#drawWall1(ctx, column, row, this.tileSize);
        } else if (tile === 2) {
          this.#drawWall2(ctx, column, row, this.tileSize);
        } else if (tile === 3) {
          this.#drawWall3(ctx, column, row, this.tileSize);
        } else if (tile === 4) {
          this.#drawWall4(ctx, column, row, this.tileSize);
        } else if (tile === 5) {
          this.#drawWall5(ctx, column, row, this.tileSize);
        } else if (tile === 6) {
          this.#drawWall6(ctx, column, row, this.tileSize);
        } else if (tile === 7) {
          this.#drawWall7(ctx, column, row, this.tileSize);
        } else if (tile === 8) {
          this.#drawWall8(ctx, column, row, this.tileSize);
        } else if (tile === 9) {
          this.#drawWall9(ctx, column, row, this.tileSize);
        } else if (tile === 10) {
          this.#drawWall10(ctx, column, row, this.tileSize);
        } else if (tile === 11) {
          this.#drawWall11(ctx, column, row, this.tileSize);
        } else if (tile == 16) {
          this.#drawPowerDot(ctx, column, row, this.tileSize);
        } else {
          this.#drawBlank(ctx, column, row, this.tileSize);
        }
        // ctx.strokeStyle = "yellow";
        // ctx.strokeRect(
        //   column * this.tileSize,
        //   row * this.tileSize,
        //   this.tileSize,
        //   this.tileSize
        // );
      }
    }
  }

  #drawDot(ctx, column, row, size) {
    ctx.drawImage(
      this.yellowDot,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawPowerDot(ctx, column, row, size) {
    this.powerDotAnimationTimer--;
    if (this.powerDotAnimationTimer === 0) {
      this.powerDotAnimationTimer = this.powerDotAnimationTimerDefault;
      if (this.powerDot == this.pinkDot) {
        this.powerDot = this.yellowDot;
      } else {
        this.powerDot = this.pinkDot;
      }
    }
    ctx.drawImage(this.powerDot, column * size, row * size, size, size);
  }

  #drawWall(ctx, column, row, size) {
    ctx.drawImage(
      this.wall,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawWall1(ctx, column, row, size) {
    ctx.drawImage(
      this.wall1,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawWall2(ctx, column, row, size) {
    ctx.drawImage(
      this.wall2,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall3(ctx, column, row, size) {
    ctx.drawImage(
      this.wall3,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall4(ctx, column, row, size) {
    ctx.drawImage(
      this.wall4,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawWall5(ctx, column, row, size) {
    ctx.drawImage(
      this.wall5,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall6(ctx, column, row, size) {
    ctx.drawImage(
      this.wall6,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall7(ctx, column, row, size) {
    ctx.drawImage(
      this.wall7,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall8(ctx, column, row, size) {
    ctx.drawImage(
      this.wall8,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall9(ctx, column, row, size) {
    ctx.drawImage(
      this.wall9,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawWall10(ctx, column, row, size) {
    ctx.drawImage(
      this.wall10,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawWall11(ctx, column, row, size) {
    ctx.drawImage(
      this.wall11,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawBlank(ctx, column, row, size) {
    (ctx.fillStyle = "white"),
      ctx.fillRect(column * this.tileSize, row * this.tileSize, size, size);
  }

  getPacman(velocity) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 13) {
          this.map[row][column] = 0;
          return new Pacman(
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            velocity,
            this
          );
        }
      }
    }
  }

  getEnemies(velocity) {
    const enemies = [];

    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];
        if (tile == 15) {
          this.map[row][column] = 0;
          enemies.push(
            new Enemy(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize,
              velocity,
              this
            )
          );
        }
      }
    }
    return enemies;
  }

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }

  didCollideWithEnvironment(x, y, direction) {
    if (direction == null) {
      return;
    }

    if (
      Number.isInteger(x / this.tileSize) &&
      Number.isInteger(y / this.tileSize)
    ) {
      let column = 0;
      let row = 0;
      let nextColumn = 0;
      let nextRow = 0;

      switch (direction) {
        case MovingDirection.right:
          nextColumn = x + this.tileSize;
          column = nextColumn / this.tileSize;
          row = y / this.tileSize;
          break;
        case MovingDirection.left:
          nextColumn = x - this.tileSize;
          column = nextColumn / this.tileSize;
          row = y / this.tileSize;
          break;
        case MovingDirection.up:
          nextRow = y - this.tileSize;
          row = nextRow / this.tileSize;
          column = x / this.tileSize;
          break;
        case MovingDirection.down:
          nextRow = y + this.tileSize;
          row = nextRow / this.tileSize;
          column = x / this.tileSize;
          break;
      }
      const tile = this.map[row][column];
      if (tile === 12) {
        return true;
      } else if (tile === 1) {
        return true;
      } else if (tile === 2) {
        return true;
      } else if (tile === 3) {
        return true;
      } else if (tile === 4) {
        return true;
      } else if (tile === 5) {
        return true;
      } else if (tile === 6) {
        return true;
      } else if (tile === 7) {
        return true;
      } else if (tile === 8) {
        return true;
      } else if (tile === 9) {
        return true;
      } else if (tile === 10) {
        return true;
      } else if (tile === 11) {
        return true;
      }
      return false;
    }
  }
  didWin() {
    return this.#dotsLeft() === 0;
  }

  #dotsLeft() {
    return this.map.flat().filter((tile) => tile === 0).length;
  }

  eatDot(x, y) {
    const row = y / this.tileSize;
    const column = x / this.tileSize;
    if (Number.isInteger(row) && Number.isInteger(column)) {
      if (this.map[row][column] === 0) {
        this.map[row][column] = 14;
        return true;
      }
    }
    return false;
  }
  eatPowerDot(x, y) {
    const row = y / this.tileSize;
    const column = x / this.tileSize;
    if (Number.isInteger(row) && Number.isInteger(column)) {
      const tile = this.map[row][column];
      if (tile === 16) {
        this.map[row][column] = 14;
        return true;
      }
    }
    return false;
  }
}
