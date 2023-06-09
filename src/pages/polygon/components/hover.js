class Hover {
  static check(coordinates, mouse) {
    let count = 0;

    for (let i = 0; i < coordinates.length; i++) {
      let j = (i + 1) % coordinates.length;

      if (
        (coordinates[i].y > mouse.y && coordinates[j].y < mouse.y) ||
        (coordinates[i].y < mouse.y && coordinates[j].y > mouse.y)
      ) {
        let crossX =
          ((mouse.y - coordinates[i].y) *
            (coordinates[i].x - coordinates[j].x)) /
            (coordinates[i].y - coordinates[j].y) +
          coordinates[i].x;

        if (mouse.x < crossX) {
          count++;
        }
      }
    }

    return count % 2 > 0;
  }
}

export default Hover;
