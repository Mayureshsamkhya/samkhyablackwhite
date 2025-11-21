"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { useTheme } from "next-themes";

const PARTICLE_COUNT = 2000;
const CHAOS_RADIUS = 10;
const SINE_AMPLITUDE = 2;

// Phases
const PHASE_CONDENSE = 0;
const PHASE_HOLD = 1;
const PHASE_DISSOLVE = 2;

// Durations (seconds)
const DURATION_CONDENSE = 2.5; // Slightly faster for snappier feel
const DURATION_HOLD = 4;
const DURATION_DISSOLVE = 2.5;

// Signal Types
const SIGNAL_SINE = 0;
const SIGNAL_TREND = 1;
const SIGNAL_STEP = 2;
const SIGNAL_CLUSTERS = 3;
const SIGNAL_GRID = 4;
const SIGNAL_COUNT = 5;

function getSignalPosition(type: number, p: number, time: number, out: THREE.Vector3, index: number) {
    // p is parameter from -2PI to 2PI (approx)
    const t = time * 0.5; // Animation speed

    if (type === SIGNAL_SINE) {
        // SINE WAVE (The Classic)
        const x = p * 2;
        const y = Math.sin(p + t) * SINE_AMPLITUDE;
        const z = 0;
        out.set(x, y, z);

    } else if (type === SIGNAL_TREND) {
        // TRENDLINE (Linear Growth)
        // A straight line going up, with some noise/width
        const x = p * 2;
        const y = x * 0.5; // Slope
        const z = (Math.sin(p * 10 + t * 2) * 0.2); // Slight wobble on Z
        out.set(x, y, z);

    } else if (type === SIGNAL_STEP) {
        // STEP FUNCTION (State Changes)
        const x = p * 2;
        // Create steps based on x value
        let y = 0;
        if (x < -4) y = -2;
        else if (x < 0) y = 0;
        else if (x < 4) y = 2;
        else y = 4;

        const z = 0;
        out.set(x, y, z);

    } else if (type === SIGNAL_CLUSTERS) {
        // CLUSTERS (Segmentation)
        // Group into 3 distinct spheres
        const group = index % 3;
        let cx = 0, cy = 0, cz = 0;

        if (group === 0) { cx = -5; cy = -2; }
        else if (group === 1) { cx = 0; cy = 2; }
        else { cx = 5; cy = -2; }

        // Map p to local sphere coordinates
        // Use index to distribute points on sphere surface
        const phi = Math.acos(-1 + (2 * index) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;

        const r = 1.5;
        const lx = r * Math.cos(theta) * Math.sin(phi);
        const ly = r * Math.sin(theta) * Math.sin(phi);
        const lz = r * Math.cos(phi);

        // Rotate the clusters slowly
        const rotX = lx * Math.cos(t) - lz * Math.sin(t);
        const rotZ = lx * Math.sin(t) + lz * Math.cos(t);

        out.set(cx + rotX, cy + ly, cz + rotZ);

    } else if (type === SIGNAL_GRID) {
        // GRID (Structure)
        // 2D Grid plane
        const gridSize = Math.ceil(Math.sqrt(PARTICLE_COUNT));
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        // Center the grid
        const spacing = 0.4;
        const x = (col - gridSize / 2) * spacing;
        const y = (row - gridSize / 2) * spacing;
        const z = Math.sin(x * 0.5 + t) * Math.cos(y * 0.5 + t) * 1.5; // Ripple effect

        out.set(x, y, z);
    }
}

function Particles() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initial chaotic positions
    const initialPositions = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * CHAOS_RADIUS * 2;
            pos[i * 3 + 1] = (Math.random() - 0.5) * CHAOS_RADIUS * 2;
            pos[i * 3 + 2] = (Math.random() - 0.5) * CHAOS_RADIUS * 2;
        }
        return pos;
    }, []);

    // Target params (t along the curve)
    const targetParams = useMemo(() => {
        const params = new Float32Array(PARTICLE_COUNT);
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            params[i] = (i / PARTICLE_COUNT) * Math.PI * 4 - (Math.PI * 2);
        }
        return params;
    }, []);

    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // State refs for animation loop
    const state = useRef({
        phase: PHASE_CONDENSE,
        phaseStartTime: 0,
        signalType: SIGNAL_SINE, // Start with Sine
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useFrame((rootState) => {
        if (!meshRef.current || !mounted) return;

        const time = rootState.clock.getElapsedTime();
        const s = state.current;

        // Initialize start time
        if (s.phaseStartTime === 0) s.phaseStartTime = time;

        const elapsedInPhase = time - s.phaseStartTime;
        let lerpVal = 0;

        // State Machine
        if (s.phase === PHASE_CONDENSE) {
            // 0 -> 1
            lerpVal = Math.min(elapsedInPhase / DURATION_CONDENSE, 1);
            // Ease out cubic
            lerpVal = 1 - Math.pow(1 - lerpVal, 3);

            if (elapsedInPhase >= DURATION_CONDENSE) {
                s.phase = PHASE_HOLD;
                s.phaseStartTime = time;
            }
        } else if (s.phase === PHASE_HOLD) {
            lerpVal = 1;
            if (elapsedInPhase >= DURATION_HOLD) {
                s.phase = PHASE_DISSOLVE;
                s.phaseStartTime = time;
            }
        } else if (s.phase === PHASE_DISSOLVE) {
            // 1 -> 0
            const progress = Math.min(elapsedInPhase / DURATION_DISSOLVE, 1);
            // Ease in cubic
            lerpVal = Math.pow(1 - progress, 3);

            if (elapsedInPhase >= DURATION_DISSOLVE) {
                s.phase = PHASE_CONDENSE;
                s.phaseStartTime = time;

                // Pick a NEW random signal type, ensuring it's different from the last one
                let nextType = Math.floor(Math.random() * SIGNAL_COUNT);
                while (nextType === s.signalType) {
                    nextType = Math.floor(Math.random() * SIGNAL_COUNT);
                }
                s.signalType = nextType;
            }
        }

        // Determine colors based on theme
        const isDark = theme === 'dark';
        const chaosHex = isDark ? "#475569" : "#64748B";
        const orderHex = isDark ? "#FFFFFF" : "#000000";

        const colorChaos = new THREE.Color(chaosHex);
        const colorOrder = new THREE.Color(orderHex);
        const color = colorChaos.clone().lerp(colorOrder, lerpVal);

        const signalPos = new THREE.Vector3();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const ix = i * 3;

            // Chaos position
            const cx = initialPositions[ix];
            const cy = initialPositions[ix + 1];
            const cz = initialPositions[ix + 2];

            // Signal position
            getSignalPosition(s.signalType, targetParams[i], time, signalPos, i);

            // Interpolate
            const x = THREE.MathUtils.lerp(cx, signalPos.x, lerpVal);
            const y = THREE.MathUtils.lerp(cy, signalPos.y, lerpVal);
            const z = THREE.MathUtils.lerp(cz, signalPos.z, lerpVal);

            dummy.position.set(x, y, z);

            // Scale: Pulse slightly when in signal mode
            const scale = 0.05 + (lerpVal * 0.03);
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
            meshRef.current.setColorAt(i, color);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
                roughness={0.5}
                metalness={0.5}
            />
        </instancedMesh>
    );
}

export default function SignalVisual() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={50} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <Particles />
                <EffectComposer>
                    <N8AO intensity={2} radius={2} distanceFalloff={2} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
