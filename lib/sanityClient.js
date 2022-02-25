import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "uj84vpu6",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sknexYFBuyOIr5VTYwRKQyLWiM4nIJKvUEKoa9iyvgzKGcCpzQMNubSQHZgQCfCBM90bJLHFo7x7WVZCLQMQGSCo4t4JrghxtHlwTBAB62SrKlWkNyY2R1DzEHeDtkNzW2MSKYdG1ILfusIpcrDncVjNw11in3dSQCFC87RuJ4ueBcXvTXc0",
  useCdn: false,
});
