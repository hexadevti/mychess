; (function () {
    function isTouchDevice() {
        return ('ontouchstart' in document.documentElement)
    }

    function init() {

        // example 2
        var board2 = Chessboard('board2', {
            draggable: true,
            dropOffBoard: 'trash',
            sparePieces: true,
            onDrop: function (source, target, piece, newPos, oldPos, orientation) {
                console.log('Source: ' + source)
                console.log('Target: ' + target)
                console.log('Piece: ' + piece)
                console.log('New position: ' + Chessboard.objToFen(newPos))
                console.log('Old position: ' + Chessboard.objToFen(oldPos))
                console.log('Orientation: ' + orientation)
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                
            }
        })

        $('#startBtn').on('click', board2.start)
        $('#clearBtn').on('click', board2.clear)

        // prevent "browser drag" of the black king
        $('.hero-inner-556fe img').on('mousedown', function (evt) { evt.preventDefault() })

        // prevent hover problems on touch devices
        if (isTouchDevice()) {
            $('.navbar-a57cc').removeClass('hover-effect')
        }
    }

    $(document).ready(init)
})()