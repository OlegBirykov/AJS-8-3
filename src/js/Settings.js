export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  get settings() {
    const keys = [...this.defaultSettings.keys()];
    const result = new Map();
    keys.forEach((key) => {
      result.set(
        key,
        this.userSettings.has(key) ? this.userSettings.get(key) : this.defaultSettings.get(key),
      );
    });
    return result;
  }
}
