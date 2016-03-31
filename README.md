# full-stack-redux
Full Stack Redux Tutorial from teropa.info

## Overview
This is my attempt at building a full-stack redux app. It's a voting app that allows users to vote for the best of something (movies, js frameworks, etc) knockout style. Voting logic is handled on the server-side app (node + redux), UI is handled on the client-side app (react + redux).

## Server App
### Application State Structure

    - Example Store
      - Entries
        - Arsenal
        - Chelsea
        - Barcelona
        - Real Madrid
      - Vote
        - Pair
          - Liverpool
          - United
        - Tally
          - Liverpool
            - 7
          - United
            - 1
      - Winner
        - TBD (probably Arsenal ;))
