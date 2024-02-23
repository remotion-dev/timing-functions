import {interpolate} from 'remotion';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {remapSpeed} from './remap-speed';
import {Square} from './Square';

export const takeOffSpeedFucntion = (f: number) =>
	10 ** interpolate(f, [0, 60], [-1, 4]);

export const TimeRemapping = () => {
	const frame = useCurrentFrame();

	const acceleratedFrame = remapSpeed(frame, takeOffSpeedFucntion);

	const translate = interpolate(acceleratedFrame, [0, 60], [0, -200]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'flex-end',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					transform: `translateY(${translate}px)`,
				}}
			>
				<Square />
			</div>
		</AbsoluteFill>
	);
};
