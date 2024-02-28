import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return(
    <Card borderRadius='10px'>
    <Skeleton height="200px"></Skeleton>
    <CardBody>
      <SkeletonText></SkeletonText>
    </CardBody>
    </Card>
  ) 
};

export default GameCardSkeleton;
