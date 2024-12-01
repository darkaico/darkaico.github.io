import React, { useEffect } from "react";
import p5 from "p5";

interface ParticleCanvasProps {
  isActive: boolean;
  colorPalette: keyof typeof colorPalettes;
}

const colorPalettes = {
  matrix: [
    "rgba(0, 255, 0, 1)", // Green
    "rgba(0, 128, 0, 1)", // Dark Green
    "rgba(0, 255, 255, 1)", // Cyan
  ],
  marvel: [
    "rgba(255, 0, 0, 1)", // Red
    "rgba(255, 215, 0, 1)", // Gold
    "rgba(0, 0, 255, 1)", // Blue
  ],
};

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ isActive, colorPalette }) => {
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
          const colors = colorPalettes[colorPalette]; // Get colors from the selected palette
          return colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
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
  }, [isActive, colorPalette]);

  return null; // This component does not render anything itself
};

export default ParticleCanvas;
