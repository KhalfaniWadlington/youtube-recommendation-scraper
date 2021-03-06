import {readFileSync} from 'fs';
import path from 'path';

import * as main from './index';

function retrieveFileContents(relativeFilePath: string): string {
  const filePath = path.resolve(__dirname, relativeFilePath);
  return readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
}

const mockVideoContentHTML = retrieveFileContents('./mock-video-content.html');
const mockVideoContentsGroupHtml = retrieveFileContents(
  './mock-video-contents-group.html',
);
test('extracts multiple videos', () => {
  const allVideoInfos = main.extractAllRecommendationIds(
    mockVideoContentsGroupHtml,
  );
  expect(allVideoInfos.length).toBeGreaterThan(40);
});
