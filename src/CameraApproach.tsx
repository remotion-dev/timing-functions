import {interpolate} from 'remotion';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Ring} from './Square';

export const CameraApproach = () => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [0, 60], [0, 1]);

	const distance = interpolate(progress, [0, 1], [1, 0.0000005], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const scaleDivided = 1 / distance;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					transform: `scale(${scaleDivided})`,
				}}
			>
				<Ring />
			</div>
		</AbsoluteFill>
	);
};
