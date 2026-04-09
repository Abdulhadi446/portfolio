import { describe, expect, it } from "vitest";
import { profile } from "../../src/data/profile";
import { projects } from "../../src/data/projects";

describe("content schema invariants", () => {
  it("uses intermediate experience positioning", () => {
    expect(profile.experienceLevel).toBe("intermediate");
  });

  it("keeps AI highlight projects in 1..2 range", () => {
    const count = projects.filter((item) => item.isAgenticAIHighlight).length;
    expect(count).toBeGreaterThanOrEqual(1);
    expect(count).toBeLessThanOrEqual(2);
  });
});
