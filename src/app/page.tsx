import Card from "@/components/common/Card";
import Hero from "@/components/common/Hreo";
 
export default function Home() {
  return <div>
    <Hero />  
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-10">
          <Card
            title="Feature One"
            description="This is a description of the first feature. It provides insights into what makes this feature valuable."
            buttonText="Learn More"
            buttonLink="/feature-one"
          />
          <Card
            title="Feature Two"
            description="This is a description of the second feature. It highlights the benefits and uses of this feature."
            buttonText="Learn More"
            buttonLink="/feature-two"
          />
          <Card
            title="Feature Three"
            description="This is a description of the third feature. It explains the unique aspects of this feature."
            buttonText="Learn More"
            buttonLink="/feature-three"
          />
        </div>  
  </div>;
}
