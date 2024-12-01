import React, { useEffect } from "react";
import p5 from "p5";

interface ParticleCanvasProps {
  isActive: boolean;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ isActive }) => {
  useEffect(() => {
    const sketch = (p: p5) => {
      let particles: Particle[] = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke(); // Optional: Disable stroke for particles
      };

      p.draw = () => {
        if (isActive) {
          p.background(0, 25); // Slightly transparent background for trailing effect

          // Create a new particle at the mouse position
          particles.push(new Particle(p.mouseX, p.mouseY));

          // Update and display all particles
          for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].display();

            // Remove particles that are off-screen
            if (particles[i].isOffScreen()) {
              particles.splice(i, 1);
            }
          }
        } else {
          p.clear(); // Clear the canvas if not active
        }
      };

      class Particle {
        position: p5.Vector;
        velocity: p5.Vector;
        lifespan: number;
        color: string;

        constructor(x: number, y: number) {
          this.position = p.createVector(x, y);
          this.velocity = p5.Vector.random2D();
          this.lifespan = 255; // Particle lifespan
          this.color = this.getRandomColor(); // Assign a random color
        }

        getRandomColor() {
          const green = Math.floor(Math.random() * 256); // Random green value
          const red = Math.floor(Math.random() * 50); // Low red value for dark effect
          const blue = Math.floor(Math.random() * 50); // Low blue value for dark effect
          return `rgba(${red}, ${green}, ${blue}, ${this.lifespan / 255})`; // Use lifespan for opacity
        }

        update() {
          this.position.add(this.velocity);
          this.lifespan -= 2; // Decrease lifespan
        }

        display() {
          p.fill(this.color); // Use the assigned color
          p.ellipse(this.position.x, this.position.y, 12);
        }

        isOffScreen() {
          return this.lifespan < 0;
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight); // Resize canvas on window resize
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove(); // Cleanup on unmount
    };
  }, [isActive]);

  return null; // This component does not render anything itself
};

export default ParticleCanvas;
