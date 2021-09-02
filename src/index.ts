import { MatchReader } from './MatchReader';
import { CSVFileReader } from './csvFileReader';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { Summary } from './Summary';
import { HTMLReport } from './reportTargets/HTMLReport';

const csvFileReader = new CSVFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Northern Scum!!'),
    new HTMLReport()
)

summary.buildAndPrintReport(matchReader.matches)