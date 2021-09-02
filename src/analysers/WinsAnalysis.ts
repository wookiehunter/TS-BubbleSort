import { MatchData } from '../MatchData';
import { Analyser } from '../Summary';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyser {
	constructor(public team: string) {};
	run(matches: MatchData[]): string {
		let winnerTotal = 0;

		for (let match of matches) {
			if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
				winnerTotal++;
			} else if (
				match[2] === 'Man United' &&
				match[5] === MatchResult.AwayWin
			) {
				winnerTotal++;
			}
		}

        return `Team ${this.team} won ${winnerTotal} games`
	}
}
