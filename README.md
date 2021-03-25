# Multiapp

Example of how to use Angular workspace configurations to build different "flavors" of an application.
This method relies on doing file-replacements just before build time.

This example contains three flavors: flavor-one, flavor-two, and flavor-three. There is also an "all"
flavor that is the default and will use all modules from all flavors.

# Usage

To serve a particular flavor: `ng serve --configuration=<flavor-one | flavor-two | flavor-three>`
To serve "all" flavors: `ng serve`

# Limitations
* Cannot combine/mix/extend configurations natively. This means that you must duplicate all flavors into both
 dev and production configurations. Alternatively, there are some work-arounds that use `node` to pre-compile a JSON
  from typescript before building.
* Cannot replace a `*component.html` using file replacements, nor should you re-use a component in multiple `*.module.ts`.
  Therefore, you must replace the `index.html` pre-build.  This would mean you can only control a "flavor" from the top-down.
