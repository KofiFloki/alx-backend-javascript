/**
 * Represents a class room.
 */
export default class ClassRoom {
  /**
   * Creates a new {@link ClassRoom}.
   * @param {number} maxStudentsSize - The maximum number of
   * students in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
