import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Square} from './Square';

export const SpringTiming = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const translate = spring({
		frame,
		fps,
		config: {
			mass: 4.7,
		},
		from: -150,
		to: 150,
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
