import { VFC, memo } from "react";
import { Box } from "./Box";
import { Text } from "./Text";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { styled } from "../stitches.config";

LazyLoadImage.displayName = "LazyLoadImage";
const LazyImage = styled(LazyLoadImage);

type UserCardProps = {
  avatar: string;
  description: string;
  name: string;
};

export const UserCard: VFC<UserCardProps> = memo(
  ({ avatar, description, name }) => {
    return (
      <Box
        css={{
          display: "flex",
          alignSelf: "flex-start",
          mb: 32,
          flexDirection: "column",

          "@bp2": {
            flexDirection: "row",
            mb: 24,
          },
        }}
      >
        <LazyImage
          alt={`${name}'s photo`}
          height={96}
          width={96}
          src={avatar}
          css={{
            mb: 8,
            backgroundColor: "$pigeon300",
            borderRadius: 4,

            "@bp2": {
              mr: 16,
              mb: 0,
            },
          }}
        />
        <Box>
          <Text
            css={{
              letterSpacing: "-0.0025em",
              marginBottom: 8,
              color: "$pigeon700",
              fontWeight: "$bold",
            }}
          >
            {name}
          </Text>
          <Text
            variant="smallCopy"
            css={{
              color: "$pigeon500",
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>
    );
  }
);

UserCard.displayName = "UserCard";
