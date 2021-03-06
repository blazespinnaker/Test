/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d44e33ca046842f16aa4050
*
* You will get 10% discount for each one of your friends
* 
*/
package com.test.db.test_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.test.db.test_db.entity.Scores;

//IMPORT RELATIONS
import com.test.db.test_db.entity.Interests;
import com.test.db.test_db.entity.Qualities;
import com.test.db.test_db.entity.User;

@Service
public class ScoresBaseService {

	
	@Autowired
	private Datastore datastore;


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Scores insert(Scores obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(String id) {
		Query<Scores> query = datastore.createQuery(Scores.class).field("_id").equal(new ObjectId(id));
		datastore.delete(query);
	}

    	
    //CRUD - FIND BY Interest
    	
	public List<Scores> findByInterest(String idInterest) {
		return datastore.createQuery(Scores.class).field("Interest").equal(new ObjectId(idInterest)).asList();
	}
    	
    //CRUD - FIND BY Quality
    	
	public List<Scores> findByQuality(String idQuality) {
		return datastore.createQuery(Scores.class).field("Quality").equal(new ObjectId(idQuality)).asList();
	}
    	
    //CRUD - GET ONE
    	
	public Scores get(String id) {
		return datastore.find(Scores.class).field("_id").equal(new ObjectId(id)).get();
	}

    	
        	
    //CRUD - GET LIST
    	
	public List<Scores> getList() {
		return (ArrayList<Scores>) datastore.find(Scores.class).asList();
	}

    	
    //CRUD - EDIT
    	
	public Scores update(Scores obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in ScoresService.java
     */
    


}
