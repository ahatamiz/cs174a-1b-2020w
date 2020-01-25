// Name the values we'll define per each vertex.
// First, specify the vertex positions -- the three point locations of an imaginary triangle.
// Next, supply vectors that point away from the triangle face.  They should match up with the points in
// the above list.  Normal vectors are needed so the graphics engine can know if the shape is pointed at
// light or not, and color it accordingly.  lastly, put each point somewhere in texture space too.
// Index into our vertices to connect them into a whole triangle.
// A position, normal, and texture coord fully describes one "vertex".  What's the "i"th vertex?  Simply the combined data
// you get if you look up index "i" of those lists above -- a position, normal vector, and tex coord together.  Lastly we
// told it how to connect vertex entries into triangles.  Every three indices in "this.indices" traces out one triangle.

window.Triangle = window.classes.Triangle =
    class Triangle extends Shape {
        // The simplest possible Shape – one triangle.  It has 3 vertices, each
        // having their own 3D position, normal vector, and texture-space coordinate.
        constructor() {
            super("positions", "normals");
            this.positions = [Vec.of(0, 0, 0), Vec.of(1, 0, 0), Vec.of(0, 1, 0)];
            this.normals = [Vec.of(0, 1, 0), Vec.of(0, 1, 0), Vec.of(0, 1, 0)];
            this.indices = [0, 1, 2];
        }
    };


window.Rectangle = window.classes.Rectangle =
    class Rectangle extends Shape {
        // The simplest possible Shape – one triangle.  It has 3 vertices, each
        // having their own 3D position, normal vector, and texture-space coordinate.
        constructor() {
            super("positions", "normals");
            this.positions = [Vec.of(0, 0, 0), Vec.of(1, 0, 0), Vec.of(0, 1, 0),Vec.of(1, 1, 0)];
            this.normals = [Vec.of(0, 1, 0), Vec.of(0, 1, 0), Vec.of(0, 1, 0),Vec.of(0, 1, 0)];
            this.indices = [0, 1, 2,3,1,2];
        }
    };


window.Cube = window.classes.Cube =
    class Cube extends Shape {
        // Here's a complete, working example of a Shape subclass.  It is a blueprint for a cube.
        constructor() {
            super("positions", "normals");
            this.positions.push(
                ...Vec.cast([-1, -1, -1], [1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, -1], [-1, 1, -1], [1, 1, 1], [-1, 1, 1],
                    [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, 1], [1, -1, -1], [1, 1, 1], [1, 1, -1],
                    [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, -1], [-1, -1, -1], [1, 1, -1], [-1, 1, -1]));
            this.normals.push(
                ...Vec.cast([0, -1, 0], [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0],
                    [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0],
                    [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, -1], [0, 0, -1], [0, 0, -1], [0, 0, -1]));
            this.indices.push(0, 1, 2, 1, 3, 2, 4, 5, 6, 5, 7, 6, 8, 9, 10, 9, 11, 10, 12, 13,
                14, 13, 15, 14, 16, 17, 18, 17, 19, 18, 20, 21, 22, 21, 23, 22);
        }
    };

window.Cube_outline = window.classes.Cube_outline =
    class Cube_Outline extends Shape
    { constructor()
    { super( "positions", "colors" ); // Name the values we'll define per each vertex.

        //  DONE (Requirement 5).
        // When a set of lines is used in graphics, you should think of the list entries as
        // broken down into pairs; each pair of vertices will be drawn as a line segment.
        this.positions.push( ...Vec.cast([1,-1,-1], [1,-1,1], [1,-1,-1], [-1,-1,-1], [1,-1,-1], [1,2,-1],
            [1,-1,1], [-1,-1,1], [1,-1,1], [1,2,1], [-1,-1,-1], [-1,-1,1],
            [-1,-1,-1], [-1,2,-1], [-1,-1,1], [-1,2,1], [1,2,-1], [1,2,1],
            [1,2,-1], [-1,2,-1], [1,2,1], [-1,2,1], [-1,2,-1], [-1,2,1]));
        // Supply vectors that point away from eace face of the cube.  They should match up with the points in the above list
        // Normal vectors are needed so the graphics engine can know if the shape is pointed at light or not, and color it accordingly.
        this.colors.push(   ...Vec.cast(Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1),
            Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1),
            Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1),
            Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1),
            Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1),
            Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1), Color.of(1,1,1,1)));
        this.indexed = false;       // Do this so we won't need to define "this.indices".
    }
    };


window.Square_Outline = window.classes.Square_Outline =
    class Square_Outline extends Shape {
        constructor() {
            super("positions", "colors"); // Name the values we'll define per each vertex.
            const white_c = Color.of(1, 1, 1, 1);
            // TODO: List the position of draw a square
            // HINT: When a set of lines is used in graphics, you should think of the list
            // entries as broken down into pairs; each pair of vertices will be drawn as a
            // line segment.
            this.positions.push(
                ...Vec.cast(
                    [0, 0, 0], [1, 0, 0],
                    [1, 1, 0], [0, 1, 0],
                    [1, 0, 0], [1, 1, 0],
                    [0, 1, 0], [0, 0, 0],
                )
            );

            this.colors = [white_c, white_c, white_c, white_c, white_c, white_c, white_c, white_c,];
            this.indexed = false;       // Do this so we won't need to define "this.indices".
        }
    };

window.Assignment_One_Scene = window.classes.Assignment_One_Scene =
    class Assignment_One_Scene extends Scene_Component {
        constructor(context, control_box) {
            // The scene begins by requesting the camera, shapes, and materials it will need.

            super(context, control_box);
            // First, include a secondary Scene that provides movement controls:
            if (!context.globals.has_controls)
                context.register_scene_component(new Movement_Controls(context, control_box.parentElement.insertCell()));

            const r = context.width/context.height;
            context.globals.graphics_state.    camera_transform = Mat4.translation([ 5,-10,-30 ]);  // Locate the camera here (inverted matrix).
            context.globals.graphics_state.projection_transform = Mat4.perspective( Math.PI/4, r, .1, 1000 );

            const shapes = {
                'triangle': new Triangle(),
                'rectangle': new Rectangle(),
                'box': new Cube(),
                'outline': new Square_Outline(),
                'box_outline': new Cube_outline(),
            };
            this.submit_shapes(context, shapes);

            // Make some Material objects available to you:
            this.clay = context.get_instance(Phong_Shader).material(Color.of(.9, .5, .9, 1), {
                ambient: .4,
                diffusivity: .4
            });
            this.plastic = this.clay.override({specularity: .6});
            this.lights = [new Light(Vec.of(0, 5, 5, 1), Color.of(1, .4, 1, 1), 100000)];
            this.white = context.get_instance(Basic_Shader).material();
        }


        make_control_panel() {
            this.key_triggered_button( "Sit still",     [ "m" ], () => {
                this.stopped = !this.stopped;
                // DONE:  Requirement 3d:  Set a flag here that will toggle your swaying motion on and off.
            } );
        }

        draw_triangle(graphics_state, model_transform) {
            const white = Color.of(1, 1, 1, 1);
            this.shapes.triangle.draw(graphics_state, model_transform, this.plastic.override({color: white}));
        }

        draw_rectangle(graphics_state, model_transform) {
            const white = Color.of(1, 1, 1, 1);
            this.shapes.rectangle.draw(graphics_state, model_transform, this.plastic.override({color: white}));
        }

        draw_cube(graphics_state, model_transform) {
            const red = Color.of(100 / 100, 28 / 100, 31 / 100, 1);
            this.shapes.box.draw(graphics_state, model_transform, this.plastic.override({color: red}));
        }


        draw_cube_outline_stack_statics(graphics_state, model_transform,n){

            this.shapes.box_outline.draw(graphics_state, model_transform, this.white, "LINES");

            model_transform=model_transform.times(Mat4.translation([0,3,0]));
            return model_transform;
        }

        draw_cube_outline(graphics_state, model_transform) {



            this.shapes.box_outline.draw(graphics_state, model_transform,this.white, "LINES");
        }


        draw_cube_outline_stack( graphics_state, model_transform, n )
        {

            this.shapes.box_outline.draw(graphics_state, model_transform, this.white, "LINES");

            const t = this.t = graphics_state.animation_time;
            const ampl_r = .04*Math.PI;
            const ampl_x = 0.13322;
            const ampl_y = 0.11745;
            const freq = 6*Math.PI;
            let x= this.stopped ?  ampl_x : ampl_x/2 + ampl_x/2 * Math.sin(freq*t);
            let y = this.stopped ? ampl_y : ampl_y/2 + ampl_y/2 * Math.sin(freq*t);
            let r = this.stopped ? ampl_r : ampl_r/2 + ampl_r/2 * Math.sin(freq*t);

            model_transform = model_transform.times( Mat4.translation( [ 0, 3, 0 ]));
            // Rotation matrix 0.04pi * vector [1, 1]
            model_transform = model_transform.times( Mat4.translation([ x, y, 0 ]) );

            model_transform = model_transform.times( Mat4.rotation(-r, Vec.of(0,0,1)) );

            return model_transform;
        }

        draw_outline(graphics_state, model_transform) {
            // TODO: Define drawing function for outline
            this.shapes.outline.draw(graphics_state, model_transform, this.white, "LINES")
        }

        display(graphics_state) {
            // Initiate
            graphics_state.lights = this.lights;

            let model_transform = Mat4.identity();

            // this.draw_cube(graphics_state, model_transform);
            // this.draw_cube_outline(graphics_state,model_transform);

            // for (let i=0; i<8; i++){
            //     model_transform=this.draw_cube_outline_stack_statics(graphics_state, model_transform,i);
            // }

            //TODO: draw an outline box
            // this.draw_cube_outline(graphics_state, model_transform);

            //TODO: draw a stack of outline box

            for (let i=0; i<8;i++){
                model_transform=this.draw_cube_outline_stack(graphics_state, model_transform,i);
            }


            console.log(model_transform);
            // this.draw_cube(graphics_state, model_transform);
            // this.draw_rectangle(graphics_state,model_transform);
        }
    };