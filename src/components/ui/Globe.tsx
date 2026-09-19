"use client";

import { useEffect, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface LocationNode {
  name: string;
  country: string;
  code: string;
  flagEmoji: string;
  lat: number;
  lon: number;
  isHQ?: boolean;
  x: number;
  y: number;
  z: number;
}

const FLAG_SVGS: Record<string, string> = {
  IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="10.67" height="32" fill="#009246"/>
      <rect x="10.67" width="10.67" height="32" fill="#ffffff"/>
      <rect x="21.34" width="10.67" height="32" fill="#ce2b37"/>
    </g>
  </svg>`,
  US: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="32" fill="#bb133e"/>
      <path d="M0 4.9h32M0 9.8h32M0 14.8h32M0 19.7h32M0 24.6h32M0 29.5h32" stroke="#ffffff" stroke-width="2.4"/>
      <rect width="14" height="17.2" fill="#002147"/>
      <circle cx="3.5" cy="4" r="1.1" fill="#ffffff"/>
      <circle cx="10.5" cy="4" r="1.1" fill="#ffffff"/>
      <circle cx="7" cy="8.5" r="1.1" fill="#ffffff"/>
      <circle cx="3.5" cy="13" r="1.1" fill="#ffffff"/>
      <circle cx="10.5" cy="13" r="1.1" fill="#ffffff"/>
    </g>
  </svg>`,
  JP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="32" fill="#ffffff"/>
      <circle cx="16" cy="16" r="9" fill="#bc002d"/>
    </g>
  </svg>`,
  GB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="32" fill="#012169"/>
      <path d="M0 0l32 32M32 0L0 32" stroke="#ffffff" stroke-width="5"/>
      <path d="M0 0l32 32M32 0L0 32" stroke="#c8102e" stroke-width="2.5"/>
      <path d="M16 0v32M0 16h32" stroke="#ffffff" stroke-width="8"/>
      <path d="M16 0v32M0 16h32" stroke="#c8102e" stroke-width="4.5"/>
    </g>
  </svg>`,
  FR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="10.67" height="32" fill="#002395"/>
      <rect x="10.67" width="10.67" height="32" fill="#ffffff"/>
      <rect x="21.34" width="10.67" height="32" fill="#ed2939"/>
    </g>
  </svg>`,
  DE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="10.67" fill="#000000"/>
      <rect y="10.67" width="32" height="10.67" fill="#dd0000"/>
      <rect y="21.34" width="32" height="10.67" fill="#ffce00"/>
    </g>
  </svg>`,
  AE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="10.67" fill="#00732f"/>
      <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
      <rect y="21.34" width="32" height="10.67" fill="#000000"/>
      <rect width="9" height="32" fill="#ff0000"/>
    </g>
  </svg>`,
  CA: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="8" height="32" fill="#ff0000"/>
      <rect x="8" width="16" height="32" fill="#ffffff"/>
      <rect x="24" width="8" height="32" fill="#ff0000"/>
      <polygon points="16,8 17.5,12 21,12 18.2,14.3 19.3,18 16,15.8 12.7,18 13.8,14.3 11,12 14.5,12" fill="#ff0000"/>
    </g>
  </svg>`,
  BR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="32" fill="#009b3a"/>
      <polygon points="16,4 28,16 16,28 4,16" fill="#fedf00"/>
      <circle cx="16" cy="16" r="6.5" fill="#002776"/>
      <path d="M10 16.5c3-1.5 9-1.5 12 0" stroke="#ffffff" stroke-width="1" fill="none"/>
    </g>
  </svg>`,
  AU: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="32" fill="#00008b"/>
      <rect width="14" height="14" fill="#012169"/>
      <path d="M0 0l14 14M14 0L0 14" stroke="#ffffff" stroke-width="2"/>
      <path d="M7 0v14M0 7h14" stroke="#ffffff" stroke-width="3"/>
      <path d="M7 0v14M0 7h14" stroke="#c8102e" stroke-width="1.5"/>
      <circle cx="7" cy="22" r="2" fill="#ffffff"/>
      <circle cx="23" cy="8" r="1.2" fill="#ffffff"/>
      <circle cx="25" cy="14" r="1.2" fill="#ffffff"/>
      <circle cx="21" cy="18" r="1.2" fill="#ffffff"/>
      <circle cx="27" cy="22" r="1.2" fill="#ffffff"/>
    </g>
  </svg>`,
  ZA: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="16" fill="#e03c31"/>
      <rect y="16" width="32" height="16" fill="#001489"/>
      <path d="M0 0l16 16L0 32" stroke="#ffb81c" stroke-width="7" fill="none"/>
      <path d="M0 0l16 16L0 32" stroke="#007a3d" stroke-width="4" fill="none"/>
      <polygon points="0,4 12,16 0,28" fill="#000000"/>
    </g>
  </svg>`,
  EG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="10.67" fill="#ce1126"/>
      <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
      <rect y="21.34" width="32" height="10.67" fill="#000000"/>
      <circle cx="16" cy="16" r="3" fill="#c09300"/>
    </g>
  </svg>`,
  AR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="10.67" fill="#74acdf"/>
      <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
      <rect y="21.34" width="32" height="10.67" fill="#74acdf"/>
      <circle cx="16" cy="16" r="3" fill="#f6b40e"/>
    </g>
  </svg>`,
  SG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <clipPath id="c"><circle cx="16" cy="16" r="15"/></clipPath>
    <g clip-path="url(#c)">
      <rect width="32" height="16" fill="#ed2939"/>
      <rect y="16" width="32" height="16" fill="#ffffff"/>
      <circle cx="8" cy="8" r="4" fill="#ffffff"/>
      <circle cx="9.5" cy="8" r="3.5" fill="#ed2939"/>
    </g>
  </svg>`,
};

const LOCATIONS: Omit<LocationNode, "x" | "y" | "z">[] = [
  { name: "Venezia", country: "Italy", code: "IT", flagEmoji: "🇮🇹", lat: 45.4408, lon: 12.3155, isHQ: true },
  { name: "New York", country: "USA", code: "US", flagEmoji: "🇺🇸", lat: 40.7128, lon: -74.006 },
  { name: "Tokyo", country: "Japan", code: "JP", flagEmoji: "🇯🇵", lat: 35.6762, lon: 139.6503 },
  { name: "London", country: "UK", code: "GB", flagEmoji: "🇬🇧", lat: 51.5074, lon: -0.1278 },
  { name: "Sydney", country: "Australia", code: "AU", flagEmoji: "🇦🇺", lat: -33.8688, lon: 151.2093 },
  { name: "São Paulo", country: "Brazil", code: "BR", flagEmoji: "🇧🇷", lat: -23.5505, lon: -46.6333 },
  { name: "Cape Town", country: "South Africa", code: "ZA", flagEmoji: "🇿🇦", lat: -33.9249, lon: 18.4241 },
  { name: "Cairo", country: "Egypt", code: "EG", flagEmoji: "🇪🇬", lat: 30.0444, lon: 31.2357 },
  { name: "Buenos Aires", country: "Argentina", code: "AR", flagEmoji: "🇦🇷", lat: -34.6037, lon: -58.3816 },
  { name: "Vancouver", country: "Canada", code: "CA", flagEmoji: "🇨🇦", lat: 49.2827, lon: -123.1207 },
  { name: "Dubai", country: "UAE", code: "AE", flagEmoji: "🇦🇪", lat: 25.2048, lon: 55.2708 },
  { name: "Paris", country: "France", code: "FR", flagEmoji: "🇫🇷", lat: 48.8566, lon: 2.3522 },
  { name: "Singapore", country: "Singapore", code: "SG", flagEmoji: "🇸🇬", lat: 1.3521, lon: 103.8198 },
  { name: "Berlin", country: "Germany", code: "DE", flagEmoji: "🇩🇪", lat: 52.52, lon: 13.405 },
];

const CONNECTIONS = [
  [0, 3], // Venezia -> London
  [0, 11], // Venezia -> Paris
  [0, 13], // Venezia -> Berlin
  [0, 10], // Venezia -> Dubai
  [3, 1], // London -> New York
  [11, 1], // Paris -> New York
  [10, 7], // Dubai -> Cairo
  [10, 12], // Dubai -> Singapore
  [7, 6], // Cairo -> Cape Town
  [6, 5], // Cape Town -> São Paulo
  [5, 8], // São Paulo -> Buenos Aires
  [8, 1], // Buenos Aires -> New York
  [1, 9], // New York -> Vancouver
  [9, 2], // Vancouver -> Tokyo
  [2, 12], // Tokyo -> Singapore
  [12, 4], // Singapore -> Sydney
  [4, 2], // Sydney -> Tokyo
];

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ isDragging: false, x: 0, y: 0, speedX: 0, speedY: 0 });
  const rotationRef = useRef({ angleX: 0.35, angleY: 0 });
  const hoveredNodeRef = useRef<number | null>(null);

  const radius = 135;
  const numDots = 420;
  const [points, setPoints] = useState<Point3D[]>([]);
  const [nodes, setNodes] = useState<LocationNode[]>([]);
  const [flagImages, setFlagImages] = useState<Record<string, HTMLImageElement>>({});

  // 1. Preload SVG Country Flag Images
  useEffect(() => {
    const loaded: Record<string, HTMLImageElement> = {};
    let loadedCount = 0;
    const entries = Object.entries(FLAG_SVGS);

    entries.forEach(([code, svg]) => {
      const img = new Image();
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
      img.onload = () => {
        loaded[code] = img;
        loadedCount++;
        if (loadedCount === entries.length) {
          setFlagImages(loaded);
        }
      };
    });
  }, []);

  // 2. Convert Spherical Coordinates
  useEffect(() => {
    const generatedPoints: Point3D[] = [];
    for (let i = 0; i < numDots; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      generatedPoints.push({
        x: Math.cos(theta) * Math.sin(phi) * radius,
        y: Math.sin(phi) * Math.sin(theta) * radius,
        z: Math.cos(phi) * radius,
      });
    }

    const generatedNodes: LocationNode[] = LOCATIONS.map((loc) => {
      const latRad = (loc.lat * Math.PI) / 180;
      const lonRad = (loc.lon * Math.PI) / 180;
      return {
        ...loc,
        x: radius * Math.cos(latRad) * Math.sin(lonRad),
        y: radius * Math.sin(latRad),
        z: radius * Math.cos(latRad) * Math.cos(lonRad),
      };
    });

    const handle = requestAnimationFrame(() => {
      setPoints(generatedPoints);
      setNodes(generatedNodes);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  // 3. High-Performance Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const project = (x: number, y: number, z: number, cx: number, cy: number) => {
      const cameraDistance = 380;
      const scale = cameraDistance / (cameraDistance - z);
      return {
        x: cx + x * scale,
        y: cy - y * scale,
        scale,
      };
    };

    const rotate = (p: Point3D, angleX: number, angleY: number) => {
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const rot = rotationRef.current;
      const ptr = pointerRef.current;

      if (!ptr.isDragging) {
        rot.angleY += 0.0024 + ptr.speedY;
        rot.angleX += ptr.speedX;
        ptr.speedX *= 0.94;
        ptr.speedY *= 0.94;
      } else {
        rot.angleY += ptr.speedY;
        rot.angleX += ptr.speedX;
      }

      rot.angleX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rot.angleX));

      // A. Fibonacci Sphere Background Dots
      const rotatedPoints = points.map((p) => ({
        orig: p,
        rot: rotate(p, rot.angleX, rot.angleY),
      }));

      rotatedPoints.forEach(({ rot: rp }) => {
        const { x: px, y: py, scale } = project(rp.x, rp.y, rp.z, cx, cy);
        const zRatio = (rp.z + radius) / (2 * radius);
        const opacity = 0.05 + 0.38 * zRatio;
        const dotSize = 0.75 + 1.2 * scale;

        ctx.beginPath();
        ctx.arc(px, py, dotSize, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      // B. Rotated Locations
      const rotatedNodes = nodes.map((node, index) => ({
        ...node,
        index,
        rot: rotate(node, rot.angleX, rot.angleY),
      }));

      // C. Connection Arcs & Particles
      const timeFactor = (Date.now() / 2400) % 1;

      CONNECTIONS.forEach(([startIdx, endIdx]) => {
        const nodeA = rotatedNodes[startIdx];
        const nodeB = rotatedNodes[endIdx];
        if (!nodeA || !nodeB) return;

        const pA = project(nodeA.rot.x, nodeA.rot.y, nodeA.rot.z, cx, cy);
        const pB = project(nodeB.rot.x, nodeB.rot.y, nodeB.rot.z, cx, cy);

        const midX = (nodeA.rot.x + nodeB.rot.x) / 2;
        const midY = (nodeA.rot.y + nodeB.rot.y) / 2;
        const midZ = (nodeA.rot.z + nodeB.rot.z) / 2;
        const midDist = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1;
        const arcHeight = radius * 0.45;

        const ctrlRot = {
          x: (midX / midDist) * (radius + arcHeight),
          y: (midY / midDist) * (radius + arcHeight),
          z: (midZ / midDist) * (radius + arcHeight),
        };
        const pCtrl = project(ctrlRot.x, ctrlRot.y, ctrlRot.z, cx, cy);

        const avgZ = (nodeA.rot.z + nodeB.rot.z) / 2;
        const arcRatio = (avgZ + radius) / (2 * radius);
        if (arcRatio > 0.1) {
          const isHQConnection = nodeA.isHQ || nodeB.isHQ;

          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(pCtrl.x, pCtrl.y, pB.x, pB.y);
          ctx.strokeStyle = isHQConnection
            ? `rgba(251, 191, 36, ${0.28 * arcRatio})`
            : `rgba(255, 255, 255, ${0.12 * arcRatio})`;
          ctx.lineWidth = isHQConnection ? 1.2 : 0.8;
          ctx.stroke();

          // Particle Trace
          const t = timeFactor;
          const u = 1 - t;
          const pX = u * u * pA.x + 2 * u * t * pCtrl.x + t * t * pB.x;
          const pY = u * u * pA.y + 2 * u * t * pCtrl.y + t * t * pB.y;

          ctx.beginPath();
          ctx.arc(pX, pY, isHQConnection ? 2.5 : 1.8, 0, 2 * Math.PI);
          ctx.fillStyle = isHQConnection
            ? `rgba(251, 191, 36, ${0.9 * arcRatio})`
            : `rgba(255, 255, 255, ${0.75 * arcRatio})`;
          ctx.shadowColor = isHQConnection ? "rgba(251, 191, 36, 0.8)" : "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // D. Draw Country Flags & Premium Badges
      // Sort nodes back-to-front for proper layering
      const sortedNodes = [...rotatedNodes].sort((a, b) => a.rot.z - b.rot.z);

      sortedNodes.forEach((node) => {
        const { x: px, y: py, scale } = project(node.rot.x, node.rot.y, node.rot.z, cx, cy);
        const zRatio = (node.rot.z + radius) / (2 * radius);

        if (zRatio > 0.22) {
          const isHovered = hoveredNodeRef.current === node.index;
          const isHQ = !!node.isHQ;

          // Multi-layer pulse halo animation
          const pulse = (Date.now() / 1100 + (node.lat % 5)) % 2;
          const pulseRadius = (isHQ ? 12 : 8) + pulse * (isHQ ? 10 : 6);
          const pulseAlpha = (1 - pulse / 2) * zRatio * (isHQ ? 0.7 : 0.4);

          ctx.beginPath();
          ctx.arc(px, py, pulseRadius, 0, 2 * Math.PI);
          ctx.strokeStyle = isHQ ? `rgba(251, 191, 36, ${pulseAlpha})` : `rgba(255, 255, 255, ${pulseAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Node center point glow
          ctx.beginPath();
          ctx.arc(px, py, isHQ ? 3.5 : 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = isHQ ? `rgba(251, 191, 36, ${zRatio})` : `rgba(255, 255, 255, ${zRatio * 0.9})`;
          ctx.shadowColor = isHQ ? "rgba(251, 191, 36, 0.9)" : "rgba(255, 255, 255, 0.6)";
          ctx.shadowBlur = isHQ ? 8 : 4;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Circular Country Flag & Pill Badge
          const flagImg = flagImages[node.code];
          const flagDiameter = Math.round((isHQ ? 18 : 14) * (0.85 + 0.3 * scale) * (isHovered ? 1.25 : 1));
          const flagRadius = flagDiameter / 2;

          // Offset flag position slightly above-right of location dot
          const flagX = px + 10 + (isHovered ? 2 : 0);
          const flagY = py - 4;

          // Text metrics
          const labelText = isHQ ? `HQ • ${node.name.toUpperCase()}` : node.name.toUpperCase();
          ctx.font = isHQ ? "bold 10px monospace" : "600 9px monospace";
          const textMetrics = ctx.measureText(labelText);
          const badgeHeight = flagDiameter + 4;
          const badgeWidth = flagDiameter + textMetrics.width + 16;
          const badgeX = flagX - 3;
          const badgeY = flagY - badgeHeight / 2;

          // Draw Glassmorphism Pill Container
          ctx.save();
          drawRoundedRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, badgeHeight / 2);
          ctx.fillStyle = isHQ
            ? `rgba(26, 20, 8, ${0.88 * zRatio})`
            : isHovered
            ? `rgba(25, 25, 35, ${0.92 * zRatio})`
            : `rgba(10, 10, 15, ${0.75 * zRatio})`;
          ctx.fill();

          ctx.strokeStyle = isHQ
            ? `rgba(251, 191, 36, ${0.85 * zRatio})`
            : isHovered
            ? `rgba(255, 255, 255, ${0.6 * zRatio})`
            : `rgba(255, 255, 255, ${0.2 * zRatio})`;
          ctx.lineWidth = isHQ ? 1.2 : 0.8;
          ctx.stroke();

          // Render Vector Flag Circle inside Pill
          const circleX = flagX + flagRadius;
          const circleY = flagY;

          if (flagImg) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(circleX, circleY, flagRadius, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(flagImg, circleX - flagRadius, circleY - flagRadius, flagDiameter, flagDiameter);
            ctx.restore();

            // Flag rim border
            ctx.beginPath();
            ctx.arc(circleX, circleY, flagRadius, 0, Math.PI * 2);
            ctx.strokeStyle = isHQ ? `rgba(251, 191, 36, 0.9)` : `rgba(255, 255, 255, 0.4)`;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            // Emoji Fallback if image loading
            ctx.font = `${flagDiameter}px sans-serif`;
            ctx.fillText(node.flagEmoji, circleX - flagRadius, circleY + flagRadius / 2);
          }

          // Render City Name & Country Code Tag
          const textX = circleX + flagRadius + 5;
          const textY = circleY + 3.5;

          ctx.font = isHQ ? "bold 10px monospace" : "600 9px monospace";
          ctx.fillStyle = isHQ
            ? `rgba(253, 224, 71, ${zRatio * 0.95})`
            : isHovered
            ? `rgba(255, 255, 255, ${zRatio})`
            : `rgba(230, 230, 240, ${zRatio * 0.85})`;
          ctx.fillText(labelText, textX, textY);
          ctx.restore();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [points, nodes, flagImages]);

  // 4. Pointer & Hover Events
  const handlePointerDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const ptr = pointerRef.current;
    ptr.isDragging = true;
    ptr.x = e.clientX;
    ptr.y = e.clientY;
    ptr.speedX = 0;
    ptr.speedY = 0;
  };

  const handlePointerMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const ptr = pointerRef.current;
    if (ptr.isDragging) {
      const deltaX = e.clientX - ptr.x;
      const deltaY = e.clientY - ptr.y;

      ptr.x = e.clientX;
      ptr.y = e.clientY;

      ptr.speedY = deltaX * 0.005;
      ptr.speedX = -deltaY * 0.005;
      return;
    }

    // Check hit test for hovering location nodes
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const cx = w / 2;
    const cy = h / 2;
    const rot = rotationRef.current;

    let foundIdx: number | null = null;
    nodes.forEach((node, idx) => {
      // rotate coordinates
      const cosY = Math.cos(rot.angleY);
      const sinY = Math.sin(rot.angleY);
      const x1 = node.x * cosY - node.z * sinY;
      const z1 = node.x * sinY + node.z * cosY;

      const cosX = Math.cos(rot.angleX);
      const sinX = Math.sin(rot.angleX);
      const y2 = node.y * cosX - z1 * sinX;
      const z2 = node.y * sinX + z1 * cosX;

      const zRatio = (z2 + radius) / (2 * radius);
      if (zRatio > 0.25) {
        const cameraDistance = 380;
        const scale = cameraDistance / (cameraDistance - z2);
        const px = cx + x1 * scale;
        const py = cy - y2 * scale;

        const dist = Math.hypot(mx - px, my - py);
        if (dist < 22) {
          foundIdx = idx;
        }
      }
    });

    hoveredNodeRef.current = foundIdx;
  };

  const handlePointerUpOrLeave = () => {
    pointerRef.current.isDragging = false;
    hoveredNodeRef.current = null;
  };

  return (
    <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px] flex items-center justify-center pointer-events-auto select-none">
      {/* Outer ambient gold ring */}
      <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-amber-500/10 pointer-events-none z-0 blur-[1px]" />
      <div className="absolute w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-neutral-800/50 pointer-events-none z-0 animate-[spin_80s_linear_infinite]" />

      <canvas
        ref={canvasRef}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUpOrLeave}
        onMouseLeave={handlePointerUpOrLeave}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}

