// Mongoose models

/* const Client = require ('../models/Client');
const Project = require ('../models/Project'); */

const Dragon = require ('../models/Dragon');

const { 
    GraphQLObjectType,
    GraphQLSchema, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList, 
    //GraphQLEnumType, this is used for the projects
    GraphQLNonNull
} = require('graphql');

// Project type
/* const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString }, 
        description: { type: GraphQLString }, 
        status: { type: GraphQLString },
        client: { 
            type: ClientType,
            resolve(parent, args) {
                return Client.findById(parent.clientId);
            }    
        }
    })
}); */

// Dragon Type
const DragonType = new GraphQLObjectType({
    name: 'Dragon',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        fish: { type: GraphQLString },
        wood: { type: GraphQLString },
        iron: { type: GraphQLString },
        gatheringTime: { type: GraphQLString },
    })
});

// Client type
/* const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString }, 
        email: { type: GraphQLString }, 
        phone: { type: GraphQLString }
    })
}); */

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        /* projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id);
            }
        }, */
        dragons: {
            type: new GraphQLList(DragonType),
            resolve(parent, args) {
                return Dragon.find();
            }
        },
        dragon: {
            type: DragonType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Dragon.findById(args.id);
            }
        },
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add a client
       /*  addClient: {
            type: ClientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                });

                return client.save();
            }
        }, */
        // delete a client
       /*  deleteClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                Project.find({ clientId: args.id}).then((projects) => {
                    projects.forEach(project => {
                        project.remove();
                    });
                })
                return Client.findByIdAndRemove(args.id);
            }
        }, */
        // Add Dragon
        addDragon: {
            type: DragonType,
            args: { 
                name: { type: new GraphQLNonNull(GraphQLString) },
                fish: { type: new GraphQLNonNull(GraphQLString) },
                wood: { type: new GraphQLNonNull(GraphQLString) },
                iron: { type: new GraphQLNonNull(GraphQLString) },
                gatheringTime: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const dragon = new Dragon({
                    name: args.name,
                    fish: args.fish,
                    wood: args.wood,
                    iron: args.iron,
                    gatheringTime: args.gatheringTime,
                });

                return dragon.save();
            },
        },
        // Delete Dragon
        deleteDragon: {
            type: DragonType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Dragon.findByIdAndRemove(args.id);
            }
        },
        // Update a dragon
        updateDragon: {
            type: DragonType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                fish: { type: GraphQLString },
                wood: { type: GraphQLString },
                iron: { type: GraphQLString },
                gatheringTime: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Dragon.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            fish: args.fish,
                            wood: args.wood,
                            iron: args.iron,
                            gatheringTime: args.gatheringTime,
                        }
                    },
                    { new: true}
                );
            }
        },
        // Add a project
        /* addProject: {
            type: ProjectType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                status: { 
                    type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            'new': { value: 'Not Started'},
                            'progress': { value: 'In Progress'},
                            'completed': { value: 'Completed'},
                        }
                    }),
                    defaultValue: 'Not Started',
                },
                clientId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientId: args.clientId,
                });

                return project.save();
            }
        }, */
        // delete a project
        /* deleteProject: {
            type: ProjectType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Project.findByIdAndRemove(args.id)
            },
        }, */
        // update a project
        /* updateProject: {
            type: ProjectType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: { 
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            'new': { value: 'Not Started'},
                            'progress': { value: 'In Progress'},
                            'completed': { value: 'Completed'},
                        }
                    }),
                },
            },
            resolve(parent, args) {
                return Project.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            description: args.description,
                            status: args.status,
                        }
                    },
                    { new: true}
                );
            }
        } */
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation 
})