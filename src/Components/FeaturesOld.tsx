import "./Features.css";
import Feature from "./Feature";

interface IFeatures {
  featureId: number;
  featureTitle: string;
  featureDescription: string;
  featureImage: string;
}

// const featureList: IFeatures = {
//   featureId: 1,
//   featureTitle: "Easy to use",
//   featureDescription:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet!",
//   featureImage: "../Assets/Pictures/coffeemachine2.jpg",
// };

let featureList: IFeatures[];
featureList = [
  {
    featureId: 1,
    featureTitle: "Easy to use",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet!",
    featureImage: "../Assets/Pictures/coffeemachine2.jpg",
  },
  {
    featureId: 2,
    featureTitle: "Easy to maintain",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet!",
    featureImage: "../Assets/Pictures/baristagirl.jpg",
  },
  {
    featureId: 3,
    featureTitle: "Patented design",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet!",
    featureImage: "../Assets/Pictures/design.jpg",
  },
];

const FeaturesOld = () => {
  return (
    <div className="features-container">
      <Feature
        featureId={featureList[0].featureId}
        featureTitle={featureList[0].featureTitle}
        featureDescription={featureList[0].featureDescription}
        featureImage={featureList[0].featureImage}
      />
      <Feature
        featureId={featureList[1].featureId}
        featureTitle={featureList[1].featureTitle}
        featureDescription={featureList[1].featureDescription}
        featureImage={featureList[1].featureImage}
      />
    </div>
  );
};

export default FeaturesOld;
