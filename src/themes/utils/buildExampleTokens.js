import fs from 'node:fs/promises'; // Use promises for cleaner async/await
import path from 'node:path';
import { defaultTheme } from '../default/theme';
import fontFaces from './fontFaces';
import buildCssVars from './buildCssVars';
import buildTypographyClasses from './buildTypographyClasses';

const outputFileName = 'example-tokens.css';
const outputFilePath = outputFileName;

/**
 * Writes the generated CSS string to a file using async/await.
 * @param {string} cssContent - The CSS string to write.
 * @param {string} filePath - The path to the output file.
 */
async function writeCssFile(cssContent, filePath) {
  try {
    // fs.writeFile is used from the promises API for clean async syntax
    await fs.writeFile(filePath, cssContent, 'utf8');
    console.log(`✅ Successfully wrote CSS tokens to ${path.basename(filePath)}`);
  } catch (err) {
    console.error('❌ Error writing CSS file:', err);
  }
}

const run = async () => {
  const theme = defaultTheme;
  const cssVars = buildCssVars(theme);
  const typographyClasses = buildTypographyClasses(theme);

  const cssOutput = `${fontFaces}
${cssVars}
${typographyClasses}
`;

  await writeCssFile(cssOutput, outputFilePath);
};

run();
