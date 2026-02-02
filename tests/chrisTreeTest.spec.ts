import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { generateChristmasTree, saveTreeToFile, chrisTreeParts, treeTrunk } from '../treeGenerator';

test.describe('Приёмочные тесты для генератора ёлки.', () => {
    const testOutputDir = './test-output';

    test.beforeAll(() => {
        test.step('Создание папки для сохранения тестовых файлов .tx',() => {
            if (!fs.existsSync(testOutputDir)) {
                fs.mkdirSync(testOutputDir, { recursive: true });
            }
        });
    });
    test.afterAll(() => {
        test.step('Удаление папки с тестовыми файлами .tx',() => {
            if (fs.existsSync(testOutputDir)) {
                fs.rmSync(testOutputDir, { recursive: true });
            }
        });
    });
    function getLines(tree: string): string[] {

        return tree.split('\n').filter(line => line !== '');
    }

    test('Генерация ёлки с 1 уровнем', () => {
        const result = generateChristmasTree(1);
        const lines = getLines(result);

        test.step('Длина массива равна 3',() => {
            expect(lines.length).toBe(3);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записалось основание ёлки',() => {
            expect(lines[1]).toBe('           TTTTT');
            expect(lines[2]).toBe('           TTTTT');
        });
    });

    test('Генерация ёлки с 2 уровнями', () => {
        const result = generateChristmasTree(2);
        const lines = getLines(result);

        test.step('Длина массива равна 4',() => {
            expect(lines.length).toBe(4);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записался 2 уровень ёлки',() => {
            expect(lines[1]).toBe('             *');
        });
        test.step('Записалось основание ёлки',() => {
            expect(lines[2]).toBe('           TTTTT');
            expect(lines[3]).toBe('           TTTTT');
        });
    });

    test('Генерация ёлки с 3 уровнями', () => {
        const result = generateChristmasTree(3);
        const lines = getLines(result);

        test.step('Длина массива равна 5',() => {
            expect(lines.length).toBe(5);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записался 2 уровень ёлки',() => {
            expect(lines[1]).toBe('             *');
        });
        test.step('Записался 3 уровень ёлки',() => {
            expect(lines[2]).toBe('        @* * * * *');
        });
        test.step('Записалось основание ёлки',() => {
            expect(lines[3]).toBe('           TTTTT');
            expect(lines[4]).toBe('           TTTTT');
        });
    });


    test('Генерация ёлки с 4 уровнями', () => {
        const result = generateChristmasTree(4);
        const lines = getLines(result);

        test.step('Длина массива равна 6',() => {
            expect(lines.length).toBe(6);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записался 2 уровень ёлки',() => {
            expect(lines[1]).toBe('             *');
        });
        test.step('Записался 3 уровень ёлки',() => {
            expect(lines[2]).toBe('        @* * * * *');
        });
        test.step('Записался 4 уровень ёлки',() => {
            expect(lines[3]).toBe('      * * * * * * * * *@');
        });
        test.step('Записалось основание ёлки',  () => {
            expect(lines[4]).toBe('           TTTTT');
            expect(lines[5]).toBe('           TTTTT');
        });
    });

    test('Генерация ёлки с 5 уровнями', () => {
        const result = generateChristmasTree(5);
        const lines = getLines(result);

        test.step('Длина массива равна 7', () => {
            expect(lines.length).toBe(7);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записался 2 уровень ёлки',() => {
            expect(lines[1]).toBe('             *');
        });
        test.step('Записался 3 уровень ёлки',() => {
            expect(lines[2]).toBe('        @* * * * *');
        });
        test.step('Записался 4 уровень ёлки',() => {
            expect(lines[3]).toBe('      * * * * * * * * *@');
        });
        test.step('Записался 5 уровень ёлки',() => {
            expect(lines[4]).toBe('  @ * * * * * * * * * * * * *');
        });
        test.step('Записалось основание ёлки',() => {
            expect(lines[5]).toBe('           TTTTT');
            expect(lines[6]).toBe('           TTTTT');
        });
    });

    test('Генерация ёлки с 6 уровнями', () => {
        const result = generateChristmasTree(6);
        const lines = getLines(result);

        test.step('Длина массива равна 8',() => {
            expect(lines.length).toBe(8);
        });
        test.step('Записался 1 уровень ёлки',() => {
            expect(lines[0]).toBe('             W');
        });
        test.step('Записался 2 уровень ёлки',() => {
            expect(lines[1]).toBe('             *');
        });
        test.step('Записался 3 уровень ёлки',() => {
            expect(lines[2]).toBe('        @* * * * *');
        });
        test.step('Записался 4 уровень ёлки',() => {
            expect(lines[3]).toBe('      * * * * * * * * *@');
        });
        test.step('Записался 5 уровень ёлки',() => {
            expect(lines[4]).toBe('  @ * * * * * * * * * * * * *');
        });
        test.step('Записался 6 уровень ёлки',() => {
            expect(lines[5]).toBe('* * * * * * * * * * * * * * * * *@');
        });
        test.step('Записалось основание ёлки',() => {
            expect(lines[6]).toBe('           TTTTT');
            expect(lines[7]).toBe('           TTTTT');
        });
    });

    test('Создание файла с ёлкой (3 уровня)', () => {
        const outputFile = path.join(testOutputDir, 'test-save.txt');

        saveTreeToFile(3, outputFile);
        test.step('Файл создан в папке',() => {
            expect(fs.existsSync(outputFile)).toBeTruthy();
        });

        const content = fs.readFileSync(outputFile, 'utf-8');
        const lines = getLines(content);
        test.step('Уровни  ёлки корректно записаны',() => {
            expect(lines[0]).toBe('             W');
            expect(lines[1]).toBe('             *');
            expect(lines[2]).toBe('        @* * * * *');
        });
    });

    test('Валидность констант для ёлки', () => {
        expect(chrisTreeParts).toHaveLength(6);
        expect(chrisTreeParts[0]).toBe('             W');
        expect(treeTrunk).toBe('           TTTTT');
    });
});