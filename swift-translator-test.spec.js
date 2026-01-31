const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
    url: 'https://www.swifttranslator.com/',
    timeouts: {
        pageLoad: 2000,
        afterClear: 1000,
        translation: 3000,
        betweenTests: 2000
    },
    selectors: {
        inputField: 'Input Your Singlish Text Here.',
        outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
    }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
    positive: [
        // Simple Sentences
        {
            tcId: 'Pos_Fun_001',
            input: 'mama gedhara yanavaa.',
            expected: 'මම ගෙදර යනවා.',
        },
        {
            tcId: 'Pos_Fun_002',
            input: 'mama gedhara yanavaa, vahina nisaa api passe ennam.',
            expected: 'මම ගෙදර යනවා, වහින නිසා අපි පස්සේ එන්නම්.',
        },
        {
            tcId: 'Pos_Fun_003',
            input: 'mata help ekak karanna puLuvandha?',
            expected: 'මට help එකක් කරන්න පුළුවන්ද?',
        },
        {
            tcId: 'Pos_Fun_004',
            input: 'mata udhavvak karanna puLuvandha?',
            expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
        },
        {
            tcId: 'Pos_Fun_005',
            input: 'mama heta enavaa.',
            expected: 'මම හෙට එනවා.',
        },
        {
            tcId: 'Pos_Fun_006',
            input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
            expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
        },
        {
            tcId: 'Pos_Fun_007',
            input: 'mata bath oonee.',
            expected: 'මට බත් ඕනේ.',
        },
        {
            tcId: 'Pos_Fun_008',
            input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.',
            expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.',
        },
        {
            tcId: 'Pos_Fun_009',
            input: 'oya enavaanam mama balan innavaa.',
            expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා.',
        },
        {
            tcId: 'Pos_Fun_010',
            input: 'සුභ රාත්‍රියක් ඔබට',
            expected: 'suBha raathriyak obata',
        },
        {
            tcId: 'Pos_Fun_011',
            input: 'oyaata hodhin dha?',
            expected: 'ඔයාට හොදින් ද?',
        },
        {
            tcId: 'Pos_Fun_012',
            input: 'Oya heta ennadha hithan inne?',
            expected: 'ඔය හෙට එන්නද හිතන් ඉන්නේ?',
        },
        {
            tcId: 'Pos_Fun_013',
            input: 'Anee mata meeka ganna udhavkaranna',
            expected: 'අනේ මට මේක ගන්න උදව්කරන්න',
        },
        {
            tcId: 'Pos_Fun_014',
            input: 'vahaama enna.',
            expected: 'වහාම එන්න.',
        },
        {
            tcId: 'Pos_Fun_015',
            input: 'karuNaakaralaa issarahata yanna.',
            expected: 'කරුණාකරලා ඉස්සරහට යන්න.',
        },
        {
            tcId: 'Pos_Fun_016',
            input: 'mama iiyee gedhara giyaa.',
            expected: 'මම ඊයේ ගෙදර ගියා.',
        },
        {
            tcId: 'Pos_Fun_017',
            input: 'mama dhaen vaeda karanavaa.',
            expected: 'මම දැන් වැඩ කරනවා.',
        },
        {
            tcId: 'Pos_Fun_018',
            input: 'api iiLaGa sathiyee gedhara yamu.',
            expected: 'අපි ඊළඟ සතියේ ගෙදර යමු.',
        },
        {
            tcId: 'Pos_Fun_019',
            input: 'hari hari mama gedhara yanavaa.',
            expected: 'හරි හරි මම ගෙදර යනවා.',
        },
        {
            tcId: 'Pos_Fun_020',
            input: 'mama payin yanavaa. oyaa enavadha maath ekka yanna?',
            expected: 'මම පයින් යනවා. ඔයා එනවද මාත් එක්ක යන්න?',
        },
        {
            tcId: 'Pos_Fun_021',
            input: 'api Zoom meeting ekak thiyennee.',
            expected: 'අපි Zoom meeting එකක් තියෙනවා.',
        },
        {
            tcId: 'Pos_Fun_022',
            input: 'mata ID ekak thiyanava.',
            expected: 'මට ID එකක් තියනවා.',
        },
        {
            tcId: 'Pos_Fun_023',
            input: 'api Kandy gihin emudha?',
            expected: 'අපි Kandy ගිහින් එමුද?',
        },
        {
            tcId: 'Pos_Fun_024',
            input: 'magee lipinaya eyaata WhatsApp karanna puluvan.',
            expected: 'මගේ ලිපිනය එයාට WhatsApp කරන්න පුලුවන්.',
        },
    ],

    negative: [
        {
            tcId: 'Neg_Fun_001',
            input: 'mama gedharayanavaa.',
            expected: 'මම ගෙදර යනවා.',

        },
        {
            tcId: 'Neg_Fun_002',
            input: 'mama    gedhara    yanavaa.',
            expected: 'මම ගෙදර යනවා.',

        },
        {
            tcId: 'Neg_Fun_003',
            input: 'mama2023gedhara yanavaa!',
            expected: 'මම 2023 ගෙදර යනවා !',

        },

    ],

    ui: {
        tcId: 'Pos_UI_001',
        //name: 'Real-time translation updates as typing',
        input: 'mama kaeema kannavaa',
        partialInput: 'mama kae',
        expectedFull: 'මම කෑම කන්නවා',
        //category: 'Usability flow',
        //grammar: 'Present tense',
        //length: 'S'
    }
};

// Helper Functions
class TranslatorPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToSite() {
        await this.page.goto(CONFIG.url);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
    }

    async getInputField() {
        return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
    }

    async getOutputField() {
        return this.page
            .locator(CONFIG.selectors.outputContainer)
            .filter({ hasNot: this.page.locator('textarea') })
            .first();
    }

    async clearAndWait() {
        const input = await this.getInputField();
        await input.clear();
        await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
    }

    async typeInput(text) {
        const input = await this.getInputField();
        await input.fill(text);
    }

    async waitForOutput() {
        await this.page.waitForFunction(
            () => {
                const elements = Array.from(
                    document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
                );
                const output = elements.find(el => {
                    const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
                    return !isInputField && el.textContent && el.textContent.trim().length > 0;
                });
                return output !== undefined;
            },
            { timeout: 10000 }
        );
        await this.page.waitForTimeout(CONFIG.timeouts.translation);
    }

    async getOutputText() {
        const output = await this.getOutputField();
        const text = await output.textContent();
        return text.trim();
    }

    async performTranslation(inputText) {
        await this.clearAndWait();
        await this.typeInput(inputText);
        await this.waitForOutput();
        return await this.getOutputText();
    }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
    let translator;

    test.beforeEach(async ({ page }) => {
        translator = new TranslatorPage(page);
        await translator.navigateToSite();
    });

    // Positive Functional Tests
    test.describe('Positive Functional Tests', () => {
        for (const testCase of TEST_DATA.positive) {
            test(`${testCase.tcId} - ${testCase.name}`, async () => {
                const actualOutput = await translator.performTranslation(testCase.input);
                expect(actualOutput).toBe(testCase.expected);
                await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
            });
        }
    });

    // Negative Functional Tests
    test.describe('Negative Functional Tests', () => {
        for (const testCase of TEST_DATA.negative) {
            test(`${testCase.tcId} - ${testCase.name}`, async () => {
                const actualOutput = await translator.performTranslation(testCase.input);
                expect(actualOutput).toBe(testCase.expected);
                await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
            });
        }
    });

    // UI Test
    test.describe('UI Functionality Tests', () => {
        test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
            const translator = new TranslatorPage(page);
            const input = await translator.getInputField();
            const output = await translator.getOutputField();

            await translator.clearAndWait();

            // Type partial input
            await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });

            // Wait for partial output
            await page.waitForTimeout(1500);

            // Verify partial translation appears
            let outputText = await output.textContent();
            expect(outputText.trim().length).toBeGreaterThan(0);

            // Complete typing
            await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });

            // Wait for full translation
            await translator.waitForOutput();

            // Verify full translation
            outputText = await translator.getOutputText();
            expect(outputText).toBe(TEST_DATA.ui.expectedFull);

            await page.waitForTimeout(CONFIG.timeouts.betweenTests);
        });
    });
});