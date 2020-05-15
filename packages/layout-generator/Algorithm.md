This document outlines the initial idea of how the layout algorithm would work.

# Problem Descriptionn

We have a number of *Bounded Context*s that all contain a number of entities from the type set of (Aggregate, Event, Command). These entities are then related to each other so that entities from on Bounded Context will have zero to many dependencies to entities in other Bounded Contexts. The layout algorithm tries to create a layout for these concepts so that related concepts are placed as close to each other as possible, while at the same time fulfilling some constraints and preferences. Example constraints are for example distance, where concepts need to be placed at a minimum distance from each other. An example preference might be x/y scaling, ie. how much distance in the longitude should measure vs distance in the latitude. This helps you being able to configure if you want a layout that is wide or tall.

# Steps

The algorithm tries to solve the problem through multiple steps.

1. Size Determination: Decide the size of *Entities* and *Bounded Context*s.
2. Connectivity: Decide the interconnectivity between different Bounded Contexts.
3. Context Placement: Place the Bounded Contexts close to each other based on their interconnectivity.
4. Entity Placement: Place the Entities inside Bounded Contexts so that they come as close to their connects as possible.
5. Route Placement: Decide Routes between Entities.

## Size Determination

To be Determined.

## Connectivtiy

Count the number of trans-context edges between Entities inside Bounded Contexts. The connectivity between two Contexts is the sum of connecting edges between the Entities inside them.

## Context Placement

1. Sort the Contexts based on their total amount of Connectivity to other Contexts.
2. Take the most connected and place it in the middle.
3. Take the most connected Context to already placed Contexts.
4. Place it as close to other Contexts as possible according to constraints and preferences based on its connectivity. (See Context Closeness)
5. Repeat from Step 3 until all contexts are exhausted. If remaining Contexts exist that has no connection to placed contexts, create a new Chart by taking the remaining contexts and starting from step 1.
6. If multiple Charts have been created, create them as close to each other as possible. (See Chart Closeness)

### Context Closeness

A Context here can mean either one Bounded Context, or multiple Bounded Contexts that have already been placed in relation to each other.

Layouted Context refers to the already placed Contexts, new Context refers to the new context to be placed.

1. Create a Polygon from the Layouted Context.
2. "Swell" this Polygon with the Radius of the new Context to be placed + the constraint's min distance.
3. Decide the point inside the layoutted Polygon that is the "center of interest" for the new Context. This is decided by taking the centers of already layouted contexts and weighting these centers with the amount of interconnectivtiy that the new Context has with these contexts.
4. Decide what point on the Perifery of the Swelled Polygon that is closes to this point. This is where you place the new Context.

### Chart Closeness

To be determined.

## Entity Placement

To be determined.

## Route Placement

To be Determined.

