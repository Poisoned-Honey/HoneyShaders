#include honey:shaders/lib/common.glsl

void frx_materialFragment() {
    #ifdef INBUILT_MATERIALS
        float luminance = frx_luminance(frx_fragColor.rgb);
        float blue = frx_luminance(frx_fragColor.rgb * vec3(0.0, 0.0, 1.0));

        frx_fragEmissive = max(frx_smootherstep(0.6, 0.7, luminance), blue);
    #endif
}