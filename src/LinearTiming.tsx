import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Square} from './Square';

export const LinearTiming = () => {
	const frame = useCurrentFrame();
	const translate = interpolate(frame, [0, 60], [-150, 150], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

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
					transform: `translateX(${translate}px)`,
				}}
			>
				<Square />
			</div>
		</AbsoluteFill>
	);
};
