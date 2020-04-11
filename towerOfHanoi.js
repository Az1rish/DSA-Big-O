function hanoiRecursive(count, source, aux, destination, moves) {
    moves = moves || [];

    if (count === 1) {
        moves.push({
            'disk': 1,
            'from': source,
            'to': destination
        });
    }
    else {
        hanoiRecursive(count - 1, source, destination, aux, moves);
        moves.push({
            'disk': count,
            'from': source,
            'to': destination
        });
        hanoiRecursive(count - 1, aux, source, destination, moves);
    }
    return moves;
}