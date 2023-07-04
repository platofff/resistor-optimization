set(CMAKE_CXX_STANDARD 23)

include_directories(include)
include_directories(3rd-party/generator/include)

add_executable(resistor-optimization
    "src/SVGElement.cpp"
    "src/Main.cpp"
    "src/combinations_with_replacement.cpp" 
    "src/Resistor.cpp" 
    "src/ElementContainer.cpp" 
    "src/SeriesContainer.cpp" 
    "src/ParallelContainer.cpp" 
    "src/ResistanceOptimizer.cpp")

if (EMSCRIPTEN)
    set_target_properties(resistor-optimization PROPERTIES LINK_FLAGS "--bind")
endif()
