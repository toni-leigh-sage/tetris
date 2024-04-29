;(function() {

    'use strict';

    var t;

    function Timer(grid) {

        t=this;

        t.grid=grid;

        t.currentInterval=t.grid.levels[1]['interval'];

        t.eventCounterSpan=document.getElementById('js-event-counter');

    }

    Timer.prototype = {

        // the current number of milliseconds between timer event
        currentInterval:0,

        // a counter for the number of events since game started
        eventCount:0,

        // a dom element for outputting event count (dev)
        eventCounterSpan:{},

        // stores the interval id for pausing (useful for dev)
        intervalId:null,

        // state, if running === true then the timer is running, else it's paused
        running:true,

        /**
         * startTimer() - sets the timer running in response to a game start
         */
        startTimer:function()
        {

            t.intervalId = setInterval(t.intervalTrigger,t.currentInterval);

            t.running=true;

        },

        /**
         * pauseTimer() - pause the timer
         */
        pauseTimer:function()
        {

            window.clearInterval(t.intervalId);

            t.running=false;

        },

        /**
         * intervalTrigger() - function called each time an interval elapsed
         */
        intervalTrigger:function()
        {

            var pieces=t.grid.pieces;

            t.eventCount++;

            t.eventCounterSpan.innerHTML=t.eventCount;

            pieces[1].movePiece(t.grid.cells,'down',t.currentInterval);

            if (true === pieces[1].stopped)
            {

                pieces[1].displayPiece(t.grid.cells);

                t.grid.findCompletedRows(pieces[1].currentPosition);

                pieces.unshift(new Piece());

                pieces[0].displayPreviewPiece(t.grid.previewCells);

                // stop game if new piece won't fit
                var gameOver=false;
                for (var index in pieces[1].currentPosition)
                {

                    var coordinates=pieces[1].currentPosition[index];

                    if (1 === t.grid.cells[coordinates.y][coordinates.x].state)
                    {

                        gameOver=true;

                        break;

                    }

                }

                if (true === gameOver)
                {
                    t.pauseTimer();

                    document.getElementById('js-form-score').value=t.grid.score;
                    document.getElementById('js-form-level').value=t.grid.level;
                    document.getElementById('js-form-background').style.opacity=1;
                    document.getElementById('js-high-score').style.opacity=1;                    
                }

            }

            // do levels
            var levelData=t.grid.levels[t.grid.level];
            if (t.eventCount>=levelData.threshold)
            {

                t.grid.level++;

                t.grid.outputLevel();

                t.pauseTimer();

                t.currentInterval=levelData.interval;

                t.startTimer()

            }

        }

    };

    window.Timer = Timer;

}());