db.createUser({
    user: "jgrt",
    pwd: "jgrt",
    roles: [
        { role: "readWrite", db: "test"}
    ]
    
})