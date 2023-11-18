import { Player } from "@remotion/player";
import type { z } from "zod";
import { Main } from "../../remotion/Main";
import type { CompositionProps } from "../../types/constants";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";

const player: React.CSSProperties = {
  width: 600,
  aspectRatio: 1,
  overflow: "hidden",
};

export const PlayerContainer: React.FC<{
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ inputProps }) => {
  return (
    <Player
      // TODO: Optimize
      numberOfSharedAudioTags={10}
      component={Main}
      inputProps={inputProps}
      durationInFrames={DURATION_IN_FRAMES}
      fps={VIDEO_FPS}
      compositionHeight={VIDEO_HEIGHT}
      compositionWidth={VIDEO_WIDTH}
      style={player}
      clickToPlay
      loop
    />
  );
};
