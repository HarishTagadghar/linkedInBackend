/* 

    Auth
    Posts
    Likes
    Friends
    Comments
    Feeds
    Trends

    Auth
        API'S
            POST /auth/register
            POST /auth/login
            
        COLLECTION - USER
            _id
            name
            emailId
            password
            phoneNumber
            
        
    Profile
        API's
            PUT /profile
        
        COLLECTION - USER


    Posts
        API'S

            POST /posts
                insertPost(reqBody)
                insertFeedForAllMyFriends(reqBody)
                insertFeedForAllMyFriends = (reqBody)
                    ids = getAllFriends(harishUserId)
                    ids.map(id=>{
                        insertFeed(reqBody)
                    })

            PUT /posts
            GET /posts?userId #getAllPostOfUserId
            GET /posts/:postId
            DELETE /posts/:postId
            
        COLLECTION - post
            _id
            userId
            imageUrl
            text
    
    Likes
        API'S
            GET /likes/count/:likesForId
                likesModel.findCount({_id : likesForId, status : true})
                
            GET /likes/:likesForId
                likesModel.find({_id : likesForId, status : true})

            POST /likes/:likesForId
            PATCH /likes/:likesForId
        
        COLLECTION
            _id
            likesForId : postId or commentId 
            userId 
            status : boolean
    
    Friends
        API's  

            GET /friends/:userId
                friendsModel.find({userId : 122, status : true})
            GET /friends/count/:userId        
            POST /friends
            PUT /friends
        
        eg data ::
            {
                _id : 1,
                userId : harishId, 
                friendsWithId : rahulId
                status : true
            }
            {
                _id : 1,
                userId : harishId, 
                friendsWithId : pawanId
                status : true
            }
            {
                _id : 1,
                userId : harishId, 
                friendsWithId : niteshId
                status : false # if unfriended
            }

        COLLECTION
            _id
            userId
            friendsWithId

    Comments
      
        API'S

            POST /comments
            POST /comments/replyComments
            
            GET /comments/:postId
            GET /comments/replyComments/:commentId
            GET /comments/replyComments/count/:parentCommentId
                    commentsModel.find({parentCommentId : 122}).length
                
            DELETE /comments/:commentId

        COLLECTION - COMMENTS
            _id
            postId
            userId
            text
            parentCommentId


            post
                xyz..
                xyz..
                xyz..
                {
                    postId
                    userId
                }
                clickOnComment
                    api --> postId

                    returns comments
                        c1
                          api --> commentId
                          return --> all comments  
                          {
                                _id : 122
                                postId : 300
                                userId : 500
                                text : "im parent comment"
                                parentCommentId :null
                          }
                          clickOnChildComments
                                api --> commentId
                                returns child comment
                                    { 
                                        _id : 2
                                        postId : 300
                                        userId : 501
                                        text : "Iam child comment one"
                                        parentCommentId : 122
                                    } 
                                    { 
                                        _id : 3
                                        postId : 300
                                        userId  : 502
                                        text : "Iam child comment two"
                                        parentCommentId : 122
                                    } 


                        c2
                        c3
                
            post
                xyz..
                xyz..
                xyz..

            post
                xyz..
                xyz..
                xyz..
    
    Feeds (max one week old)

        API'S
            GET /feeds/:harishsUserId?paginationBlock=2

        COLLECTIONS
            _id
            userId : harishsUserId
            postId 
            timestamp
    
    Trends
        GET /trends/count?time=24h
                #india : 2
                #amazon : 5

            trendsModel
                .find({timestamp : 24h})
                .map(trend=>{
                    
                })
        
        GET /trends/count?hashTag=amazon&timestamp24h
                trendsModel
                    .find({hashTag : amazon , timestamp : 24h})
        

        COLLECTIONS
            _id
            hashTag
            postId 
            timestamp

*/

