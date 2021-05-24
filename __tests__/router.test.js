import { pushToHistory } from "../scripts/router";

/**
 * @jest-environment jsdom
 */

 describe ('pushToHistroy', () => {
    test('Add settings state object to history', () => {
        expect(pushToHistory('settings', 5).state).toStrictEqual({page : 'settings'});
    });
    test('Add entry state object to history ', () => {
        expect(pushToHistory('entry', 5).state).toStrictEqual({page : 'entry3'});
    });
    test('Adding any default state object to history', () => {
        expect(pushToHistory('defaultVal', 5).state).toStrictEqual({});
    });
});
