;(function() {

    'use strict';

    function Grid(gridDiv) {

        this.gridDiv=document.getElementById(gridDiv);

        this.loadHighScores();

        this.inititialiseCells();

        this.previewDiv=document.getElementById('js-next-piece');

        this.initialisePreviewCells();

        this.outputHighScores();

        this.timer=new window.Timer(this);

        this.keyListener=new window.KeyListener(this);

        this.startGame();

    }

    Grid.prototype = {

        // initial grid size
        size:Config.size,

        // the div this grid appears in
        gridDiv:{},

        // an array of cells, based on size
        cells:[],

        // current level
        level:1,

        // level definitions, such as interval, score thresh-hold etc
        levels:Config.levels,

        // the currently generated pieces
        pieces:[],    

        // preview panel
        previewCells:[],
        previewDiv:{},

        // the running score total
        score:0,  

        // the high-scores
        highScores:[],

        // high-score position (0 index, array)
        highScoreIndex:Config.highScoreCount,

        /**
         *  inititialiseCells() - builds an array of cell objects
         */
        inititialiseCells:function()
        {
            for (var y=0;y<this.size.height;y++)
            {    
                this.cells[y]=[];

                for (var x=0;x<this.size.width;x++)
                {
                    this.cells[y][x]=new window.Cell(x,y);

                    this.cells[y][x].buildCellHtml()
                    this.cells[y][x].appendCell(this.gridDiv);
                }
            }

        },  

        /**
         *  initialisePreviewCells() - sets up the piece preview cells
         */
        initialisePreviewCells:function()
        {

            for (var y=0; y<5; y++)
            {

                this.previewCells[y]=[];

                for (var x=0; x<5; x++)
                {

                    this.previewCells[y][x]=new window.Cell(x,y);

                    this.previewCells[y][x].buildCellHtml()
                    this.previewCells[y][x].appendCell(this.previewDiv);

                }

            }

        },

        loadHighScores:function()
        {

            var highScores = JSON.parse(window.localStorage.getItem("highScores"));

            if (!highScores) {

                highScores = Config.highScores;

                window.localStorage.setItem("highScores", JSON.stringify(highScores));

            }

            this.highScores=highScores;

        },

        updateHighScores:function()
        {

            var previousHighScore = this.highScores[Config.highScoreCount-1].score

            for (var i=Config.highScoreCount; i>0; i--)
            {

                var currentHighScore = this.highScores[i-1].score;

                if (this.score <= currentHighScore && this.score > previousHighScore) {

                    document.querySelectorAll('.js-high-score').forEach(hsElem => hsElem.classList.remove('current'));

                    this.highScores = this.highScores.filter(({ name }) => name !== '???');

                    this.highScores.splice(i, 0, {
                        name:'???',
                        level: this.level,
                        score: this.score,
                        pieceType: 'four'
                    });

                    this.highScoreIndex = i

                    document.querySelector('#js-high-score-'+(i+1)).classList.add('current');

                }

                previousHighScore = currentHighScore

            }

        },

        updateIndividualHighScore:function() {

            if (this.highScoreIndex < Config.highScoreCount) {

                document.querySelector('#js-high-score-'+(this.highScoreIndex+1)+' .js-score').innerHTML=this.score;

            }


        },

        /**
         *  startGame() - triggers a game, including piece generation and timing
         */
        startGame:function()
        {

            this.addPieceToGame();

            this.addPieceToGame();

            this.pieces[0].displayPreviewPiece(this.previewCells);

            this.pieces[1].displayPiece(this.cells);

            this.timer.startTimer();

        },      

        /**
         *  addPieceToGame() - generates a new piece object for play
         */
        addPieceToGame:function()
        {

            this.pieces.unshift(new Piece());

        },

        /**
         *  outputScore() - put the score on the screen
         */
        outputScore:function()
        {

            document.getElementById("js-score").innerHTML=this.score;

        },

        /**
         *  outputLevel() - put the level on the screen
         */
        outputLevel:function()
        {

            document.getElementById("js-level").innerHTML=this.level;

        },

        outputHighScores:function()
        {

            for (var i=1; i<=Config.highScoreCount; i++)
            {

                var highScore = this.highScores[i-1];

                ['name', 'level', 'pieceType', 'score'].map(function(key) {
                    document.querySelector('#js-high-score-'+i+' .js-'+key).innerHTML=highScore[key];
                })

            }

        },

        /**
         *  findCompletedRows() - looks for completed rows now this piece is stopped
         */
        findCompletedRows:function(piecePosition)
        {

            // get the rows this piece occupies
            var rowsToCheck={};
            for (var index in piecePosition)
            {

                rowsToCheck[piecePosition[index].y]=1;

            }

            // iterate over those rows checking for a full set of states
            var removeRows={};
            for (var row in rowsToCheck)
            {

                var cellCount=0;

                for (var x=0; x<this.size.width; x++)
                {

                    cellCount+=this.cells[row][x].state;

                }

                if (cellCount === this.size.width)
                {

                    removeRows[row]=1;

                }

            }

            // if completed then trigger completed row function
            var scoreMultiplierList = [
                null,
                3,
                13,
                29,
                53,
            ]

            this.score+=scoreMultiplierList[Object.keys(removeRows).length];

            this.outputScore();

            if (this.score > this.highScores[this.highScoreIndex - 1].score) {

                this.updateHighScores();

                this.outputHighScores();

            } else {

                this.updateIndividualHighScore()

            }
            for (var removeRow in removeRows)
            {

                // set all cells in the row to white and state=0
                for (var x=0; x<this.size.width; x++)
                {

                    this.cells[removeRow][x].unmarkCell();

                    // look up this column setting colour and state 
                    for (var y=removeRow; y>=0; y--)
                    {

                        if ((y-1)>=0)
                        {

                            if (1==this.cells[y-1][x].state)
                            {

                                this.cells[y][x].markCell(this.cells[y-1][x].colour);

                            }
                            else
                            {

                                this.cells[y][x].unmarkCell();

                            }

                        }


                    }

                }

            }

        }

    };

    window.Grid = Grid;

}());