import Settings from '../Settings';

test('Должны изменяться только настройки, заданные пользователем', () => {
  const settings = new Settings();
  settings.userSettings.set('music', 'rock');
  const result = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.settings).toEqual(result);
});
