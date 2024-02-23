import {Composition} from 'remotion';
import {TimeRemapping} from './TimeRemapping';
import {LinearTiming} from './LinearTiming';
import {SpringTiming} from './SpringTiming';
import {CameraApproach} from './CameraApproach';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Linear"
				component={LinearTiming}
				durationInFrames={90}
				fps={30}
				width={540}
				height={540}
			/>
			<Composition
				id="Spring"
				component={SpringTiming}
				durationInFrames={90}
				fps={30}
				width={540}
				height={540}
			/>
			<Composition
				id="TimeRemapping"
				component={TimeRemapping}
				durationInFrames={90}
				fps={30}
				width={540}
				height={540}
			/>
			<Composition
				id="CameraApproach"
				component={CameraApproach}
				durationInFrames={90}
				fps={30}
				width={540}
				height={540}
			/>
		</>
	);
};
