import * as fs from 'fs';
import * as path from 'path';

export const chrisTreeParts = [
    "             W",
    "             *",
    "        @* * * * *",
    "      * * * * * * * * *@",
    "  @ * * * * * * * * * * * * *",
    "* * * * * * * * * * * * * * * * *@"
];
export const treeTrunk = "           TTTTT";

export function generateChristmasTree(levels: number): string {
    let tree = "";

    for (let i = 0; i < levels; i++) {
        tree += chrisTreeParts[i] + "\n";
        if (i < levels - 1) {
            tree += "\n";
        }
    }
    tree += "\n" + treeTrunk + "\n\n" + treeTrunk;

    return tree;
}

export function saveTreeToFile(levels: number, filename: string): void {
    const tree = generateChristmasTree(levels);

    const dir = path.dirname(filename);
    if (dir && !fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filename, tree);
    console.log("Создан файл: " + filename);
    console.log(tree);
}

if (require.main === module) {
    const userInput = process.argv;

    if (userInput.length < 4) {
        console.log("Введи команду: npx ts-node treeGenerator.ts 'число' 'имя-файла.txt'");
        process.exit(1);
    }

    const treeLevels = userInput[2];
    const levels = Number(treeLevels);
    const fileName = userInput[3];

    if (isNaN(levels) || levels < 1 || levels > 6) {
        console.log("Введи значение от 1 до 6");
        process.exit(1);
    }

    saveTreeToFile(levels, fileName);
}