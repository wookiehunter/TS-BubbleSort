"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var csvFileReader_1 = require("./csvFileReader");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var Summary_1 = require("./Summary");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var csvFileReader = new csvFileReader_1.CSVFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Northern Scum!!'), new HTMLReport_1.HTMLReport());
summary.buildAndPrintReport(matchReader.matches);
