import Title from "@/components/text/Title";
import Particles from "@/components/Particles";

export default function Home() {
  return (
  <div
  className="
    relative
    w-full
    min-h-screen
    flex
    items-center
    justify-center
  "
>
  {/* Background Particles (ABSOLUTE & FULL SIZE) */}
  <div className="absolute inset-0 z-0">
    <Particles
      particleColors={['#fbff00', '#fbff00']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={true}
      disableRotation={true}
    />
  </div>

  {/* Overlay Title */}
  <div className="z-10">
    <Title size="8xl" />
  </div>
</div>


  );
}
