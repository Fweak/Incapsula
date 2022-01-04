const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const random_window_screen_avail_height = random(100, 1080);
const random_window_screen_avail_left = random(0,30);
const random_window_screen_avail_top = random(0, 30);
const random_window_screen_avail_width = random(1000, 1920);
const random_window_screen_pixel_depth = 24;
const random_window_inner_width = random(1000, 1920)
const random_window_inner_height = random(100, 1080);
const random_window_outer_width = random(1000, 1920);
const random_window_outer_height = random(100, 1080)
const random_window_device_pixel_ratio = 1;
const random_window_screenX = random(0, 30);
const random_window_screenY = random(0, 30);
/*

  "window_size": {
    "window_screen_width": 1920,
    "window_screen_height": 1080,
    "window_screen_avail_height": random_window_screen_avail_height,
    "window_screen_avail_left": random_window_screen_avail_left,
    "window_screen_avail_top": random_window_screen_avail_top,
    "window_screen_avail_width": random_window_screen_avail_width,
    "window_screen_pixel_depth": 24,
    "window_inner_width": random_window_inner_width,
    "window_inner_height": random_window_inner_height,
    "window_outer_width": random_window_outer_width,
    "window_outer_height": random_window_outer_height,
    "window_device_pixel_ratio": 1,
    "window_screen_orientation_type": "landscape-primary",
    "window_screenX": random_window_screenX,
    "window_screenY": random_window_screenY
  }
  */

module.exports = {
  "user_agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0",
  "navigator_language": "en-US",
  "navigator_languages": {
    "languages_is_not_undefined": false,
    "languages" : ["en-US", "en"],
  },
  "window_size": {
    "window_screen_width": 1920,
    "window_screen_height": 1080,
    "window_screen_avail_height": 1053,
    "window_screen_avail_left": 0,
    "window_screen_avail_top": 27,
    "window_screen_avail_width": 1920,
    "window_screen_pixel_depth": 24,
    "window_inner_width": 1920,
    "window_inner_height": 968,
    "window_outer_width": 1920,
    "window_outer_height": 1053,
    "window_device_pixel_ratio": 1,
    "window_screen_orientation_type": "landscape-primary",
    "window_screenX": 0,
    "window_screenY": 27
  },
  "date_get_time_zone_off_set": -8,
  "has_indexed_db": true,
  "has_body_add_behaviour": false,
  "open_database": true,
  "cpu_class": "unknown",
  "platform": "Linux x86_64",
  "do_not_track": "unspecified",
  "plugins_or_active_x_object": "",
  "plugins_named_item_item_refresh": {
    "named_item": "namedItem",
    "item": "item",
    "refresh": "refresh"
  },
  "canvas_hash": {
    "is_point_in_path": true,
    "to_data_url_image": false,
    "screen_is_global_composite_operation": true,
    "hash": "d0484475ca3fce85bdcff3af3de3d5ec39218f5d"
  },
  "webgl": {
    "canvas_hash": "8d37e15cc9363584537e76e4d202a7e8e811da59",
    "get_supported_extensions": "ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_sRGB;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context",
    "aliased_line_width_range": [
      1,
      7.375
    ],
    "aliased_point_size_range": [
      1,
      255
    ],
    "alpha_bits": 8,
    "antialias": true,
    "blue_bits": 8,
    "depth_bits": 24,
    "green_bits": 8,
    "all_bits": 16,
    "max_combined_texture_image_units": 192,
    "max_cube_map_texture_size": 8192,
    "max_fragment_uniform_vectors": 4096,
    "max_renderbuffer_size": 8192,
    "max_texture_image_units": 32,
    "max_texture_size": 8192,
    "max_varying_vectors": 32,
    "max_vertex_attribs": 16,
    "max_vertex_texture_image_units": 32,
    "max_vertex_uniform_vectors": 4096,
    "max_viewport_dims": [
      32768,
      32768
    ],
    "red_bits": 8,
    "renderer": "Intel(R) HD Graphics",
    "shading_language_version": "WebGL GLSL ES 1.0",
    "stencil_bits": 0,
    "vendor": "Mozilla",
    "version": "WebGL 1.0",
    "shader_precision_vertex_high_float": 23,
    "shader_precision_vertex_high_float_min": 127,
    "shader_precision_vertex_high_float_max": 127,
    "shader_precision_vertex_medium_float": 23,
    "shader_precision_vertex_medium_float_min": 127,
    "shader_precision_vertex_medium_float_max": 127,
    "shader_precision_vertex_low_float": 23,
    "shader_precision_vertex_low_float_min": 127,
    "shader_precision_vertex_low_float_max": 127,

    "shader_precision_fragment_high_float": 23,
    "shader_precision_fragment_high_float_min": 127,
    "shader_precision_fragment_high_float_max": 127,
    "shader_precision_fragment_medium_float": 23,
    "shader_precision_fragment_medium_float_min": 127,
    "shader_precision_fragment_medium_float_max": 127,
    "shader_precision_fragment_low_float": 23,
    "shader_precision_fragment_low_float_min": 127,
    "shader_precision_fragment_low_float_max": 127,

    "shader_precision_vertex_high_int": 0,
    "shader_precision_vertex_high_int_min": 24,
    "shader_precision_vertex_high_int_max": 24,
    "shader_precision_vertex_medium_int": 0,
    "shader_precision_vertex_medium_int_min": 24,
    "shader_precision_vertex_medium_int_max": 24,
    "shader_precision_vertex_low_int": 0,
    "shader_precision_vertex_low_int_min": 24,
    "shader_precision_vertex_low_int_max": 24,

    "shader_precision_fragment_high_int": 0,
    "shader_precision_fragment_high_int_min": 24,
    "shader_precision_fragment_high_int_max": 24,
    "shader_precision_fragment_medium_int": 0,
    "shader_precision_fragment_medium_int_min": 24,
    "shader_precision_fragment_medium_int_max": 24,
    "shader_precision_fragment_low_int": 0,
    "shader_precision_fragment_low_int_min": 24,
    "shader_precision_fragment_low_int_max": 24,
    "unmasked_vendor_webgl": "Intel Open Source Technology Center",
    "unmasked_renderer_webgl": "Intel(R) HD Graphics"
  },
  "webgl_meta": {
    "webgl_rendering_context_get_parameter": "getParameter",
    "is_native_webgl_rendering_context_get_parameter": true
  },
  "touch_event": {
    "max_touch_points": 0,
    "has_touch_event": false,
    "on_touch_start_is_undefined": false
  },
  "navigator_vendor": "",
  "navigator_product": "Gecko",
  "navigator_product_sub": "20100101",
  "document": {
    "document_location_protocol": "https:"
  },
  "canvas_fonts": [
    "Batang",
    "BitstreamVeraSansMono",
    "MSMincho",
    "MSUIGothic",
    "MeiryoUI",
    "PMingLiU"
  ],
  "document_children": {
    "document_script_element_children": [
      {
        "src": "https://www.googletagmanager.com/gtm.js?id=GTM-NJ928NX&gtm_auth=lqNACcRAFumttoyg28lLuA&gtm_preview=env-2&gtm_cookies_win=x"
      },
      {
        "src": "https://dd.pokemoncenter.com/tags.js"
      },
      {
        "src": ""
      }
    ],
    "document_head_element_children": [
      {
        "src": ""
      },
      {
        "src": "https://www.pokemoncenter.com/kie-Yes-him-To-the-To-mocking-and-do-mise-I-prom"
      },
      {
        "src": ""
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/7267.5e237644999fa66ed004.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/4720-e29c753df4908f64240f.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/2566.b5aa44d0d653034bf9a4.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/5912.01b2855afde83c71e36a.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/4162.415cfc5214f27934a666.js"
      },
      {
        "src": "https://www.pokemoncenter.com/_next/static/chunks/2669.4a483191337335988d58.js"
      }
    ]
  },
  "video": {
    "can_play_type_video_ogg": "probably",
    "can_play_type_video_mp4": "probably",
    "can_play_type_video_webm": "probably"
  },
  "audio": {
    "can_play_type_audio_ogg": "probably",
    "can_play_type_audio_mpeg": "maybe",
    "can_play_type_audio_wav": "probably",
    "can_play_type_audio_xm4a": "maybe"
  },
  "browser": {
    "is_internet_explorer": false,
    "is_chrome": false,
    "webdriver": false,
  },
  "window": {
    "history_length": 2,
    "navigator_hardware_concurrency": 8,
    "is_window_self_not_window_top": false,
    "is_native_navigator_get_battery": false,
    "console_debug_name": "debug",
    "is_native_console_debug": true,
    "_phantom": false,
    "call_phantom": false,
    "empty": [],
    "performance_observer": {
      "supported_entry_types": [
        'event',
        'first-input',
        'mark',
        'measure',
        'navigation',
        'paint',
        'resource'
      ]
    }
  },
  "webgl_rendering_call": {
    "webgl_rendering_context_prototype_get_parameter_call_a": false,
    "webgl_rendering_context_prototype_get_parameter_call_b": false
  },
  "window_object_get_own_property_names": "SVGComponentTransferFunctionElement;;;MediaStreamTrackAudioSourceNode;;;MediaStreamAudioDestinationNode;;;AuthenticatorAssertionResponse;;;SVGAnimatedPreserveAspectRatio;;;AuthenticatorAttestationResponse;;;2f1acc6c3a606b082e5eef5e54414ffb",
  "visual_view_port": {
    "visual_view_port_width": 1920,
    "visual_view_port_height": 968,
    "visual_view_port_scale": 1
  }
};