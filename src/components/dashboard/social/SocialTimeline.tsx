import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import type { Profile } from '../../../models/social';
import SocialProfileAbout from './SocialProfileAbout';

interface SocialProfileTimelineProps {
  profile: Profile;
}

const SocialTimeline: FC<SocialProfileTimelineProps> = (props) => {
  const { profile, ...other } = props;

  return (
    <div {...other}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <SocialProfileAbout
            currentCity={profile.currentCity}
            currentJobCompany={profile.currentJobCompany}
            currentJobTitle={profile.currentJobTitle}
            email={profile.email}
            originCity={profile.originCity}
            previousJobCompany={profile.previousJobCompany}
            previousJobTitle={profile.previousJobTitle}
            profileProgress={profile.profileProgress}
            quote={profile.quote}
          />
        </Grid>
      </Grid>
    </div>
  );
};

SocialTimeline.propTypes = {
  // @ts-ignore
  profile: PropTypes.object.isRequired
};

export default SocialTimeline;
